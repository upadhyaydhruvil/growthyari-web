import type { Metadata } from "next";
import { AtSign, CalendarCheck, ClipboardCheck, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JourneyRail } from "@/components/ui/visuals/JourneyRail";
import { contactChannels, contactResponse } from "@/data/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Talk to GrowthYari. Send an enquiry about the next cohort, ask about a workshop, or book a 1:1 Career Assessment call.",
  "/contact",
);

const channelIcons: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  linkedin: AtSign,
  address: MapPin,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        badge="Applications open"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="text-neon-text">where you&apos;re stuck.</span>
          </>
        }
        intro="Tell us your background and what you want to change. Every applicant gets a 1:1 Career Assessment call — it takes about three minutes to send your side of it."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: channels + expectations */}
            <div className="lg:col-span-5">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-ink sm:text-[28px]">
                Direct channels
              </h2>
              <p className="mt-3 max-w-md text-[14.5px] leading-7 text-body">
                GrowthYari does not publish an email address, phone number, office or
                social profiles at the moment. The enquiry form is the way in — it goes
                to the team directly.
              </p>

              <ul className="mt-9 divide-y divide-line border-y border-line">
                {contactChannels.map((channel) => {
                  const Icon = channelIcons[channel.id] ?? Mail;
                  const hasValue = channel.value !== null;

                  return (
                    <li key={channel.id} className="flex items-start gap-4 py-5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink-2"
                      >
                        <Icon className="size-4" strokeWidth={1.9} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-medium text-ink">
                          {channel.label}
                        </p>
                        {hasValue && channel.href ? (
                          <a
                            href={channel.href}
                            className="mt-1 block truncate text-[14.5px] text-neon-text transition-colors hover:text-neon-text"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <p
                            className={
                              hasValue
                                ? "mt-1 text-[14.5px] text-ink-2"
                                : "mt-1 text-[14px] text-muted"
                            }
                          >
                            {channel.value ?? channel.fallback}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-9 rounded-lg border border-line bg-surface p-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-neon-text" aria-hidden="true" />
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {contactResponse.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <JourneyRail
                    steps={contactResponse.steps.map((step, index) => ({
                      icon: [Send, ClipboardCheck, CalendarCheck][index] ?? Send,
                      label: `Step ${index + 1}`,
                      note: step,
                    }))}
                  />
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Enquiry"
                title="Send us a message"
                intro="Takes about three minutes. Your responses help us tailor the assessment call."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
