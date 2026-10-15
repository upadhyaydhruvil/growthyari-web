import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail } from "@/data/contact";
import { availabilityOptions, yearOptions } from "@/data/register";

/**
 * Registration delivery for the 12-Week Pilot Batch.
 *
 * The single registration portal at /register posts here. Like the contact
 * endpoint, this is unauthenticated, so it is rate limited per IP, guarded by a
 * honeypot, and re-validates every field server-side. Mail is the expensive
 * part, so the limit is deliberately tight.
 *
 * There is NO payment step: this only records an application. Nothing is
 * charged and no seat is confirmed here.
 */

const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };

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
  return { ok: true, remaining: RATE_LIMIT.max - bucket.count, retryAfter: 0 };
}

const YEAR_OPTIONS = yearOptions;
const AVAILABILITY_OPTIONS = availabilityOptions;

type Field =
  | "fullName"
  | "email"
  | "mobile"
  | "college"
  | "yearStatus"
  | "city"
  | "challenge"
  | "improve"
  | "availability"
  | "privacy";

type Payload = Partial<Record<Field, string | boolean>> & { website?: string };

type Errors = Partial<Record<Field, string>>;

function asString(value: string | boolean | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: Payload): Errors {
  const errors: Errors = {};

  if (asString(payload.fullName).length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const email = asString(payload.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const mobileDigits = asString(payload.mobile).replace(/\D/g, "");
  if (mobileDigits.length < 10 || mobileDigits.length > 13) {
    errors.mobile = "Please enter a valid mobile number.";
  }

  if (asString(payload.college).length < 2) {
    errors.college = "Please enter your college or institution.";
  }

  if (!YEAR_OPTIONS.includes(asString(payload.yearStatus) as (typeof YEAR_OPTIONS)[number])) {
    errors.yearStatus = "Please select your current year or status.";
  }

  if (asString(payload.city).length < 2) {
    errors.city = "Please enter your city.";
  }

  if (asString(payload.challenge).length < 10) {
    errors.challenge = "Tell us your main challenge — at least 10 characters.";
  }

  if (asString(payload.improve).length < 10) {
    errors.improve = "Tell us what you want to improve — at least 10 characters.";
  }

  if (
    !AVAILABILITY_OPTIONS.includes(
      asString(payload.availability) as (typeof AVAILABILITY_OPTIONS)[number],
    )
  ) {
    errors.availability = "Please select your availability.";
  }

  if (payload.privacy !== true && payload.privacy !== "true" && payload.privacy !== "on") {
    errors.privacy = "Please agree to the privacy terms to continue.";
  }

  return errors;
}

const MAX_TEXT = 4000;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const limit = rateLimit(ip);
  const headers: Record<string, string> = {
    "X-RateLimit-Remaining": String(limit.remaining),
  };

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again shortly." },
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
    return NextResponse.json({ ok: true }, { status: 200, headers });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400, headers });
  }

  const challenge = asString(payload.challenge);
  const improve = asString(payload.improve);
  if (challenge.length > MAX_TEXT || improve.length > MAX_TEXT) {
    return NextResponse.json(
      { error: `Please keep each answer under ${MAX_TEXT} characters.` },
      { status: 400, headers },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    console.error(
      "[register] RESEND_API_KEY or CONTACT_FROM is not set. Registration not sent.",
    );
    return NextResponse.json(
      {
        error:
          "Registration is not configured right now. Please email us directly.",
      },
      { status: 503, headers },
    );
  }

  const fullName = asString(payload.fullName);
  const email = asString(payload.email);
  const mobile = asString(payload.mobile);
  const college = asString(payload.college);
  const yearStatus = asString(payload.yearStatus);
  const city = asString(payload.city);
  const availability = asString(payload.availability);

  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ["Mobile", mobile],
    ["College", college],
    ["Year / status", yearStatus],
    ["City", city],
    ["Availability", availability],
  ];

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: `[Pilot registration] ${fullName}`,
      text: [
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Main challenge:",
        challenge,
        "",
        "Wants to improve:",
        improve,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px">
          <h2 style="margin:0 0 16px;font-size:18px">New registration — 12-Week Pilot Batch</h2>
          <table style="border-collapse:collapse;font-size:14px;margin-bottom:20px">
            ${rows
              .map(
                ([label, value]) =>
                  `<tr><td style="padding:4px 12px 4px 0;color:#666">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
              )
              .join("")}
          </table>
          <p style="margin:0 0 4px;color:#666;font-size:13px">Main challenge</p>
          <p style="margin:0 0 16px;white-space:pre-wrap;line-height:1.6">${escapeHtml(challenge)}</p>
          <p style="margin:0 0 4px;color:#666;font-size:13px">Wants to improve</p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(improve)}</p>
        </div>
      `.trim(),
    });

    if (error) {
      console.error("[register] Resend rejected the registration:", error);
      return NextResponse.json(
        { error: "We could not submit that just now. Please email us directly instead." },
        { status: 502, headers },
      );
    }
  } catch (err) {
    console.error("[register] send failed:", err);
    return NextResponse.json(
      { error: "We could not submit that just now. Please email us directly instead." },
      { status: 502, headers },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200, headers });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
