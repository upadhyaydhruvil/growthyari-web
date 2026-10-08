"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { applicationSubject, programOptions, statusOptions, workshopOptions } from "@/data/apply";
import { contactEmail } from "@/data/contact";
import { cn } from "@/lib/cn";

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "status"
  | "goal"
  | "choice";

type Values = Record<FieldName, string> & { website: string };
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  status: "",
  goal: "",
  choice: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

/**
 * The application form behind every "Apply" button, and the registration form
 * behind every "Register" button — one component, two intents.
 *
 * It does not collect payment details and does not link to checkout. In
 * `data/process.ts` the order is Apply → Assessment → Selection → Confirm &
 * pay, so the only thing this form can produce is an email to the team.
 *
 * Delivery is the same `/api/contact` route the enquiry form uses: one
 * validated, rate-limited, honeypotted endpoint rather than a second one to
 * keep in step.
 */
export function ApplyForm({
  mode = "apply",
  /** Preselected workshop id, for `/apply?workshop=…`. */
  workshop = "",
  /** Preselected program slug, for `/apply?program=…`. */
  program = "",
}: {
  mode?: "apply" | "register";
  workshop?: string;
  program?: string;
}) {
  const [values, setValues] = useState<Values>(() => ({
    ...EMPTY,
    choice: workshop || program || "",
  }));
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formId = useId();
  const registering = mode === "register";

  function validate(v: Values): Errors {
    const next: Errors = {};

    if (v.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    const digits = v.phone.replace(/\D/g, "");
    if (digits.length > 0 && digits.length < 10) {
      next.phone = "Please enter a valid phone number, or leave this blank.";
    }
    if (!v.status) next.status = "Please choose the option that fits you.";
    if (v.goal.trim().length < 15) {
      next.goal = "Tell us what you want to change — at least 15 characters.";
    }
    if (!v.choice) {
      next.choice = registering
        ? "Please choose a workshop."
        : "Please choose a program, or select 'Not sure yet'.";
    }
    return next;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as FieldName]) {
      setErrors((prev) => ({
        ...prev,
        [name as FieldName]: validate({ ...values, [name]: value })[name as FieldName],
      }));
    }
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

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      status: true,
      goal: true,
      choice: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(`${formId}-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    const choiceLabel =
      (registering ? workshopOptions : programOptions).find(
        (option) => option.value === values.choice,
      )?.label ?? values.choice;

    const message = [
      registering ? "Workshop registration" : "Cohort application",
      "",
      `Current status: ${values.status}`,
      `Preferred ${registering ? "workshop" : "program"}: ${choiceLabel}`,
      "",
      "What they want to change:",
      values.goal.trim(),
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: applicationSubject(
            registering ? "workshop" : "program",
            choiceLabel,
          ),
          message,
          website: values.website,
        }),
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

  function handleReset() {
    setValues({ ...EMPTY, choice: workshop || program || "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
    setSubmitError(null);
  }

  const selectClass = cn(
    "mt-2 block w-full appearance-none rounded-sm border border-line-strong bg-canvas bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-200 focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none",
  );
  const chevron = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2393aaa1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  };
  const inputClass = cn(
    "mt-2 block w-full rounded-sm border bg-canvas px-3.5 py-2.5 text-[15px] text-ink",
    "placeholder:text-muted transition-colors duration-200",
    "focus:border-neon focus:ring-2 focus:ring-neon/30 focus:outline-none",
  );

  function errorFor(field: FieldName) {
    return touched[field] ? errors[field] : undefined;
  }

  /** A plain render helper, not a component — components declared inside a
   *  component are remounted on every render and lose their state. */
  function fieldError(field: FieldName) {
    const error = errorFor(field);
    if (!error) return null;
    return (
      <p
        key={field}
        id={`${formId}-${field}-error`}
        className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-lime-text"
      >
        <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
        {error}
      </p>
    );
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
            {registering ? "Registration received" : "Application received"}
          </h2>
          <p className="mt-2.5 max-w-md text-[14.5px] leading-7 text-body">
            Thanks, {values.name.trim().split(" ")[0]}. Next step is a 1:1 Career
            Assessment call — we review every application before anything is due, and
            payment is only arranged after selection.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-[13px] font-medium text-ink">
            Full name<span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errorFor("name") ? true : undefined}
            aria-describedby={errorFor("name") ? `${formId}-name-error` : undefined}
            className={cn(inputClass, errorFor("name") ? "border-neon" : "border-line-strong")}
          />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-[13px] font-medium text-ink">
            Email<span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errorFor("email") ? true : undefined}
            aria-describedby={errorFor("email") ? `${formId}-email-error` : undefined}
            className={cn(inputClass, errorFor("email") ? "border-neon" : "border-line-strong")}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="block text-[13px] font-medium text-ink">
            Phone
            <span className="ml-1.5 text-[12px] font-normal text-muted">optional</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            placeholder="Optional"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errorFor("phone") ? true : undefined}
            aria-describedby={errorFor("phone") ? `${formId}-phone-error` : undefined}
            className={cn(inputClass, errorFor("phone") ? "border-neon" : "border-line-strong")}
          />
          {fieldError("phone")}
        </div>

        <div>
          <label htmlFor={`${formId}-status`} className="block text-[13px] font-medium text-ink">
            Current status<span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-status`}
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            style={chevron}
            className={selectClass}
          >
            <option className="bg-canvas text-ink" value="">
              Select…
            </option>
            {statusOptions.map((option) => (
              <option key={option} value={option} className="bg-canvas text-ink">
                {option}
              </option>
            ))}
          </select>
          {fieldError("status")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-choice`} className="block text-[13px] font-medium text-ink">
            {registering ? "Workshop" : "Preferred program"}
            <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-choice`}
            name="choice"
            value={values.choice}
            onChange={handleChange}
            onBlur={handleBlur}
            style={chevron}
            className={selectClass}
          >
            <option className="bg-canvas text-ink" value="">
              Select…
            </option>
            {(registering ? workshopOptions : programOptions).map((option) => (
              <option key={option.value} value={option.value} className="bg-canvas text-ink">
                {option.label}
              </option>
            ))}
          </select>
          {fieldError("choice")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-goal`} className="block text-[13px] font-medium text-ink">
            What do you want to change?
            <span className="ml-1 text-lime-text" aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${formId}-goal`}
            name="goal"
            rows={5}
            placeholder="Where you are now, and what you want to be different in three months."
            value={values.goal}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errorFor("goal") ? true : undefined}
            aria-describedby={errorFor("goal") ? `${formId}-goal-error` : undefined}
            className={cn(
              inputClass,
              "resize-y leading-6",
              errorFor("goal") ? "border-neon" : "border-line-strong",
            )}
          />
          {fieldError("goal")}
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
              directly — your answers above are still here.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[12.5px] leading-5 text-muted">
          No payment now. We confirm fit on a Career Assessment call first.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              {registering ? "Register" : "Send application"}
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
