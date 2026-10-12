import { getProgram } from "@/data/programs";

/**
 * Single source of truth for every externally-stated fact on /programs.
 *
 * Hard rules from the build spec:
 *  - No component may hard-code a price, duration, cohort size or date.
 *  - A fact must have `confirmed: true` to render. Unconfirmed facts carry a
 *    `// TODO(founder)` marker and stay hidden until the founder confirms them.
 *  - The price shown on /programs MUST equal /payment. Both derive from
 *    `data/programs.ts` here and in the payment page, so the two pages cannot
 *    drift.
 *
 * Anything you want the page to say that is not already confirmed goes below
 * with `confirmed: false` — never straight onto the page.
 */

export type TrackSlug = "group-cohort" | "1-1-accelerator";

/**
 * Which published plan is for sale. The live site sells the 8-week,
 * max-5-learner Group Cohort tier (₹19,999 + 18% GST).
 *
 * `nextCohortStart` stays `null` until the founder sets a real date. The page
 * deliberately shows no cohort date rather than inventing urgency.
 */
export const ACTIVE_PLAN = {
  id: "live-site" as const,
  nextCohortStart: null as string | null,
};

function requiredTrack(slug: TrackSlug) {
  const program = getProgram(slug);
  if (!program) {
    throw new Error(
      `program-config: program "${slug}" is missing from data/programs.ts`,
    );
  }
  return program;
}

/**
 * Facts that appear on the page and in pricing, derived straight from
 * `data/programs.ts` so the page and /payment always agree.
 */
export const tracks = {
  "group-cohort": requiredTrack("group-cohort"),
  "1-1-accelerator": requiredTrack("1-1-accelerator"),
} as const;

/** Short banner facts under the hero. All self-published on growthyari.com. */
export const heroFacts = [
  { value: tracks["group-cohort"].duration, label: "Duration" },
  { value: "Live online", label: "Format" },
  { value: "Max 5 learners", label: "Group cohort" },
  { value: "5–8 hours", label: "Weekly time" },
] as const;

export interface Stat {
  value: string;
  label: string;
  /** If set, the stat renders with a footnote marker and this source line. */
  source?: string | null;
  confirmed: boolean;
}

/**
 * Market stats for the "why students stall" section. Only `confirmed: true`
 * stats render — the rest are kept here as an inventory the founder can
 * approve by adding a source.
 */
export const programStats: Stat[] = [
  {
    value: "42.6%",
    label: "of Indian graduates are rated employable in the baseline we start from",
    source: "Mercer|Mettl India Graduate Skill Index, 2024",
    confirmed: true,
  },
  // TODO(founder): source these before enabling — they render nothing until
  // `confirmed: true` and a source line are added.
  {
    value: "4.50 Cr",
    label: "students are enrolled in higher education in India",
    source: null,
    confirmed: false,
  },
  {
    value: "43.5%",
    label: "of non-technical graduates lack employability skills",
    source: null,
    confirmed: false,
  },
  {
    value: "18%",
    label: "of entry-level roles for this cohort are in sales / business development",
    source: null,
    confirmed: false,
  },
  {
    value: "11%",
    label: "of entry-level roles for this cohort are in marketing",
    source: null,
    confirmed: false,
  },
];

/** Only confirmed stats may ever reach the DOM. */
export const visibleStats = programStats.filter((s) => s.confirmed);