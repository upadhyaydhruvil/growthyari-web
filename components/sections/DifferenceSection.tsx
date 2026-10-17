import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differenceClose, differenceColumns, differenceEyebrow, differenceIntro, differenceTitle } from "@/data/comparison";
import { cn } from "@/lib/cn";

/**
 * Section J — "Less passive learning. More deliberate practice."
 *
 * The honest differentiation. The left column is not attacked: it is
 * labelled "necessary, not sufficient", because that is true and because
 * a comparison that insults the visitor's existing effort reads as
 * defensive rather than confident.
 *
 * The two columns are the same height and the same weight; only the
 * terracotta rule and the closing line push the reader to the right.
 */
export function DifferenceSection() {
  return (
    <section aria-labelledby="difference-heading" className="section-pad relative border-b border-line bg-canvas">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={differenceEyebrow}
          title={<span id="difference-heading">{differenceTitle}</span>}
          intro={differenceIntro}
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {differenceColumns.map((column, index) => {
            const deliberate = column.key === "deliberate";
            return (
              <Reveal key={column.key} delay={index * 100}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-lg border p-7 sm:p-9",
                    deliberate
                      ? "rule-top border-accent/30 bg-card shadow-soft"
                      : "border-line bg-surface-3",
                  )}
                >
                  <span className={cn("label-xs", deliberate ? "text-accent-hover" : "text-muted")}>
                    {column.caption}
                  </span>
                  <h3
                    className={cn(
                      "mt-3 font-display text-[24px] leading-tight font-medium tracking-[-0.02em]",
                      deliberate ? "text-ink" : "text-ink-2",
                    )}
                  >
                    {column.heading}
                  </h3>

                  <ul className="mt-6 space-y-3.5">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-2 size-1.5 shrink-0 rounded-full",
                            deliberate ? "bg-accent" : "bg-line-strong",
                          )}
                        />
                        <span
                          className={cn(
                            "text-[15px] leading-[1.6]",
                            deliberate ? "text-ink-2" : "text-muted",
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 max-w-3xl border-l-2 border-accent pl-6">
            <h3 className="font-display text-[20px] leading-snug font-medium text-ink sm:text-[22px]">
              {differenceClose.title}
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.7] text-body">{differenceClose.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
