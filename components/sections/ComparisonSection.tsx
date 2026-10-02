import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeedbackRing } from "@/components/ui/visuals/FeedbackRing";
import {
  comparisonColumns,
  comparisonEyebrow,
  comparisonTitle,
} from "@/data/comparison";

export function ComparisonSection() {
  return (
    <section className="section-pad bg-surface" id="why-growthyari">
      <div className="container-page">
        <SectionHeading
          eyebrow={comparisonEyebrow}
          title={comparisonTitle}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {comparisonColumns.map((column, index) => {
            const isTraditional = column.key === "traditional";

            return (
              <Reveal
                key={column.key}
                delay={index * 90}
                className={
                  isTraditional
                    ? "rounded-lg border border-line bg-surface p-7 sm:p-9"
                    : "relative overflow-hidden rounded-lg border border-line bg-panel p-7 sm:p-9"
                }
              >
                {isTraditional ? null : (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-neon/10 blur-3xl"
                  />
                )}

                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={
                      isTraditional
                        ? "text-[19px] font-semibold tracking-[-0.02em] text-muted"
                        : "text-[19px] font-semibold tracking-[-0.02em] text-ink"
                    }
                  >
                    {column.heading}
                  </h3>
                  <FeedbackRing closed={!isTraditional} />
                  <span
                    className={
                      column.badgeTone === "positive"
                        ? "rounded-full bg-neon/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink uppercase"
                        : "rounded-full border border-line-strong px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-muted uppercase"
                    }
                  >
                    {column.badge}
                  </span>
                </div>

                <ul className="mt-8 space-y-1">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className={
                        isTraditional
                          ? "flex items-center gap-3.5 rounded-sm border border-line bg-surface px-4 py-3.5"
                          : "flex items-center gap-3.5 rounded-sm border border-neon/20 bg-neon/5 px-4 py-3.5"
                      }
                    >
                      {isTraditional ? (
                        <X
                          className="size-4 shrink-0 text-muted"
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid size-4 shrink-0 place-items-center rounded-full bg-neon/20"
                        >
                          <Check className="size-2.5 text-ink" strokeWidth={3.5} />
                        </span>
                      )}
                      <span
                        className={
                          isTraditional
                            ? "text-[15px] text-muted line-through decoration-muted/60"
                            : "text-[15px] text-ink"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
