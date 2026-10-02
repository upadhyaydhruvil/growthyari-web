/**
 * A qualitative ring for the comparison columns, not a score.
 *
 * The obvious thing to put here was a pair of progress bars, but any number on
 * them would be an invented statistic. This instead restates the section's
 * actual argument in shape: the traditional column gets a ring with a gap in
 * it, GrowthYari gets the same ring closed.
 */
export function FeedbackRing({ closed }: { closed: boolean }) {
  const size = 46;
  const r = 18;
  const c = 2 * Math.PI * r;
  const gap = closed ? 0 : c * 0.32;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0"
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth={2.5}
        className={closed ? "stroke-neon" : "stroke-muted"}
        strokeDasharray={c}
        strokeDashoffset={gap}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {!closed ? (
        <>
          <line
            x1={size / 2 - 6}
            y1={size / 2 - 6}
            x2={size / 2 + 6}
            y2={size / 2 + 6}
            className="stroke-amber"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={size / 2 + 6}
            y1={size / 2 - 6}
            x2={size / 2 - 6}
            y2={size / 2 + 6}
            className="stroke-amber"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </>
      ) : (
        <path
          d={`M ${size / 2 - 7} ${size / 2} L ${size / 2 - 2} ${size / 2 + 5.5} L ${size / 2 + 7.5} ${size / 2 - 5}`}
          fill="none"
          className="stroke-neon"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}