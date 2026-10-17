import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

/**
 * Compact editorial header for interior pages. Deliberately a different
 * shape from the home hero so the two never read as the same screen: a
 * quiet ivory field, one terracotta rule and the serif display doing the
 * work, rather than the layered graphics the home hero carries.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  badge,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  badge?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="rule-top paper-grain relative overflow-hidden border-b border-line bg-canvas">
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-60 tech-mask" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow top-[-11rem] right-[-6rem] size-[26rem] bg-accent/10"
      />

      <div className="container-page relative">
        <div className="grid gap-12 section-pad lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            {badge ? (
              <Badge tone="emerald" className="mb-6">
                {badge}
              </Badge>
            ) : null}
            <p className="label-xs flex items-center gap-3 text-neon-text">
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[36px] leading-[1.04] font-medium tracking-[-0.024em] text-ink sm:text-[48px] lg:text-[58px]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-xl font-display text-[18px] leading-[1.6] text-ink-2 sm:text-[20px]">
                {intro}
              </p>
            ) : null}
          </div>

          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
