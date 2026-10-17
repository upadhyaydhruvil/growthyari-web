/**
 * Section G — Relatable human situations.
 *
 * Five illustrative situations, one per audience GrowthYari serves. Each
 * follows the same shape: the situation, the difficulty underneath it, the
 * practical skill to develop, and the kind of evidence that shows progress.
 *
 * IMPORTANT: these are illustrative scenarios written for this site. They
 * are not real participants, not testimonials, and not results claims. No
 * names, employers, placement outcomes or measurable results appear here,
 * because none are published. If genuine, consented stories become
 * available, replace these rather than adding to them.
 */

import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, GraduationCap, MessagesSquare, Repeat2, Rocket } from "lucide-react";

export interface HumanStory {
  /** Who this is about. */
  who: string;
  /** The moment, in their own words. */
  situation: string;
  /** What is actually going wrong underneath the moment. */
  difficulty: string;
  /** The practical skill to develop. */
  skill: string;
  /** The kind of work that shows the improvement. */
  evidence: string;
  icon: LucideIcon;
}

export const storiesEyebrow = "Situations";
export const storiesTitle = "You may recognise one of these.";
export const storiesIntro =
  "These are written from patterns rather than from people, so no name or result appears here. If one of them sounds like your week, that is usually the useful signal.";

export const storiesNote =
  "Illustrative scenarios written to show how a situation maps to a skill. Not real participants, and not results claims.";

export const stories: HumanStory[] = [
  {
    who: "The student who has projects but struggles to explain them",
    situation:
      "\"I built four projects in college. If someone asks me about one, I end up listing the files instead of explaining the idea.\"",
    difficulty:
      "The work exists, but the explanation was never rehearsed — so it comes out as a description of effort rather than a demonstration of ability.",
    skill: "Explaining a project as a series of decisions, not a list of features.",
    evidence: "A recorded walkthrough of one project, reviewed and re-recorded.",
    icon: GraduationCap,
  },
  {
    who: "The fresher who knows the answer but goes blank in an interview",
    situation:
      "\"I know the answer. The second they ask, my mind goes completely empty and I start with 'basically, so...'.\"",
    difficulty:
      "The knowledge is fine; the retrieval under pressure is not. Without a structure to fall back on, nerves get to decide the shape of the answer.",
    skill: "A repeatable structure for any question, so the answer has somewhere to start.",
    evidence: "Mock-interview recordings with a written debrief, over several weeks.",
    icon: MessagesSquare,
  },
  {
    who: "The career switcher who can't make their experience legible",
    situation:
      "\"I have three years in operations. Every sales role asks for sales experience, and I cannot seem to explain why I'd be any good at it.\"",
    difficulty:
      "Transferable skill is invisible on paper. It has to be demonstrated in the language of the role you are moving into, not the one you are leaving.",
    skill: "Reframing what you already know in the terms the new role uses.",
    evidence: "A rewritten profile and resume, plus a short live pitch for the switch.",
    icon: Repeat2,
  },
  {
    who: "The professional who wants to lead conversations with clarity",
    situation:
      "\"In meetings I have the point, but by the time I've finished explaining it, everyone has moved on.\"",
    difficulty:
      "Seniority makes the cost of vagueness higher, not lower. A long, well-intentioned explanation is still a long explanation.",
    skill: "Leading with the conclusion and holding a room through structure.",
    evidence: "Recorded presentations with specific notes on pacing and structure.",
    icon: BriefcaseBusiness,
  },
  {
    who: "The entrepreneur who needs to sell more effectively",
    situation:
      "\"The product is good. The moment I have to sell it to someone who doesn't know me, I end up discounting and over-explaining.\"",
    difficulty:
      "Selling your own idea feels personal, so pushback reads as rejection rather than as information — and the conversation loses its shape.",
    skill: "Running discovery instead of pitching, and asking for a clear next step.",
    evidence: "Discovery-call recordings and a follow-up sequence that gets replies.",
    icon: Rocket,
  },
];
