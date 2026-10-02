/**
 * What a learner leaves with. Headings and the nine artefact names are
 * taken from the "Proof-of-work" section of growthyari.com.
 */

export const proofEyebrow = "Proof-of-work";
export const proofTitle = "Graduate with more than a certificate.";
export const proofIntro =
  "Companies hire evidence. You'll leave with a portfolio that shows recruiters, clients and partners exactly what you can do.";

export const proofArtifacts: string[] = [
  "Cold Call Recordings",
  "Discovery Calls",
  "LinkedIn Profile",
  "Professional Resume",
  "Sales Presentation",
  "CRM Practice",
  "Email Writing",
  "Mock Interviews",
  "Reflection Journal",
];

/**
 * Skill areas GrowthYari works on. These are drawn from the positioning
 * line on the homepage — "master Sales, Communication and Business
 * Execution" — plus the framework stages. No new capability is claimed.
 */
export interface OutcomeArea {
  title: string;
  description: string;
}

export const outcomesEyebrow = "Outcomes";
export const outcomesTitle = "What actually changes.";
export const outcomesIntro =
  "GrowthYari is built around three skill areas and one habit: producing evidence of all three.";

export const outcomeAreas: OutcomeArea[] = [
  {
    title: "Sales",
    description:
      "Cold calls, discovery conversations, presentations and follow-ups — practised until they are routine.",
  },
  {
    title: "Communication",
    description:
      "Getting the message to land in meetings, on calls and in interviews, without freezing up.",
  },
  {
    title: "Business Execution",
    description:
      "Turning intent into delivered work: acting, selling and finishing what you started.",
  },
  {
    title: "Proof-of-work",
    description:
      "A portfolio of recordings, documents and outcomes that a recruiter or client can verify.",
  },
];

/**
 * Testimonials.
 *
 * growthyari.com publishes no testimonials, learner names, outcomes
 * statistics, placement numbers or company logos. Nothing has been
 * invented to fill that gap, so the testimonials section is intentionally
 * empty and the UI does not render it.
 *
 * Add real, attributable entries here and the section appears on its own.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  program?: string;
}

export const testimonials: Testimonial[] = [];
