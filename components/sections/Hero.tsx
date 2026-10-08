import { ArrowRight, Video } from "lucide-react";
import { Badge, PulseDot } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { HeroShowcase } from "@/components/ui/HeroShowcase";
import { BackgroundImageLayer } from "@/components/ui/FeatureImage";
import { backgroundIllustration } from "@/data/illustrations";
import { primaryAudience, primaryCta, secondaryCta, trustStrip } from "@/data/site";
import { cohortBadge } from "@/data/dates";

/** The site's only background image. Rendered here, faded well back. */
const background = backgroundIllustration();

/**
 * The scrolling strip under the hero.
 *
 * Repeats forever, so the content is duplicated once and the track is shifted
 * -50%. The second copy carries `aria-hidden` — a screen reader should hear the
 * list once, not twice. Items come from `trustStrip` rather than being
 * retyped, so a fact can only ever be stated in one place.
 */
const MARQUEE = [...trustStrip, ...trustStrip];

/**
 * The headline is static, deliberately.
 *
 * It used to inject a rotating word between two fixed spans, and the screen
 * reader fallback dumped every candidate word into the accessible tree at
 * once. Crawlers and link previews read "career., clients., confidence.,
 * proof.career. and stronger businesses." The words were also the only part of
 * the sentence that changed, so the meaning changed with them. One sentence,
 * one reading, no JavaScript required.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      {background ? <BackgroundImageLayer item={background} /> : null}

      {/* Background texture: measurement grid plus two slow neon blooms. */}
      <div aria-hidden="true" className="tech-grid tech-mask absolute inset-0 opacity-80" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift top-[-10rem] right-[-6rem] size-[32rem] bg-neon/10"
      />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow bottom-[-12rem] left-[-8rem] size-[28rem] bg-lime/5"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 py-14 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-7">
            <Badge tone="emerald" className="mb-6">
              <PulseDot className="text-neon-text" />
              {cohortBadge()}
            </Badge>

            <h1 className="text-[38px] leading-[1.06] font-semibold text-ink sm:text-[52px] lg:text-[62px]">
              Learn to sell, communicate and deliver,{" "}
              <span className="relative whitespace-nowrap">
                <span className="glow-text text-neon-text">and leave with proof.</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-neon-dim via-neon to-neon-dim"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
              Live coaching in groups of five, weekly practice reviewed on your real
              recordings, and a 9-piece portfolio a recruiter or client can open. Built
              first for {primaryAudience} — professionals and entrepreneurs take the
              same material.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={secondaryCta.href}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                {secondaryCta.label}
              </ButtonLink>
            </div>

            <p className="mt-6 flex items-center gap-2 text-[13.5px] text-muted">
              <Video className="size-4 shrink-0 text-neon-text" aria-hidden="true" />
              Live online sessions · Around 5–8 hours a week
            </p>
          </div>

          <div className="lg:col-span-5">
            <HeroShowcase facts={[...trustStrip]} />
          </div>
        </div>
      </div>

      <div className="relative border-t border-line bg-panel">
        <div className="group flex overflow-hidden">
          <div className="animate-marquee flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {MARQUEE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-6 px-6 py-3.5 text-[13px] font-medium tracking-[0.01em] whitespace-nowrap text-ink-2"
                  >
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-neon/50" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
