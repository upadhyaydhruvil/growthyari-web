import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coaches, coachesEyebrow, coachesIntro, coachesReady, coachesTitle, type Coach } from "@/data/coaches";
import { cn } from "@/lib/cn";

/**
 * "Your coaches" — names, photos and short backgrounds.
 *
 * Renders nothing at all until `coachesReady` is true, i.e. until every entry
 * in `data/coaches.ts` has been filled in and verified. Placeholder names
 * never reach a visitor: the gate is all-or-nothing rather than per-card.
 *
 * A coach with no photo gets a monogram built from their initials. That is a
 * deliberate choice over a stock portrait — a face on the page that is not
 * the person who will teach you is worse than no face.
 */
function initials(name: string) {
  const parts = name.replace(/[^\p{L}\s.]/gu, "").split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "?";
}

function CoachCard({ coach, index }: { coach: Coach; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 80}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift sm:p-7"
    >
      <div className="flex items-center gap-4">
        {coach.photo ? (
          <Image
            src={coach.photo}
            alt={`${coach.name}, ${coach.role}`}
            width={72}
            height={72}
            className="size-[72px] shrink-0 rounded-lg border border-line object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-[72px] shrink-0 place-items-center rounded-lg border border-neon/25 bg-neon/10 font-display text-[24px] font-semibold tracking-[-0.03em] text-neon-text"
          >
            {initials(coach.name)}
          </span>
        )}

        <div className="min-w-0">
          <h3 className="text-[18px] leading-snug font-semibold tracking-[-0.02em] text-ink">
            {coach.name}
          </h3>
          <p className="label-xs mt-1 text-lime-text">{coach.role}</p>
        </div>
      </div>

      <p className="mt-5 flex-1 text-[14.5px] leading-7 text-body">{coach.background}</p>

      {coach.linkedin ? (
        <a
          href={coach.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className="mt-6 inline-flex items-center gap-1.5 self-start text-[13.5px] font-medium text-neon-text transition-colors duration-200 hover:text-ink"
        >
          <ExternalLink className="size-3.5" aria-hidden="true" />
          {coach.name} on LinkedIn
        </a>
      ) : null}
    </Reveal>
  );
}

export function CoachesSection() {
  if (!coachesReady) return null;

  return (
    <section className="section-pad bg-surface" id="coaches">
      <div className="container-page">
        <SectionHeading
          eyebrow={coachesEyebrow}
          title={coachesTitle}
          intro={coachesIntro}
        />

        <div className={cn("mt-12 grid gap-5", coaches.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} coach={coach} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
