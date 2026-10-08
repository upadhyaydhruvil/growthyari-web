/**
 * The GrowthYari loop.
 *
 * Step names and the surrounding copy are taken from the "Our approach"
 * section of growthyari.com. `blurb` is a short restatement written for this
 * layout — it introduces no new claim.
 *
 * This is the only loop on the site. The hero panel, the homepage section and
 * any diagram all read from `frameworkSteps`, so the five names cannot drift
 * apart. Earlier the hero panel carried its own three-card list ending in
 * "Proof", which meant the same ring had two different sets of steps on one
 * screen.
 */

import type { LucideIcon } from "lucide-react";
import { BookOpen, MessagesSquare, Repeat, Rocket, TrendingUp } from "lucide-react";

export interface FrameworkStep {
  number: string;
  title: string;
  blurb: string;
  /** Used by the hero panel's mini-list. */
  icon: LucideIcon;
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
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Practice",
    blurb: "Weekly roleplays, drills and reviews so the skill actually lands.",
    icon: Repeat,
  },
  {
    number: "03",
    title: "Feedback",
    blurb: "Personalised review on your recordings, documents and delivery.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "Execution",
    blurb: "You use the skill for real, in calls, meetings and interviews.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Growth",
    blurb: "Proof-of-work you can point a recruiter or client at.",
    icon: TrendingUp,
    closesLoop: true,
  },
];
