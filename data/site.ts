/**
 * Brand, navigation and site-level content.
 *
 * Source of truth: growthyari.com (fetched 2026-09-28).
 * Anything marked `contentStatus: "pending"` is a value the current
 * website does not publish. It is intentionally left empty rather than
 * invented — see `data/contact.ts`.
 */

export const site = {
  name: "GrowthYari",
  descriptor: "Professional Growth Accelerator",
  domain: "https://growthyari.com",
  tagline: "Build the skills that create better careers and stronger businesses.",
  /** Used in <title> across every page. */
  titleTemplate: "%s | GrowthYari",
  defaultDescription:
    "GrowthYari helps students, professionals, entrepreneurs and business owners master sales, communication and business execution through live coaching, practical learning, proof-of-work and personalized feedback.",
} as const;

/** Next cohort copy, verbatim from the current homepage. */
export const cohort = {
  badge: "New cohort starts 2 August",
  startsOn: "2 August",
  seatsPerCohort: 5,
  cadence: "New batch monthly",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Workshops", href: "/workshops" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Thin credibility strip directly under the hero. */
export const trustStrip = [
  "Live online sessions",
  "Up to 8 weeks",
  "Max 5 learners",
  "New batch monthly",
] as const;

/**
 * The single primary conversion action across the site.
 * The current website routes applications through a 4-step form.
 */
export const primaryCta = {
  label: "Apply for next cohort",
  href: "/contact",
} as const;

export const secondaryCta = {
  label: "Explore programs",
  href: "/programs",
} as const;
