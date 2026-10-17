import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  transformationEyebrow,
  transformationIntro,
  transformationSteps,
  transformationTitle,
} from "@/data/transformation";
import { cn } from "@/lib/cn";

/*
 * Stair-step offsets. Each week sits lower than the last, so the five
 * steps read as a descent through the program rather than as five
 * equivalent cards. One array, so retuning the slope is a single edit.
 */
const offsets = ["lg:mt-0", "lg:mt-8", "lg:mt-16", "lg:mt-24", "lg:mt-32"];

/**
 * Section E — "Turn your potential into something people can see."
 *
 * The learning cycle, on the site's first deep-forest band. Placing it
 * here does two things: it gives the page a genuine contrast beat rather
 * than an unbroken run of ivory, and it puts the darkest ground directly
 * around the part of the argument that is about GrowthYari itself.
 *
 * It is a connected narrative, not five feature cards — the stair-step and
 * the "leaves behind" line under each step are what carry that.
 */
export function TransformationSection() {
  return (
    <section
      aria-labelledby="transformation-heading"
      className="on-forest section-pad relative overflow-hidden border-b border-line bg-forest"
    >
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow absolute top-[-8rem] left-[-6rem] size-[28rem] bg-accent/15"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={transformationEyebrow}
          title={<span id="transformation-heading">{transformationTitle}</span>}
          intro={transformationIntro}
          className="max-w-3xl"
        />

        <ol className="mt-16 grid gap-10 lg:mt-12 lg:grid-cols-5 lg:gap-6">
          {transformationSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 110}
              className={cn("relative", offsets[index])}
            >
              <div className="flex items-center gap-3">
                <span className="label-xs grid size-11 shrink-0 place-items-center rounded-full border border-accent/45 bg-forest-2 text-accent-hover">
                  {step.number}
                </span>
                {index < transformationSteps.length - 1 ? (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-line-strong lg:block" />
                ) : null}
              </div>

              <h3 className="mt-6 font-display text-[24px] leading-tight font-medium text-ink">
                {step.title}
              </h3>

              <p className="mt-3.5 text-[15px] leading-[1.7] text-body">{step.description}</p>

              <p className="mt-6 border-t border-line pt-4 text-[13.5px] leading-[1.6] text-muted">
                <span className="label-xs mb-1.5 block text-accent-hover">Leaves behind</span>
                {step.output}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
