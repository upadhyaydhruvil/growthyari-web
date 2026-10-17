import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Align = "left" | "center";

/**
 * Every section on the site uses this. Keeping the eyebrow + heading +
 * supporting line together in one component is what stops the pages from
 * drifting apart visually.
 *
 * The heading is deliberately large and set in the serif display: on a
 * warm ground the type has to carry the hierarchy that a dark card would
 * otherwise carry. `lead` adds the one thing an editorial brand needs and
 * a course marketplace never has — a slightly larger, warmer opening line.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  lead,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** Supporting line, set small and quiet. */
  intro?: string;
  /** Optional larger opening paragraph, set in the display face. */
  lead?: string;
  align?: Align;
  className?: string;
  /** Optional action rendered under the intro (e.g. a link). */
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="label-xs flex items-center gap-3 text-neon-text">
          <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-[32px] leading-[1.06] font-medium tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
        {title}
      </h2>

      {lead ? (
        <p className="mt-5 font-display text-[19px] leading-[1.55] text-ink-2 sm:text-[21px]">
          {lead}
        </p>
      ) : null}

      {intro ? (
        <p className="mt-5 text-[15.5px] leading-[1.75] text-body sm:text-[16.5px]">{intro}</p>
      ) : null}

      {children ? <div className="mt-7">{children}</div> : null}
    </div>
  );
}
