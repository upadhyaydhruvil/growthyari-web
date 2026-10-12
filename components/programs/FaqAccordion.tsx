"use client";

import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programEvents, visibleFaq } from "@/content/programs-content";
import { track } from "@/lib/analytics";

/**
 * Section 5.10 — accordion built on native <details>, so it is keyboard
 * accessible with zero state handling. Only confirmed FAQ items render.
 */
export function FaqAccordion() {
  if (visibleFaq.length === 0) return null;

  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people actually ask before applying."
            align="center"
          />

          <div className="mt-10 space-y-3">
            {visibleFaq.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-line bg-surface-2"
                onToggle={(event) => {
                  const details = event.currentTarget;
                  if (details.open) {
                    track(programEvents.faqOpen, { question: item.question });
                  }
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] leading-7 font-medium text-ink select-none sm:px-6 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    aria-hidden="true"
                    className="size-4 shrink-0 text-neon-text transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                {item.answer ? (
                  <p className="border-t border-line px-5 py-4 text-[14.5px] leading-7 text-body sm:px-6">
                    {item.answer}
                  </p>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}