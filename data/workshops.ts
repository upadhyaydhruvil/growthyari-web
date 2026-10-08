/**
 * Upcoming workshops.
 *
 * growthyari.com does not publish a workshop schedule, dates, mentors or
 * prices. The three records below are placeholders that keep the layout and
 * `WorkshopCard` exercised.
 *
 * Dates are parsed from `date` — there is no separate hand-typed `dateLabel`,
 * because a label and a date that disagree is how a page ends up advertising
 * "2 August" in October. Status is derived too: a workshop is `past` the
 * moment its date passes, with no edit required.
 *
 * To go live: set real `date` values, real `price`, and `isDemo: false`.
 * Past records stay visible in the "Past workshops" archive but never in a
 * list, a badge or a CTA.
 */

import { formatLong, isPast } from "@/data/dates";

export type WorkshopStatus = "upcoming" | "past";

export interface Workshop {
  id: string;
  title: string;
  /** ISO date (`YYYY-MM-DD`). Drives sorting, the <time> element and status. */
  date: string;
  time: string;
  duration: string;
  /** Left null when the current site has no named mentor. */
  mentor: string | null;
  description: string;
  audience: string;
  outcomes: string[];
  /**
   * Display price. `null` renders the fallback in `WorkshopCard`, which
   * states when the price lands rather than leaving a Register button
   * sitting next to an unanswered question.
   */
  price: string | null;
  seats: number | null;
  seatsTaken: number | null;
  format: string;
  isDemo: boolean;
}

export const workshops: Workshop[] = [
  {
    id: "demo-communication",
    title: "Say it so it lands: communication fundamentals",
    date: "2026-08-08",
    time: "7:00 PM IST",
    duration: "60 minutes",
    mentor: null,
    description:
      "A single live session on the three things that make people stop listening — structure, brevity and closing. Bring a real scenario from your own work and we will work through it.",
    audience: "Students, freshers and anyone who freezes in meetings or interviews.",
    outcomes: [
      "A simple structure for any update or answer",
      "How to cut a message down without losing the point",
      "A closer that actually invites a response",
    ],
    price: null,
    seats: null,
    seatsTaken: null,
    format: "Live online session",
    isDemo: true,
  },
  {
    id: "demo-cold-calls",
    title: "Your first ten cold calls",
    date: "2026-08-15",
    time: "7:00 PM IST",
    duration: "60 minutes",
    mentor: null,
    description:
      "What to say in the first fifteen seconds, how to handle 'not interested', and why most people hang up before the pitch. Live, with a practice round at the end.",
    audience: "Freshers and career switchers preparing for sales or BD roles.",
    outcomes: [
      "An opener that survives the first ten seconds",
      "Three responses to the most common objections",
      "A repeatable daily calling routine",
    ],
    price: null,
    seats: null,
    seatsTaken: null,
    format: "Live online session",
    isDemo: true,
  },
  {
    id: "demo-resume",
    title: "Fix your resume in one hour",
    date: "2026-08-22",
    time: "7:00 PM IST",
    duration: "60 minutes",
    mentor: null,
    description:
      "Bring the resume you are sending out. We will go through what a recruiter reads first, what gets cut, and where your proof-of-work should sit.",
    audience: "Anyone actively applying and unsure why the callbacks stopped.",
    outcomes: [
      "The six lines a recruiter actually reads",
      "Where to place projects and evidence",
      "A checklist before you hit send",
    ],
    price: null,
    seats: null,
    seatsTaken: null,
    format: "Live online session",
    isDemo: true,
  },
];

/** Status is derived from the date, never stored. */
export const statusOf = (workshop: Workshop): WorkshopStatus =>
  isPast(workshop.date) ? "past" : "upcoming";

/** Long date label for a workshop, e.g. "8 August 2026". */
export const labelOf = (workshop: Workshop): string => formatLong(workshop.date);

/** Strictly future workshops, soonest first. Drives every list and badge. */
export const upcomingWorkshops = workshops
  .filter((workshop) => !isPast(workshop.date))
  .sort((a, b) => a.date.localeCompare(b.date));

/**
 * Workshops whose date has passed. Archive only — never a CTA.
 *
 * Demo records are excluded as well as past ones. A placeholder dated
 * "8 August 2026" never actually ran, so listing it under a heading that says
 * "Already been run" would be a false claim, not an archive.
 */
export const pastWorkshops = workshops
  .filter((workshop) => isPast(workshop.date) && !workshop.isDemo)
  .sort((a, b) => b.date.localeCompare(a.date));

export const hasDemoWorkshops = workshops.some((workshop) => workshop.isDemo);

/**
 * Only used for the nav "Workshops" counter.
 *
 * Counts future workshops only, so a badge cannot advertise a session that
 * has already happened. Zero hides the badge entirely.
 */
export const upcomingWorkshopCount = upcomingWorkshops.length;
