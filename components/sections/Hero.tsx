import { ArtefactPlate } from "@/components/ui/ArtefactPlate";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, PulseDot } from "@/components/ui/Badge";
import { heroMicrocopy, pilotStatus, primaryCta, secondaryCta, site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Section B — the hero.
 *
 * Deliberately not a wall of text. The headline carries the emotional
 * insight, the supporting paragraph earns the CTAs, and the right-hand
 * composition shows the shape of the work rather than describing it.
 *
 * The emphasis on "more than your CV can show" is a hand-drawn terracotta
 * swash rather than a gradient or a colour change — the one piece of
 * ornament on the page, spent where the brand argument actually lives.
 *
 * Server-rendered on purpose. The old hero used a pointer-tracked parallax
 * field; the rebrand replaces that with a calm editorial composition and a
 * staggered load-in, because the brief rules out distracting cursor effects
 * and because a hero that only looks right once the pointer moves is a hero
 * most visitors never see properly.
 */
export function Hero() {
  return (
    <section className="paper-grain relative isolate overflow-hidden border-b border-line bg-canvas">
      {/* Warm wash + faint ruled grid. Both decorative. */}
      <div aria-hidden="true" className="hero-aurora animate-aurora absolute inset-0 -z-10" />
      <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10 opacity-70 tech-mask" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow absolute top-[-10rem] right-[-8rem] -z-10 size-[30rem] bg-sand/70"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* ---------------------------------------------------------- Copy */}
          <div className="lg:col-span-7 lg:pr-6">
            <div className="hero-in flex flex-wrap items-center gap-3" style={{ "--i": 0 } as React.CSSProperties}>
              <Badge tone="emerald">
                <PulseDot className="text-accent" />
                {pilotStatus.badge}
              </Badge>
              <span className="label-xs text-muted">{site.descriptor}</span>
            </div>

            <h1
              className="hero-in mt-7 font-display text-[40px] leading-[1.02] font-medium tracking-[-0.028em] text-ink sm:text-[56px] lg:text-[68px]"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              You&apos;re capable of{" "}
              <span className="relative inline-block italic text-forest">
                more than your CV can show
                {/*
                  * The swash is an inline SVG rather than a border so it can
                  * taper at both ends the way a drawn line does. Fixed
                  * viewBox, `preserveAspectRatio="none"` so it stretches with
                  * the phrase at any width.
                  */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-accent"
                >
                  <path
                    d="M2 8.5C58 3.2 142 1.6 298 5.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p
              className="hero-in mt-8 max-w-xl text-[17px] leading-[1.75] text-body sm:text-[18.5px]"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              You&apos;ve spent years learning, building and trying. But when an opportunity arrives,
              can you explain your work, communicate your value and show what you can actually do?
              GrowthYari helps you turn what you know into skills you can demonstrate.
            </p>

            <div
              className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href={secondaryCta.href} size="lg" variant="outline">
                {secondaryCta.label}
              </ButtonLink>
            </div>

            <ul
              className="hero-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              {heroMicrocopy.map((item, index) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                  <span className="text-[14.5px] text-ink-2">{item}</span>
                  {index < heroMicrocopy.length - 1 ? (
                    <span aria-hidden="true" className="ml-3 h-3 w-px bg-line" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------------- Editorial composition */}
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}

/**
 * The right-hand composition: three illustrative artefact plates, layered
 * and slightly rotated, with a week-one → week-twelve marker between them.
 *
 * Everything in here is labelled illustrative. It shows the *shape* of
 * what a learner produces, because there are no real recordings or
 * documents in this project to show honestly.
 */
function HeroComposition() {
  return (
    <div className="hero-in lg:col-span-5" style={{ "--i": 3 } as React.CSSProperties}>
      <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
        {/* A ruled ivory panel sits behind the plates, like a desk. */}
        <div
          aria-hidden="true"
          className="depth-2 absolute inset-x-6 inset-y-8 rounded-xl border border-line bg-surface-3 tech-grid"
        />

        <div className="relative space-y-4">
          <ArtefactPlate
            kind="audio"
            name="Cold call · week 6"
            className="depth-1 -rotate-[1.2deg] transition-transform duration-500 hover:rotate-0"
          />

          <div className="relative z-10 flex items-center gap-3 pl-8">
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
            <span className="label-xs rounded-full border border-line bg-card px-3 py-1.5 text-muted">
              Twelve weeks later
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ArtefactPlate
              kind="document"
              name="Resume · draft 3"
              compact
              className="depth-1 translate-y-1 rotate-[1.4deg] transition-transform duration-500 hover:rotate-0"
            />
            <ArtefactPlate
              kind="reflection"
              name="Journal · week 9"
              compact
              className="depth-1 -translate-y-1 rotate-[-1.8deg] transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </div>

      <p className={cn("mt-5 text-center text-[13px] text-muted lg:text-left")}>
        Illustrative examples. GrowthYari does not publish learner recordings or documents.
      </p>
    </div>
  );
}
