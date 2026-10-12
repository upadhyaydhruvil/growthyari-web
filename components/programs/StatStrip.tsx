import { cn } from "@/lib/cn";

/**
 * A thin strip of facts (duration, format, cohort size…), used directly under
 * the hero on /programs. Two columns on phones, four on desktop — facts are
 * short enough that a 2×2 grid never overflows at 360px.
 */
export function StatStrip({
  stats,
  className,
}: {
  stats: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((item) => (
        <div key={item.label} className="bg-surface px-5 py-5">
          <dt className="label-xs text-muted">{item.label}</dt>
          <dd className="mt-2 font-display text-[22px] leading-none font-semibold tracking-[-0.03em] text-ink sm:text-[26px]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}