"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactEmail } from "@/data/contact";
import { availabilityOptions, yearOptions } from "@/data/register";
import { cn } from "@/lib/cn";

type FieldName =
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

type Values = {
  fullName: string;
  email: string;
  mobile: string;
  college: string;
  yearStatus: string;
  city: string;
  challenge: string;
  improve: string;
  availability: string;
  privacy: boolean;
  website: string;
};

type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: Values = {
  fullName: "",
  email: "",
  mobile: "",
  college: "",
  yearStatus: "",
  city: "",
  challenge: "",
  improve: "",
  availability: "",
  privacy: false,
  website: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  const digits = values.mobile.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.mobile = "Please enter a valid mobile number.";

  if (values.college.trim().length < 2)
    errors.college = "Please enter your college or institution.";
  if (!values.yearStatus) errors.yearStatus = "Please select your current year or status.";
  if (values.city.trim().length < 2) errors.city = "Please enter your city.";
  if (values.challenge.trim().length < 10)
    errors.challenge = "Tell us your main challenge — at least 10 characters.";
  if (values.improve.trim().length < 10)
    errors.improve = "Tell us what you want to improve — at least 10 characters.";
  if (!values.availability) errors.availability = "Please select your availability.";
  if (!values.privacy) errors.privacy = "Please agree to the privacy terms to continue.";

  return errors;
}

/**
 * Registration form for the single registration portal.
 *
 * Posts to `/api/register`. Server-side validation is authoritative; the checks
 * here are only a UX affordance. The success state is shown ONLY when the server
 * confirms delivery — there is no simulated success. Duplicate submits are
 * blocked while a request is in flight.
 */
export function RegisterForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formId = useId();

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const target = event.target;
    const name = target.name as keyof Values;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setValues((prev) => ({ ...prev, [name]: value }) as Values);
  }

  function handleBlur(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const name = event.target.name as FieldName;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      fullName: true,
      email: true,
      mobile: true,
      college: true,
      yearStatus: true,
      city: true,
      challenge: true,
      improve: true,
      availability: true,
      privacy: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstError}`)?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        errors?: Errors;
      };

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setSubmitError(
        "We could not reach the server. Check your connection and try again, or email us directly.",
      );
      setStatus("error");
    }
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
            Application received
          </h2>
          <p className="mt-2.5 max-w-md text-[14.5px] leading-7 text-body">
            Thanks, {values.fullName.trim().split(" ")[0]}. We&apos;ll review your
            application, then invite you to a short assessment conversation. Nothing has
            been charged and no seat is confirmed yet.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setValues(EMPTY);
            setErrors({});
            setTouched({});
            setStatus("idle");
          }}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  const inputClass = (name: FieldName) =>
    cn(
      "mt-2 block w-full rounded-sm border bg-canvas px-3.5 py-2.5 text-[15px] text-ink",
      "placeholder:text-muted transition-colors duration-200",
      "focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none",
      touched[name] && errors[name] ? "border-neon" : "border-line-strong",
    );

  const fieldError = (name: FieldName) =>
    touched[name] && errors[name] ? (
      <p
        id={`${formId}-${name}-error`}
        className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-lime-text"
      >
        <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  const describedBy = (name: FieldName) =>
    touched[name] && errors[name] ? `${formId}-${name}-error` : undefined;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-fullName`} className="block text-[13px] font-medium text-ink">
            Full name <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            autoComplete="name"
            placeholder="Your name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.fullName && errors.fullName ? true : undefined}
            aria-describedby={describedBy("fullName")}
            className={inputClass("fullName")}
          />
          {fieldError("fullName")}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-[13px] font-medium text-ink">
            Email <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.email && errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={inputClass("email")}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor={`${formId}-mobile`} className="block text-[13px] font-medium text-ink">
            Mobile <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-mobile`}
            name="mobile"
            type="tel"
            autoComplete="tel"
            placeholder="10-digit number"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.mobile && errors.mobile ? true : undefined}
            aria-describedby={describedBy("mobile")}
            className={inputClass("mobile")}
          />
          {fieldError("mobile")}
        </div>

        <div>
          <label htmlFor={`${formId}-college`} className="block text-[13px] font-medium text-ink">
            College / institution <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-college`}
            name="college"
            placeholder="Where you study or studied"
            value={values.college}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.college && errors.college ? true : undefined}
            aria-describedby={describedBy("college")}
            className={inputClass("college")}
          />
          {fieldError("college")}
        </div>

        <div>
          <label htmlFor={`${formId}-city`} className="block text-[13px] font-medium text-ink">
            City <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-city`}
            name="city"
            autoComplete="address-level2"
            placeholder="Your city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.city && errors.city ? true : undefined}
            aria-describedby={describedBy("city")}
            className={inputClass("city")}
          />
          {fieldError("city")}
        </div>

        <div>
          <label htmlFor={`${formId}-yearStatus`} className="block text-[13px] font-medium text-ink">
            Year / status <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-yearStatus`}
            name="yearStatus"
            value={values.yearStatus}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.yearStatus && errors.yearStatus ? true : undefined}
            aria-describedby={describedBy("yearStatus")}
            className={cn(inputClass("yearStatus"), "appearance-none")}
          >
            <option value="">Select…</option>
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError("yearStatus")}
        </div>

        <div>
          <label htmlFor={`${formId}-availability`} className="block text-[13px] font-medium text-ink">
            Availability <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-availability`}
            name="availability"
            value={values.availability}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.availability && errors.availability ? true : undefined}
            aria-describedby={describedBy("availability")}
            className={cn(inputClass("availability"), "appearance-none")}
          >
            <option value="">Select…</option>
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError("availability")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-challenge`} className="block text-[13px] font-medium text-ink">
            Your main challenge <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${formId}-challenge`}
            name="challenge"
            rows={3}
            placeholder="What is hardest for you right now when you have to speak or present?"
            value={values.challenge}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.challenge && errors.challenge ? true : undefined}
            aria-describedby={describedBy("challenge")}
            className={cn(inputClass("challenge"), "resize-y")}
          />
          {fieldError("challenge")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-improve`} className="block text-[13px] font-medium text-ink">
            What you want to improve <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${formId}-improve`}
            name="improve"
            rows={3}
            placeholder="What would it change for you if you could handle these conversations well?"
            value={values.improve}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.improve && errors.improve ? true : undefined}
            aria-describedby={describedBy("improve")}
            className={cn(inputClass("improve"), "resize-y")}
          />
          {fieldError("improve")}
        </div>
      </div>

      {/* Privacy agreement */}
      <div className="mt-6 border-t border-line pt-6">
        <label htmlFor={`${formId}-privacy`} className="flex items-start gap-3">
          <input
            id={`${formId}-privacy`}
            name="privacy"
            type="checkbox"
            checked={values.privacy}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.privacy && errors.privacy ? true : undefined}
            aria-describedby={describedBy("privacy")}
            className="mt-0.5 size-4 shrink-0 rounded-sm border border-line-strong bg-canvas accent-[var(--color-neon)]"
          />
          <span className="text-[13.5px] leading-6 text-body">
            I agree that GrowthYari may use my responses to review my application and
            contact me about the batch. See the{" "}
            <a
              href="/privacy"
              className="text-neon-text underline underline-offset-2 hover:text-ink"
            >
              privacy policy
            </a>
            .
          </span>
        </label>
        {fieldError("privacy")}
      </div>

      {/* Honeypot */}
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
              directly — your answers above are still here.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[12.5px] leading-5 text-muted">
          An application, not a payment. No card or UPI details are requested.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Submitting
            </>
          ) : (
            <>
              Submit application
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
