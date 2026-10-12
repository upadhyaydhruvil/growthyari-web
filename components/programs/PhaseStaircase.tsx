import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { frameworkPhases } from "@/content/programs-content";
import { cn } from "@/lib/cn";

const lifts = ["sm:mt-0", "sm:mt-8", "sm:mt-16", "sm:mt-24"];

/**
 * Section 5.4 — the Think · Connect · Master · Prove staircase. On desktop the
 * four steps climb in height like a staircase; on mobile they stack with a
 * vertical connector, so nothing horizontal at 360px.
 */
export function PhaseStaircase() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Think · Connect · Master · Prove"
          title="Four phases. One direction: proof."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {frameworkPhases.map((phase, index) => (
            <Reveal key={phase.step} delay={index * 80} className="h-full">
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-lg border border-line bg-surface p-6",
                  "transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong",
                  lifts[index % lifts.length],
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 font-mono text-[64px] leading-none font-semibold text-neon/10"
                >
                  {phase.step}
                </span>

                <span className="grid size-11 place-items-center rounded-sm border border-line bg-surface-2 text-neon-text">
                  <phase.icon className="size-5" strokeWidth={1.8} />
                </span>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  {phase.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-6 text-body">{phase.body}</p>

                <p className="mt-5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Phase {phase.step}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}