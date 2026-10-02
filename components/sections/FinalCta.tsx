import { ArrowRight } from "lucide-react";
import { Badge, PulseDot } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/site";

export function FinalCta() {
  return (
    <section className="bg-surface pb-20 sm:pb-28">
      <div className="container-page">
        <div className="neon-edge relative overflow-hidden rounded-xl bg-panel px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="tech-grid absolute inset-0 opacity-70"
          />
          <div
            aria-hidden="true"
            className="glow-orb animate-drift -bottom-24 -left-16 size-96 bg-neon/14"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Badge tone="solidAccent" className="mb-7">
              <PulseDot className="text-lime-text" />
              Applications open
            </Badge>

            <h2 className="text-[32px] leading-[1.1] font-semibold text-ink sm:text-[44px]">
              Your career growth starts with{" "}
              <span className="glow-text-lime text-lime-text">one decision.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-[16px]">
              Cohort seats are capped at five. Apply now and we&apos;ll invite you to a
              Career Assessment Call.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href} size="lg" variant="solid">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={secondaryCta.href} size="lg" variant="solidGhost">
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
