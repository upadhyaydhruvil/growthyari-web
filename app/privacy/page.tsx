import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { contactEmail } from "@/data/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Privacy",
  "How GrowthYari handles the information you submit through the registration and contact forms.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="A plain-language summary of what we collect and why. This describes what the website actually does today."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3 rounded-lg border border-amber/25 bg-amber/5 p-5">
              <Info className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
              <p className="text-[13.5px] leading-6 text-ink-2">
                This is a plain-language policy, not legal advice. Final wording is pending
                legal review before the batch opens.
              </p>
            </div>

            <div className="mt-10 space-y-9 text-[15px] leading-8 text-body">
              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  What we collect
                </h2>
                <p className="mt-3">
                  When you submit the registration form, we receive the details you enter:
                  your name, email, mobile number, college or institution, current
                  year/status, city, availability, your main challenge, what you want to
                  improve, and your agreement to this policy. The contact form collects
                  your name, email, optional phone, a subject and your message.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Why we collect it
                </h2>
                <p className="mt-3">
                  We use your information only to review your application or enquiry and to
                  contact you about the batch. We do not use it for advertising, and we do
                  not sell it.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  How it is processed
                </h2>
                <p className="mt-3">
                  Form submissions are delivered to us by email through our email service
                  provider. The submission reaches our inbox and is not stored in a public
                  database. Our hosting provider processes standard technical logs, such as
                  IP address, to serve the site and to rate-limit abuse.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Your choices
                </h2>
                <p className="mt-3">
                  You can ask us to delete the details you submitted, or to stop contacting
                  you, at any time by emailing{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-neon-text underline underline-offset-2 hover:text-ink"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  Contact
                </h2>
                <p className="mt-3">
                  Questions about this policy can go to{" "}
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
