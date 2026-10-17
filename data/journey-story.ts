import type { LucideIcon } from "lucide-react";
import { BookOpen, FileText, FolderOpen, Hammer, MessagesSquare, Mic, Presentation, Wrench } from "lucide-react";
import { primaryCta, secondaryCta } from "@/data/site";

/**
 * Section A — the hero, rebuilt as a student transformation story.
 *
 * The old hero stated a claim ("You're capable of more than your CV can
 * show") and asked the visitor to accept it. This one opens on a journey
 * the visitor recognises from their own life, then shows the four things
 * that journey produces pinned onto the image itself.
 *
 * The reference is akadmex.com's proof-first storytelling — same idea,
 * not a copy. The argument is GrowthYari's own.
 *
 * HOUSE RULES still apply here and matter more than usual, because this
 * is the first thing a visitor reads:
 *
 *  — The student is illustrative. No name, no college, no photograph of a
 *    real participant is claimed. The story is labelled as a journey, and
 *    the image carries a visible "Illustrative" badge.
 *  — Nothing is guaranteed. "No placement guarantee" sits in the hero
 *    microcopy rather than being buried in the FAQ.
 *  — The annotation pins are positioned by percentage because the photo
 *    was supplied without a way to inspect it. They live in this file so
 *    they can be nudged in one edit once someone has looked at the real
 *    image.
 */

export const journeyEyebrow = "The GrowthYari Journey";

/**
 * The headline is four lines by design — the repetition is the rhythm
 * ("Same classes. / Same notes. / Same certificates.") and it only works
 * if each line lands on its own. So it is an array of lines rather than
 * one string: the renderer can't silently rewrap them into a paragraph.
 *
 * The final line is split so only "a different future." takes the italic
 * forest treatment and the thin orange underline.
 */
export const journeyHeadlineLines = ["Same classes.", "Same notes.", "Same certificates."] as const;

export const journeyHeadlineLast = {
  lead: "But",
  emphasis: "a different future.",
} as const;

/**
 * One continuous description, broken at the clauses so the italic quote
 * can be set as its own line inside the paragraph flow.
 */
export const journeyStory = {
  setup:
    "Meet a student who did everything they were told to do. Attended every lecture. Submitted every assignment. Collected the certificate.",
  turn: "And still froze in the interview.",
  quote: "I knew the answer. I just couldn't say it out loud.",
  change: "That is where the journey changed.",
} as const;

export const journeyPrimaryCta = {
  ...primaryCta,
  label: "Explore Your Next Step",
} as const;

export const journeySecondaryCta = {
  ...secondaryCta,
  label: "Discover How It Works",
} as const;

/**
 * Hero microcopy. The fourth item is a disclaimer, deliberately, rather
 * than another promise — a hero that only lists upside is a hero nobody
 * with a working bullshit detector believes.
 */
export const journeyMicrocopy = [
  "Live coaching",
  "Weekly practice",
  "Personal feedback",
  "No placement guarantee",
] as const;

/** The hero background image. `src` is relative to `public/`. */
export const journeyImage = {
  src: "/images/hero-background.png",
  /**
   * TODO(dhruv): authored without being able to see the artwork.
   * Confirm it matches what is actually in frame, then correct.
   */
  alt: "",
} as const;
/**
 * The button that sits on the artwork itself, in the bottom-left corner.
 *
 * Separate from `journeyPrimaryCta` on purpose: that one drives the
 * conversion, this one is a secondary prompt for people who decide while
 * looking at the picture rather than reading the copy. It points at the
 * same destination so there is one funnel, not two.
 *
 * It is a card rather than a bare button because it has to stay legible
 * over a photograph whose brightness I cannot inspect — the surface and
 * hairline guarantee contrast no matter what is underneath.
 */
export const journeyImageCta = {
  label: "Start Your Journey",
  href: "/register",
  /** Small line above the label. */
  kicker: "12-week pilot batch",
} as const;

