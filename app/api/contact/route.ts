import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail } from "@/data/contact";

/**
 * Contact form delivery.
 *
 * Posts to Resend, which delivers to `CONTACT_TO`. This is the only place in
 * the app that sends mail, and it is the only place credentials are read.
 *
 * Rate limited by IP rather than by a token bucket: the endpoint is
 * unauthenticated, so it is open to anyone, and mail is the expensive part.
 * `Ratelimit-Remaining` is sent back so a client can back off instead of
 * hammering through errors.
 */

const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };

/** In-memory buckets. Reset on cold start and on every redeploy — fine for
 *  a single-instance site, not a distributed one. */
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return { ok: true, remaining: RATE_LIMIT.max - 1, retryAfter: 0 };
  }

  if (bucket.count >= RATE_LIMIT.max) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return {
    ok: true,
    remaining: RATE_LIMIT.max - bucket.count,
    retryAfter: 0,
  };
}

/**
 * Honeypot. Real people never fill a field that is hidden from them, so any
 * value here means a bot. It fails silently with a success response rather
 * than an error, so a bot does not learn to adapt.
 */
/** The five fields the form collects, plus the honeypot. */
type Field = "name" | "email" | "phone" | "subject" | "message";

type Payload = Partial<Record<Field, string>> & { website?: string };

/**
 * Validated here as well as in the browser. The client check is a UX
 * affordance — anything can POST to this route directly, so it is not a
 * security boundary.
 */
function validate(payload: Payload) {
  const errors: Partial<Record<Field, string>> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = (payload.phone ?? "").replace(/\D/g, "");
  if (digits.length > 0 && digits.length < 10) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = "Tell us a little more — at least 10 characters.";
  }

  return errors;
}

/** Long enough to reject a paste of a novel, short enough to read. */
const MAX_MESSAGE = 5000;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const limit = rateLimit(ip);
  const headers: Record<string, string> = {
    "X-RateLimit-Remaining": String(limit.remaining),
  };

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again shortly." },
      { status: 429, headers: { ...headers, "Retry-After": String(limit.retryAfter) } },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Could not read that request." },
      { status: 400, headers },
    );
  }

  if (payload.website) {
    // Honeypot tripped. Report success so the bot does not retry differently.
    return NextResponse.json({ ok: true }, { status: 200, headers });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400, headers });
  }

  const message = payload.message!.trim();
  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: `Please keep your message under ${MAX_MESSAGE} characters.` },
      { status: 400, headers },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    // Deliberately a 503 with a generic body. Saying "missing API key" to an
    // anonymous caller is free reconnaissance; the real reason goes to logs.
    console.error(
      "[contact] RESEND_API_KEY or CONTACT_FROM is not set. Message not sent.",
    );
    return NextResponse.json(
      {
        error:
          "The contact form is not configured right now. Please email us directly.",
      },
      { status: 503, headers },
    );
  }

  const name = payload.name!.trim();
  const email = payload.email!.trim();
  const subject = payload.subject?.trim() || "Website enquiry";
  const phone = payload.phone?.trim();

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: `[${subject}] ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subject}`,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px">
          <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
          <table style="border-collapse:collapse;font-size:14px;margin-bottom:20px">
            <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td style="padding:4px 0"><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Phone</td><td style="padding:4px 0">${escapeHtml(phone)}</td></tr>` : ""}
            <tr><td style="padding:4px 12px 4px 0;color:#666">Subject</td><td style="padding:4px 0">${escapeHtml(subject)}</td></tr>
          </table>
          <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
        </div>
      `.trim(),
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return NextResponse.json(
        {
          error:
            "We could not send that just now. Please email us directly instead.",
        },
        { status: 502, headers },
      );
    }
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      {
        error: "We could not send that just now. Please email us directly instead.",
      },
      { status: 502, headers },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200, headers });
}

/**
 * Escapes the five XML-significant characters.
 *
 * The values interpolated into the HTML body are visitor-supplied. Without
 * this, a message containing `<script>` or a quote would be injected into the
 * email markup.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}