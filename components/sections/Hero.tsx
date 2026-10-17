import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, PulseDot } from "@/components/ui/Badge";
import { pilotStatus, site } from "@/data/site";
import {
  journeyEyebrow,
  journeyHeadlineLast,
  journeyHeadlineLines,
  journeyImage,
  journeyMicrocopy,
  journeyPrimaryCta,
  journeySecondaryCta,
  journeyStory,
} from "@/data/journey-story";
import { cn } from "@/lib/cn";

/**
 * Section A — the hero, as a student transformation story.
 *
 * The image is the full-bleed background of the whole section, with the
 * copy sitting on top of it in the left column. There is no separate
 * artwork panel: an earlier version ran the picture in its own grid
 * column, which capped its height against the copy and made it read as
 * an illustration parked next to the text rather than as the ground the
 * text is standing on.
 *
 * THE SCRIM MATTERS. The photograph is behind every word here, so the
 * text colours only hold if the background under them is predictable —
 * and it is not, because the artwork is an image I cannot inspect. So
 * the left ~62% is covered by an opaque-to-transparent wash in the
 * section's own ivory, which means the type is effectively still dark
 * on ivory and every contrast ratio calculated for the old solid-
 * background hero still holds. The right side stays clear so the
 * picture reads.
 *
 * On small screens the wash is heavier and covers more, because the
 * copy runs full-width there and there is no clear zone to retreat to.
 *
 * The headline is set as four lines on purpose. The repetition only
 * carries if each "Same …" lands on its own, and the last line has to
 * arrive late enough to register as a turn. It is an array in the data
 * for exactly that reason: a single string would rewrap into a paragraph
 * and lose the rhythm.
 *
 * PALETTE: this section is wrapped in `.hero-editorial`, which overrides
 * the colour custom properties for this section only — warmer ivory,
 * deeper forest, brighter burnt orange. Nothing outside the hero moves.
 * The orange is never used for small text because it fails AA on ivory.
 *
 * MOTION: copy fades and rises on the existing `hero-in` stagger. The
 * background fades in behind it. Every animation is listed in the
 * prefers-reduced-motion block, so they collapse to a static frame.
 *
 * The background image is `priority`d because it is above the fold on
 * every device; `sizes="100vw"` tells the browser to fetch a viewport-
 * width rendition rather than the 1672px original.
 *
 * Server-rendered on purpose. No pointer tracking, no parallax: a hero
 * that only looks right once the pointer moves is a hero most visitors
 * never see properly.
 */
export function Hero() {
  return (
    <section className="hero-editorial paper-grain relative isolate overflow-hidden border-b border-line bg-canvas">
      {/*
        * Full-bleed background photograph. `alt=""` because it is
        * decorative — every claim on this screen is made by the copy
        * beside it, so describing the picture to a screen reader would
        * add noise, not information.
        *
        * `-z-10` keeps it behind the content but still inside this
        * section's stacking context (`isolate`), so it cannot bleed
        * under the navbar or the section below.
        */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={journeyImage.src}
          alt={journeyImage.alt}
          fill
          priority
          sizes="100vw"
          className="hero-visual-in object-cover object-center"
        />
      </div>

      {/*
        * The scrim. Two layers doing different jobs:
        *
        *  1. A horizontal wash, fully opaque across the left half and
        *     only fading out past it, so the copy sits on flat ivory and
        *     the picture is still visible on the right. The stop used to
        *     be earlier and thinner, which let the photograph show
        *     through behind the paragraph and made it hard to read —
        *     the contrast of the type was fine, the contrast of the type
        *     *against the image* was not.
        *  2. A vertical wash over the whole frame, which keeps the top
        *     edge from fighting the sticky navbar and stops the bottom
        *     edge from meeting the next section at full contrast.
        *
        * Both are `pointer-events-none` so they never intercept a click
        * aimed at a button underneath.
        */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-canvas)_0%,var(--color-canvas)_38%,color-mix(in_srgb,var(--color-canvas)_92%,transparent)_55%,color-mix(in_srgb,var(--color-canvas)_45%,transparent)_72%,transparent_92%)] lg:bg-[linear-gradient(to_right,var(--color-canvas)_0%,var(--color-canvas)_32%,color-mix(in_srgb,var(--color-canvas)_90%,transparent)_50%,color-mix(in_srgb,var(--color-canvas)_35%,transparent)_68%,transparent_88%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-canvas/70 via-canvas/35 to-canvas/75 lg:from-canvas/35 lg:via-transparent lg:to-canvas/50"
      />

      <div className="container-page relative">
        <div className="grid items-center section-pad lg:grid-cols-12">
          {/* ---------------------------------------------------------- Copy */}
          <div className="min-w-0 lg:col-span-7 lg:pr-8">
            <div
              className="hero-in flex flex-wrap items-center gap-3"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <Badge tone="emerald">
                <PulseDot className="text-accent" />
                {pilotStatus.badge}
              </Badge>
              <span className="label-xs text-muted">{site.descriptor}</span>
            </div>

            <p
              className="hero-in label-xs mt-7 flex items-center gap-3 text-neon-text"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
              {journeyEyebrow}
            </p>

            {/*
              * Four lines, each its own block, so the repetition keeps its
              * rhythm at every width instead of rewrapping into a paragraph.
              * The final line carries the emphasis and the thin orange rule.
              */}
            <h1
              className="hero-in mt-5 font-display text-[40px] leading-[1.03] font-medium tracking-[-0.028em] text-ink sm:text-[52px] lg:text-[62px]"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              {journeyHeadlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {journeyHeadlineLast.lead}{" "}
                <span className="relative inline-block italic text-forest">
                  {journeyHeadlineLast.emphasis}
                  {/*
                    * A thin burnt-orange rule under the turn. Inline SVG
                    * rather than a border so it can taper at both ends the
                    * way a drawn line does, and `preserveAspectRatio="none"`
                    * so it stretches with the phrase at any width.
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
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <div
              className="hero-in mt-7 max-w-2xl space-y-4 text-[16.5px] leading-[1.75] text-body sm:text-[17.5px]"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              <p>
                {journeyStory.setup}{" "}
                <span className="font-medium text-ink">{journeyStory.turn}</span>
              </p>
              <p className="border-l-2 border-accent/45 pl-4 font-display text-[19px] leading-[1.55] text-ink-2 italic sm:text-[21px]">
                &ldquo;{journeyStory.quote}&rdquo;
              </p>
              <p className="font-medium text-ink">{journeyStory.change}</p>
            </div>

            <div
              className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <ButtonLink href={journeyPrimaryCta.href} size="lg">
                {journeyPrimaryCta.label}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
              </ButtonLink>
              <ButtonLink href={journeySecondaryCta.href} size="lg" variant="outline">
                {journeySecondaryCta.label}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
              </ButtonLink>
            </div>

            <ul
              className="hero-in mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              {journeyMicrocopy.map((item, index) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                  <span
                    className={cn(
                      "text-[14.5px]",
                      // The disclaimer reads as meta rather than as a claim,
                      // so it does not sit in the same weight as the others.
                      item === "No placement guarantee" ? "text-muted" : "text-ink-2",
                    )}
                  >
                    {item}
                  </span>
                  {index < journeyMicrocopy.length - 1 ? (
                    <span aria-hidden="true" className="ml-3 h-3 w-px bg-line" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
