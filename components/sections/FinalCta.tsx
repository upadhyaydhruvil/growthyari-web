import { ArrowRight } from "lucide-react";
import { Badge, PulseDot } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/site";

/**
 * Section L (part two) — the closing CTA.
 *
 * The last deep-forest band before the footer, so the page closes on
 * contrast and on a single clear next step. One primary button only: the
 * brief rules out competing CTAs in every section, and the secondary link
 * exists purely for a visitor who wants the process before they commit.
 *
 * The closing line deliberately ends on possibility rather than pressure —
 * no countdown, no seat scarcity, no promise of employment.
 */
export function FinalCta() {
  return (
    <section className="on-forest relative overflow-hidden bg-forest">
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-40 tech-mask" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift absolute -bottom-24 -left-16 size-96 bg-accent/18"
      />

      <div className="container-page relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="solidAccent" className="mb-7">
            <PulseDot className="text-accent-hover" />
            Applications open
          </Badge>

          <h2 className="font-display text-[34px] leading-[1.08] font-medium tracking-[-0.024em] text-ink sm:text-[46px]">
            Your next opportunity deserves more than a{" "}
            <span className="italic text-accent-hover">better-looking resume</span>.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-body sm:text-[17px]">
            Start by understanding where you are today, what you want to achieve, and which skills will
            help you move forward. The first step is a conversation, not a payment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="lg">
              Start Your Career Assessment
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} size="lg" variant="solidGhost">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
