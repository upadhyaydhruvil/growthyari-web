import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import type { LegalPage } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

/**
 * Shared renderer for the three legal pages.
 *
 * `[PLACEHOLDER: …]` markers are highlighted rather than hidden. They are
 * deliberate: a refund window or a registered entity name cannot be invented,
 * and a blank that looks like finished prose is more dangerous than one that
 * visibly needs filling in.
 */
export function legalMetadata(page: LegalPage): Metadata {
  return pageMetadata(page.title, page.description, `/${page.slug}`);
}

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        badge={`Updated ${page.updated}`}
        title={page.title}
        intro={page.intro}
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="sticky top-24 rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2.5">
                  <Scale className="size-4 text-lime-text" aria-hidden="true" />
                  <p className="label-xs text-muted">On this page</p>
                </div>
                <ol className="mt-4 space-y-2.5">
                  {page.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${section.heading
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-|-$/g, "")}`}
                        className="text-[13.5px] leading-5 text-ink-2 transition-colors duration-200 hover:text-neon-text"
                      >
                        {index + 1}. {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="max-w-3xl divide-y divide-line border-y border-line">
                {page.sections.map((section, index) => {
                  const id = section.heading
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");

                  return (
                    <section key={section.heading} id={id} className="py-8 scroll-mt-24">
                      <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 text-[20px] font-semibold tracking-[-0.025em] text-ink sm:text-[22px]">
                        {section.heading}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-4 text-[15px] leading-7 text-body">
                          <PlaceholderText text={paragraph} />
                        </p>
                      ))}

                      {section.list ? (
                        <ul className="mt-4 space-y-3">
                          {section.list.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-neon"
                              />
                              <span className="text-[15px] leading-7 text-body">
                                <PlaceholderText text={item} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  );
                })}
              </div>

              <div className="mt-10 flex items-start gap-3 rounded-lg border border-line bg-panel p-5">
                <p className="text-[14px] leading-6 text-body">
                  Anything on this page you disagree with, raise before you pay — the
                  contact page is the fastest route, and we would rather change the
                  terms than have them surprise you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Splits a paragraph on `[PLACEHOLDER: …]` and marks each match visibly. */
function PlaceholderText({ text }: { text: string }) {
  const parts = text.split(/(\[PLACEHOLDER:[^\]]*\])/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[PLACEHOLDER:") ? (
          <mark
            key={index}
            className="rounded-sm bg-amber/15 px-1.5 py-0.5 font-medium text-amber-text decoration-amber/40"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}
