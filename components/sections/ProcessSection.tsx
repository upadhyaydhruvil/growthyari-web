import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

/**
 * A two-column numbered rail rather than a seven-card grid. Seven equal
 * cards would shrink to unreadable widths on a laptop, and this reads
 * faster top-to-bottom anyway.
 */
export function ProcessSection() {
  return (
    <section className="section-pad bg-surface" id="how-it-works">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from application to opportunity."
        />

        <ol className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={(index % 2) * 70}
              className="group relative flex gap-5 border-t border-line py-7"
            >
              <div className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink-2 transition-colors duration-300 group-hover:border-neon/25 group-hover:bg-neon/10 group-hover:text-neon-text"
                >
                  <step.icon className="size-4" strokeWidth={1.9} />
                </span>
              </div>

              <div className="pt-1">
                <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted">
                  {step.number}
                </p>
                <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-sm text-[14.5px] leading-6 text-body">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}