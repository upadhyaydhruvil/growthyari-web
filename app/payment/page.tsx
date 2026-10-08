import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock, CreditCard, Lock, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { JourneyRail } from "@/components/ui/visuals/JourneyRail";
import { getProgram, programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "Payment",
    "Payment for GrowthYari programs. Online payment is not open yet — you can register interest and we will notify you the moment it goes live.",
    "/payment",
  ),
  // A transactional page with no content of its own should stay out of the index.
  robots: { index: false, follow: true },
};

/** What a live flow would collect. Rendered as a locked preview, not a form. */
const steps = [
  { title: "Choose your program", body: "Group Cohort or 1:1 Accelerator." },
  { title: "Pay securely", body: "UPI, card or net banking via a payment gateway." },
  { title: "Get your seat", body: "Confirmation, invoice and cohort joining details." },
];

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program: requestedSlug } = await searchParams;
  const program = requestedSlug ? getProgram(requestedSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Step 4 of 8"
        title="Confirm your seat"
        badge="After selection"
        intro="Payment sits after the Career Assessment and selection, not before them. Nothing on this page requests card or UPI details until a seat has been confirmed with you."
      />

      <section className="section-pad relative overflow-hidden bg-canvas">
        <div aria-hidden="true" className="tech-grid-fine absolute inset-0 opacity-60 tech-mask" />
        <div
          aria-hidden="true"
          className="glow-orb animate-drift top-[-8rem] right-[-6rem] size-[28rem] bg-neon/8"
        />

        <div className="container-page relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Order summary */}
            <div className="lg:col-span-7">
              <div className="neon-edge relative overflow-hidden rounded-lg border border-line bg-panel p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="scanlines absolute inset-0 opacity-40"
                />

                <div className="relative">
                  <div className="flex items-center gap-2.5 border-b border-line pb-5">
                    <span className="inline-flex size-2 rounded-full bg-amber animate-pulse-dot" />
                    <p className="label-xs text-amber-text">Payment gateway not connected</p>
                  </div>

                  <h2 className="mt-6 text-[22px] font-semibold tracking-[-0.025em] text-ink">
                    Order summary
                  </h2>

                  {program ? (
                    <div className="mt-6 rounded-lg border border-neon/25 bg-neon/5 p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <p className="text-[16px] font-semibold text-ink">{program.name}</p>
                        <p className="font-display text-[26px] font-semibold tracking-[-0.03em] text-ink">
                          {program.price.amount}
                          <span className="ml-2 text-[13px] font-normal text-muted">
                            {program.price.note}
                          </span>
                        </p>
                      </div>
                      <p className="mt-2 text-[13.5px] text-muted">
                        {program.duration} · {program.cohortSize}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 rounded-lg border border-dashed border-line-strong p-5">
                      <p className="text-[15px] font-medium text-ink-2">
                        No program selected
                      </p>
                      <p className="mt-1.5 text-[14px] leading-6 text-body">
                        Pick a program and its price will appear here.
                      </p>
                      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                        {programs.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/payment?program=${item.slug}`}
                            className="inline-flex items-center justify-between gap-3 rounded-sm border border-line bg-surface px-4 py-3 text-[14px] font-medium text-ink transition-colors hover:border-neon/50 hover:bg-surface-2"
                          >
                            {item.name}
                            <span className="text-neon-text">
                              {item.price.amount}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Locked preview of the live flow — every connector is dashed because
                      none of this is available yet. */}
                  <div className="mt-7">
                    <JourneyRail
                      steps={steps.map((step) => ({
                        icon: Lock,
                        label: step.title,
                        note: step.body,
                        pending: true,
                      }))}
                    />
                  </div>

                  {/* Deliberately not a form — there is nothing to submit yet. */}
                  <div className="mt-6 flex items-center gap-2.5 rounded-sm border border-amber/25 bg-amber/5 px-4 py-3.5">
                    <Lock className="size-4 shrink-0 text-amber-text" aria-hidden="true" />
                    <p className="text-[13.5px] leading-6 text-ink-2">
                      No payment can be taken on this page. No card or UPI details are
                      requested, stored or transmitted.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to do instead */}
            <aside className="lg:col-span-5">
              <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-sm border border-amber/30 bg-amber/8 text-amber-text">
                  <CreditCard className="size-4" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  What happens now
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-body">
                  Seats are confirmed by a Career Assessment Call rather than online
                  payment. Tell us which program you want and we will hold a slot and
                  send the payment link the moment it is live.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "No payment is taken now",
                    "We confirm fit before anything is due",
                    "Invoice and receipt once payment opens",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-neon/20"
                      >
                        <Check className="size-2.5 text-ink" strokeWidth={3.5} />
                      </span>
                      <span className="text-[14.5px] leading-6 text-ink-2">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3">
                  <ButtonLink href="/apply" size="lg" className="w-full">
                    <Mail className="size-4" aria-hidden="true" />
                    Apply for the next cohort
                  </ButtonLink>
                  <ButtonLink href="/contact" size="lg" variant="outline" className="w-full">
                    Ask a question first
                  </ButtonLink>
                </div>

                <p className="mt-5 flex items-start gap-2 text-[13px] leading-6 text-muted">
                  <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  Applications come before payment, not the other way round.
                </p>
              </div>

              <ButtonLink
                href="/programs"
                variant="ghost"
                className="mt-4 w-full"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to pricing
                <ArrowRight className="sr-only" aria-hidden="true" />
              </ButtonLink>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
