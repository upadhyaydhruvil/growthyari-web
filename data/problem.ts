/**
 * The problem section, "Why most people struggle to grow."
 * Verbatim from growthyari.com.
 */

export interface Problem {
  title: string;
  description: string;
}

export const problemEyebrow = "The problem";
export const problemTitle = "Why most people struggle to grow.";
export const problemIntro =
  "People graduate with degrees and certificates but struggle in the real world because they lack communication, confidence, execution and proof that they can actually perform.";

export const problems: Problem[] = [
  {
    title: "Communication gaps",
    description:
      "Ideas get lost because the message doesn't land — in meetings, calls or interviews.",
  },
  {
    title: "No practical execution",
    description:
      "Degrees teach theory. Real careers reward people who can act, sell and deliver.",
  },
  {
    title: "Missing confidence",
    description:
      "Without deliberate practice, professionals freeze in the moments that matter most.",
  },
  {
    title: "No proof of work",
    description:
      "Recruiters and clients hire evidence — recordings, portfolios and outcomes, not just certificates.",
  },
];
