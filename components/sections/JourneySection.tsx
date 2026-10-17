import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processEyebrow, processIntro, processNote, processSteps, processTitle } from "@/data/process";

/**
 * Section K — "What actually happens after you apply."
 *
 * Eight steps, transparent, in order. The four pre-payment steps are
 * marked, because the brief asks for the sequence to be reassuring rather
 * than a funnel — a visitor should be able to see exactly where money
 * enters the picture without hunting for it.
 *
 * Layout is a numbered rail: a node per step on the left, the content on
 * the right, two columns once there is room.
 */
export function JourneySection() {
  return (
    <section aria-labelledby="journey-heading" className="section-pad relative border-b border-line bg-surface-3">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={processEyebrow}
          title={<span id="journey-heading">{processTitle}</span>}
          intro={processIntro}
          className="max-w-3xl"
        />

        <ol className="mt-14 grid gap-x-12 gap-y-2 lg:grid-cols-2">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.number} delay={(index % 2) * 80}>
                <div className="flex gap-5 border-b border-line py-6">
                  <span
                    aria-hidden="true"
                    className="relative grid size-11 shrink-0 place-items-center rounded-full border border-line bg-card text-primary"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="label-xs text-muted">{step.number}</span>
                      <h3 className="font-display text-[19px] leading-tight font-medium text-ink">
                        {step.title}
                      </h3>
                      {step.beforePayment ? (
                        <span className="label-xs rounded-full border border-primary/25 bg-primary/8 px-2 py-1 text-primary">
                          Before payment
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-2.5 text-[14.5px] leading-[1.7] text-body">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 rounded-lg border border-line bg-card p-7 sm:p-9">
            <h3 className="font-display text-[20px] leading-snug font-medium text-ink sm:text-[22px]">
              {processNote.title}
            </h3>
            <p className="mt-3 max-w-3xl text-[15.5px] leading-[1.75] text-body">{processNote.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
