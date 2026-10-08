import { Repeat } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LoopDiagram } from "@/components/ui/visuals/LoopDiagram";
import {
  frameworkEyebrow,
  frameworkIntro,
  frameworkSteps,
  frameworkTitle,
} from "@/data/framework";

/**
 * A full-width band that answers the section above it. FrictionLoop shows the
 * broken cycle a student is stuck in; this shows the same ring closed, with the
 * feedback step in place. Keeping the two forms adjacent makes the argument
 * visually rather than in prose.
 */
export function LoopSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-canvas" id="loop">
      <div aria-hidden="true" className="tech-grid-fine tech-mask absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow top-[-10rem] right-[-8rem] size-[28rem] bg-neon/8"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={frameworkEyebrow}
              title={frameworkTitle}
              intro={frameworkIntro}
            />

            <ol className="mt-10 divide-y divide-line border-y border-line">
              {frameworkSteps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={index * 60}
                  className="group flex items-baseline gap-4 py-3.5"
                >
                  <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-lime-text">
                    {step.number}
                  </span>
                  <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </span>
                  <span className="ml-auto hidden text-[13px] text-muted sm:block">
                    {step.blurb}
                  </span>
                  {step.closesLoop ? (
                    <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-lime-text uppercase">
                      <Repeat className="size-3" aria-hidden="true" />
                      back to learning
                    </span>
                  ) : null}
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <LoopDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}