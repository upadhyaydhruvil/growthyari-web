"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, FileText, Mic, Presentation } from "lucide-react";
import { frameworkSteps } from "@/data/framework";

/**
 * The hero's interactive panel.
 *
 * Three behaviours, all pointer-driven so the panel reacts the moment a
 * visitor arrives rather than sitting still waiting to be read:
 *
 *  1. The whole panel tilts toward the cursor, up to 5 degrees.
 *  2. A cursor-tracking wash follows the pointer across the card face.
 *  3. The three stage cards fan apart on hover instead of stacking flat.
 *
 * The stage rail advances on its own timer as well, so the panel is alive for
 * a visitor who never moves the mouse. Everything stops under
 * `prefers-reduced-motion`.
 */

const CARDS = [
  {
    icon: Mic,
    title: "Practice",
    note: "Recorded and replayed until it lands",
    meta: "Weekly drill",
  },
  {
    icon: Presentation,
    title: "Feedback",
    note: "A coach reviews the actual recording",
    meta: "Personal review",
  },
  {
    icon: FileText,
    title: "Proof",
    note: "An artefact a recruiter can open",
    meta: "Shareable",
  },
] as const;

const ROTATE_MS = 3200;

export function HeroShowcase({ facts }: { facts: readonly string[] }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [stage, setStage] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStage((s) => (s + 1) % frameworkSteps.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const onMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--px", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--py", `${(py * 100).toFixed(1)}%`);
    setTilt({ x: (0.5 - py) * 5, y: (px - 0.5) * 5 });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <div
      ref={panelRef}
      onPointerMove={onMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={onLeave}
      className="hero-panel relative [perspective:1400px]"
    >
      <div
        className="hero-panel-face relative rounded-2xl border border-card-line bg-card p-6 shadow-lift sm:p-7"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: reduce ? "none" : "transform 260ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div aria-hidden="true" className="hero-panel-wash absolute inset-0 rounded-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <p className="label-xs text-card-muted">The loop</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neon/25 bg-neon/8 px-2.5 py-1 text-[11px] font-medium text-card-neon-text">
              <span
                aria-hidden="true"
                className="size-1.5 animate-pulse-dot rounded-full bg-card-neon-text"
              />
              Live
            </span>
          </div>

          <p className="mt-3 text-[26px] leading-tight font-semibold tracking-[-0.03em] text-card-ink sm:text-[30px]">
            {frameworkSteps[stage].title}
          </p>
          <p className="mt-2 text-[14px] leading-6 text-card-body">
            {frameworkSteps[stage].blurb}
          </p>

          <div
            className="mt-6 flex items-center gap-1.5"
            role="img"
            aria-label={`Stage ${stage + 1} of ${frameworkSteps.length}: ${frameworkSteps[stage].title}`}
          >
            {frameworkSteps.map((step, index) => (
              <span
                key={step.number}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                  index === stage ? "bg-card-neon-text" : "bg-card-ink/15"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-6 grid gap-2.5 sm:gap-3">
          {CARDS.map((card, index) => (
            <div
              key={card.title}
              className="group/card flex items-center gap-3.5 rounded-xl border border-card-line bg-card-soft px-4 py-3.5 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={
                reduce || !hovered
                  ? undefined
                  : {
                      transform: `translateX(${(index - 1) * 14}px)`,
                    }
              }
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-card-line bg-card text-card-neon-text transition-colors duration-300 group-hover/card:border-neon/30 group-hover/card:bg-neon/8"
              >
                <card.icon className="size-4" strokeWidth={1.9} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[14.5px] font-semibold tracking-[-0.01em] text-card-ink">
                  {card.title}
                </p>
                <p className="truncate text-[12.5px] text-card-muted">{card.note}</p>
              </div>

              <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-card-muted uppercase">
                {card.meta}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-card-line pt-5">
          {facts.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-[12.5px] text-card-ink-2">
              {/*
                 * `text-card-neon-text`, not `text-neon`. The dark-theme
                 * emerald #2fb188 only reaches 2.5:1 on a white card, which
                 * is below the 3:1 floor for a meaningful glyph.
                 */}
                <Check className="size-3.5 shrink-0 text-card-neon-text" strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}