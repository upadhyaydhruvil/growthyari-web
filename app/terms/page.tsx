import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { contactEmail } from "@/data/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Terms",
  "The basic terms for applying to and taking part in the GrowthYari 12-Week Sales & Communication Pilot Batch.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        intro="The basic terms for using this site and applying to the 12-Week Sales & Communication Pilot Batch."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3 rounded-lg border border-amber/25 bg-amber/5 p-5">
              <Info className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
              <p className="text-[13.5px] leading-6 text-ink-2">
                These are plain-language terms, not legal advice. Final wording is pending
                legal review before the batch opens.
              </p>
            </div>

            <div className="mt-10 space-y-9 text-[15px] leading-8 text-body">
              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Applying is not enrolment
                </h2>
                <p className="mt-3">
                  Submitting the registration form is an application. It does not confirm a
                  place and it does not take any payment. A place in the batch is confirmed
                  only after we have reviewed your application and spoken with you.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  What the program is
                </h2>
                <p className="mt-3">
                  The 12-Week Sales &amp; Communication Pilot Batch is practical training in
                  speaking, listening and conversation skills. The proposed curriculum may
                  be adjusted to improve the batch.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  No guaranteed outcomes
                </h2>
                <p className="mt-3">
                  We make no promise of a job, an interview, a placement or a specific
                  result. What you get out of the batch depends on the practice you put in.
                  We do not claim otherwise anywhere on this site.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Your conduct
                </h2>
                <p className="mt-3">
                  We expect people in a batch to treat each other respectfully. We may
                  remove anyone whose behaviour makes the batch worse for others.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Changes
                </h2>
                <p className="mt-3">
                  We may update these terms as the program is finalised. The current version
                  always lives on this page.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Contact
                </h2>
                <p className="mt-3">
                  Questions can go to{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-neon-text underline underline-offset-2 hover:text-ink"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
