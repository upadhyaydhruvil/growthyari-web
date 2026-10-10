/**
 * Upcoming workshops.
 *
 * ⚠️ growthyari.com does not currently publish any workshop schedule,
 * dates, mentors or prices. The three entries below are PLACEHOLDER data
 * used to demonstrate the layout and the `WorkshopCard` component.
 *
 * Every record carries `isDemo: true`. The Workshops page renders a
 * visible banner whenever any demo record is present, and the banner
 * disappears automatically once real records replace them.
 *
 * To go live: replace the contents of `workshops` with real records and
 * set `isDemo: false`. No component changes are required — dates, times,
 * mentors, prices, capacity and the registration CTA are all optional.
 */

export type WorkshopStatus = "upcoming" | "past";

export interface Workshop {
  id: string;
  title: string;
  /** ISO date, used for sorting and for the <time> element. */
  date: string;
  /** Human label. Shown as-is so the source of truth stays visible. */
  dateLabel: string;
  time: string;
  duration: string;
  /** Left null when the current site has no named mentor. */
  mentor: string | null;
  description: string;
  audience: string;
  outcomes: string[];
  price: string | null;
  seats: number | null;
  seatsTaken: number | null;
  format: string;
  status: WorkshopStatus;
  isDemo: boolean;
}

export const workshops: Workshop[] = [
  {
    id: "demo-communication",
    title: "Say it so it lands: communication fundamentals",
    date: "2026-08-08",
    dateLabel: "Placeholder date",
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
    status: "upcoming",
    isDemo: true,
  },
  {
    id: "demo-cold-calls",
    title: "Your first ten cold calls",
    date: "2026-08-15",
    dateLabel: "Placeholder date",
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
    status: "upcoming",
    isDemo: true,
  },
  {
    id: "demo-resume",
    title: "Fix your resume in one hour",
    date: "2026-08-22",
    dateLabel: "Placeholder date",
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
    status: "upcoming",
    isDemo: true,
  },
];

export const upcomingWorkshops = workshops.filter((w) => w.status === "upcoming");
export const pastWorkshops = workshops.filter((w) => w.status === "past");
export const hasDemoWorkshops = workshops.some((w) => w.isDemo);

/** Only used in the nav "Workshops" counter. */
export const upcomingWorkshopCount = upcomingWorkshops.length;
