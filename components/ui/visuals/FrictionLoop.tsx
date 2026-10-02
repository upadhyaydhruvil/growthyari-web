import { RotateCw, X } from "lucide-react";

const NODES = ["Apply", "Wait", "Rejected", "Try again"];

const CENTER = 150;
const RADIUS = 104;
const SPACING = 360 / NODES.length;

function polar(deg: number, radius: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function arc(from: number, to: number) {
  const a = polar(from, RADIUS);
  const b = polar(to, RADIUS);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${RADIUS} ${RADIUS} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

const START = -90;
const STALL_FROM = START + SPACING * 1.55;
const STALL_TO = START + SPACING * 2.45;

/**
 * The same circular form as LoopDiagram, but the ring is broken. It draws the
 * loop a student is actually in without feedback: apply, wait, rejected, try
 * again, back to the start with nothing added in between.
 */
export function FrictionLoop() {
  const stallMid = (STALL_FROM + STALL_TO) / 2;
  const stallPoint = polar(stallMid, RADIUS);

  return (
    <div className="relative mx-auto w-full max-w-[24rem]">
      <svg
        viewBox="0 0 300 300"
        className="h-auto w-full"
        role="img"
        aria-label="A broken loop: apply, wait, rejected, try again, with the feedback step missing."
      >
        <defs>
          <marker
            id="friction-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 7 5 L 0 9 Z" className="fill-ink-2" />
          </marker>
        </defs>

        {NODES.map((label, index) => {
          const from = START + index * SPACING + 17;
          const to = START + (index + 1) * SPACING - 17;
          const hidden = from >= STALL_FROM - 1 && from < STALL_TO;
          return (
            <path
              key={label}
              d={arc(from, to)}
              fill="none"
              className="stroke-ink-2"
              strokeWidth={2}
              strokeDasharray="5 6"
              markerEnd="url(#friction-arrow)"
              opacity={hidden ? 0.18 : 0.7}
            />
          );
        })}

        {NODES.map((label, index) => {
          const pos = polar(START + index * SPACING, RADIUS);
          return (
            <g key={label}>
              <circle cx={pos.x} cy={pos.y} r={25} className="fill-surface" />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={25}
                fill="none"
                className="stroke-line-strong"
                strokeWidth={1.5}
              />
              <text
                x={pos.x}
                y={pos.y + 4}
                textAnchor="middle"
                className="fill-ink-2 text-[12px] font-semibold tracking-[-0.01em]"
              >
                {label}
              </text>
            </g>
          );
        })}

        <g>
          <line
            x1={stallPoint.x - 9}
            y1={stallPoint.y - 9}
            x2={stallPoint.x + 9}
            y2={stallPoint.y + 9}
            className="stroke-amber"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={stallPoint.x + 9}
            y1={stallPoint.y - 9}
            x2={stallPoint.x - 9}
            y2={stallPoint.y + 9}
            className="stroke-amber"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={stallPoint.x}
            y1={stallPoint.y - 30}
            x2={stallPoint.x}
            y2={stallPoint.y - 16}
            className="stroke-amber"
            strokeWidth={1.5}
          />
          <text
            x={stallPoint.x}
            y={stallPoint.y - 38}
            textAnchor="middle"
            className="fill-amber-text font-mono text-[10px] font-medium uppercase tracking-[0.14em]"
          >
            No feedback
          </text>
        </g>

        <circle cx={CENTER} cy={CENTER} r={46} className="fill-surface" />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={46}
          fill="none"
          className="stroke-line"
          strokeWidth={1.5}
          strokeDasharray="4 5"
        />
        <text
          x={CENTER}
          y={CENTER - 5}
          textAnchor="middle"
          className="fill-muted font-mono text-[10px] font-medium uppercase tracking-[0.16em]"
        >
          Nothing
        </text>
        <text
          x={CENTER}
          y={CENTER + 14}
          textAnchor="middle"
          className="fill-ink text-[14px] font-semibold tracking-[-0.02em]"
        >
          changes
        </text>
      </svg>

      <div className="mt-4 flex items-center justify-center gap-2.5 text-center">
        <RotateCw className="size-3.5 shrink-0 text-muted" strokeWidth={2} />
        <p className="text-[13px] leading-5 text-body">
          The same loop, run harder, does not fix it.
        </p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <X className="size-3 text-amber-text" strokeWidth={2.5} />
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
          Missing step
        </span>
      </div>
    </div>
  );
}