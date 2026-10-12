"use client";

import { useEffect } from "react";
import { programEvents } from "@/content/programs-content";
import { track } from "@/lib/analytics";

/**
 * Fires `programs_section_view` once per section (`data-track-section`) as the
 * visitor scrolls through /programs. Harmless no-op until a tag manager loads.
 */
export function SectionTracker() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-track-section]"));
    const fired = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          const id = target.dataset.trackSection ?? "unknown";
          if (fired.has(id)) continue;
          fired.add(id);
          track(programEvents.sectionView, { sectionId: id });
        }
      },
      { threshold: 0.3 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}