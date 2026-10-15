import type { Metadata } from "next";
import { CalendarCheck, ClipboardCheck, Mail, Send, ShieldCheck, UserCheck } from "lucide-react";
import { RegisterForm } from "@/components/register/RegisterForm";
import { PageHero } from "@/components/sections/PageHero";
import { JourneyRail } from "@/components/ui/visuals/JourneyRail";
import { registerIntro } from "@/data/register";
import { contactEmail } from "@/data/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Register",
  "Apply for the GrowthYari 12-Week Sales & Communication Pilot Batch. A short application — not a payment. We review every application and invite suitable applicants to a short assessment conversation.",
  "/register",
);

const steps = [
  { icon: Send, label: "Apply", note: "Send this short application — about five minutes." },
  { icon: ClipboardCheck, label: "Review", note: "We read every application against batch fit." },
  { icon: CalendarCheck, label: "Assessment", note: "A short conversation if the batch suits you." },
  { icon: UserCheck, label: "Confirmation", note: "We confirm your place in the batch." },
];

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow={registerIntro.eyebrow}
        badge="Applications open"
        title={
          <>
            Apply for the 12-Week{" "}
            <span className="text-neon-text">Pilot Batch.</span>
          </>
        }
        intro={registerIntro.intro}
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* The form */}
            <div className="lg:col-span-7">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-ink sm:text-[28px]">
                Your application
              </h2>
              <p className="mt-3 max-w-lg text-[14.5px] leading-7 text-body">
                All fields marked with an asterisk are required. We only use your answers
                to review your application and contact you about the batch.
              </p>
              <div className="mt-8">
                <RegisterForm />
              </div>
            </div>

            {/* What happens next */}
            <aside className="lg:col-span-5">
              <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
                <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
                  What happens after you apply
                </h2>
                <div className="mt-7">
                  <JourneyRail steps={steps} />
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-sm border border-line bg-canvas p-4">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-neon-text"
                    aria-hidden="true"
                  />
                  <p className="text-[13px] leading-6 text-body">
                    No payment gateway is used here. Nothing is charged and no seat is
                    confirmed until we have spoken with you.
                  </p>
                </div>

                <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
                  <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                  Prefer email?{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-neon-text underline underline-offset-2 hover:text-ink"
                  >
                    {contactEmail}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
