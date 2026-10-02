import { systemMetrics } from "@/data/personas";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A status-bar readout rather than a statistics band. The values describe
 * how the program runs, so nothing here needs inventing.
 */
export function SystemStrip({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-line bg-surface ${className ?? ""}`}
    >
      <div aria-hidden="true" className="scanlines absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"
      />

      <div className="relative grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {systemMetrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            delay={index * 60}
            className="px-6 py-6 sm:px-7 sm:py-7"
          >
            <p className="flex items-center gap-2 label-xs text-muted">
              <span className="inline-block size-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(23,124,93,0.5)] animate-pulse-dot" />
              {metric.label}
            </p>
            <p className="mt-3 text-[22px] leading-none font-semibold tracking-[-0.03em] text-ink">
              {metric.value}
            </p>
            <p className="mt-2 text-[13px] leading-5 text-muted">{metric.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
