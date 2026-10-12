"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programEvents, talentSample } from "@/content/programs-content";
import { track } from "@/lib/analytics";

/**
 * Section 5.13 — an illustrative profile of a graduate after the loop.
 * Deliberately labelled as a sample: GrowthYari publishes no student results,
 * and this card must never read as a testimonial.
 */
export function TalentCard() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track(programEvents.talentCardOpen);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={talentSample.eyebrow}
            title={talentSample.title}
            intro={talentSample.body}
          />

          <article
            ref={ref}
            className="relative mt-10 overflow-hidden rounded-lg border border-amber/25 bg-surface p-7 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="glow-orb -top-20 -right-16 size-56 bg-amber/10"
            />
            <Quote
              aria-hidden="true"
              className="absolute top-6 right-6 size-8 text-amber/20"
            />

            <p className="relative max-w-xl text-[20px] leading-9 font-medium tracking-[-0.01em] text-ink-2">
              &ldquo;{talentSample.quote}&rdquo;
            </p>

            <div className="mt-8 border-t border-amber/15 pt-6">
              <p className="label-xs text-amber-text">{talentSample.factsLabel}</p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {talentSample.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-amber-soft"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] leading-6 text-ink-2">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-7 text-[12.5px] leading-5 text-muted">
              {talentSample.eyebrow} — built to illustrate the shape of the work,
              not to represent any real person&apos;s outcome.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}