"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-triggered fade-and-lift. One IntersectionObserver per node,
 * unobserved after the first reveal so it never re-animates while the
 * visitor scrolls back up. Honours prefers-reduced-motion via the CSS in
 * globals.css, which collapses the transition to ~0ms.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "article" | "ul";
}) {
  const ref = useRef<HTMLElement>(null);
  // Must start identical on the server and the client or React reports a
  // hydration mismatch. The server has no IntersectionObserver, so we cannot
  // branch on it here — start hidden and let the effect decide.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // No observer support: reveal on the next frame so content is never
      // left hidden, and so we do not setState synchronously inside an effect.
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as never) : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
