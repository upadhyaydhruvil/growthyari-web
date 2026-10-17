/**
 * Section C — "The thought people rarely say aloud."
 *
 * Recognition: the visitor sees their own situation described back to them
 * before GrowthYari says anything about itself. Three moments, chosen
 * because each names a different failure — explaining under pressure, a
 * portfolio that doesn't read, and not knowing what to fix first.
 *
 * Editorial content, not a claim about any individual.
 */

export const recognitionEyebrow = "Recognition";
export const recognitionTitle = "Sometimes the hardest part isn't learning. It's showing what you've learned.";

export interface RecognitionMoment {
  /** The moment, in the visitor's own voice. */
  line: string;
  /** What is actually going on underneath it. */
  body: string;
}

export const recognitionMoments: RecognitionMoment[] = [
  {
    line: "You understand the subject. Then someone asks you to explain it, out loud, and the words arrive in the wrong order.",
    body: "Knowing something and saying it clearly are separate skills. The second one only shows up under pressure, which is exactly where it matters.",
  },
  {
    line: "You have done real work. Your portfolio just doesn't say so.",
    body: "A list of projects tells a recruiter you were present. It doesn't tell them what you decided, what went wrong, or what you would do again.",
  },
  {
    line: "You want the next opportunity. You are not sure what to improve first.",
    body: "Without a clear signal about what isn't landing, effort gets spread evenly across everything — which is another way of saying it gets spread across nothing.",
  },
];

export const recognitionClose =
  "None of this means you lack ability. It usually means the missing piece is practice, feedback, or evidence — and all three can be built.";
