import { Info } from "lucide-react";

/**
 * Rendered whenever a data file still contains placeholder records.
 * It disappears on its own once real data replaces the demo entries —
 * the flag is `isDemo` in `data/workshops.ts`.
 */
export function DemoDataNotice({
  title = "Sample schedule",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-neon/25 bg-neon/10 p-5 sm:flex-row sm:items-start sm:gap-4">
      <span
        aria-hidden="true"
        className="grid size-8 shrink-0 place-items-center rounded-full bg-neon/10 text-ink"
      >
        <Info className="size-4" strokeWidth={2.2} />
      </span>
      <div>
        <p className="text-[14.5px] font-semibold tracking-[-0.01em] text-lime-text">
          {title}
        </p>
        <div className="mt-1.5 text-[14px] leading-6 text-lime-text/85">
          {children ?? (
            <p>
              The sessions listed are examples of the format rather than confirmed
              events. New dates are published as cohorts are scheduled, so treat the
              topics and timings as a guide.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
