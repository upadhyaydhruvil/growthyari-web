/**
 * Brand, navigation and site-level content.
 *
 * Positioning (2026-10 rebrand): GrowthYari exists for people who have
 * potential, ambition and knowledge but struggle to turn those qualities
 * into visible professional ability. The whole site is built around one
 * transformation — potential → confidence → execution → proof — and every
 * conversion resolves to a single registration portal at `/register`,
 * where the first step is a Career Assessment conversation.
 *
 * There is one public program (the 12-week pilot) and no public pricing.
 * Fees, if any, are discussed after an application.
 *
 * House rule: nothing here is invented. Facts the program team has not
 * confirmed are stored with `confirmed: false` and a `[TO CONFIRM]` value,
 * and the UI only ever renders confirmed facts — see `confirmedProgramFacts`.
 */

export const site = {
  name: "GrowthYari",
  descriptor: "Sales & Communication Training",
  domain: "https://growthyari.com",
  /** Brand-level line. Kept short because it doubles as the <title>. */
  tagline: "Turn what you know into what you can show.",
  /** The emotional promise, used in the hero and Open Graph card. */
  headline: "You're capable of more than your CV can show.",
  /** Used in <title> across every page. */
  titleTemplate: "%s | GrowthYari",
  defaultDescription:
    "GrowthYari helps college students, graduates, freshers and working professionals turn what they already know into skills they can demonstrate — through live coaching, weekly practice, personal feedback and work they can show. Practical training, not recorded courses.",
} as const;

/**
 * Primary navigation. Two of these — Why GrowthYari and How It Works — are
 * full pages rather than homepage anchors, so the navigation behaves the
 * same way on every route instead of silently dropping back to the home
 * page when the visitor is somewhere else.
 */
export const navLinks = [
  { label: "Why GrowthYari", href: "/why" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Programs", href: "/programs" },
  { label: "Workshops", href: "/workshops" },
  { label: "About", href: "/about" },
] as const;

/**
 * The single primary conversion action across the site. Every primary CTA —
 * hero, nav, footer, cards, final section — resolves to this one href.
 *
 * The label is deliberately about the visitor's next step rather than about
 * enrolling: the application is a conversation, not a checkout, and the copy
 * should not imply otherwise.
 */
export const primaryCta = {
  label: "Find Your Next Step",
  /** Shorter form for tight spaces like the navbar. */
  shortLabel: "Find Your Next Step",
  href: "/register",
} as const;

export const secondaryCta = {
  label: "See how GrowthYari works",
  href: "/how-it-works",
} as const;

/**
 * Supporting microcopy under the hero CTAs. Four short claims, each of
 * which the rest of the page then earns the right to make.
 */
export const heroMicrocopy = [
  "Live coaching",
  "Weekly practice",
  "Personal feedback",
  "Work you can show",
] as const;

/**
 * Thin credibility strip. Structural facts about the batch only — no dates,
 * seat counts or hours, none of which are confirmed.
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
 * are visible in code (and greppable) instead of being quietly invented on
 * the page. Fill a real value in and flip the flag to publish it.
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
 * A short, non-numeric status badge. Deliberately contains no date and no
 * seat count, so it can never go stale or overstate availability.
 */
export const pilotStatus = {
  badge: "Applications open",
} as const;

/**
 * What happens after someone applies. Shown next to the application form
 * so the step after submitting is never a mystery.
 */
export const assessmentCall = {
  title: "What the Career Assessment Call is",
  body: "A short conversation about where you are today, what you want to move toward, and whether this batch is the right way to get there. It is not a test and it is not a sales call. If we do not think the program can genuinely move you, we will say so.",
} as const;
