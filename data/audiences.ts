/**
 * Who the program is for. Verbatim from growthyari.com.
 */

import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, GraduationCap, Repeat2, Rocket } from "lucide-react";

export interface Audience {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const audiencesEyebrow = "Who it's for";
export const audiencesTitle = "Built for the people who want to move.";
export const audiencesIntro =
  "One program, four kinds of momentum. Choose the outcome that matches where you are.";

export const audiences: Audience[] = [
  {
    label: "Students & graduates",
    title: "Launch your career with practical skills.",
    description:
      "Move beyond your degree with communication, sales and business fundamentals that hiring managers actually test for.",
    icon: GraduationCap,
  },
  {
    label: "Professionals",
    title: "Accelerate your career growth.",
    description:
      "Sharpen the skills behind promotions — clarity, influence, executive presence and confident execution.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Entrepreneurs",
    title: "Grow your business.",
    description:
      "Sell better, close faster and communicate with the clarity your product and team deserve.",
    icon: Rocket,
  },
  {
    label: "Career switchers",
    title: "Build for high-growth roles.",
    description:
      "Transition into Sales, BD, Partnerships, CS or GTM roles with real skills and a portfolio to prove it.",
    icon: Repeat2,
  },
];
