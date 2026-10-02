import { MessageCircleQuestion } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { primaryCta } from "@/data/site";

export function FaqSection() {
  return (
    <section className="section-pad bg-surface" id="faq">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions, answered." />
            <div className="mt-8 rounded-lg border border-line bg-surface p-6">
              <MessageCircleQuestion
                className="size-5 text-lime-text"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              <p className="mt-4 text-[14.5px] leading-7 text-body">
                Still unsure? Apply and use the Career Assessment Call to ask us anything.
              </p>
              <ButtonLink href={primaryCta.href} size="sm" className="mt-5">
                {primaryCta.label}
              </ButtonLink>
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
