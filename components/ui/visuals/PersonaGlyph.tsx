import type { LucideIcon } from "lucide-react";

const ACCENTS = [
  { stroke: "stroke-neon", fill: "fill-neon", soft: "fill-neon/12" },
  { stroke: "stroke-lime", fill: "fill-lime", soft: "fill-lime/14" },
  { stroke: "stroke-amber", fill: "fill-amber", soft: "fill-amber/14" },
  { stroke: "stroke-neon-soft", fill: "fill-neon-soft", soft: "fill-neon-soft/12" },
];

const BAR_SETS = [
  [30, 58, 42, 72],
  [64, 38, 76, 46],
  [46, 70, 34, 62],
  [72, 44, 66, 36],
];

/**
 * An abstract geometric mark, not a portrait. There are no student photos to
 * publish, and generating a face-shaped placeholder would read as a real
 * person. This builds a distinct composition per persona from its position in
 * the set, so the cards are visually distinguishable without inventing anyone.
 */
export function PersonaGlyph({
  icon: Icon,
  seed,
  className = "",
}: {
  icon: LucideIcon;
  seed: number;
  className?: string;
}) {
  const accent = ACCENTS[seed % ACCENTS.length];
  const bars = BAR_SETS[seed % BAR_SETS.length];
  const mirror = seed % 2 === 1;

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <linearGradient id={`glyph-bg-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-neon)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--color-neon)" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        <rect width="120" height="120" fill={`url(#glyph-bg-${seed})`} />

        <g
          stroke="currentColor"
          className="text-neon/25"
          strokeWidth={1}
          fill="none"
        >
          <circle cx="60" cy="60" r="52" />
          <circle cx="60" cy="60" r="40" strokeDasharray="3 6" />
        </g>

        {mirror ? (
          <>
            <path
              d="M 18 104 A 42 42 0 0 1 60 62 L 60 104 Z"
              className={accent.soft}
            />
            <path
              d="M 18 104 A 42 42 0 0 1 60 62"
              fill="none"
              className={accent.stroke}
              strokeWidth={1.6}
            />
            <path
              d="M 60 62 L 102 104"
              fill="none"
              className={accent.stroke}
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <path
              d="M 102 104 A 42 42 0 0 0 60 62 L 60 104 Z"
              className={accent.soft}
            />
            <path
              d="M 102 104 A 42 42 0 0 0 60 62"
              fill="none"
              className={accent.stroke}
              strokeWidth={1.6}
            />
            <path
              d="M 60 62 L 18 104"
              fill="none"
              className={accent.stroke}
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </>
        )}

        <g>
          {bars.map((h, i) => {
            const gap = 11;
            const start = 60 - ((bars.length - 1) * gap) / 2;
            return (
              <rect
                key={i}
                x={start + i * gap - 2.4}
                y={92 - h * 0.34}
                width={4.8}
                height={h * 0.34}
                rx={1.2}
                className={i === bars.length - 2 ? accent.fill : accent.soft}
              />
            );
          })}
        </g>

        <circle cx="60" cy="58" r="17" className={accent.soft} />
        <circle
          cx="60"
          cy="58"
          r="17"
          fill="none"
          className={accent.stroke}
          strokeWidth={1.6}
        />

        <circle
          cx={mirror ? 22 : 98}
          cy={34}
          r={4.5}
          className={accent.fill}
        />
        <circle
          cx={mirror ? 96 : 24}
          cy={86}
          r={2.5}
          className="fill-neon/40"
        />
      </svg>

      <span
        className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-sm border border-line-strong bg-surface"
        aria-hidden="true"
      >
        <Icon className="size-4 text-ink-2" strokeWidth={1.9} />
      </span>
    </div>
  );
}