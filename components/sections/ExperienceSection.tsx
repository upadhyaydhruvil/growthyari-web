import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceLoop } from "@/data/pilot";

/**
 * "Experience the training" — the five-step loop run every week. Laid out as a
 * horizontal path on desktop and a vertical list on mobile.
 */
export function ExperienceSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface" id="experience">
      <div aria-hidden="true" className="tech-grid-fine tech-mask absolute inset-0 opacity-50" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Experience the training"
          title="Every week runs the same loop."
          intro="You are never just shown something and sent away. You use it, get told exactly what to fix, and do it again."
        />

        <ol className="mt-12 grid gap-6 lg:grid-cols-5">
          {experienceLoop.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 70}
              className="relative rounded-lg border border-line bg-surface p-6"
            >
              <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text">
                STEP {index + 1}
              </span>
              <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-body">
                {step.description}
              </p>
              {index < experienceLoop.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-3 hidden size-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas text-muted lg:grid"
                >
                  →
                </span>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
