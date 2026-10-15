/**
 * Case-study library.
 *
 * Two kinds of entry, kept strictly separate:
 *   - `verified`     — a real learner or client story, with permission. None
 *                      exist yet, so this list is empty. Do not add one until
 *                      the person has agreed and the facts are checked.
 *   - `illustrative` — a scenario written to show how the program applies.
 *                      Clearly labelled as illustrative on the page; it is not
 *                      a real person and claims no results.
 *
 * The page is built to hold 30–40 entries. Adding entries here is all it takes
 * — the layout, filters and empty states react automatically.
 */

export type CaseStudyKind = "verified" | "illustrative";

export interface CaseStudy {
  slug: string;
  kind: CaseStudyKind;
  title: string;
  /** e.g. "Fresher · Interview preparation" */
  context: string;
  challenge: string;
  approach: string;
  /** For `verified` entries this is a real outcome. For `illustrative`, it is what the program develops. */
  outcome: string;
  skills: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-frozen-interview",
    kind: "illustrative",
    title: "Fluent on paper, frozen in the interview",
    context: "Illustrative scenario · Final-year student",
    challenge:
      "A student with strong marks and good project work kept losing interviews at the same point: answering an open question without rambling or going blank.",
    approach:
      "Weeks 1–2 rebuild the answer into a clear structure and rehearse it out loud; week 11 applies it in mock interviews with direct feedback.",
    outcome:
      "The program develops the ability to give a short, structured answer under pressure, then improve it on the next attempt.",
    skills: ["Structured thinking", "Confident delivery", "Interview communication"],
  },
  {
    slug: "the-first-call",
    kind: "illustrative",
    title: "The first sales call that does not fall apart",
    context: "Illustrative scenario · Fresher entering a sales role",
    challenge:
      "A new hire can explain the product but freezes the moment a real prospect pushes back or says 'not interested'.",
    approach:
      "Weeks 5–8 build the discovery conversation and an objection-response habit, practised in roleplays until pushback stops being a shock.",
    outcome:
      "The program develops a repeatable way to open, ask, handle pushback and move to a next step.",
    skills: ["Asking good questions", "Handling objections", "Persuasion"],
  },
  {
    slug: "the-meeting-that-goes-nowhere",
    kind: "illustrative",
    title: "The update nobody seems to follow",
    context: "Illustrative scenario · Working professional",
    challenge:
      "Someone whose work is solid finds that their updates in meetings get lost, and decisions keep slipping.",
    approach:
      "Weeks 2–4 focus on structuring an update and delivering it clearly; week 11 rehearses meeting and feedback conversations.",
    outcome:
      "The program develops the ability to make a point that sticks and to follow up in writing so it does.",
    skills: ["Clear speech", "Professional writing", "Presentation skills"],
  },
];

export const verifiedCaseStudies = caseStudies.filter((c) => c.kind === "verified");
export const illustrativeCaseStudies = caseStudies.filter(
  (c) => c.kind === "illustrative",
);
