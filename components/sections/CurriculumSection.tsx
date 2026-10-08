import { FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  artefacts,
  curriculumEyebrow,
  curriculumIntro,
  curriculumTitle,
  weeks,
} from "@/data/curriculum";
import { cn } from "@/lib/cn";

/**
 * Week-by-week outline of the eight weeks and where each of the nine
 * artefacts is produced.
 *
 * The site listed the nine portfolio items on every program page without ever
 * saying when they were built, and the curriculum section said only that
 * "week-by-week module titles are not published". A buyer paying ₹23,599
 * should be able to see the shape of the eight weeks before applying.
 *
 * `artefacts` is read from `data/programs.ts`, so this section cannot list a
 * different set of portfolio items from the pricing cards.
 */
const STAGE_TONE: Record<string, string> = {
  Learning: "border-line text-muted",
  Practice: "border-neon/30 text-neon-text",
  Feedback: "border-neon/30 text-neon-text",
  Execution: "border-lime/30 text-lime-text",
  Growth: "border-lime/30 text-lime-text",
};

export function CurriculumSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-canvas" id="curriculum">
      <div aria-hidden="true" className="tech-grid-fine tech-mask absolute inset-0 opacity-60" />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={curriculumEyebrow}
            title={curriculumTitle}
            intro={curriculumIntro}
            className="max-w-xl"
          />
          <div className="shrink-0 rounded-lg border border-line bg-surface px-5 py-4">
            <p className="font-display text-[30px] leading-none font-semibold tracking-[-0.04em] text-ink">
              {weeks.length}
              <span className="ml-1 text-[15px] font-medium text-muted">weeks</span>
            </p>
            <p className="mt-2 font-display text-[30px] leading-none font-semibold tracking-[-0.04em] text-neon-text">
              {artefacts.length}
              <span className="ml-1 text-[15px] font-medium text-muted">artefacts</span>
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {weeks.map((week, index) => (
            <Reveal
              as="li"
              key={week.week}
              delay={(index % 2) * 60}
              className="flex flex-col bg-surface p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted">
                  WEEK {String(week.week).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-[0.04em]",
                    STAGE_TONE[week.stage] ?? "border-line text-muted",
                  )}
                >
                  {week.stage}
                </span>
              </div>

              <h3 className="mt-3 text-[17.5px] leading-snug font-semibold tracking-[-0.02em] text-ink">
                {week.title}
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-6 text-body">{week.focus}</p>

              {week.artefacts.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {week.artefacts.map((artefact) => (
                    <li
                      key={artefact}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-neon/25 bg-neon/8 px-2.5 py-1 text-[12px] font-medium text-ink"
                    >
                      <FileCheck2 className="size-3 text-neon-text" aria-hidden="true" />
                      {artefact}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 border-t border-line pt-4 text-[12.5px] text-muted">
                  No new artefact — the nine are assembled into one portfolio.
                </p>
              )}
            </Reveal>
          ))}
        </ol>

        <p className="mt-6 text-[13px] text-muted">
          The same nine artefacts in both tracks. What changes is how much of the
          work is reviewed one-to-one rather than in a group of five.
        </p>
      </div>
    </section>
  );
}
