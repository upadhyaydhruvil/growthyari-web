import type { Metadata } from "next";
import { CalendarDays, Repeat, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WorkshopCard } from "@/components/cards/WorkshopCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { IllustrationBand } from "@/components/sections/IllustrationBand";
import { PageHero } from "@/components/sections/PageHero";
import { DemoDataNotice } from "@/components/ui/DemoDataNotice";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  hasDemoWorkshops,
  pastWorkshops,
  upcomingWorkshops,
} from "@/data/workshops";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Upcoming Workshops",
  "Short live online GrowthYari workshops on communication, cold calling and job applications. One skill at a time, with a working coach.",
  "/workshops",
);

const whyAttend: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Target,
    title: "One skill, one session",
    body: "Each workshop fixes a single thing you can use the same week. No syllabus, no module list.",
  },
  {
    icon: Repeat,
    title: "Live, with a coach",
    body: "Sessions are live online, so you get feedback on your own situation rather than a recording.",
  },
  {
    icon: CalendarDays,
    title: "Fits around your week",
    body: "Short evening sessions. If a full program does not fit right now, start with one workshop.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Upcoming workshops"
        badge={upcomingWorkshops.length > 0 ? `${upcomingWorkshops.length} sessions listed` : undefined}
        title={
          <>
            Fix one skill.{" "}
            <span className="text-neon-text">This week.</span>
          </>
        }
        intro="Short live online sessions on communication, cold calling and job applications — taught by the same coaches who run the full GrowthYari program."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          {hasDemoWorkshops && upcomingWorkshops.length > 0 ? (
            <div className="mb-11">
              <DemoDataNotice />
            </div>
          ) : null}

          {upcomingWorkshops.length > 0 ? (
            <>
              <SectionHeading
                eyebrow="Schedule"
                title="Upcoming sessions"
                intro="Register for a seat — a Career Assessment call can be booked alongside it."
              />

              <div className="mt-11 grid gap-6 lg:grid-cols-2">
                {upcomingWorkshops.map((workshop, index) => (
                  <Reveal key={workshop.id} delay={index * 70}>
                    <WorkshopCard workshop={workshop} className="h-full" />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-line bg-surface p-8 text-center sm:p-12">
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                No sessions scheduled yet
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-7 text-body">
                New workshop dates are published as cohorts are confirmed. Tell us what
                you want fixed and we&apos;ll let you know when the next one opens.
              </p>
              <div className="mt-6 flex justify-center">
                <ButtonLink href="/contact">Tell us what you need</ButtonLink>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why attend"
            title="A workshop before a program."
            intro="Most people start with one session, then decide whether the full track is worth it."
          />

          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {whyAttend.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full rounded-lg border border-line bg-surface p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-sm border border-line bg-panel text-ink"
                  >
                    <item.icon className="size-4.5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archive. Hidden entirely when there is nothing genuine to show — an
          empty "Already been run" heading over placeholder records would claim
          sessions ran that never did. */}
      {pastWorkshops.length > 0 ? (
        <section className="section-pad bg-surface">
          <div className="container-page">
            <SectionHeading eyebrow="Past workshops" title="Already been run." />
            <div className="mt-11 grid gap-6 lg:grid-cols-2">
              {pastWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} className="h-full" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <IllustrationBand
        page="/workshops"
        eyebrow="Live and interactive"
        title="A workshop, not a webinar."
        intro="You bring a real situation and leave with the thing you needed to fix it."
      />

      <FinalCta />
    </>
  );
}
