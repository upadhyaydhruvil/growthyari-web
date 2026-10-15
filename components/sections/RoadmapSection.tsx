import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { curriculumWeeks } from "@/data/pilot";

/**
 * The 12-week roadmap. A condensed view of the curriculum — the full weekly
 * detail lives on the program page. This is the PROPOSED structure for the
 * pilot; the program page carries the "pending confirmation" note.
 */
export function RoadmapSection() {
  return (
    <section className="section-pad bg-canvas" id="roadmap">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The roadmap"
            title="Twelve weeks, one skill at a time."
            intro="A proposed week-by-week path from fundamentals to a full capstone conversation."
            className="max-w-xl"
          />
          <ButtonLink
            href="/programs"
            variant="outline"
            className="shrink-0 self-start sm:self-auto"
          >
            Full curriculum
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ol className="mt-11 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {curriculumWeeks.map((week, index) => (
            <Reveal
              as="li"
              key={week.week}
              delay={(index % 6) * 40}
              className="flex items-baseline gap-4 border-t border-line py-4"
            >
              <span className="w-14 shrink-0 font-mono text-[12px] font-medium tracking-[0.14em] text-lime-text">
                WK {String(week.week).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-6 font-medium text-ink">
                {week.title}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
