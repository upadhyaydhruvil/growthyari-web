/**
 * "How it works" — the seven-step path from application to opportunity.
 * Verbatim from growthyari.com.
 */

import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
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
    description: "Share your goals and background.",
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
    title: "Live Training",
    description: "Small-cohort sessions with a working coach.",
    icon: Presentation,
  },
  {
    number: "05",
    title: "Practice & Activities",
    description: "Weekly roleplays, drills and reviews.",
    icon: Repeat,
  },
  {
    number: "06",
    title: "Proof-of-Work",
    description: "Build a portfolio recruiters can verify.",
    icon: Sparkles,
  },
  {
    number: "07",
    title: "Career Opportunities",
    description: "Interview readiness and warm introductions.",
    icon: MessagesSquare,
  },
];
