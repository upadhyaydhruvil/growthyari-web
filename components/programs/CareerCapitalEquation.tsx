import { SectionHeading } from "@/components/ui/SectionHeading";
import { visibleStats } from "@/content/program-config";
import { careerCapital } from "@/content/programs-content";

/**
 * Section 5.3 — the career-capital equation, followed by the only confirmed
 * market stat (footnoted). Unconfirmed stats never render; they are kept in
 * `program-config.ts` behind `confirmed: false`.
 */
export function CareerCapitalEquation() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="tech-grid-fine absolute inset-0 opacity-50 tech-mask" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={careerCapital.eyebrow}
          title={careerCapital.title}
          intro={careerCapital.lead}
        />

        <div
          aria-label={careerCapital.equation.right}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          <div className="neon-edge relative w-full rounded-lg border border-line bg-panel px-6 py-5 text-center sm:w-auto">
            <span className="font-display text-[22px] font-semibold tracking-[-0.02em] whitespace-nowrap text-ink sm:text-[26px]">
              {careerCapital.equation.left}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="font-display text-[28px] font-semibold text-neon-text"
          >
            {careerCapital.equation.operator}
          </span>
          <div className="neon-edge relative w-full rounded-lg border border-neon/30 bg-neon/8 px-6 py-5 text-center sm:w-auto">
            <span className="font-display text-[22px] font-semibold tracking-[-0.02em] whitespace-nowrap text-neon-text sm:text-[26px]">
              {careerCapital.equation.right}
            </span>
          </div>
        </div>

        {/* The single confirmed market stat, with its source footnote. */}
        {visibleStats.length > 0 ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex flex-col gap-2 rounded-lg border border-line bg-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div>
                <p className="font-display text-[40px] leading-none font-semibold tracking-[-0.04em] text-lime-text">
                  {visibleStats[0].value}
                  <sup aria-hidden="true" className="ml-0.5 text-[18px]">*</sup>
                </p>
                <p className="mt-3 text-[14.5px] leading-6 text-body">
                  {visibleStats[0].label}
                </p>
              </div>
            </div>
            <p className="mt-3 text-[12.5px] leading-5 text-muted">
              <sup aria-hidden="true">*</sup> Source: {visibleStats[0].source}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}