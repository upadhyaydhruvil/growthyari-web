/**
 * The coaching team.
 *
 * "Coached by people who do the work" was the only thing the site said about
 * who runs the sessions — no names, no faces, no background. That is the
 * largest trust gap on the site, and it cannot be closed by writing better
 * copy: it needs real people.
 *
 * Every field below carries a [PLACEHOLDER: …] marker because none of it can
 * be invented. Replace the strings, add a photo, and the section renders
 * properly with no component changes.
 *
 *  - `photo`: a path under /public, e.g. "/coaches/akshay.webp". Leave null
 *    and the card falls back to a monogram rather than a stock portrait.
 *  - `linkedin`: full profile URL. Leave null to hide the link entirely.
 *  - `verified`: flip to true once the name, photo and bio are real. The
 *    section hides itself while any entry is unverified, so placeholder text
 *    can never reach a visitor by accident.
 */

export interface Coach {
  name: string;
  /** Two lines. What they do, and why they are qualified to teach it. */
  background: string;
  /** Role shown under the name. */
  role: string;
  photo: string | null;
  linkedin: string | null;
  verified: boolean;
}

export const coachesEyebrow = "Your coaches";
export const coachesTitle = "Coached by people who do the work.";
export const coachesIntro =
  "Every session is run by a working coach, not played back from a slide deck.";

export const coaches: Coach[] = [
  {
    name: "[PLACEHOLDER: coach one name]",
    role: "[PLACEHOLDER: role, e.g. Founder & Lead Coach]",
    background:
      "[PLACEHOLDER: two lines — current role and company, plus the sales or communication background they bring.]",
    photo: null,
    linkedin: null,
    verified: false,
  },
  {
    name: "[PLACEHOLDER: coach two name]",
    role: "[PLACEHOLDER: role, e.g. Coach, Sales Practice]",
    background:
      "[PLACEHOLDER: two lines — current role and company, plus the sales or communication background they bring.]",
    photo: null,
    linkedin: null,
    verified: false,
  },
];

/**
 * The section renders only when every coach is real.
 *
 * A half-filled team section — two placeholder names next to one real one —
 * looks worse than none, so the gate is all-or-nothing.
 */
export const coachesReady = coaches.length > 0 && coaches.every((c) => c.verified);
