/**
 * Every date the site renders, in one file.
 *
 * Before this file, the cohort date lived in `data/site.ts`, the workshop
 * dates lived in `data/workshops.ts` and the "next batch begins" line was
 * retyped inside `components/sections/PricingSection.tsx`. Nothing checked the
 * others, so the site happily advertised 2 August on 8 October.
 *
 * Rules:
 *  - Add an ISO date (`YYYY-MM-DD`). Never a formatted string.
 *  - Past dates drop out of every "upcoming" list automatically.
 *  - Nothing outside this file may hardcode a date. If a date appears in a
 *    component, move it here.
 */

/** Today, in IST. Computed once per module evaluation. */
const today = (() => {
  const now = new Date();
  // The site sells in India; compare on the IST calendar, not the server's.
  const ist = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60_000);
  ist.setHours(0, 0, 0, 0);
  return ist;
})();

/** True when an ISO date has already passed. Null/invalid input is "past". */
export function isPast(iso: string | null | undefined): boolean {
  if (!iso) return true;
  const date = new Date(`${iso}T00:00:00+05:30`);
  if (Number.isNaN(date.getTime())) return true;
  return date < today;
}

/** True when a valid ISO date is still ahead of us. */
export function isUpcoming(iso: string | null | undefined): boolean {
  if (!iso) return false;
  const date = new Date(`${iso}T00:00:00+05:30`);
  if (Number.isNaN(date.getTime())) return false;
  return date >= today;
}

/** "2 November 2026" — long form, for headings and intros. */
export function formatLong(iso: string): string {
  const date = new Date(`${iso}T00:00:00+05:30`);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "2 Nov" — short form, for badges and cards. */
export function formatShort(iso: string): string {
  const date = new Date(`${iso}T00:00:00+05:30`);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

/**
 * The next cohort start.
 *
 * [PLACEHOLDER: next cohort start date] — set to an ISO string, e.g.
 * `"2026-11-02"`. Left as `null`, every surface that would print the date
 * falls back to wording that cannot go stale, so the site never advertises a
 * date that has already passed.
 */
export const nextCohortStart: string | null = null;

/** Next batch cadence. Shown instead of a date when the date is unknown. */
export const cohortCadence = "New batch monthly";

/**
 * The badge above the hero headline.
 *
 * Derived, never written by hand: a hardcoded "New cohort starts 2 August" is
 * exactly how the previous stale copy survived.
 */
export function cohortBadge(): string {
  if (nextCohortStart && isUpcoming(nextCohortStart)) {
    return `New cohort starts ${formatShort(nextCohortStart)}`;
  }
  return "Applications open for the next cohort";
}

/** The one sentence used wherever the next start date is needed. */
export function cohortStartLine(): string {
  if (nextCohortStart && isUpcoming(nextCohortStart)) {
    return `Next batch begins ${formatLong(nextCohortStart)}.`;
  }
  return `Next batch dates are announced as cohorts are confirmed — ${cohortCadence.toLowerCase()}.`;
}
