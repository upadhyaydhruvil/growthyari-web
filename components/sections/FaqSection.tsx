import { MessageCircleQuestion } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { primaryCta } from "@/data/site";

/**
 * Section L (part one) — the FAQ.
 *
 * The accordion does the work; the supporting column does the trust work.
 * Alongside the "ask us anything" card there is an explicit "what we do not
 * claim" note, because an honest list of what a program will not do is a
 * more credible trust signal than any testimonial this project does not
 * have.
 */
export function FaqSection() {
  return (
    <section className="section-pad bg-canvas" id="faq" aria-labelledby="faq-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={<span id="faq-heading">Questions people actually ask.</span>}
            />

            <div className="mt-8 rounded-lg border border-line bg-surface-3 p-6">
              <MessageCircleQuestion className="size-5 text-accent-hover" strokeWidth={1.9} aria-hidden="true" />
              <p className="mt-4 text-[14.5px] leading-[1.7] text-body">
                Still unsure? Apply and use the short assessment conversation to ask us anything — there
                is no charge for it and no obligation afterwards.
              </p>
              <ButtonLink href={primaryCta.href} size="sm" className="mt-5">
                {primaryCta.label}
              </ButtonLink>
            </div>

            <div className="mt-4 rounded-lg border border-line bg-surface-3 p-6">
              <h3 className="label-xs text-muted">What we do not claim</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-body">
                No guaranteed job, placement or interview. No fabricated success stories, and no fake
                urgency. If the batch cannot help you, the assessment call is where we say so.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </div>
    </section>
  );
}
