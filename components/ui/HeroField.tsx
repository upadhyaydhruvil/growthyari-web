"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * The hero's animated backdrop. Purely decorative, so the whole layer is
 * `aria-hidden` and every behaviour collapses under `prefers-reduced-motion`.
 *
 * Four stacked treatments:
 *  1. A measurement grid that pans one cell on a loop.
 *  2. A soft aurora wash that slowly rotates and breathes.
 *  3. Two glow orbs on a pointer parallax (`--mx` / `--my`), which also keep
 *     their own slower drift.
 *  4. A field of light motes rising and fading.
 *
 * Pointer position is written to a single container as custom properties and
 * read by CSS transforms, so moving the mouse never triggers a React render.
 * RAF-throttled, and the listener is never attached when motion is reduced.
 */

type Mote = {
  left: string;
  top: string;
  size: number;
  depth: number;
  delay: string;
  duration: string;
  opacity: number;
  drift: number;
};

/**
 * Fixed positions (not random) so the server and client render the identical
 * markup — a random field would hydrate into a mismatch.
 */
const MOTES: Mote[] = [
  { left: "5%", top: "70%", size: 5, depth: 44, delay: "0s", duration: "10s", opacity: 0.5, drift: -12 },
  { left: "16%", top: "84%", size: 3, depth: 24, delay: "1.4s", duration: "8s", opacity: 0.4, drift: 10 },
  { left: "29%", top: "74%", size: 7, depth: 56, delay: "2.7s", duration: "12s", opacity: 0.32, drift: -18 },
  { left: "42%", top: "90%", size: 4, depth: 30, delay: "0.8s", duration: "9.5s", opacity: 0.45, drift: 14 },
  { left: "55%", top: "72%", size: 6, depth: 48, delay: "3.5s", duration: "11s", opacity: 0.38, drift: -10 },
  { left: "68%", top: "86%", size: 3, depth: 22, delay: "2.1s", duration: "7.5s", opacity: 0.5, drift: 16 },
  { left: "80%", top: "78%", size: 8, depth: 60, delay: "4.2s", duration: "13s", opacity: 0.3, drift: -14 },
  { left: "92%", top: "88%", size: 4, depth: 28, delay: "1.1s", duration: "8.5s", opacity: 0.42, drift: 12 },
];

export function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", x.toFixed(4));
        el.style.setProperty("--my", y.toFixed(4));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Aurora wash */}
      <div className="hero-aurora animate-aurora absolute inset-[-15%]" />

      {/* Panning measurement grid */}
      <div className="tech-grid animate-grid-pan tech-mask absolute inset-0 opacity-70" />

      {/* Parallax glow orbs — each keeps its own slower drift inside. */}
      <div
        className="hero-parallax absolute inset-0"
        style={{ "--p-depth": 34 } as CSSProperties}
      >
        <div className="glow-orb animate-drift top-[-10rem] right-[-6rem] size-[34rem] bg-neon/12" />
      </div>
      <div
        className="hero-parallax absolute inset-0"
        style={{ "--p-depth": -22 } as CSSProperties}
      >
        <div className="glow-orb animate-drift-slow bottom-[-12rem] left-[-8rem] size-[30rem] bg-lime/10" />
      </div>

      {/* Rising light motes */}
      <div
        className="hero-parallax absolute inset-0"
        style={{ "--p-depth": 16 } as CSSProperties}
      >
        {MOTES.map((mote, index) => (
          <span
            key={index}
            className="animate-float absolute rounded-full bg-neon-soft"
            style={
              {
                left: mote.left,
                top: mote.top,
                width: mote.size,
                height: mote.size,
                boxShadow: "0 0 12px rgba(47, 177, 136, 0.65)",
                "--dot-delay": mote.delay,
                "--dot-d": mote.duration,
                "--dot-o": mote.opacity,
                "--dot-x": `${mote.drift}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
