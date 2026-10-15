import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { curriculumWeeks } from "@/data/pilot";

/**
 * The 12-week roadmap, as a vertical timeline: a sticky heading rail on the
 * left, the weeks running down a connected line on the right. The full weekly
 * detail lives on the program page. This is the PROPOSED structure for the
 * pilot; the program page carries the "pending confirmation" note.
 */
export function RoadmapSection() {
  return (
    <section className="section-pad bg-canvas" id="roadmap">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="The roadmap"
                title="Twelve weeks, one skill at a time."
                intro="A proposed week-by-week path from fundamentals to a full capstone conversation."
              />
              <ButtonLink href="/programs" variant="outline" className="mt-7">
                Full curriculum
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol>
              {curriculumWeeks.map((week, index) => (
                <Reveal
                  as="li"
                  key={week.week}
                  delay={(index % 6) * 40}
                  className="group relative flex items-baseline gap-5 border-l border-line pb-7 pl-7 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-1 -left-[7px] grid size-3.5 place-items-center rounded-full border border-line-strong bg-canvas"
                  >
                    <span className="size-1.5 rounded-full bg-neon transition-transform duration-300 group-hover:scale-150" />
                  </span>
                  <span className="w-16 shrink-0 font-mono text-[12px] font-medium tracking-[0.14em] text-lime-text">
                    WK {String(week.week).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px] leading-6 font-medium text-ink transition-colors duration-300 group-hover:text-neon-text">
                    {week.title}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
