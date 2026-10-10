/**
 * The GrowthYari learning loop.
 *
 * Step names and the surrounding copy are taken from the "Our approach"
 * section of growthyari.com. `blurb` is a short restatement written for
 * this layout — it introduces no new claim.
 */

export interface FrameworkStep {
  number: string;
  title: string;
  blurb: string;
  /** The loop wraps back here. Used to draw the closing connector. */
  closesLoop?: boolean;
}

export const frameworkEyebrow = "Our approach";
export const frameworkTitle = "The GrowthYari loop";
export const frameworkIntro =
  "A deliberate loop that turns learners into operators — from first concept to career and business growth.";

export const frameworkSteps: FrameworkStep[] = [
  {
    number: "01",
    title: "Learning",
    blurb: "Live sessions with a working coach, not recorded videos.",
  },
  {
    number: "02",
    title: "Practice",
    blurb: "Weekly roleplays, drills and reviews so the skill actually lands.",
  },
  {
    number: "03",
    title: "Feedback",
    blurb: "Personalized review on your recordings, documents and delivery.",
  },
  {
    number: "04",
    title: "Execution",
    blurb: "You use the skill for real, in calls, meetings and interviews.",
  },
  {
    number: "05",
    title: "Growth",
    blurb: "Proof-of-work you can point a recruiter or client at.",
    closesLoop: true,
  },
];
