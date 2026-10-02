import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkshopCard } from "@/components/cards/WorkshopCard";
import { upcomingWorkshops } from "@/data/workshops";

const MAX_PREVIEW = 2;

export function WorkshopsPreview({ limit = MAX_PREVIEW }: { limit?: number }) {
  const preview = upcomingWorkshops.slice(0, limit);
  if (preview.length === 0) return null;

  return (
    <section className="section-pad bg-surface" id="workshops">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Upcoming workshops"
            title="Short live sessions, one skill at a time."
            intro="Single-topic workshops for people who want one thing fixed this month, not a full program."
            className="max-w-xl"
          />
          <ButtonLink href="/workshops" variant="outline" className="shrink-0 self-start sm:self-auto">
            All workshops
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {preview.map((workshop, index) => (
            <Reveal key={workshop.id} delay={index * 80}>
              <WorkshopCard workshop={workshop} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
