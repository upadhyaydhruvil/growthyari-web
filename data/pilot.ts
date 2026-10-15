/**
 * Content for the 12-Week Sales & Communication Pilot Batch.
 *
 * The curriculum below is the PROPOSED weekly structure for the pilot. It is
 * editorial content (what the batch covers), not a factual claim about dates,
 * prices, seats or trainers. Before it becomes a public commitment, the
 * program team must confirm it is deliverable — see the note rendered on the
 * program page.
 */

export interface CurriculumWeek {
  week: number;
  title: string;
  objective: string;
  activities: string[];
  output: string;
}

export const curriculumWeeks: CurriculumWeek[] = [
  {
    week: 1,
    title: "Foundations of clear communication",
    objective: "Understand what makes a message land instead of being ignored.",
    activities: [
      "Baseline speaking task, recorded for reference",
      "Structure versus rambling — what listeners actually need",
      "Clarity drill: cutting a message without losing the point",
    ],
    output: "A 2-minute self-introduction you would be happy to give in an interview.",
  },
  {
    week: 2,
    title: "Structuring any message",
    objective: "Answer or update in a clear shape, under pressure.",
    activities: [
      "The three-point structure for any answer",
      "Rebuilding a rambling answer into a clear one",
      "Timed practice rounds with peer feedback",
    ],
    output: "A structured oral answer, recorded and reviewed.",
  },
  {
    week: 3,
    title: "Listening and questioning",
    objective: "Listen to understand, not to reply.",
    activities: [
      "Active-listening drill",
      "Open versus closed questions",
      "Paraphrasing to confirm understanding",
    ],
    output: "A question set written for a real scenario you face.",
  },
  {
    week: 4,
    title: "Speaking with confidence",
    objective: "Manage nerves, pace and voice.",
    activities: [
      "Breathing and pacing practice",
      "Filler-word audit on your own recording",
      "Impromptu speaking round",
    ],
    output: "A short rehearsed presentation clip.",
  },
  {
    week: 5,
    title: "The sales conversation mindset",
    objective: "Understand selling as helping, not pushing.",
    activities: [
      "Needs versus features",
      "Understanding buyer motivation",
      "Roleplay with a partner",
    ],
    output: "A set of discovery questions for a real product or service.",
  },
  {
    week: 6,
    title: "Cold outreach essentials",
    objective: "Open a conversation from nothing.",
    activities: [
      "The 15-second opener",
      "Handling the first objection",
      "Practice calls with feedback",
    ],
    output: "A cold-call script and a practice recording.",
  },
  {
    week: 7,
    title: "Discovery conversations",
    objective: "Uncover what someone actually needs.",
    activities: [
      "Question laddering",
      "Note-taking during a live conversation",
      "Live roleplays",
    ],
    output: "A discovery-call recording with a written summary.",
  },
  {
    week: 8,
    title: "Handling objections",
    objective: "Respond to pushback without folding.",
    activities: [
      "Mapping the common objections",
      "The acknowledge–clarify–respond model",
      "Objection drills",
    ],
    output: "A personal objection-response playbook.",
  },
  {
    week: 9,
    title: "Presenting and storytelling",
    objective: "Hold attention and make a point stick.",
    activities: [
      "Story structure for a business point",
      "Slide basics and what to cut",
      "A short pitch, delivered live",
    ],
    output: "A 3-minute presentation.",
  },
  {
    week: 10,
    title: "Follow-up and closing",
    objective: "Move a conversation to a clear next step.",
    activities: [
      "Writing a follow-up email that gets a reply",
      "Making the ask",
      "Negotiation basics",
    ],
    output: "A follow-up email and a closing script.",
  },
  {
    week: 11,
    title: "Interview and workplace communication",
    objective: "Apply the skills where they matter most.",
    activities: [
      "Mock interviews",
      "Giving a meeting update",
      "A feedback conversation",
    ],
    output: "A mock-interview recording.",
  },
  {
    week: 12,
    title: "Capstone: putting it together",
    objective: "Demonstrate the full skill set end to end.",
    activities: [
      "A complete practice scenario",
      "Self-review against your week-1 baseline",
      "Final feedback session",
    ],
    output: "A final recorded conversation and a reviewed body of work.",
  },
];

