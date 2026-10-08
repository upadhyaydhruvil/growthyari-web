/**
 * Week-by-week outline of the 8-week program, and where each of the nine
 * proof-of-work artefacts gets built.
 *
 * The weekly topics are derived from the five stages GrowthYari publishes in
 * `data/process.ts` and `data/programs.ts` — they introduce no claim the site
 * does not already make. The artefact-to-week mapping is structural: it says
 * which week each of the nine portfolio items is produced, which the site
 * previously listed without ever saying when.
 *
 * The artefact list itself comes from `Program.proofOfWork`, so a change there
 * cannot leave this outline stale — if a new artefact appears in that list,
 * `artefacts` below reports it as unmapped rather than silently dropping it.
 */

import { programs } from "@/data/programs";

/** The loop stage a week belongs to. Matches `FrameworkStep.title`. */
export type WeekStage = "Learning" | "Practice" | "Feedback" | "Execution" | "Growth";

export interface Week {
  week: number;
  title: string;
  stage: WeekStage;
  focus: string;
  /** Artefacts built this week. Values must exist in `artefacts`. */
  artefacts: string[];
}

export const curriculumEyebrow = "Curriculum";
export const curriculumTitle = "Eight weeks, and what each one produces.";
export const curriculumIntro =
  "Every week ends in something you can show. This is the sequence, and the portfolio item it builds.";

export const weeks: Week[] = [
  {
    week: 1,
    title: "Baseline and Career Assessment",
    stage: "Learning",
    focus:
      "Map where you are now, set the target role, and open the journal that closes the program.",
    artefacts: ["Reflection Journal"],
  },
  {
    week: 2,
    title: "Selling and communication fundamentals",
    stage: "Learning",
    focus:
      "Structure, brevity and closing — the three things that decide whether anyone keeps listening.",
    artefacts: ["Email Writing"],
  },
  {
    week: 3,
    title: "Discovery and questioning",
    stage: "Practice",
    focus:
      "Ask the question that surfaces the real problem, then run it live in a practice call.",
    artefacts: ["Discovery Calls"],
  },
  {
    week: 4,
    title: "Cold outreach",
    stage: "Practice",
    focus:
      "Openers that survive ten seconds, common objections, and a daily routine you can keep.",
    artefacts: ["Cold Call Recordings"],
  },
  {
    week: 5,
    title: "Your professional profile",
    stage: "Practice",
    focus:
      "Rewrite the profile and the CV so a recruiter finds evidence instead of adjectives.",
    artefacts: ["LinkedIn Profile", "Professional Resume"],
  },
  {
    week: 6,
    title: "Presenting the work",
    stage: "Execution",
    focus:
      "Take one real problem through to a deck, and log the pipeline the way a team actually would.",
    artefacts: ["Sales Presentation", "CRM Practice"],
  },
  {
    week: 7,
    title: "Interview preparation",
    stage: "Execution",
    focus:
      "Mock interviews against the role you want, with honest feedback on what landed and what did not.",
    artefacts: ["Mock Interviews"],
  },
  {
    week: 8,
    title: "Proof-of-work review",
    stage: "Growth",
    focus:
      "Assemble the nine artefacts into one portfolio a recruiter or client can open, and close the journal.",
    artefacts: [],
  },
];

/** The nine portfolio items, read from the program data rather than retyped. */
export const artefacts: string[] = programs[0].proofOfWork;

/** Artefacts named in `artefacts` that no week claims. Should always be empty. */
export const unmappedArtefacts = artefacts.filter(
  (name) => !weeks.some((week) => week.artefacts.includes(name)),
);

/** Artefacts named on a week that are not in the portfolio list. Should be empty. */
export const unknownArtefacts = weeks.flatMap((week) =>
  week.artefacts.filter((name) => !artefacts.includes(name)),
);
