import { ArtefactPlate, type PlateKind } from "@/components/ui/ArtefactPlate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  artefactNote,
  artefacts,
  proofShowcaseEyebrow,
  proofShowcaseIntro,
  proofShowcaseTitle,
  type Artefact,
} from "@/data/proof";

/**
 * Section F — "Not just what you learned. What you can now demonstrate."
 *
 * A portfolio showcase rather than a feature grid. Two things do the
 * editorial work: the first artefact is given double width so the section
 * has a clear entry point, and every plate carries its own "Illustrative"
 * label so a preview can never be mistaken for a real learner's work.
 *
 * Each artefact states both what it is and what it demonstrates, because
 * the brief asks for the distinction between completing an activity and
 * demonstrating a skill to be explicit rather than implied.
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
              The previews on this page show the <em>shape</em> of each artefact. GrowthYari does not
              publish learner recordings, decks or documents, so nothing shown here is a real
              person&apos;s work.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {artefacts.map((artefact, index) => (
            <Reveal
              as="li"
              key={artefact.name}
              delay={(index % 3) * 90}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : undefined}
            >
              <ArtefactCard artefact={artefact} featured={index === 0} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-14 rounded-lg border border-accent/30 bg-surface-3 p-7 sm:p-9">
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

/**
 * One artefact. The plate carries the visual weight; the copy underneath
 * separates "what it is" from "what it proves", which is the section's
 * whole argument.
 */
function ArtefactCard({ artefact, featured }: { artefact: Artefact; featured?: boolean }) {
  return (
    <article className="neon-card neon-card-hover neon-edge flex h-full flex-col p-5">
      <ArtefactPlate
        kind={artefact.kind as PlateKind}
        bare
        compact={!featured}
        className={featured ? "min-h-[180px]" : undefined}
      />
      <h3 className="mt-6 font-display text-[20px] leading-tight font-medium text-ink">
        {artefact.name}
      </h3>

      <p className="mt-3 text-[14.5px] leading-[1.7] text-body">{artefact.what}</p>

      <p className="mt-auto flex items-start gap-2.5 border-t border-line pt-4 text-[14px] leading-[1.6] text-ink-2">
        <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
        {artefact.shows}
      </p>
    </article>
  );
}
