import type { LucideIcon } from "lucide-react";

export interface JourneyStep {
  icon: LucideIcon;
  label: string;
  note?: string;
  /** Renders the connector as a dashed line, for steps that have not happened yet. */
  pending?: boolean;
}

/**
 * A rail of steps that runs left to right on desktop and stacks on mobile. Used
 * wherever a page describes an order of events — applying, following up,
 * paying — so those pages share one visual grammar instead of each inventing a
 * numbered list.
 */
export function JourneyRail({ steps }: { steps: JourneyStep[] }) {
  return (
    <ol className="grid gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={step.label} className="flex flex-col items-center text-center">
            <div className="relative flex w-full items-center justify-center">
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-1/2 h-px w-full -translate-y-px ${
                    step.pending
                      ? "bg-[repeating-linear-gradient(90deg,var(--color-line-strong)_0_5px,transparent_5px_10px)]"
                      : "bg-line-strong"
                  }`}
                />
              ) : null}

              <span
                className={`relative z-10 grid size-11 place-items-center rounded-full border-2 border-surface ${
                  step.pending
                    ? "bg-surface-2 text-muted"
                    : "bg-neon/12 text-neon-text"
                }`}
              >
                <step.icon className="size-[18px]" strokeWidth={1.9} />
              </span>
            </div>

            <p
              className={`mt-3.5 text-[14px] font-semibold tracking-[-0.01em] ${
                step.pending ? "text-muted" : "text-ink"
              }`}
            >
              {step.label}
            </p>

            {step.note ? (
              <p className="mt-1.5 max-w-[15rem] text-[13px] leading-5 text-muted">
                {step.note}
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}