/**
 * Brand, navigation and site-level content.
 *
 * Positioning (2026-10 revision): GrowthYari runs a single flagship product —
 * the 12-Week Sales & Communication Pilot Batch — and every conversion points
 * at one registration portal at `/register`. Public pricing was removed
 * entirely; fees, if any, are discussed after an application.
 *
 * House rule: nothing here is invented. Facts the program team has not yet
 * confirmed are stored with `confirmed: false` and a `[TO CONFIRM]` value.
 * The UI only ever renders confirmed facts — see `confirmedProgramFacts`.
 */

export const site = {
  name: "GrowthYari",
  descriptor: "Sales & Communication Training",
  domain: "https://growthyari.com",
  tagline: "Speak clearly. Present confidently. Handle real conversations.",
  /** Used in <title> across every page. */
  titleTemplate: "%s | GrowthYari",
  defaultDescription:
    "GrowthYari's 12-Week Sales & Communication Pilot Batch helps college students, graduates and freshers build the speaking, listening and conversation skills that interviews, internships and first jobs actually ask for. Practical training, not recorded courses.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Workshops", href: "/workshops" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * The single primary conversion action across the site. Every primary CTA —
 * hero, nav, footer, cards, final section — resolves to this one href.
 */
export const primaryCta = {
  label: "Apply for the 12-Week Pilot Batch",
  /** Shorter form for tight spaces like the navbar. */
  shortLabel: "Apply for the pilot",
  href: "/register",
} as const;

export const secondaryCta = {
  label: "Explore the program",
  href: "/programs",
} as const;

/**
 * Thin credibility strip directly under the hero. These are structural facts
 * about the batch, taken from the program brief — no dates, seat counts or
 * hours, none of which are confirmed.
 */
export const trustStrip = [
  "12-week program",
  "Sales & communication",
  "Practical training",
  "Built for students & freshers",
] as const;

/**
 * Key Program Details.
 *
 * `confirmed: false` entries render nowhere. They exist so the missing facts
 * are visible in code (and greppable) instead of being quietly invented on the
 * page. Fill a real value in and flip the flag to publish it.
 */
export interface ProgramFact {
  label: string;
  value: string;
  confirmed: boolean;
}

export const programFacts: ProgramFact[] = [
  { label: "Duration", value: "12 weeks", confirmed: true },
  { label: "Focus", value: "Sales & communication", confirmed: true },
  { label: "Format", value: "Practical training", confirmed: true },
  { label: "Outcome", value: "Evidence of your skills", confirmed: true },
  // TODO(founder): confirm each of these with the program team, then set
  // confirmed: true and replace the placeholder. Not rendered until then.
  { label: "Cohort size", value: "[TO CONFIRM]", confirmed: false },
  { label: "Weekly commitment", value: "[TO CONFIRM]", confirmed: false },
  { label: "Next batch starts", value: "[TO CONFIRM]", confirmed: false },
  { label: "Trainer", value: "[TO CONFIRM]", confirmed: false },
  { label: "Language", value: "[TO CONFIRM]", confirmed: false },
];

export const confirmedProgramFacts = programFacts.filter((fact) => fact.confirmed);

/**
 * A short, non-numeric status badge. Deliberately contains no date and no seat
 * count, so it can never go stale or overstate availability.
 */
export const pilotStatus = {
  badge: "Applications open",
} as const;
