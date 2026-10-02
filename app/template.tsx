"use client";

import { usePathname } from "next/navigation";

/**
 * Page transition on navigation.
 *
 * In the App Router a `template.tsx` remounts on every route change, which is
 * what makes it the right place for an enter animation. Putting this in
 * `layout.tsx` instead would run once and never fire again.
 *
 * The animation is deliberately short and moves only a few pixels. A longer or
 * larger transition delays content that a visitor came to read, and it repeats
 * on every click — a small cost that is paid constantly.
 *
 * Keyed on `pathname` so it fires per route, and it deliberately does *not*
 * animate on first load: the hero already has its own entrance, and stacking
 * two on the way in reads as jank.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}