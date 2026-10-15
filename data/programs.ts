/**
 * The GrowthYari flagship program.
 *
 * There is exactly one public program: the 12-Week Sales & Communication
 * Pilot Batch. The previous two-track model (Group Cohort / 1:1 Accelerator)
 * and all public pricing were retired in the 2026-10 restructure — see
 * `data/site.ts`.
 *
 * Only the 12-week duration is confirmed. Cohort size, weekly hours, batch
 * dates and trainer are NOT confirmed and are therefore absent from this
 * record rather than estimated.
 */

export interface Program {
  slug: string;
  name: string;
  /** Short line used on cards and in the hero eyebrow slot. */
  eyebrow: string;
  summary: string;
  /** Longer paragraph for the program page intro. */
  description: string;
  /** The one confirmed operational fact. */
  duration: string;
  focus: string;
  audience: string[];
  features: string[];
  ctaLabel: string;
  featured: boolean;
  badge?: string;
}

export const flagshipProgram: Program = {
  slug: "12-week-pilot-batch",
  name: "12-Week Sales & Communication Pilot Batch",
  eyebrow: "Sales & Communication",
  summary:
    "A 12-week, practice-first program that builds the speaking, listening and conversation skills interviews, internships and first jobs actually ask for.",
  description:
    "The 12-Week Sales & Communication Pilot Batch is GrowthYari's flagship program for college students, graduates and freshers. It is practical training rather than a recorded course: you learn a skill, practise it in real scenarios, get feedback, and improve it. Over twelve weeks you build the confidence to speak clearly, present confidently and handle real conversations — and finish with evidence of your skills you can show.",
  duration: "12 weeks",
  focus: "Sales & communication",
  audience: [
    "College students",
    "Recent graduates",
    "Freshers entering their first job",
    "Anyone who freezes in interviews or meetings",
  ],
  features: [
    "Practical, scenario-based training",
    "Structured practice every week",
    "Feedback and review",
    "Conversation and presentation skills",
    "Evidence of your skills, not just a certificate",
  ],
  ctaLabel: "Apply for the 12-Week Pilot Batch",
  featured: true,
};

/**
 * Kept as an array so existing layout code (footer, lists) keeps working.
 * There is only ever one entry.
 */
export const programs: Program[] = [flagshipProgram];

export const getProgram = (slug: string) =>
  programs.find((program) => program.slug === slug);
