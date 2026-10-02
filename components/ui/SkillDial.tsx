import { outcomeAreas } from "@/data/outcomes";
import { cn } from "@/lib/cn";

/**
 * A radial "skill dial" built from stroke-dasharray arcs.
 *
 * The arcs are decorative. No completion percentage is claimed, because no
 * participant outcome data is published, so there would be nothing honest to
 * put on them. They stand for the skill areas, which are real and listed in
 * the legend below. The segment count follows the data, so the diagram can
 * never drift from `outcomeAreas`.
 */
const SEGMENTS = outcomeAreas.length;

export function SkillDial({ className }: { className?: string }) {
  const r = 76;
  const circumference = 2 * Math.PI * r;
  const each = 360 / SEGMENTS;
  const gap = 4;

  return (
    <div className={cn("relative w-full max-w-[22rem]", className)}>
      <div
        aria-hidden="true"
        className="glow-orb top-1/3 left-1/2 size-[70%] -translate-x-1/2 bg-neon/12"
      />

      <svg
        viewBox="0 0 200 200"
        className="depth-float relative aspect-square w-full"
        role="img"
        aria-label={`Diagram of the ${SEGMENTS} skill areas GrowthYari builds`}
      >
        <defs>
          <linearGradient id="gy-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#177c5d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3ba884" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="gy-arc-alt" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#9ac94f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#5f9f7a" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="rgba(23,124,93,0.12)"
          strokeWidth="12"
        />

        {Array.from({ length: SEGMENTS }, (_, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke={i % 2 === 0 ? "url(#gy-arc)" : "url(#gy-arc-alt)"}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${((each - gap * 2) / 360) * circumference} ${circumference}`}
            transform={`rotate(${i * each - 90} 100 100)`}
            className="animate-arc-in"
            style={{ animationDelay: `${i * 0.11}s` }}
          />
        ))}

        <circle cx="100" cy="100" r="46" fill="#f3faf5" stroke="rgba(23,124,93,0.22)" />
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill="#14291f"
          fontSize="30"
          fontWeight="600"
          letterSpacing="-1"
        >
          {SEGMENTS}
        </text>
        <text
          x="100"
          y="114"
          textAnchor="middle"
          fill="#556b62"
          fontSize="11"
          letterSpacing="2.4"
        >
          AREAS
        </text>
      </svg>

      <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-2.5">
        {outcomeAreas.map((area, i) => (
          <li key={area.title} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-sm"
              style={{
                background: i % 2 === 0 ? "#177c5d" : "#9ac94f",
              }}
            />
            <span className="truncate text-[13px] text-ink-2">{area.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
