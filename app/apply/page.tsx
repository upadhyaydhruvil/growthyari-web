import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply/ApplyForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { programOptions, workshopOptions } from "@/data/apply";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Apply",
  "Apply for the next GrowthYari cohort or register for a workshop. A 1:1 Career Assessment call comes first — payment is arranged only after selection.",
  "/apply",
);

/**
 * The single destination for every "Apply" and "Register" button.
 *
 * Both intents share one form because the fields are the same; only the
 * preselected choice differs. `?program=` and `?workshop=` come from the
 * buttons, so a visitor lands with their choice already made rather than
 * being asked which program they clicked on.
 *
 * There is no path from this page to checkout. See `data/process.ts`.
 */
export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string; workshop?: string }>;
}) {
  const { program = "", workshop = "" } = await searchParams;

  const validWorkshop = workshopOptions.some((option) => option.value === workshop);
  const validProgram = programOptions.some((option) => option.value === program);

  /**
   * Mode follows the *validated* workshop, not the raw query string. A link to
   * a session that has since been and gone must not open a registration form
   * that has nothing to register for.
   */
  const mode = validWorkshop ? "register" : "apply";

  /**
   * Someone followed a Register link for a session that is no longer listed.
   * Say so instead of silently dropping the choice.
   */
  const staleWorkshop = workshop !== "" && !validWorkshop;

  const steps = processSteps.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={mode === "register" ? "Register" : "Apply"}
        badge="No payment at this stage"
        title={
          mode === "register" ? (
            <>
              Save your seat for a{" "}
              <span className="text-neon-text">workshop.</span>
            </>
          ) : (
            <>
              Tell us where you want to{" "}
              <span className="text-neon-text">get to.</span>
            </>
          )
        }
        intro="A short form, then a 1:1 Career Assessment call. We confirm fit before anything is due — payment comes after selection, never before it."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow={mode === "register" ? "Workshop registration" : "Application"}
                title={mode === "register" ? "Register for your session" : "Apply for the next cohort"}
                intro="Everything you send here goes straight to the team."
              />
              {staleWorkshop ? (
                <p className="mt-5 rounded-lg border border-amber/35 bg-amber/10 px-4 py-3 text-[14px] leading-6 text-body">
                  That session is no longer listed. Pick another one below, or send
                  us a note and we&apos;ll tell you when it runs again.
                </p>
              ) : null}
              <div className="mt-8">
                <ApplyForm
                  mode={mode}
                  program={validProgram ? program : ""}
                  workshop={validWorkshop ? workshop : ""}
                />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
                <h2 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  What happens next
                </h2>
                <ol className="mt-6 space-y-5">
                  {steps.map((step) => (
                    <li key={step.number} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="grid size-8 shrink-0 place-items-center rounded-sm border border-line bg-panel text-ink-2"
                      >
                        <step.icon className="size-4" strokeWidth={1.9} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-medium text-ink">
                          <span className="mr-2 font-mono text-[11px] text-muted">
                            {step.number}
                          </span>
                          {step.title}
                        </p>
                        <p className="mt-1 text-[14px] leading-6 text-body">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 rounded-lg border border-amber/30 bg-amber/5 p-5">
                <p className="text-[14px] leading-6 text-ink-2">
                  No card, UPI or bank details are collected on this site. You are never
                  charged for applying or registering.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before you apply"
            title="The full path."
            intro="Eight steps, in order. Payment sits at four."
          />
          <ol className="mt-11 grid gap-x-16 gap-y-0 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={(index % 2) * 70}
                className="group relative flex gap-5 border-t border-line py-7"
              >
                <div className="flex flex-col items-center">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink-2 transition-colors duration-300 group-hover:border-neon/25 group-hover:bg-neon/10 group-hover:text-neon-text"
                  >
                    <step.icon className="size-4" strokeWidth={1.9} />
                  </span>
                </div>
                <div className="pt-1">
                  <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted">
                    {step.number}
                  </p>
                  <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-[14.5px] leading-6 text-body">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
