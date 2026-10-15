/**
 * Registration portal copy and controlled options, shared by the form and the
 * API route so the client and server can never disagree about valid values.
 */

export const yearOptions = [
  "1st year",
  "2nd year",
  "3rd year",
  "Final year",
  "Graduated",
  "Working professional",
  "Other",
] as const;

export const availabilityOptions = [
  "Weekday evenings",
  "Weekends",
  "Flexible",
  "Not sure yet",
] as const;

export const registerIntro = {
  eyebrow: "Register",
  title: "Apply for the 12-Week Pilot Batch",
  intro:
    "This is an application, not a payment. Tell us a little about where you are and what you want to change. We review every application and invite suitable applicants to a short assessment conversation.",
} as const;
