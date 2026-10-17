/**
 * Section F — "Not just what you learned. What you can now demonstrate."
 *
 * The nine proof-of-work artefacts. Each has a `kind` used to pick its
 * visual treatment, so the showcase reads as a portfolio rather than nine
 * identical cards.
 *
 * IMPORTANT: these describe the *kind* of artefact a learner builds. They
 * are illustrative by nature — the descriptions say what the artefact is
 * and what it demonstrates. Nothing here claims a specific learner result,
 * and no sample is presented as a real person's work.
 */

export const proofShowcaseEyebrow = "Proof of work";
export const proofShowcaseTitle = "Not just what you learned. What you can now demonstrate.";
export const proofShowcaseIntro =
  "Certificates describe. Recordings, documents and outcomes demonstrate. Each artefact below is something you build during the batch and keep afterwards.";

export type ArtefactKind = "audio" | "document" | "presentation" | "data" | "writing" | "reflection";

export interface Artefact {
  name: string;
  kind: ArtefactKind;
  /** One line on what the artefact is. */
  what: string;
  /** What it demonstrates that a line on a resume cannot. */
  shows: string;
}

export const artefacts: Artefact[] = [
  {
    name: "Cold Call Recordings",
    kind: "audio",
    what: "Recorded practice calls, from the opener through to the first objection.",
    shows: "That you can open a conversation with a stranger and hold it.",
  },
  {
    name: "Discovery Calls",
    kind: "audio",
    what: "Calls built around questions, with a written summary of what you learned.",
    shows: "That you listen to understand rather than to reply.",
  },
  {
    name: "LinkedIn Profile",
    kind: "document",
    what: "A profile rewritten so a recruiter reading it for thirty seconds knows what you do.",
    shows: "That you can describe your own ability to someone who has never met you.",
  },
  {
    name: "Professional Resume",
    kind: "document",
    what: "A resume rebuilt around decisions and outcomes instead of duties and dates.",
    shows: "That you can make a case for yourself on one page.",
  },
  {
    name: "Sales Presentation",
    kind: "presentation",
    what: "A short deck, delivered live, that makes one clear case and asks for a next step.",
    shows: "That you can hold a room's attention without reading at it.",
  },
  {
    name: "CRM Practice",
    kind: "data",
    what: "Pipeline and follow-up work run in a real CRM the way a working team runs it.",
    shows: "That you can organise a conversation into something a team can act on.",
  },
  {
    name: "Email Writing",
    kind: "writing",
    what: "Follow-ups and outreach written to get a reply, not just to be sent.",
    shows: "That your written voice gets the same attention as your spoken one.",
  },
  {
    name: "Mock Interviews",
    kind: "audio",
    what: "Recorded interviews with a real structure and a real debrief afterwards.",
    shows: "That the version of you who freezes is not the only version you have.",
  },
  {
    name: "Reflection Journal",
    kind: "reflection",
    what: "A running record of what changed each week, written by you.",
    shows: "That you can describe your own progress — a skill interviews probe directly.",
  },
];

/** The distinction the brief asks to make explicit. */
export const artefactNote = {
  title: "Completing an activity is not the same as demonstrating a skill.",
  body: "Anyone can tick a box. What makes an artefact useful is that someone who wasn't there can look at it and form a view of what you can do.",
} as const;
