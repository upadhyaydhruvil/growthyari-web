"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactEmail } from "@/data/contact";
import { cn } from "@/lib/cn";

type FieldName = "name" | "email" | "phone" | "subject" | "message";

type Values = Record<FieldName, string> & { website: string };
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const subjects = [
  "Applying for the next cohort",
  "Group Cohort enquiry",
  "1:1 Accelerator enquiry",
  "Workshops",
  "Something else",
];

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length > 0 && digits.length < 10) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Tell us a little more — at least 10 characters.";
  }

  return errors;
}

/**
 * Enquiry form. Posts to `/api/contact`, which delivers to Resend.
 *
 * The browser validation below is a UX affordance, not a guarantee — the
 * route re-validates everything, because anything can POST directly.
 *
 * The success state is only shown when the server confirms delivery. This
 * matters: an earlier version played a simulated success, so a visitor was
 * told their enquiry had arrived while it was discarded. If the send fails,
 * the message is preserved and the real address is offered as a fallback.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formId = useId();

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    const key = name as keyof Values;
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[name as FieldName]) {
      setErrors((prev) => ({ ...prev, [name as FieldName]: validate({ ...values, [name]: value })[name as FieldName] }));
    }
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const name = event.target.name as FieldName;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstError}`)?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        errors?: Errors;
      };

      if (!response.ok) {
        // Field-level errors come back from the server's own validation.
        if (data.errors) setErrors(data.errors);
        setSubmitError(
          data.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      // Network failure or an unparseable response. The typed message is
      // still in state, so the visitor can retry or copy it out.
      setSubmitError(
        "We could not reach the server. Check your connection and try again, or email us directly.",
      );
      setStatus("error");
    }
  }

  function handleReset() {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus("idle");
    setSubmitError(null);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-neon/25 bg-neon/10 p-7 sm:p-9"
      >
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full bg-neon-dim text-ink"
        >
          <CheckCircle2 className="size-5" />
        </span>
        <div>
          <h2 className="text-[21px] font-semibold tracking-[-0.025em] text-ink">
            Enquiry received
          </h2>
          <p className="mt-2.5 max-w-md text-[14.5px] leading-7 text-body">
            Thanks, {values.name.trim().split(" ")[0]}. We&apos;ll review your goals and
            background, then invite you to a 1:1 Career Assessment call to map your
            growth path.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  const fields: {
    name: FieldName;
    label: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    autoComplete?: string;
  }[] = [
    {
      name: "name",
      label: "Full name",
      placeholder: "Your name",
      required: true,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      required: true,
      autoComplete: "email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Optional",
      autoComplete: "tel",
    },
  ];

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const error = touched[field.name] ? errors[field.name] : undefined;
          return (
            <div key={field.name}>
              <label
                htmlFor={`${formId}-${field.name}`}
                className="block text-[13px] font-medium text-ink"
              >
                {field.label}
                {field.required ? (
                  <span className="ml-1 text-lime-text" aria-hidden="true">
                    *
                  </span>
                ) : (
                  <span className="ml-1.5 text-[12px] font-normal text-muted">
                    optional
                  </span>
                )}
              </label>
              <input
                id={`${formId}-${field.name}`}
                name={field.name}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${formId}-${field.name}-error` : undefined}
                className={cn(
                  "mt-2 block w-full rounded-sm border bg-canvas px-3.5 py-2.5 text-[15px] text-ink",
                  "placeholder:text-muted transition-colors duration-200",
                  "focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none",
                  error ? "border-neon" : "border-line-strong",
                )}
              />
              {error ? (
                <p
                  id={`${formId}-${field.name}-error`}
                  className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-lime-text"
                >
                  <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        {/* Subject spans both columns. */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-subject`}
            className="block text-[13px] font-medium text-ink"
          >
            Subject
          </label>
          <select
            id={`${formId}-subject`}
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 block w-full appearance-none rounded-sm border border-line-strong bg-canvas bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-200 focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a8bad3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option className="bg-canvas text-ink" value="">
              Select a subject…
            </option>
            {subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-canvas text-ink">
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="block text-[13px] font-medium text-ink"
          >
            Message
            <span className="ml-1 text-lime-text" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            placeholder="Share what you're trying to change and why now."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.message && errors.message ? true : undefined}
            aria-describedby={
              touched.message && errors.message ? `${formId}-message-error` : undefined
            }
            className={cn(
              "mt-2 block w-full resize-y rounded-sm border bg-canvas px-3.5 py-2.5 text-[15px] leading-6 text-ink",
              "placeholder:text-muted transition-colors duration-200",
              "focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none",
              touched.message && errors.message
                ? "border-neon"
                : "border-line-strong",
            )}
          />
          {touched.message && errors.message ? (
            <p
              id={`${formId}-message-error`}
              className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-lime-text"
            >
              <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/*
        * Honeypot. Hidden from people via CSS and from assistive tech via
        * `aria-hidden` + `tabIndex={-1}`, so only a bot filling every input
        * will populate it. The route treats any value here as a discard.
        */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      {submitError ? (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-sm border border-amber/40 bg-amber/10 p-4"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-text" />
          <div className="text-[13.5px] leading-6 text-body">
            <p>{submitError}</p>
            <p className="mt-1.5 text-muted">
              You can also email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-neon-text underline underline-offset-2 hover:text-ink"
              >
                {contactEmail}
              </a>{" "}
              directly — your message above is still here.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[12.5px] leading-5 text-muted">
          Goes straight to our inbox. We reply to the address you give above.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
