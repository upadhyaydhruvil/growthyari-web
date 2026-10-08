/**
 * Options for the application form.
 *
 * The form is the front door for every "Apply" button on the site. Payment
 * is not reachable from here — per `data/process.ts`, money moves only after
 * the Career Assessment and selection.
 */

import { programs } from "@/data/programs";
import { workshops } from "@/data/workshops";

/** What the applicant is doing right now. */
export const statusOptions = [
  "Student",
  "Recent graduate / fresher",
  "Working professional",
  "Career switcher",
  "Founder or business owner",
] as const;

/** Program choices, straight from the pricing data so they cannot drift. */
export const programOptions = [
  ...programs.map((program) => ({ value: program.slug, label: program.name })),
  { value: "not-sure", label: "Not sure yet" },
] as const;

/** Workshop choices, future workshops only. Past dates never appear. */
export const workshopOptions = workshops
  .filter((workshop) => new Date(`${workshop.date}T00:00:00+05:30`) >= new Date())
  .map((workshop) => ({ value: workshop.id, label: workshop.title }));

/** The three things an applicant is routed by. */
export type ApplyIntent = "program" | "workshop";

/** Subject line the application arrives under in the inbox. */
export function applicationSubject(
  intent: ApplyIntent,
  label: string,
): string {
  return intent === "workshop"
    ? `Workshop registration — ${label}`
    : `Cohort application — ${label}`;
}
