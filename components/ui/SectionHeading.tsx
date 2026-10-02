import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Align = "left" | "center";

/**
 * Every section on the site uses this. Keeping the eyebrow + heading +
 * supporting line together in one component is what stops the pages from
 * drifting apart visually.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
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
      {eyebrow ? <p className="label-xs text-neon-text">{eyebrow}</p> : null}

      <h2 className="mt-4 text-[30px] leading-[1.12] font-semibold text-ink sm:text-[36px] lg:text-[44px]">
        {title}
      </h2>

      {intro ? (
        <p className="mt-4 text-[15px] leading-7 text-body sm:text-base">{intro}</p>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
