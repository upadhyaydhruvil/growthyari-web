/**
 * Student "thinker" cards.
 *
 * Each card is a composite persona: the situation a student is typically
 * stuck in, the thought running through their head, and the skill the
 * program is designed to move.
 *
 * These are illustrative personas written for this site, not real students
 * and not testimonials. No student outcomes, names, photos or results are
 * published by growthyari.com, so nothing here should be read as a claim
 * about a real person. Replace with genuine, consented stories before launch
 * if any become available.
 */

import type { LucideIcon } from "lucide-react";
import { FileText, Mic, Search, Send } from "lucide-react";

export interface StudentPersona {
  /** Where they are right now. */
  stage: string;
  /** Who they are, in their own words. */
  title: string;
  /** The thought that keeps them up at night. Rendered as the card's quote. */
  thought: string;
  /** The one capability the program targets. */
  focus: string;
  /** Which module moves it. Mirrors the framework on the homepage. */
  module: string;
  icon: LucideIcon;
}

export const personasEyebrow = "Thinker cards";
export const personasTitle = "The thought that keeps a student stuck.";
export const personasIntro =
  "Most students do not have an effort problem. They get held up by one specific doubt, and each one needs a different skill first.";

export const personasNote =
  "Based on situations students describe to us. Details are composites.";

export const personas: StudentPersona[] = [
  {
    stage: "Final-year student",
    title: "Has the degree, cannot get the interview",
    thought:
      "I have solved everything in the syllabus, but every recruiter asks the one thing I have never practised.",
    focus: "Answering behavioural questions with structure instead of nerves",
    module: "Feedback",
    icon: Mic,
  },
  {
    stage: "First-year student",
    title: "Wants to start early, has no idea where",
    thought:
      "Everyone in my batch has a plan. I have a vague idea and I am scared of starting in the wrong place.",
    focus: "Asking better questions and writing a plan anyone can check",
    module: "Learning",
    icon: Search,
  },
  {
    stage: "Final-year student",
    title: "Sends applications, hears nothing",
    thought:
      "I have sent over a hundred applications. I genuinely cannot tell whether the problem is my CV or my approach.",
    focus: "Reading a rejection as feedback and fixing the actual cause",
    module: "Execution",
    icon: Send,
  },
  {
    stage: "Intern hunting",
    title: "Needs a portfolio, has only coursework",
    thought:
      "My internship applications ask for proof I can do the job. Coursework is not proof, and I do not know what to build instead.",
    focus: "Turning a task into a portfolio artefact a hiring manager can verify",
    module: "Practice",
    icon: FileText,
  },
];

/**
 * Small readouts used in the "system status" strip. Kept honest: these
 * describe how the program runs, they are not participant statistics.
 */
export interface SystemMetric {
  label: string;
  value: string;
  note: string;
}

export const systemMetrics: SystemMetric[] = [
  { label: "Format", value: "Live online", note: "Cohort, not self-paced" },
  { label: "Cohort size", value: "Max 5", note: "Per group batch" },
  { label: "Duration", value: "Up to 8 weeks", note: "Structured, weekly" },
  { label: "End state", value: "A portfolio", note: "Work a recruiter can open" },
];
