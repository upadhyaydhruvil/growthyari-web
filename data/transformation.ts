/**
 * Section E — "Turn your potential into something people can see."
 *
 * The GrowthYari learning cycle. Five steps, run every week of the batch.
 * Each one produces something — a recording, a document, a note — so the
 * loop accumulates evidence instead of only accumulating hours.
 */

export const transformationEyebrow = "The cycle";
export const transformationTitle = "Turn your potential into something people can see.";
export const transformationIntro =
  "Every week runs the same five steps. The repetition is the point: a skill that only makes sense once is a skill you will lose by the next interview.";

export interface TransformationStep {
  number: string;
  title: string;
  description: /** What the learner actually does in this step. */
  string;
  /** What the step leaves behind. */
  output: string;
}

export const transformationSteps: TransformationStep[] = [
  {
    number: "01",
    title: "Learn",
    description:
      "A single idea or technique, explained live and in plain language — not a playlist to work through alone.",
    output: "You know what the skill is and when to use it.",
  },
  {
    number: "02",
    title: "Practise",
    description:
      "You use it out loud, in a scenario close to the real one. Watching someone else do it does not count here.",
    output: "A recording of you doing it, for the first time.",
  },
  {
    number: "03",
    title: "Receive feedback",
    description:
      "Specific notes on what worked and what didn't — the sentence that wandered, the question that closed the conversation.",
    output: "A short, usable list of what to change.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "You run it again with the notes applied, in a harder situation, until it holds up without a script.",
    output: "A second recording you can compare against the first.",
  },
  {
    number: "05",
    title: "Build proof",
    description:
      "The finished work is filed: the call, the deck, the email, the interview. Week after week, it becomes a body of evidence.",
    output: "A portfolio piece you can show someone.",
  },
];
