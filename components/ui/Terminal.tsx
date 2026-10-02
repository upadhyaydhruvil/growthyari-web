"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * A terminal window used as product illustration — it visualises the
 * proof-of-work loop rather than quoting anything a real system printed.
 *
 * Lines are typed in on a timer. The first line renders immediately so the
 * block is never empty for a visitor with JS disabled or slow.
 */
const LINES = [
  { prompt: true, text: "growthyari init --learner" },
  { prompt: false, text: "resolving framework: learning → practice" },
  { prompt: true, text: "growthyari practice --module feedback" },
  { prompt: false, text: "recording cold call … done (04:12)" },
  { prompt: false, text: "coaching note: strong open, weak close" },
  { prompt: true, text: "growthyari build --proof portfolio" },
  { prompt: false, text: "artifacts 3/3  ▸ portfolio ready" },
  { prompt: true, text: "growthyari ship" },
  { prompt: false, text: "status: VERIFIED ✓" },
] as const;

type Line = (typeof LINES)[number];

export function Terminal({
  className,
  title = "proof-of-work",
}: {
  className?: string;
  title?: string;
}) {
  const [shown, setShown] = useState<number>(1);

  useEffect(() => {
    if (shown >= LINES.length) return;
    const id = setTimeout(() => setShown((n) => n + 1), shown === 1 ? 380 : 300);
    return () => clearTimeout(id);
  }, [shown]);

  return (
    <div
      className={cn(
        "neon-edge relative overflow-hidden rounded-lg border border-line bg-canvas",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-panel px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-neon/70" />
          <span className="size-2 rounded-full bg-neon/40" />
          <span className="size-2 rounded-full bg-neon/20" />
        </span>
        <span className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          {title}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-neon-text uppercase">
          <span className="size-1.5 rounded-full bg-neon animate-pulse-dot" />
          live
        </span>
      </div>

      {/* Body */}
      <div
        className="scanlines relative px-4 py-4 font-mono text-[12.5px] leading-7 sm:text-[13px]"
        aria-label="Illustration of the GrowthYari proof-of-work loop"
      >
        {LINES.slice(0, shown).map((line: Line, index) => (
          <p
            key={index}
            className={cn(
              "flex gap-2",
              line.prompt ? "text-neon-text" : "text-muted",
              index === shown - 1 && index < LINES.length - 1 ? "caret text-neon-text" : "",
            )}
          >
            {line.prompt ? (
              <span aria-hidden="true" className="shrink-0 text-neon">
                $
              </span>
            ) : (
              <span aria-hidden="true" className="w-[0.6em] shrink-0 text-neon-dim/45">
                ›
              </span>
            )}
            <span className="min-w-0 break-words">{line.text}</span>
          </p>
        ))}

        {/* Reserve the height of the hidden lines so the card does not grow. */}
        {shown < LINES.length
          ? Array.from({ length: LINES.length - shown }, (_, i) => (
              <p key={`pad-${i}`} aria-hidden="true" className="flex gap-2">
                <span className="w-[0.6em] shrink-0">&nbsp;</span>
                <span>&nbsp;</span>
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
