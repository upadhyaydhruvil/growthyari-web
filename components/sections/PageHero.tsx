import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

/**
 * Compact editorial header for interior pages. Deliberately a different
 * shape from the home hero so the two never read as the same screen.
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
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-50 tech-mask" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift top-[-9rem] right-[-5rem] size-[26rem] bg-neon/8"
      />

      <div className="container-page relative">
        <div className="grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            {badge ? (
              <Badge tone="emerald" className="mb-6">
                {badge}
              </Badge>
            ) : null}
            <p className="label-xs text-neon-text">{eyebrow}</p>
            <h1 className="mt-4 text-[34px] leading-[1.08] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-body">
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
