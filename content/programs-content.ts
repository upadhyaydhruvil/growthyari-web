import type { LucideIcon } from "lucide-react";
import { Brain, FileCheck, Link2, RefreshCw, Wrench } from "lucide-react";
import { tracks } from "@/content/program-config";

/**
 * All editorial copy for /programs. Facts that are not confirmed live in this
 * file with `confirmed: false` and are skipped, exactly like the stats in
 * `program-config.ts`. No component decides truth on its own.
 */

/* -------------------------------------------------------------------------- */
/* Hero (section 5.1)                                                          */
/* -------------------------------------------------------------------------- */

export const programsHero = {
  eyebrow: "Programs",
  headingFront: "Go from ",
  headingQuote: "prepared for a job",
  headingTail: " to ",
  headingQuote2: "career growth you can point to",
  headingPeriod: ".",
  lead: "GrowthYari's live, small-cohort programs teach sales, communication and business execution — and turn them into a portfolio of work a recruiter or client can actually verify. Not a certificate to stash.",
  primaryCta: { label: "Start with a Career Assessment Call", href: "/contact" },
  secondaryCta: { label: "Compare both tracks", href: "#pricing" },
} as const;

/* -------------------------------------------------------------------------- */
/* Career capital framework (sections 5.3 + 5.4)                               */
/* -------------------------------------------------------------------------- */

export const careerCapital = {
  eyebrow: "The framework",
  title: "Career capital is skills you can prove.",
  lead: "Degrees and certificates are stored in a drawer. Work that proves you can do the job is stored in a recruiter's memory. The whole program exists to move you from the first pile to the second.",
  equation: {
    left: "Career capital",
    operator: "=",
    right: "Skills you can prove",
  },
} as const;

export interface FrameworkPhase {
  step: string;
  name: string;
  icon: LucideIcon;
  body: string;
}

export const frameworkPhases: FrameworkPhase[] = [
  {
    step: "01",
    name: "Think",
    icon: Brain,
    body: "A 1:1 Career Assessment Call maps your starting point and the direction your experience can actually support.",
  },
  {
    step: "02",
    name: "Connect",
    icon: Link2,
    body: "Learn directly from a working coach — real communication and sales situations, in your context, not a recorded lecture.",
  },
  {
    step: "03",
    name: "Master",
    icon: Wrench,
    body: "Practise weekly in live sessions — roleplays, drills and reviews — until the skill is repeatable, not just understood.",
  },
  {
    step: "04",
    name: "Prove",
    icon: FileCheck,
    body: "Turn the practice into verifiable artefacts: recordings, documents and outcomes an employer can check without the grade book.",
  },
];

/* -------------------------------------------------------------------------- */
/* Comparison: typical program vs GrowthYari (section 5.5)                     */
/* -------------------------------------------------------------------------- */

export interface ComparisonRow {
  module: string;
  typical: string;
  growthyari: string;
}

