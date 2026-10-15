import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyPoints } from "@/data/pilot";

/** Six honest reasons to choose this batch. No invented claims or numbers. */
export function WhySection() {
  return (
    <section className="section-pad bg-canvas" id="why">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why GrowthYari"
              title="Built to be practised, not just understood."
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {whyPoints.map((point, index) => (
                <Reveal
                  as="li"
                  key={point}
                  delay={index * 50}
                  className="flex items-start gap-3 border-t border-line pt-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neon/20 text-neon-text"
                  >
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] leading-7 text-ink-2">{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
