import { RotateCcw } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningLoop } from "@/content/programs-content";

/**
 * Section 5.6 — the learning loop (Learn · Practise · Review · Revise).
 * The ring is a decorative SVG on desktop; the four step cards that carry the
 * meaning stay stacked on mobile and never cause horizontal overflow.
 */
export function LearningLoop() {
  return (
    <section className="section-pad relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="tech-grid-fine absolute inset-0 opacity-40 tech-mask" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={learningLoop.eyebrow}
          title={learningLoop.title}
          intro={learningLoop.lead}
        />

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Decorative ring — desktop only */}
          <div className="hidden lg:col-span-5 lg:block" aria-hidden="true">
            <svg
              viewBox="0 0 520 300"
              role="img"
              aria-label="The learning loop: learn, practise, review, revise, repeat"
              className="mx-auto w-full max-w-[560px]"
            >
              <defs>
                <marker
                  id="lap-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0L10 5L0 10z" fill="var(--color-neon-text)" />
                </marker>
              </defs>

              <circle
                cx="260"
                cy="150"
                r="88"
                fill="none"
                stroke="var(--color-line-strong)"
                strokeWidth="1.5"
                strokeDasharray="1 7"
                strokeLinecap="round"
              />

              <g fill="none" stroke="var(--color-neon-text)" strokeWidth="1.5">
                <path d="M104 112 Q180 42 232 54" markerEnd="url(#lap-arrow)" />
                <path d="M288 54 Q360 42 416 112" markerEnd="url(#lap-arrow)" />
                <path d="M416 188 Q360 258 292 246" markerEnd="url(#lap-arrow)" />
                <path d="M228 246 Q180 258 104 188" markerEnd="url(#lap-arrow)" />
              </g>

              {[
                { node: "L", x: 70, y: 140, tx: 70, ty: 200, name: "Learn" },
                { node: "P", x: 260, y: 32, tx: 260, ty: 14, name: "Practise" },
                { node: "R", x: 450, y: 140, tx: 450, ty: 200, name: "Review" },
                { node: "V", x: 260, y: 248, tx: 260, ty: 272, name: "Revise" },
              ].map((item) => (
                <g key={item.node}>
                  <circle
                    cx={item.x}
                    cy={item.y}
                    r="30"
                    fill="var(--color-surface)"
                    stroke="var(--color-line-strong)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={item.tx}
                    y={item.ty}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="var(--color-ink)"
                    fontFamily="var(--font-sans)"
                  >
                    {item.name}
                  </text>
                </g>
              ))}

              <text
                x="260"
                y="150"
                textAnchor="middle"
                fontSize="12"
                fill="var(--color-muted)"
                fontFamily="var(--font-mono)"
                letterSpacing="0.14em"
              >
                LOOP
              </text>
            </svg>
          </div>

          {/* Step cards — always present, stacked on phones */}
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {learningLoop.steps.map((step, index) => (
              <Reveal key={step.name} delay={index * 70} className="h-full">
                <li className="flex h-full items-start gap-4 rounded-lg border border-line bg-surface p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-sm border border-line bg-surface-2 text-neon-text">
                    <step.icon className="size-[18px]" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
                      {step.name}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-6 text-body">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-9 flex items-center justify-center gap-2 text-center text-[13px] text-muted">
          <RotateCcw className="size-3.5 shrink-0 text-neon-text" aria-hidden="true" />
          The loop repeats weekly until the skill is repeatable — in every track.
        </p>
      </div>
    </section>
  );
}