export const typicalVsGrowthyari = {
  eyebrow: "Not what you think",
  title: "A typical program gives you a syllabus. You need evidence.",
  lead: "The modules look identical on paper. Look at what you actually own at the end.",
  columns: ["Typical program", "GrowthYari"],
  rows: [
    {
      module: "Delivery",
      typical: "Recorded lectures you can binge and forget",
      growthyari: "Live sessions, capped at 5 learners, every week",
    },
    {
      module: "Outcome",
      typical: "A certificate you download once",
      growthyari: "A proof-of-work portfolio a recruiter can verify",
    },
    {
      module: "Starting point",
      typical: "One syllabus regardless of where you begin",
      growthyari: "A 1:1 assessment call before anyone is admitted",
    },
    {
      module: "Practice",
      typical: "Quizzes with right answers",
      growthyari: "Weekly roleplays, drills and real feedback",
    },
    {
      module: "Career help",
      typical: "A vague promise of 'placement support'",
      growthyari: "Honest interview prep and warm introductions — no guarantees, no fake promises",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* The learning loop (section 5.6)                                             */
/* -------------------------------------------------------------------------- */

export const learningLoop = {
  eyebrow: "One loop, two ways",
  title: "The loop is the same. The attention is what changes.",
  lead: "Both tracks run the same cycle. The Group Cohort loops it together; the 1:1 Accelerator loops it with a weekly 1:1 review pointed entirely at you.",
  steps: [
    {
      icon: Brain,
      name: "Learn",
      body: "New skill from a working coach.",
    },
    {
      icon: RefreshCw,
      name: "Practise",
      body: "Apply it in a live roleplay.",
    },
    {
      icon: Link2,
      name: "Review",
      body: "Get feedback on the recording.",
    },
    {
      icon: Wrench,
      name: "Revise",
      body: "Repeat until it is repeatable.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Proof-of-work (sections 5.12 + 5.13)                                        */
/* -------------------------------------------------------------------------- */

export const proofPyramid = {
  eyebrow: "Proof-of-work",
  title: "What proof actually looks like.",
  lead: "The program ends with a portfolio built from nine artefacts, organised like a pyramid: practised skills at the base, structured presentation in the middle, and a single verifiable line at the top.",
  apex: "Verifiable: interview-ready and able to point at what you did",
  layers: [
    {
      name: "Structured",
      items: ["LinkedIn Profile", "Professional Resume", "Reflection Journal"],
    },
    {
      name: "Practised",
      items: [
        "Cold Call Recordings",
        "Discovery Calls",
        "Sales Presentation",
        "Email Writing",
        "CRM Practice",
        "Mock Interviews",
      ],
    },
  ],
} as const;

export const talentSample = {
  eyebrow: "Illustrative sample — not a real student",
  title: "What the other side looks like.",
  body: "A fresh graduate with no sales experience enters the loop. Eight weeks later they have cold-call recordings, a discovery-call library, a cleaned-up LinkedIn profile and a resume built around work they actually did. When interviews happen, they answer from evidence, not adjectives.",
  quote: "I stopped telling people what I could do and started showing them.",
  factsLabel: "In their portfolio",
  facts: [
    "Cold-call recordings",
    "Discovery-call library",
    "Sales presentation",
    "Rewritten LinkedIn profile",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Effort (section 5.14)                                                       */
/* -------------------------------------------------------------------------- */

export const effort = {
  eyebrow: "Effort",
  title: "What it really takes.",
  lead: "Two facts, no hype. The rest — schedules, make-up policy, refunds — are published closer to launch.",
  facts: [
    {
      label: "Weekly time",
      value: tracks["group-cohort"].weeklyTime,
      note: "Roleplays, drills and review between live sessions.",
    },
    {
      label: "Program length",
      value: tracks["group-cohort"].duration,
      note: "Live cohorts run week to week, built around working learners.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Self-check (section 5.11)                                                   */
/* -------------------------------------------------------------------------- */

export const selfCheck = {
  eyebrow: "Self-check",
  title: "Where are you on the gap?",
  lead: "Five questions, answered honestly. This is a starting point for the assessment call, not a score to brag about.",
  note: "The call is free and you can leave any time — no pitch keeps you in it.",
  questions: [
    {
      ask: "Could you record a sales cold call to a stranger today?",
      yes: "You have more proof than most.",
      no: "This is exactly what the loop builds first.",
    },
    {
      ask: "Is your LinkedIn profile written for a recruiter or for your friends?",
      yes: "Structure is your gap, not raw skills.",
      no: "You already have the asset — it just needs to prove something.",
    },
    {
      ask: "Can you show a manager a document you drafted, not a certificate?",
      yes: "You are closer to hireable than you feel.",
      no: "Proof-of-work is the whole point of the program.",
    },
    {
      ask: "Do you have a repeatable way to practise feedback?",
      yes: "You will speed through the loop.",
      no: "Live roleplays every week are the fix.",
    },
    {
      ask: "Are your expectations 'I want a job' or 'I want to be worth hiring'?",
      yes: "Then interviews will keep disappointing you.",
      no: "You are ready — this program exists for that shift.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* FAQ (section 5.10)                                                          */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  question: string;
  answer: string | null;
  confirmed: boolean;
}

export const faqItems: FaqItem[] = [
  {
    question: "Who is GrowthYari for?",
    answer:
      "Students and graduates, working professionals, entrepreneurs and career switchers who want practical sales, communication and business skills with work they can show an employer.",
    confirmed: true,
  },
  {
    question: "Are the sessions live or recorded?",
    answer:
      "Live. Both tracks run live online sessions. Recordings may help you catch up, but the practice happens in the room.",
    confirmed: true,
  },
  {
    question: "Do you guarantee placement or a job?",
    answer:
      "No — and be suspicious of anyone who does. We prepare you for interviews and make warm introductions where we can. The evidence you leave with is what does the selling.",
    confirmed: true,
  },
  {
    question: "What is the difference between the two tracks?",
    answer: `The Group Cohort (${tracks["group-cohort"].price.amount}) is live learning with up to 4 other learners. The 1:1 Accelerator (${tracks["1-1-accelerator"].price.amount}) adds a weekly 1:1 review, a custom roadmap and priority support.`,
    confirmed: true,
  },
  {
    question: "Is online payment available?",
    answer:
      "Not yet. We confirm fit on a Career Assessment Call first, and a payment link is sent the moment checkout goes live.",
    confirmed: true,
  },
  // TODO(founder): answer the attender/make-up policy when it exists.
  {
    question: "What if I miss a session?",
    answer: null,
    confirmed: false,
  },
];

export const visibleFaq = faqItems.filter((item) => item.confirmed);

/* -------------------------------------------------------------------------- */
/* Honesty band (section 5.16)                                                 */
/* -------------------------------------------------------------------------- */

export const honesty = {
  eyebrow: "The honest bit",
  title: "What we will not promise.",
  denied: [
    "No guaranteed job",
    "No salary floor",
    "No '100% placement'",
    "No shortcut to 10x your career",
  ],
  kept: [
    "Live sessions, capped and personal",
    "Weekly practice with real feedback",
    "A proof-of-work portfolio you can verify",
    "An honest read on where you stand",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Not fit (section 5.18)                                                      */
/* -------------------------------------------------------------------------- */

export const notRightFor = {
  eyebrow: "And who this is not for",
  title: "Not for you if",
  lead: "Turning down the wrong student is part of the program. If any of these are you, spend the money elsewhere.",
  items: [
    "You want a recorded course to binge at 1.5x",
    "You need a placement guarantee to feel safe",
    "You are not ready to practise out loud, weekly",
    "You believe a certificate is the same as a skill",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Analytics event names (registered in lib/analytics.ts)                      */
/* -------------------------------------------------------------------------- */

export const programEvents = {
  ctaClick: "programs_cta_click",
  sectionView: "programs_section_view",
  selfCheckComplete: "programs_selfcheck_complete",
  faqOpen: "programs_faq_open",
  talentCardOpen: "programs_talentcard_open",
  pricingCardClick: "programs_pricing_card_click",
} as const;