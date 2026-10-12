import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { typicalVsGrowthyari } from "@/content/programs-content";

/**
 * Section 5.5 — the module comparison. Never rendered as a fixed-width
 * `<table>`: on desktop it is a three-column grid, and on phones each row
 * becomes its own card so the page cannot scroll sideways at 360px.
 */
export function ComparisonTable() {
  const { rows, columns } = typicalVsGrowthyari;

  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow={typicalVsGrowthyari.eyebrow}
          title={typicalVsGrowthyari.title}
          intro={typicalVsGrowthyari.lead}
        />

        {/* Desktop: three-column table. Mobile below. */}
        <div className="mt-10 hidden overflow-hidden rounded-lg border border-line lg:block">
          <div role="table" aria-label="Typical program versus GrowthYari">
            <div role="row" className="grid grid-cols-3 bg-surface-2">
              <div role="columnheader" className="px-6 py-4 text-left">
                <span className="label-xs text-muted">{rows[0].module}</span>
              </div>
              <div role="columnheader" className="border-l border-line px-6 py-4 text-left">
                <span className="label-xs text-muted">{columns[0]}</span>
              </div>
              <div role="columnheader" className="border-l border-line px-6 py-4 text-left">
                <span className="label-xs text-neon-text">{columns[1]}</span>
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={row.module}
                role="row"
                className={`grid grid-cols-3 ${index > 0 ? "border-t border-line" : ""}`}
              >
                <div role="cell" className="flex items-center px-6 py-5">
                  <span className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                    {row.module}
                  </span>
                </div>
                <div role="cell" className="flex items-start gap-3 border-l border-line px-6 py-5">
                  <X className="mt-1 size-4 shrink-0 text-muted" aria-hidden="true" />
                  <span className="text-[14px] leading-6 text-muted">{row.typical}</span>
                </div>
                <div role="cell" className="flex items-start gap-3 border-l border-line px-6 py-5">
                  <Check className="mt-1 size-4 shrink-0 text-neon-text" aria-hidden="true" />
                  <span className="text-[14px] leading-6 text-ink-2">{row.growthyari}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: one card per row */}
        <ol className="mt-10 space-y-3 lg:hidden">
          {rows.map((row) => (
            <li
              key={row.module}
              className="overflow-hidden rounded-lg border border-line bg-surface"
            >
              <div className="bg-surface-2 px-5 py-3">
                <p className="label-xs text-muted">{row.module}</p>
              </div>
              <ul className="divide-y divide-line">
                <li className="flex items-start gap-3 px-5 py-4">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-muted/15">
                    <X className="size-2.5 text-muted" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-muted">{columns[0]}</p>
                    <p className="mt-1 text-[14px] leading-6 text-muted">{row.typical}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 px-5 py-4">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-neon/15">
                    <Check className="size-2.5 text-neon-text" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-neon-text">{columns[1]}</p>
                    <p className="mt-1 text-[14px] leading-6 text-ink-2">{row.growthyari}</p>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}