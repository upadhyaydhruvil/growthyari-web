import {
  BookOpen,
  Dumbbell,
  LineChart,
  Repeat,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { frameworkSteps } from "@/data/framework";

const STEP_ICONS: Record<string, LucideIcon> = {
  Learning: BookOpen,
  Practice: Dumbbell,
  Feedback: LineChart,
  Execution: Rocket,
  Growth: Repeat,
};

const CENTER = 200;
const RADIUS = 142;
const NODE_R = 30;

function polar(deg: number, radius: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

const SPACING = 360 / frameworkSteps.length;

function arc(from: number, to: number) {
  const a = polar(from, RADIUS);
  const b = polar(to, RADIUS);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${RADIUS} ${RADIUS} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

export function LoopDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem]">
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        role="img"
        aria-label="The GrowthYari loop: Learning, Practice, Feedback, Execution, then Growth, repeating."
      >
        <defs>
          <marker
            id="loop-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 7 5 L 0 9 Z" className="fill-neon" />
          </marker>
        </defs>

        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          className="stroke-neon/25"
          strokeWidth={1.5}
          strokeDasharray="2 7"
          strokeLinecap="round"
          style={{ animation: "gy-ring-crawl 6s linear infinite" }}
        />

        <g className="loop-arrows">
          {frameworkSteps.map((step, index) => {
            const from = index * SPACING - 90 + 17;
            const to = (index + 1) * SPACING - 90 - 17;
            return (
              <path
                key={step.title}
                d={arc(from, to)}
                fill="none"
                className="stroke-neon"
                strokeWidth={2}
                markerEnd="url(#loop-arrow)"
                opacity={0.85}
              />
            );
          })}
        </g>

        {frameworkSteps.map((step, index) => {
          const pos = polar(index * SPACING - 90, RADIUS);
          const StepIcon = STEP_ICONS[step.title] ?? Repeat;
          return (
            <g key={step.title}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NODE_R + 5}
                className="fill-surface"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NODE_R}
                className="fill-surface stroke-line-strong"
                strokeWidth={1.5}
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NODE_R - 9}
                className="fill-neon/10 stroke-neon/25"
                strokeWidth={1}
              />
              <StepIcon
                x={pos.x - 10}
                y={pos.y - 10}
                width={20}
                height={20}
                className="text-neon-text"
                strokeWidth={1.8}
              />
              <text
                x={pos.x}
                y={pos.y + NODE_R + 19}
                textAnchor="middle"
                className="fill-ink font-mono text-[11px] font-medium uppercase tracking-[0.14em]"
              >
                {step.title}
              </text>
            </g>
          );
        })}

        <circle cx={CENTER} cy={CENTER} r={62} className="fill-surface" />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={62}
          fill="none"
          className="stroke-line-strong"
          strokeWidth={1.5}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={50}
          fill="none"
          className="stroke-neon/20"
          strokeWidth={1}
          strokeDasharray="3 5"
        />
        <text
          x={CENTER}
          y={CENTER - 4}
          textAnchor="middle"
          className="fill-ink font-mono text-[10px] font-medium uppercase tracking-[0.2em]"
        >
          Repeat
        </text>
        <text
          x={CENTER}
          y={CENTER + 16}
          textAnchor="middle"
          className="fill-ink-2 text-[15px] font-semibold tracking-[-0.02em]"
        >
          every week
        </text>
      </svg>
    </div>
  );
}