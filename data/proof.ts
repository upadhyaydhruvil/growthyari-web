/**
 * Section F — "Not just what you learned. What you can now demonstrate."
 *
 * The section is a short text-only band: a heading, an intro, a privacy
 * note and the closing distinction. There is no artefact grid — the copy
 * makes the point on its own.
 */

export const proofShowcaseEyebrow = "Proof of work";
export const proofShowcaseTitle = "Not just what you learned. What you can now demonstrate.";
export const proofShowcaseIntro =
  "Certificates describe. Recordings, documents and outcomes demonstrate. Each artefact below is something you build during the batch and keep afterwards.";

/**
 * The single image in this section. Native ratio is 3:2 (1536x1024) and
 * the component renders it at `aspect-[3/2]` so nothing is cropped.
 *
 * The alt text describes the picture rather than repeating the heading —
 * it is the only description of the image a screen-reader user gets.
 */
export const proofShowcaseImage = {
  src: "/images/proof-of-work.png",
  alt: "The GrowthYari journey: learn, practise, build and grow.",
  caption:
    "Illustrative. The shape of the work you build during the batch, not a real learner's artefacts.",
} as const;

/** The distinction the brief asks to make explicit. */
export const artefactNote = {
  title: "Completing an activity is not the same as demonstrating a skill.",
  body: "Anyone can tick a box. What makes an artefact useful is that someone who wasn't there can look at it and form a view of what you can do.",
} as const;
