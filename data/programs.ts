/**
 * Programs currently sold on growthyari.com.
 *
 * Prices, durations, inclusions and cohort limits are taken verbatim from
 * the pricing section of the live site. Nothing here is estimated.
 *
 * `curriculum` is assembled from the "How it works" sequence and the
 * proof-of-work artefact list that the same page publishes — it is not an
 * invented module breakdown. The current site does not publish
 * week-by-week module titles, so none are shown.
 */

export interface ProgramPrice {
  /** Display string, e.g. "₹19,999". */
  amount: string;
  /** Numeric value in INR, for sorting and future checkout wiring. */
  value: number;
  /** e.g. "+ 18% GST" */
  note: string;
}

export interface CurriculumItem {
  title: string;
  description: string;
  /** Matches a step in `data/process.ts`. */
  stage: "assessment" | "training" | "practice" | "proof" | "opportunity";
}

export interface Program {
  slug: string;
  name: string;
  /** Short line used on cards and in the nav-less hero. */
  eyebrow: string;
  summary: string;
  /** Longer paragraph for the detail page intro. */
  description: string;
  duration: string;
  cohortSize: string;
  format: string;
  weeklyTime: string;
  audience: string[];
  price: ProgramPrice;
  features: string[];
  curriculum: CurriculumItem[];
  /** Portfolio items this track specifically builds toward. */
  proofOfWork: string[];
  highlights?: string[];
  badge?: string;
  ctaLabel: string;
  featured: boolean;
}

export const programs: Program[] = [
  {
    slug: "group-cohort",
    name: "Group Cohort",
    eyebrow: "Small-cohort learning",
    summary:
      "Live small-cohort sessions with a working coach, weekly practice, and a proof-of-work portfolio you can show an employer.",
    description:
      "The Group Cohort is GrowthYari's core track. You learn alongside a maximum of five other learners in live online sessions, practise every week, and leave with a portfolio of work that a recruiter or client can actually verify. It is built for students, professionals, entrepreneurs and career switchers who want practical skills and measurable career growth.",
    duration: "Up to 8 weeks",
    cohortSize: "Max 5 learners per cohort",
    format: "Live online sessions",
    weeklyTime: "Around 5–8 hours a week",
    audience: [
      "Students & graduates",
      "Working professionals",
      "Entrepreneurs",
      "Career switchers",
    ],
    price: { amount: "₹19,999", value: 19999, note: "+ 18% GST" },
    features: [
      "Live small-cohort sessions",
      "Weekly practice activities",
      "Proof-of-work portfolio",
      "Career guidance",
      "Interview preparation",
    ],
    curriculum: [
      {
        stage: "assessment",
        title: "Career Assessment",
        description:
          "A 1:1 call to map your growth path. We admit learners we can genuinely move.",
      },
      {
        stage: "training",
        title: "Live Training",
        description:
          "Small-cohort sessions with a working coach, built around real communication and sales situations.",
      },
      {
        stage: "practice",
        title: "Practice & Activities",
        description:
          "Weekly roleplays, drills and reviews. Around 5–8 hours a week is recommended.",
      },
      {
        stage: "proof",
        title: "Proof-of-Work",
        description:
          "Build a portfolio recruiters can verify — recordings, documents and outcomes, not just a certificate.",
      },
      {
        stage: "opportunity",
        title: "Career Opportunities",
        description: "Interview readiness and warm introductions.",
      },
    ],
    proofOfWork: [
      "Cold Call Recordings",
      "Discovery Calls",
      "LinkedIn Profile",
      "Professional Resume",
      "Sales Presentation",
      "CRM Practice",
      "Email Writing",
      "Mock Interviews",
      "Reflection Journal",
    ],
    highlights: [
      "Maximum five learners, so feedback is personal",
      "Every session is live, not recorded",
      "You finish with work you can show an employer",
    ],
    ctaLabel: "Apply for Group Cohort",
    featured: false,
  },
  {
    slug: "1-1-accelerator",
    name: "1:1 Accelerator",
    eyebrow: "Fully personalized coaching",
    summary:
      "Everything in the Group Cohort, plus personalized coaching, weekly 1:1 reviews and a custom learning roadmap.",
    description:
      "The 1:1 Accelerator is the fully personalized version of the GrowthYari program. It includes everything in the Group Cohort and adds weekly one-to-one reviews, a custom learning roadmap built around your goals, and priority support. Choose it when you need the pace, the structure or the accountability to be shaped around you specifically.",
    duration: "Up to 8 weeks",
    cohortSize: "One-to-one",
    format: "Live online sessions, personalized",
    weeklyTime: "Around 5–8 hours a week",
    audience: [
      "Professionals accelerating a promotion",
      "Entrepreneurs scaling sales",
      "Career switchers entering a new function",
    ],
    price: { amount: "₹1,17,999", value: 117999, note: "+ 18% GST" },
    features: [
      "Everything in Group Program",
      "Personalized coaching",
      "Weekly 1:1 reviews",
      "Custom learning roadmap",
      "Priority support",
    ],
    curriculum: [
      {
        stage: "assessment",
        title: "Career Assessment",
        description:
          "A 1:1 call to map your growth path, then a custom roadmap is written around it.",
      },
      {
        stage: "training",
        title: "Personalized Coaching",
        description:
          "Fully personalized live sessions with a working coach, paced to your starting point.",
      },
      {
        stage: "practice",
        title: "Weekly 1:1 Reviews",
        description:
          "Every week you review your roleplays, drills and recordings directly with your coach.",
      },
      {
        stage: "proof",
        title: "Proof-of-Work",
        description:
          "The same verifiable portfolio as the Group Cohort, built at your own pace.",
      },
      {
        stage: "opportunity",
        title: "Priority Support",
        description:
          "Priority support through interview readiness and warm introductions.",
      },
    ],
    proofOfWork: [
      "Cold Call Recordings",
      "Discovery Calls",
      "LinkedIn Profile",
      "Professional Resume",
      "Sales Presentation",
      "CRM Practice",
      "Email Writing",
      "Mock Interviews",
      "Reflection Journal",
    ],
    highlights: [
      "A roadmap written for you, not a shared syllabus",
      "A 1:1 review every single week",
      "Priority support throughout",
    ],
    badge: "Most personal",
    ctaLabel: "Apply for 1:1 Accelerator",
    featured: true,
  },
];

export const getProgram = (slug: string) =>
  programs.find((program) => program.slug === slug);

export const getRelatedPrograms = (slug: string) =>
  programs.filter((program) => program.slug !== slug);
