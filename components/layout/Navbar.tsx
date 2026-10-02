"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks, primaryCta } from "@/data/site";
import { upcomingWorkshopCount } from "@/data/workshops";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
   * `mounted` gates the entrance animation, and it is the more important of the
   * two states: before it flips, the bar and its items render translated off
   * the top of the screen at `opacity: 0`.
   *
   * So on a page that renders before JS runs — or with JS blocked — the
   * navbar is invisible. That is a real failure mode, not a theoretical one:
   * the navbar holds every route. Two things prevent it.
   *
   * 1. `noscript` in `app/layout.tsx` forces `mounted` styling off.
   * 2. The 40ms timer is short, and it is cleared on unmount.
   *
   * If you raise the delay, verify the noscript path still shows the bar.
   */
  const [mounted, setMounted] = useState(false);

  // Compact the bar once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet, and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Stagger the entrance so the bar, links and CTA arrive in sequence rather
  // than as one block. Timing is a CSS custom property set here rather than
  // hard-coded per element, so the whole sequence can be retuned in one place.
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        // A hairline of light sweeps across the bar as it mounts.
        mounted ? "navbar-in" : "-translate-y-full opacity-0",
        scrolled
          ? "border-b border-line bg-canvas/72 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-canvas/40 backdrop-blur-sm",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:border focus:border-line-strong focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-[height] duration-300",
          scrolled ? "h-16" : "h-18",
        )}
      >
        <Link
          href="/"
          aria-label="GrowthYari — home"
          className={cn(
            "shrink-0 rounded-sm transition-[transform,opacity] duration-200 hover:opacity-80",
            // The mark drifts forward slightly, like it is leading the page.
            "hover:-translate-y-0.5",
            mounted ? "navbar-item-in" : "opacity-0",
          )}
          style={{ "--i": "0" } as React.CSSProperties}
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group/nav relative block rounded-sm px-3.5 py-2 text-[14.5px] font-medium",
                      "transition-[color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "hover:-translate-y-0.5",
                      mounted ? "navbar-item-in" : "opacity-0",
                      active ? "text-ink" : "text-body hover:text-ink",
                    )}
                    style={{ "--i": index + 1 } as React.CSSProperties}
                  >
                    {link.label}
                    {link.href === "/workshops" && upcomingWorkshopCount > 0 ? (
                      <span className="ml-1.5 inline-flex size-[18px] items-center justify-center rounded-full bg-neon/15 text-[10px] font-semibold text-lime-text">
                        {upcomingWorkshopCount}
                      </span>
                    ) : null}
                    {/*
                      * The underline is a glow that grows from the centre on
                      * hover as well as on the active page, so the bar responds
                      * to the pointer rather than only reporting state.
                      */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-px h-0.5 origin-center rounded-full",
                        "bg-gradient-to-r from-neon-dim via-neon to-neon-dim",
                        "transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "scale-x-0 opacity-60 group-hover/nav:scale-x-100 group-hover/nav:opacity-100",
                        active
                          ? "scale-x-100 opacity-100 shadow-[0_0_12px_rgba(47,177,136,0.55)]"
                          : "group-hover/nav:shadow-[0_0_12px_rgba(47,177,136,0.45)]",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            "flex items-center gap-2",
            mounted ? "navbar-item-in" : "opacity-0",
          )}
          style={{ "--i": navLinks.length + 1 } as React.CSSProperties}
        >
          <ButtonLink
            href={primaryCta.href}
            size={scrolled ? "sm" : "md"}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Apply now
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="group/menu grid size-10 place-items-center rounded-sm border border-line-strong text-ink transition-[color,border-color,transform,background-color] duration-200 hover:-translate-y-0.5 hover:border-neon/50 hover:text-neon-text lg:hidden"
          >
            {/*
              * The two icons cross-fade and rotate apart rather than swapping,
              * so the toggle reads as a movement instead of a flicker.
              */}
            <span aria-hidden="true" className="relative block size-5">
              <Menu
                className={cn(
                  "absolute inset-0 size-5 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  menuOpen
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 size-5 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/*
        * Mobile sheet. Kept mounted and animated with grid-template-rows rather
        * than toggling `hidden`, so it can grow smoothly. `hidden` is kept as
        * well: it removes the sheet from the accessibility tree and from
        * sequential focus when closed.
      */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden",
          "transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        /* React 19 takes `inert` as a boolean; the attribute is what actually
           pulls the sheet out of the tab order. */
        inert={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "group/mnav relative flex items-center justify-between py-3.5 text-[17px] font-medium tracking-[-0.02em] transition-colors",
                      // The row slides right on hover and dims when inactive, so
                      // the sheet feels like a list that responds, not a menu
                      // that is merely rendered.
                      "pl-3 transition-[padding,opacity,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-4",
                      active ? "text-neon-text" : "text-ink",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-y-1 left-0 w-0.5 origin-center rounded-full bg-neon",
                        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active
                          ? "scale-y-100"
                          : "scale-y-0 group-hover/mnav:scale-y-60",
                      )}
                    />
                    {link.label}
                    {link.href === "/workshops" && upcomingWorkshopCount > 0 ? (
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-neon/15 text-[11px] font-semibold text-lime-text">
                        {upcomingWorkshopCount}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink
            href={primaryCta.href}
            size="lg"
            className="mt-5 w-full"
            onClick={() => setMenuOpen(false)}
          >
            {primaryCta.label}
          </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
