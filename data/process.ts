/**
 * "How it works" — the path from application to opportunity.
 *
 * Payment sits at step 4, after the Career Assessment and Selection. Earlier
 * this file claimed Apply → Assessment → Selection while every program button
 * went straight to checkout, so the page contradicted itself. An application
 * is now a form, and money only moves once both sides have confirmed fit.
 */

import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  CreditCard,
  MessagesSquare,
  PhoneCall,
  Presentation,
  Repeat,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Apply",
    description: "Share your goals and background. No payment at this stage.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Career Assessment",
    description: "A 1:1 call to map your growth path.",
    icon: PhoneCall,
  },
  {
    number: "03",
    title: "Selection",
    description: "We admit learners we can genuinely move.",
    icon: UserRoundCheck,
  },
  {
    number: "04",
    title: "Confirm & pay",
    description: "Only after selection. A seat is held, then the link is sent.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Live Training",
    description: "Small-cohort sessions with a working coach.",
    icon: Presentation,
  },
  {
    number: "06",
    title: "Practice & Activities",
    description: "Weekly roleplays, drills and reviews.",
    icon: Repeat,
  },
  {
    number: "07",
    title: "Proof-of-Work",
    description: "Build a portfolio recruiters can verify.",
    icon: Sparkles,
  },
  {
    number: "08",
    title: "Career Opportunities",
    description:
      "Interview readiness, plus introductions where there is a genuine fit.",
    icon: MessagesSquare,
  },
];
