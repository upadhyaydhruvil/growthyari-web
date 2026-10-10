import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

/**
 * A pricing card that behaves like a programme card, not a SaaS tier.
 * Leads with who it is for and what the cohort actually is, then price.
 */
export function PricingCard({
  program,
  className,
  compact = false,
}: {
  program: Program;
  className?: string;
  compact?: boolean;
}) {
  const featured = program.featured;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-lg p-7 sm:p-8",
        featured
          ? "border border-line-strong bg-panel text-ink shadow-pop lg:-my-4 lg:py-12"
          : "border border-line bg-surface",
        className,
      )}
    >
      {featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-20 size-64 rounded-full bg-neon/12 blur-3xl"
        />
      ) : null}

      <div className="flex items-center justify-between gap-3">
        <p
          className={cn(
            "text-[14px] font-semibold",
            featured ? "text-lime-text" : "text-ink-2",
          )}
        >
          {program.name}
        </p>
        {program.badge ? (
          <span className="rounded-full bg-neon/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink uppercase">
            {program.badge}
          </span>
        ) : null}
      </div>

      {!compact ? (
        <p
          className={cn(
            "mt-4 text-[14.5px] leading-7",
            featured ? "text-muted" : "text-body",
          )}
        >
          {program.summary}
        </p>
      ) : null}

      <div className="mt-7">
        <div className="flex items-end gap-2">
          <span
            className={cn(
              "font-display text-[42px] leading-none font-semibold tracking-[-0.04em]",
              featured ? "text-ink" : "text-ink",
            )}
          >
            {program.price.amount}
          </span>
          <span
            className={cn(
              "pb-1 text-[13px]",
              featured ? "text-muted" : "text-muted",
            )}
          >
            {program.price.note}
          </span>
        </div>
        <p
          className={cn(
            "mt-3 text-[13.5px]",
            featured ? "text-muted" : "text-body",
          )}
        >
          {program.duration} · {program.cohortSize}
        </p>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                featured ? "bg-neon/10" : "bg-neon/15",
              )}
            >
              <Check
                className={cn("size-2.5", featured ? "text-ink" : "text-neon-text")}
                strokeWidth={3.5}
              />
            </span>
            <span
              className={cn(
                "text-[14.5px] leading-6",
                featured ? "text-ink" : "text-ink-2",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {/* Pay routes to the payment page, not contact. The page itself states
            that payment is not open yet, so the label is deliberately literal. */}
        <ButtonLink
          href={`/payment?program=${program.slug}`}
          variant={featured ? "solid" : "outline"}
          size="lg"
          className="w-full"
        >
          {program.ctaLabel}
        </ButtonLink>
        <p
          className={cn(
            "mt-3 text-center text-[12.5px]",
            featured ? "text-muted" : "text-muted",
          )}
        >
          Applications open · {program.duration.toLowerCase()}
        </p>
      </div>
    </article>
  );
}
