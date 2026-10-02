import { Repeat } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  frameworkEyebrow,
  frameworkIntro,
  frameworkSteps,
  frameworkTitle,
} from "@/data/framework";

/** The tinted editorial band — the one place the page leans on colour. */
export function FrameworkSection() {
  return (
    <section className="relative overflow-hidden bg-panel section-pad" id="framework">
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-70 tech-mask" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow top-[-10rem] left-[-6rem] size-[30rem] bg-lime/10"
      />
      <div
        aria-hidden="true"
        className="animate-sweep absolute inset-0"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={frameworkEyebrow}
            title={frameworkTitle}
            intro={frameworkIntro}
            className="max-w-2xl"
          />
          <p className="flex shrink-0 items-center gap-2 rounded-full border border-neon/25 px-4 py-2 text-[13px] text-muted">
            <Repeat className="size-3.5 text-lime-text" aria-hidden="true" />
            The loop repeats
          </p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {frameworkSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 80}
              className="group relative border-t border-neon/25 pt-7"
            >
              <span className="font-display text-[44px] leading-none font-semibold tracking-[-0.05em] text-ink/30 transition-colors duration-300 group-hover:text-lime-text">
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-muted">{step.blurb}</p>

              {step.closesLoop ? (
                <p className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-lime-text uppercase">
                  <Repeat className="size-3" aria-hidden="true" />
                  back to learning
                </p>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
