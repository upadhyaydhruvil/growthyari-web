import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gapClose, gapEyebrow, gapIntro, gapPairs, gapTitle } from "@/data/gap";

/**
 * Section D — "Knowing something and demonstrating it are two different skills."
 *
 * A paired comparison: the same goal, reached privately on the left and
 * out loud on the right. The pairing is the argument — set side by side,
 * the difference between preparing and performing is obvious without
 * having to say the words "traditional education is bad", which would be
 * both untrue and needlessly hostile.
 *
 * Pure CSS hover on each pair, so the emphasis responds to the pointer
 * without turning into a control the visitor has to operate.
 */
export function GapSection() {
  return (
    <section aria-labelledby="gap-heading" className="section-pad relative border-b border-line bg-canvas">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={gapEyebrow}
          title={<span id="gap-heading">{gapTitle}</span>}
          intro={gapIntro}
          className="max-w-3xl"
        />

        {/* Column headings only make sense once there is room for them. */}
        <div className="mt-14 hidden grid-cols-[1fr_auto_1fr] items-end gap-6 lg:grid">
          <p className="label-xs text-muted">Preparation — private, unwatched</p>
          <span aria-hidden="true" />
          <p className="label-xs text-accent-hover">Practice — out loud, corrected</p>
        </div>

        <ul className="mt-4 space-y-4 lg:mt-6">
          {gapPairs.map((pair, index) => (
            <Reveal as="li" key={pair.passive} delay={index * 90}>
              <div className="group grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
                <div className="rounded-lg border border-line bg-surface-3 p-5 transition-colors duration-300 group-hover:border-line-strong">
                  <p className="text-[15px] leading-[1.6] text-body">{pair.passive}</p>
                </div>

                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center self-center justify-self-center rounded-full border border-accent/35 bg-card text-accent transition-transform duration-300 group-hover:scale-110 lg:size-9"
                >
                  <ArrowRight className="size-4" strokeWidth={2.25} />
                </span>

                <div className="rounded-lg border border-accent/30 bg-card p-5 shadow-soft transition-[border-color,box-shadow] duration-300 group-hover:border-accent group-hover:shadow-lime">
                  <p className="text-[15.5px] leading-[1.6] font-medium text-ink">{pair.active}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <p className="mt-12 max-w-3xl font-display text-[19px] leading-[1.6] text-ink-2 sm:text-[21px]">
            {gapClose}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
