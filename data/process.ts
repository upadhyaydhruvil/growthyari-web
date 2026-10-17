/**
 * Section K — "How joining works."
 *
 * The path from application to prepared, in eight steps. Written to be
 * reassuring and transparent: application and assessment happen *before*
 * any payment, and nothing about applying guarantees admission, an
 * interview, employment or a placement.
 */

import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Handshake,
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
  /** Steps that happen before money is mentioned are called out. */
  beforePayment?: boolean;
}

export const processEyebrow = "How joining works";
export const processTitle = "What actually happens after you apply.";
export const processIntro =
  "Eight steps, in order. The first four happen before any payment, and applying does not commit you to anything — or guarantee you a place.";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Apply",
    description:
      "Share your background and what you want to move toward. A short form — not a checkout, and nothing is charged.",
    icon: ClipboardCheck,
    beforePayment: true,
  },
  {
    number: "02",
    title: "Career Assessment Call",
    description:
      "A short conversation about where you are today and what you want to get to. Not a test, and not a sales call.",
    icon: PhoneCall,
    beforePayment: true,
  },
  {
    number: "03",
    title: "Confirm the fit",
    description:
      "Together we decide whether this batch is the right way to get there. If it isn't, we will say so at this point rather than twelve weeks in.",
    icon: Handshake,
    beforePayment: true,
  },
  {
    number: "04",
    title: "Confirm your place",
    description:
      "Only if it is a fit do you confirm your place and arrange payment. Fees are discussed at this stage, never before.",
    icon: UserRoundCheck,
    beforePayment: true,
  },
  {
    number: "05",
    title: "Begin live training",
    description:
      "Weekly live sessions with a working practitioner, in a group small enough that you cannot hide.",
    icon: Presentation,
  },
  {
    number: "06",
    title: "Practise and get feedback",
    description:
      "Roleplays, drills and reviews every week, with specific notes on what to change rather than a score.",
    icon: Repeat,
  },
  {
    number: "07",
    title: "Build your proof-of-work",
    description:
      "Recordings, decks, emails and interviews accumulate into a portfolio someone who wasn't there can read.",
    icon: Sparkles,
  },
  {
    number: "08",
    title: "Prepare for the opportunity",
    description:
      "Interview readiness, so that when the conversation you wanted arrives, it is not the first time you have had it.",
    icon: MessagesSquare,
  },
];

export const processNote = {
  title: "What applying does not do",
  body: "Applying does not guarantee admission, an interview, a job or a placement. It starts a conversation. The batch prepares you for the opportunities you go after — it does not produce them for you.",
} as const;
