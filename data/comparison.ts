/**
 * Section J — "Less passive learning. More deliberate practice."
 *
 * The honest difference between consuming information and developing a
 * skill. The left column is not worthless — most people need it first.
 * The point is that it is incomplete on its own, which is a claim about
 * the format rather than about any named competitor.
 */

export const differenceEyebrow = "The difference";
export const differenceTitle = "Less passive learning. More deliberate practice.";
export const differenceIntro =
  "There is nothing wrong with watching a good lesson. Most of us need one before we can do anything useful. The problem is that a lesson ends where the useful part starts — the doing, the being corrected, and the doing it again.";

export interface DifferenceColumn {
  key: "passive" | "deliberate";
  heading: string;
  /** One line framing the column. */
  caption: string;
  items: string[];
}

export const differenceColumns: DifferenceColumn[] = [
  {
    key: "passive",
    heading: "Passive preparation",
    caption: "Necessary. Not sufficient.",
    items: [
      "You watch someone do it well",
      "You understand the theory",
      "You take notes you will not reopen",
      "You finish the course",
      "Nobody sees you do any of it",
    ],
  },
  {
    key: "deliberate",
    heading: "Deliberate practice",
    caption: "Where the skill actually changes.",
    items: [
      "You do it out loud, badly, on purpose",
      "Someone tells you the specific thing that didn't work",
      "You change exactly that, and only that",
      "You do it again, in a harder situation",
      "It leaves behind something you can show",
    ],
  },
];

export const differenceClose = {
  title: "Both halves have a place. Only one of them produces evidence.",
  body: "GrowthYari is built entirely around the right-hand column, because that is the half people rarely get to rehearse — and the half that decides what happens in the room.",
} as const;
