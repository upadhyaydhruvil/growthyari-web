/**
 * Brand, navigation and site-level content.
 *
 * Source of truth: growthyari.com (fetched 2026-09-28).
 * Anything marked `contentStatus: "pending"` is a value the current
 * website does not publish. It is intentionally left empty rather than
 * invented — see `data/contact.ts`.
 */

/** The audience we lead with. Secondary audiences live in `secondaryAudience`. */
export const primaryAudience = "students, freshers and career switchers";

export const site = {
  name: "GrowthYari",
  descriptor: "Professional Growth Accelerator",
  domain: "https://growthyari.com",
  tagline: "Build the skills that create better careers and stronger businesses.",

  /**
   * The <title> on the home page, exactly as it should appear in results.
   * Subpages use `titleTemplate`, which appends the brand.
   */
  title: "GrowthYari | Sales & Communication Coaching with a Proof-of-Work Portfolio",

  /** Used for nested pages: "%s | GrowthYari". */
  titleTemplate: "%s | GrowthYari",

  /** 137 characters — inside the 155 a results page will show. */
  defaultDescription:
    "Live small-cohort coaching in sales and communication. Practise weekly, get personal feedback, and build a portfolio recruiters can verify.",

  /** Shorter form for cards and the footer blurb. */
  shortDescription:
    "Live, small-cohort coaching in sales and communication. Practise weekly, get personal feedback, and build a portfolio recruiters can verify.",
} as const;

/**
 * Next cohort copy.
 *
 * The date itself lives in `data/dates.ts` — this file only holds the parts
 * that never go stale.
 */
export const cohort = {
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
 *
 * Applications are a form, not a checkout. Payment comes after the Career
 * Assessment and selection — see `data/process.ts`, steps 1–3.
 */
export const primaryCta = {
  label: "Apply for the next cohort",
  href: "/apply",
} as const;

export const secondaryCta = {
  label: "See the 8-week program",
  href: "/programs",
} as const;

