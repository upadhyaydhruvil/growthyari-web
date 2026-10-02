import { frameworkSteps } from "@/data/framework";

/**
 * An isometric stack of the five framework stages. Pure CSS transforms —
 * no WebGL, no canvas — so it costs nothing to load and degrades to a
 * static stack if the 3D context is unavailable.
 */
export function FrameworkStack({ className }: { className?: string }) {
  return (
    <div
      className={`depth-floor relative ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="relative mx-auto flex w-full max-w-[26rem] flex-col gap-3">
        {frameworkSteps.map((step, index) => {
          // Progressively narrower and dimmer, so the stack reads as a ramp.
          const inset = `${index * 9}%`;

          return (
            <div
              key={step.number}
              className="relative rounded-sm border border-neon/25 bg-surface/90 backdrop-blur-[2px] shadow-soft"
              style={{ marginInline: inset }}
            >
              <div
                className="h-[3px] w-full rounded-t-sm"
                style={{
                  background: `linear-gradient(to right, rgba(23,124,93,${
                    0.75 - index * 0.13
                  }), rgba(23,124,93,0))`,
                }}
              />
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="font-mono text-[11px] text-neon-text">
                  {step.number}
                </span>
                <span className="truncate text-[13.5px] font-medium text-ink-2">
                  {step.title}
                </span>
              </div>
            </div>
          );
        })}

        {/* Base plate so the stack has something to sit on. */}
        <div className="h-6 rounded-sm border border-neon/20 bg-neon/6" />
      </div>
    </div>
  );
}