/**
 * The four outcomes, pinned onto the image.
 *
 * `x` / `y` are percentages of the frame — the chip's top-left corner.
 * `point` is where the connector line ends, as a percentage of the frame.
 * They are data rather than Tailwind classes so a single edit re-aims
 * every pin once the photograph has actually been looked at.
 */
export interface JourneyOutcome {
  icon: LucideIcon;
  label: string;
  /** One line shown under the label in the mobile fallback list. */
  detail: string;
  x: number;
  y: number;
  pointX: number;
  pointY: number;
}

export const journeyOutcomes: JourneyOutcome[] = [
  {
    icon: MessagesSquare,
    label: "Better Communication",
    detail: "Say what you know, out loud, under pressure.",
    x: 56,
    y: 10,
    pointX: 46,
    pointY: 22,
  },
  {
    icon: FolderOpen,
    label: "Real Projects",
    detail: "Briefs with constraints, deadlines and an audience.",
    x: 58,
    y: 32,
    pointX: 47,
    pointY: 44,
  },
  {
    icon: Wrench,
    label: "Practical Skills",
    detail: "Rehearsed until they hold up without a script.",
    x: 56,
    y: 54,
    pointX: 46,
    pointY: 66,
  },
  {
    icon: FileText,
    label: "Work You Can Show",
    detail: "Recordings, writing and decks a stranger can judge.",
    x: 53,
    y: 76,
    pointX: 43,
    pointY: 87,
  },
];

/**
 * The learning journey strip along the bottom of the visual.
 *
 * Icons are thin line icons rather than filled ones — they have to sit
 * over a photograph at 16px and stay legible, and a filled glyph at that
 * size turns into a blob. The final stage carries the burnt-orange accent
 * because it is the one the whole argument points at.
 */
export interface JourneyStage {
  title: string;
  icon: LucideIcon;
}

export const journeyProgression: JourneyStage[] = [
  { title: "Learn", icon: BookOpen },
  { title: "Practice", icon: Mic },
  { title: "Build", icon: Hammer },
  { title: "Demonstrate", icon: Presentation },
];

/* ------------------------------------------------------------------ *
 * The continuation section — what the four outcomes actually mean.
 * ------------------------------------------------------------------ */

export const proofEyebrow = "Proof, not promises";
export const proofTitle = "The difference isn't another certificate. It's what you can prove.";
export const proofIntro =
  "Four stages, each one ending in something a stranger could evaluate. Not a completion badge — a piece of work.";

export interface ProofStage {
  number: string;
  title: string;
  description: string;
  /** The human outcome, set in the display face under a hairline. */
  bloom: string;
}

export const proofStages: ProofStage[] = [
  {
    number: "01",
    title: "Learn",
    description:
      "Start from what you already know — your subject, your degree, your experience. We don't restart you from zero.",
    bloom: "You stop feeling behind.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Speak, write, pitch and explain — out loud, every week, with people who notice what you actually do.",
    bloom: "You stop freezing.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Take on briefs with real constraints: a deadline, an audience, a limit. Produce work with edges, not filler.",
    bloom: "You stop guessing.",
  },
  {
    number: "04",
    title: "Demonstrate",
    description:
      "Leave with recordings, writing and decks — evidence someone else can evaluate, not just a certificate that says you attended.",
    bloom: "You can finally show it.",
  },
];

/**
 * The closing line, split at the turn so the second clause can take the
 * terracotta emphasis while the whole sentence still reads as one.
 */
export const proofClosing = {
  lead: "Your education gives you knowledge.",
  turn: "What you do with that knowledge",
  emphasis: "makes it visible.",
} as const;

export const proofCta = {
  ...primaryCta,
  label: "Start Building Your Proof",
} as const;

/**
 * The honest footnote. Required, not optional: the story above is a
 * constructed journey, and presenting it as a documented case study
 * would be a lie the rest of the site then has to live up to.
 */
export const proofIllustrativeNote =
  "The story above is an illustrative journey, not a documented case study of a named student.";
