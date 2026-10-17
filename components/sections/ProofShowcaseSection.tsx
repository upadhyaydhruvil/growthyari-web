import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  artefactNote,
  proofShowcaseEyebrow,
  proofShowcaseIntro,
  proofShowcaseTitle,
} from "@/data/proof";

/**
 * Section F — "Not just what you learned. What you can now demonstrate."
 *
 * A short text-only band. The heading carries the distinction between
 * completing an activity and demonstrating a skill; the note beside it
 * makes explicit that nothing on the page is a real learner's work.
 *
 * The artefact card grid that used to sit below this was removed — the
 * section now makes its point in two paragraphs rather than nine cards.
 */
export function ProofShowcaseSection() {
  return (
    <section aria-labelledby="proof-showcase-heading" className="section-pad relative border-b border-line bg-canvas">
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={proofShowcaseEyebrow}
            title={<span id="proof-showcase-heading">{proofShowcaseTitle}</span>}
            intro={proofShowcaseIntro}
            className="lg:col-span-8"
          />
          <Reveal className="lg:col-span-4">
            <p className="rounded-lg border border-line bg-surface-3 p-5 text-[13.5px] leading-[1.65] text-body">
              <span className="label-xs mb-2 block text-accent-hover">Please note</span>
              GrowthYari does not publish learner recordings, decks or documents. Nothing shown or
              described on this site is a real person&apos;s work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={90}>
          <div className="mt-12 rounded-lg border border-accent/30 bg-surface-3 p-7 sm:p-9">
            <h3 className="font-display text-[22px] leading-snug font-medium text-ink sm:text-[26px]">
              {artefactNote.title}
            </h3>
            <p className="mt-4 max-w-3xl text-[15.5px] leading-[1.75] text-body">{artefactNote.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
