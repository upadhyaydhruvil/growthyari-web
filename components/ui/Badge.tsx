import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "emerald" | "lime" | "solid" | "solidAccent";

/*
 * Tints are low-alpha emerald over a light surface, so the label itself
 * uses the text-safe step rather than the fill — emerald at 10% with
 * emerald fill text would sit around 2:1.
 */
const tones: Record<BadgeTone, string> = {
  neutral: "border-line-strong bg-surface text-ink-2",
  emerald: "border-neon/20 bg-neon/8 text-neon-text",
  lime: "border-lime/30 bg-lime/14 text-lime-text",
  solid: "border-line-strong bg-surface text-ink",
  solidAccent: "border-neon/30 bg-surface text-neon-text",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "label-xs inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** A single pulsing dot, used for "cohort open" style status markers. */
export function PulseDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex size-1.5 shrink-0 rounded-full bg-current",
        className,
      )}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
    </span>
  );
}
