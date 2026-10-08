"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { frameworkSteps } from "@/data/framework";

/**
 * The hero's interactive panel.
 *
 * Three behaviours, all pointer-driven so the panel reacts the moment a
 * visitor arrives rather than sitting still waiting to be read:
 *
 *  1. The whole panel tilts toward the cursor, up to 5 degrees.
 *  2. A cursor-tracking wash follows the pointer across the card face.
 *  3. The list of loop steps fans apart on hover instead of stacking flat.
 *
 * The stage rail advances on its own timer as well, so the panel is alive for
 * a visitor who never moves the mouse. Everything stops under
 * `prefers-reduced-motion`.
 *
 * The five rows are `frameworkSteps` — the same array the homepage section
 * reads. A panel-local card list used to sit here ending in "Proof", so one
 * screen showed two different loops.
 */

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
              Live sessions
            </span>
          </div>

          {/*
            Decorative progress only. Each step's name and blurb are rendered
            once, in the list below — this used to sit above them as a large
            animated heading, so the loop was announced twice and the animated
            copy was the one crawlers and readers caught mid-transition.
          */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center gap-1.5"
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

        <ol className="relative mt-5 grid gap-2 sm:gap-2.5">
          {frameworkSteps.map((step, index) => (
            <li
              key={step.number}
              aria-current={index === stage ? "step" : undefined}
              className="group/card flex items-start gap-3.5 rounded-xl border px-4 py-3 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={
                reduce || !hovered
                  ? undefined
                  : {
                      transform: `translateX(${(index - (frameworkSteps.length - 1) / 2) * 8}px)`,
                    }
              }
            >
              <span
                aria-hidden="true"
                className={
                  index === stage
                    ? "grid size-8 shrink-0 place-items-center rounded-lg border border-neon/30 bg-neon/8 text-card-neon-text"
                    : "grid size-8 shrink-0 place-items-center rounded-lg border border-card-line bg-card text-card-muted"
                }
              >
                <step.icon className="size-4" strokeWidth={1.9} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-card-muted">
                    {step.number}
                  </span>
                  <span
                    className={
                      index === stage
                        ? "text-[14.5px] font-semibold tracking-[-0.01em] text-card-ink"
                        : "text-[14.5px] font-semibold tracking-[-0.01em] text-card-ink-2"
                    }
                  >
                    {step.title}
                  </span>
                </p>
                <p className="mt-0.5 text-[12.5px] leading-5 text-card-muted">
                  {step.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>

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