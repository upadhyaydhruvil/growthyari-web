import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "emerald" | "lime" | "solid" | "solidAccent";

/*
 * `emerald` is deep forest green and `lime` is warm terracotta — the two
 * tones kept their names so existing call sites did not have to change.
 * Tints are low-alpha over the light ground, so the label itself uses the
 * text-safe step rather than the fill: the fills sit near 2:1 as text.
 */
const tones: Record<BadgeTone, string> = {
  neutral: "border-line-strong bg-transparent text-ink-2",
  emerald: "border-primary/20 bg-primary/8 text-primary",
  lime: "border-accent/30 bg-accent/12 text-accent-hover",
  solid: "border-transparent bg-forest text-canvas",
  solidAccent: "border-accent/30 bg-transparent text-accent-hover",
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
