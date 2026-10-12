"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { programEvents } from "@/content/programs-content";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Sticky CTA bar for long landing pages. Appears after the visitor scrolls
 * past the fold, stays single-line on phones, and can be dismissed. Nothing
 * telegraphs urgency — just a next step.
 */
export function StickyCtaBar() {
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastFold = window.scrollY > window.innerHeight * 0.85;
      setSeen((was) => was || pastFold);
      setActive(pastFold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!seen && !active) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        active && !dismissed ? "translate-y-0" : "translate-y-full",
      )}
      role="region"
      aria-label="Apply options"
    >
      <div className="border-t border-line bg-surface/95 backdrop-blur">
        <div className="container-page flex items-center justify-between gap-3 py-3">
          <p className="min-w-0 truncate text-[13.5px] font-medium text-ink-2">
            Two tracks. One loop. Proof at the end.
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="sm"
              onClick={() => track(programEvents.ctaClick, { cta: "sticky" })}
            >
              Book a call
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </ButtonLink>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="grid size-9 place-items-center rounded-sm border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}