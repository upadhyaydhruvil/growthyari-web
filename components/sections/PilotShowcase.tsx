"use client";

import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Ear, Eye, ListChecks, Mic, Target } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showcaseSlides } from "@/data/pilot";
import { proofArtifacts } from "@/data/outcomes";
import { primaryCta } from "@/data/site";
import { cn } from "@/lib/cn";

/** The five things watched in every practice round, per the brief. */
const assessmentAxes = [
  { label: "Clarity", icon: Eye },
  { label: "Structure", icon: ListChecks },
  { label: "Listening", icon: Ear },
  { label: "Relevance", icon: Target },
  { label: "Delivery", icon: Mic },
] as const;

/**
 * Three-slide interactive showcase: Problem → Practice → Progress.
 *
 * Implemented as an ARIA tablist so it is keyboard-operable (arrow keys, Home,
 * End) and does not depend on autoplay. There is no timer at all — the slide
 * only changes when the visitor asks it to. The final panel carries the single
 * primary CTA, which points at the one registration portal.
 */
export function PilotShowcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (index: number) => {
    const next = (index + showcaseSlides.length) % showcaseSlides.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      go(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      go(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0);
    } else if (event.key === "End") {
      event.preventDefault();
      go(showcaseSlides.length - 1);
    }
  };

  const slide = showcaseSlides[active];
  const isLast = active === showcaseSlides.length - 1;

  return (
    <section className="section-pad bg-canvas" id="showcase">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From “I freeze” to “I’ve got this.”"
          intro="Three things are true about learning to communicate well. Move through them at your own pace."
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="How the program works"
          onKeyDown={onKeyDown}
          className="mt-10 flex flex-wrap gap-2"
        >
          {showcaseSlides.map((s, index) => (
            <button
              key={s.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={index === active}
              aria-controls={`${baseId}-panel-${s.id}`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "rounded-sm border px-4 py-2 text-[13.5px] font-medium transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon",
                index === active
                  ? "border-neon/40 bg-neon/10 text-neon-text"
                  : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink",
              )}
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-muted">
                0{index + 1}
              </span>
              <span className="ml-2">{s.kicker}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`${baseId}-panel-${slide.id}`}
          aria-labelledby={`${baseId}-tab-${slide.id}`}
          className="mt-8 grid gap-10 rounded-lg border border-line bg-surface p-7 sm:p-10 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-6">
            <p className="label-xs text-lime-text">{slide.kicker}</p>
            <h3 className="mt-4 text-[26px] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[32px]">
              {slide.title}
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-body">{slide.body}</p>

            <ul className="mt-7 space-y-3">
              {slide.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neon/20 text-neon-text"
                  >
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] leading-6 text-ink-2">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual visual for the active slide */}
          <div className="lg:col-span-6">
            {slide.id === "problem" ? <ProblemVisual /> : null}
            {slide.id === "practice" ? <AssessmentVisual /> : null}
            {slide.id === "progress" ? <ProgressVisual /> : null}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
            {showcaseSlides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}: ${s.kicker}`}
                aria-current={index === active ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === active ? "w-7 bg-neon" : "w-2 bg-line-strong hover:bg-muted",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isLast ? (
              <ButtonLink href={primaryCta.href} size="md">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  className="grid size-10 place-items-center rounded-sm border border-line-strong text-ink transition-colors hover:border-neon/50 hover:text-neon-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  className="inline-flex items-center gap-2 rounded-sm border border-line-strong px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-neon/50 hover:text-neon-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon"
                >
                  Next
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemVisual() {
  return (
    <div className="grid h-full content-start gap-3">
      {["What you know", "What comes out under pressure"].map((label, index) => (
        <div key={label} className="rounded-lg border border-line bg-canvas p-5">
          <p className="text-[13px] text-muted">{label}</p>
          <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
            {[92, 74, 58, 40, 26].map((height, i) => (
              <span
                key={i}
                className={cn(
                  "w-6 rounded-t-sm",
                  index === 0 ? "bg-neon/60" : "bg-amber/60",
                )}
                style={{ height: `${height * 0.9}px` }}
              />
            ))}
          </div>
        </div>
      ))}
      <p className="text-[12.5px] leading-6 text-muted">
        Illustrative — the point is the gap, not the numbers.
      </p>
    </div>
  );
}

function AssessmentVisual() {
  return (
    <div className="rounded-lg border border-line bg-canvas p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-ink">Communication assessment</p>
        <span className="font-mono text-[11px] tracking-[0.12em] text-muted">
          SAMPLE
        </span>
      </div>

      <ul className="mt-5 space-y-4">
        {assessmentAxes.map((axis, index) => {
          const Icon = axis.icon;
          const widths = ["88%", "72%", "64%", "80%", "58%"];
          return (
            <li key={axis.label} className="flex items-center gap-3">
              <Icon className="size-4 shrink-0 text-neon-text" aria-hidden="true" />
              <span className="w-20 shrink-0 text-[13px] text-ink-2">{axis.label}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-neon-dim to-neon"
                  style={{ width: widths[index] }}
                />
              </span>
            </li>
          );
        })}
      </ul>

      <p className="mt-5 text-[12.5px] leading-6 text-muted">
        Illustrative sample of the feedback format — not a real assessment.
      </p>
    </div>
  );
}

function ProgressVisual() {
  return (
    <div className="rounded-lg border border-line bg-canvas p-5 sm:p-6">
      <p className="text-[13px] font-medium text-ink">Evidence you build</p>
      <ul className="mt-4 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
        {proofArtifacts.slice(0, 8).map((artifact) => (
          <li key={artifact} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid size-5 shrink-0 place-items-center rounded-full bg-neon/20 text-neon-text"
            >
              <Check className="size-3" strokeWidth={3.5} />
            </span>
            <span className="text-[13.5px] text-ink-2">{artifact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