/** The ten core skills the batch develops. */
export interface CoreSkill {
  title: string;
  description: string;
}

export const coreSkills: CoreSkill[] = [
  { title: "Clear speech", description: "Being understood the first time you say something." },
  { title: "Structured thinking", description: "Turning a messy idea into a clear shape before you speak." },
  { title: "Active listening", description: "Taking in what the other person actually said." },
  { title: "Asking good questions", description: "Questions that open a conversation instead of closing it." },
  { title: "Confident delivery", description: "Steady pace, voice and presence under pressure." },
  { title: "Presentation skills", description: "Holding attention while you make a point." },
  { title: "Handling objections", description: "Responding to pushback without folding." },
  { title: "Persuasion", description: "Making a case people are willing to act on." },
  { title: "Professional writing", description: "Emails and follow-ups that get replies." },
  { title: "Interview communication", description: " Showing your ability clearly when it counts." },
];

/** The training loop — the same cycle run every week. */
export interface ExperienceStep {
  title: string;
  description: string;
}

export const experienceLoop: ExperienceStep[] = [
  { title: "Learn", description: "A focused skill or idea, explained plainly." },
  { title: "Practise", description: "You use it in a real scenario, out loud." },
  { title: "Assess", description: "What worked and what did not is made specific." },
  { title: "Receive feedback", description: "Direct, usable notes — not a vague score." },
  { title: "Practise again", description: "You run it once more, better." },
];

/** Why GrowthYari — six honest reasons. */
export const whyPoints: string[] = [
  "Practice-first, not lecture-first: you speak and do, not just watch.",
  "Built on real scenarios from interviews, classrooms and first jobs.",
  "Feedback every step, so you know exactly what to fix.",
  "Made for Indian college students, graduates and freshers.",
  "One focused outcome: better conversations in the situations that matter.",
  "You leave with evidence of your skills, not only a certificate.",
];

export const whoShouldJoin: string[] = [
  "College students preparing for interviews and internships.",
  "Recent graduates entering the job market.",
  "Freshers who can do the work but struggle to explain it.",
  "Anyone who freezes, rambles or loses confidence when it counts.",
];

export const whoShouldNot: string[] = [
  "People who want a recorded course to watch passively.",
  "Anyone looking for a guaranteed job placement.",
  "People who are not willing to practise — out loud, every week.",
];

/** The three-slide interactive showcase on the homepage. */
export interface ShowcaseSlide {
  id: string;
  kicker: string;
  title: string;
  body: string;
  /** Short supporting lines shown beside the illustration. */
  points: string[];
}

export const showcaseSlides: ShowcaseSlide[] = [
  {
    id: "problem",
    kicker: "The problem",
    title: "Knowing the answer is not the same as communicating it.",
    body: "Most people have the ability. What holds them back is the moment they have to speak — the interview, the presentation, the first call. That gap is a skill, and skills are trained, not waited out.",
    points: [
      "You know the material but freeze when asked.",
      "Your answer is right but lands poorly.",
      "You avoid speaking up because it feels risky.",
    ],
  },
  {
    id: "practice",
    kicker: "The practice",
    title: "Learn it. Practise it. Get feedback. Improve it.",
    body: "Every week runs the same loop. You are taught one thing, you use it in a real scenario, you get direct feedback on it, and you run it again. The same five things are watched every time.",
    points: ["Clarity", "Structure", "Listening", "Relevance", "Delivery"],
  },
  {
    id: "progress",
    kicker: "The progress",
    title: "Turn practice into evidence of your skills.",
    body: "By the end, the questions that were hard in week one are routine. You leave with recordings, documents and outcomes that show what you can actually do.",
    points: [
      "Recordings you can review and share.",
      "A set of written work a recruiter can read.",
      "A clear before-and-after against your week-1 baseline.",
    ],
  },
];
