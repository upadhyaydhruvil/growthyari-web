import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  proofClosing,
  proofCta,
  proofEyebrow,
  proofIllustrativeNote,
  proofIntro,
  proofStages,
  proofTitle,
} from "@/data/journey-story";

/**
 * The section that follows the hero — "The difference isn't another
 * certificate. It's what you can prove."
 *
 * The hero opens a story; this is where the story is cashed in. Four
 * stages, each ending in the human outcome rather than in a feature,
 * because the argument being made is emotional before it is structural:
 * the visitor is not buying twelve weeks, they are buying the moment they
 * can finally show what they know.
 *
 * Sits on white rather than ivory or sand so the page keeps its rhythm —
 * the hero is canvas, the next section (Recognition) is sand, and this one
 * has to sit between them without either neighbour going flat.
 *
 * The closing band is the only forest block in the top third of the page.
 * One primary button, no secondary: at this point in the narrative there
 * is exactly one next step worth offering.
 */
export function ProofJourneySection() {
  return (
    <section aria-labelledby="proof-journey-heading" className="section-pad relative border-b border-line bg-surface-2">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={proofEyebrow}
          title={<span id="proof-journey-heading">{proofTitle}</span>}
          intro={proofIntro}
          className="max-w-3xl"
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {proofStages.map((stage, index) => (
            <Reveal as="li" key={stage.title} delay={index * 90}>
              <div className="flex h-full flex-col bg-card p-7">
                <p className="label-xs text-neon-text">{stage.number}</p>
                <h3 className="mt-4 font-display text-[24px] leading-[1.1] font-medium tracking-[-0.015em] text-ink">
                  {stage.title}
                </h3>
                <p className="mt-3.5 flex-1 text-[15px] leading-[1.7] text-body">
                  {stage.description}
                </p>
                <p className="mt-6 border-t border-line pt-4 font-display text-[16px] leading-[1.5] text-forest italic">
                  {stage.bloom}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="on-forest mt-14 flex flex-col items-start justify-between gap-8 rounded-xl bg-forest px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:gap-12">
            <p className="max-w-2xl font-display text-[24px] leading-[1.35] font-normal text-ink sm:text-[28px] lg:text-[30px]">
              {proofClosing.lead} {proofClosing.turn}{" "}
              <em className="text-accent-hover italic">{proofClosing.emphasis}</em>
            </p>            <div className="shrink-0">
              <ButtonLink href={proofCta.href} variant="accent" size="lg">
                {proofCta.label}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-[13px] text-muted italic">{proofIllustrativeNote}</p>
      </div>
    </section>
  );
}
