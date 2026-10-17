/**
 * Section H — Who GrowthYari is for.
 *
 * Five audiences, with students and freshers first because they are the
 * program's centre of gravity. The others are named honestly rather than
 * folded into a generic "everyone" — each has a different version of the
 * same underlying problem.
 */

import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, GraduationCap, Repeat2, Rocket, UserRound } from "lucide-react";

export interface AudienceGroup {
  label: string;
  title: string;
  /** The challenge this group specifically runs into. */
  challenge: string;
  /** How GrowthYari addresses that particular version of it. */
  help: string;
  icon: LucideIcon;
  /** The primary focus gets the larger editorial treatment. */
  primary?: boolean;
}

export const whoForEyebrow = "Who it's for";
export const whoForTitle = "Built for people who have something to show — and no clear way to show it.";
export const whoForIntro =
  "The program is at its centre for students and freshers, because that is where the gap between knowing and demonstrating first becomes expensive. The same gap runs through everyone else here.";

export const audiences: AudienceGroup[] = [
  {
    label: "Students & freshers",
    title: "You can do the work. Explaining it is the part that costs you.",
    challenge:
      "Coursework proves you completed something. Interviews and internships ask you to describe what you decided and why — a muscle most curricula never load.",
    help:
      "Weekly practice on the specific sentences that fail under pressure, with recordings you can compare against week one.",
    icon: GraduationCap,
    primary: true,
  },
  {
    label: "Graduates",
    title: "The degree is finished. The explaining has not started.",
    challenge:
      "The first professional conversation you enter is usually with a stranger who has twenty other applicants and no reason to read between the lines.",
    help:
      "Structured interview practice, a resume rebuilt around decisions, and evidence a recruiter can actually look at.",
    icon: UserRound,
  },
  {
    label: "Career switchers",
    title: "You have the experience. It is written in the wrong language.",
    challenge:
      "Transferable skill does not transfer by itself. It has to be restated in the vocabulary of the role you want, or it reads as unrelated.",
    help:
      "Reframing what you already know, and a short live pitch that makes the switch make sense to someone hiring for the new field.",
    icon: Repeat2,
  },
  {
    label: "Working professionals",
    title: "You know more than you can get across in a meeting.",
    challenge:
      "As seniority grows, so does the cost of a long explanation. The ability to lead a conversation becomes more valuable than the ability to contribute to one.",
    help:
      "Delivery practice with specific notes on structure and pacing, applied to the meetings you actually have.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Entrepreneurs",
    title: "You built it. Selling it is a different skill entirely.",
    challenge:
      "Your own product feels personal, so pushback reads as rejection rather than as information — and the conversation loses its shape.",
    help:
      "Discovery-led selling, objection handling, and follow-up writing that gets replies instead of silence.",
    icon: Rocket,
  },
];
