/**
 * Section D — "Knowing something and demonstrating it are two different skills."
 *
 * A set of paired states: the same goal reached passively on the left,
 * practically on the right. The point is to explain the gap, not to attack
 * degrees or courses — the left column is what most people do first, and
 * it is usually necessary. It just isn't sufficient.
 */

export const gapEyebrow = "The gap";
export const gapTitle = "Knowing something and demonstrating it are two different skills.";
export const gapIntro =
  "Preparation and performance are not the same activity. One happens privately, where nobody can correct you. The other happens in front of someone, where the thing you didn't practise is the thing they notice.";

export interface GapPair {
  /** The comfortable version — preparation. */
  passive: string;
  /** The version that produces evidence — performance. */
  active: string;
}

export const gapPairs: GapPair[] = [
  {
    passive: "Watching a lesson on how sales calls work",
    active: "Running a practice sales call and hearing where it lost the thread",
  },
  {
    passive: "Reading about what makes communication clear",
    active: "Delivering a presentation and getting notes on what landed",
  },
  {
    passive: "Finishing a project and marking it done",
    active: "Explaining the decisions and trade-offs behind it to someone who wasn't there",
  },
  {
    passive: "Writing a resume that describes your ability",
    active: "Demonstrating that ability in a room, so the resume becomes checkable",
  },
];

export const gapClose =
  "Both halves matter. GrowthYari spends its time on the right-hand side, because that is the half most people never get to rehearse.";
