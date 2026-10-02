import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/cards/PricingCard";
import { programs } from "@/data/programs";

export function PricingSection() {
  return (
    <section className="section-pad bg-surface" id="pricing">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Pricing"
            title="One program. Two ways in."
            intro="Next batch begins 2 August. Seats are limited to 5 per cohort."
            className="max-w-xl"
          />
          <ButtonLink href="/programs" variant="outline" className="shrink-0 self-start sm:self-auto">
            Compare both
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-11 grid items-start gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 90}>
              <PricingCard program={program} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
