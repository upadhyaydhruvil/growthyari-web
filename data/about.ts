/**
 * About page content, assembled from what growthyari.com actually
 * publishes.
 *
 * The current site does not publish: founders, a founding date, team
 * members, an office, awards, funding, learner counts or a company
 * registration. None of that has been invented here. `unknownFacts` below
 * is surfaced to the reader as an honest "not published yet" note rather
 * than being quietly dropped or filled with placeholders.
 */

export const aboutEyebrow = "About";
export const aboutTitle = "A professional growth accelerator, not another course catalogue.";
export const aboutIntro =
  "GrowthYari helps students, professionals, entrepreneurs and business owners master sales, communication and business execution through live coaching, practical learning, proof-of-work and personalized feedback.";

/** What GrowthYari is arguing exists as a problem. */
export const aboutThesisTitle = "Why GrowthYari exists";
export const aboutThesis =
  "People graduate with degrees and certificates but struggle in the real world because they lack communication, confidence, execution and proof that they can actually perform. Recruiters and clients hire evidence — recordings, portfolios and outcomes, not just certificates. GrowthYari exists to close that gap.";

/** Stated approach, in the platform's own words. */
export const aboutApproachTitle = "How we work";
export const aboutApproach =
  "A deliberate loop that turns learners into operators — from first concept to career and business growth. Learning, practice, feedback, execution, growth. The loop repeats until the skill is yours.";

/** The selection stance, which is unusually explicit on the current site. */
export const aboutSelection = {
  title: "We admit learners we can genuinely move",
  body: "Every applicant gets a 1:1 Career Assessment call. It is not a formality — if we do not think we can move you, we will say so at that point rather than eight weeks in.",
};

export const aboutValues = [
  {
    title: "Evidence over certificates",
    body: "A certificate is a claim. A portfolio is proof. We optimise for the second one.",
  },
  {
    title: "Small on purpose",
    body: "A maximum of five learners per cohort. It caps our growth and it is the point.",
  },
  {
    title: "Live, not recorded",
    body: "Sessions are live because feedback is the product. A recording cannot tell you why your opener fell flat.",
  },
  {
    title: "Honest selection",
    body: "We would rather say no at the assessment call than waste eight weeks of your time.",
  },
];

/** Rendered verbatim on the About page so the gap is visible, not hidden. */
export const unknownFacts = [
  "Founders and team members",
  "Company registration and founding date",
  "Office location",
  "Learner count, placement numbers and awards",
] as const;
