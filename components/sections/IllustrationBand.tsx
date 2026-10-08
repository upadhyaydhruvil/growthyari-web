import { FeatureImage } from "@/components/ui/FeatureImage";
import { Reveal } from "@/components/ui/Reveal";
import { illustrations, type PageRoute } from "@/data/illustrations";

/**
 * Renders whichever illustrations a page has been assigned. Every image is the
 * same size and sits in one two-up grid, so pages carry one or two images at
 * identical scale rather than a hero-and-thumbnails mix.
 *
 * Pages are driven entirely by `data/illustrations.ts`, so moving an image
 * between pages is an array edit. A page with no images assigned renders
 * nothing at all rather than an empty band.
 */
export function IllustrationBand({
  page,
  eyebrow,
  title,
  intro,
  note,
}: {
  page: PageRoute;
  eyebrow: string;
  title: string;
  intro?: string;
  note?: string;
}) {
  const items = illustrations
    .filter((item) => item.page === page && item.placement !== "background")
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  if (items.length === 0) return null;

  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="label-xs text-lime-text">{eyebrow}</p>
          <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-ink sm:text-[34px]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-[15px] leading-7 text-body">{intro}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.src} delay={index * 70} className="h-full">
              <FeatureImage item={item} priority={index === 0} className="h-full" />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[13px] leading-6 text-muted">
          {note ??
            "Illustrative example of the format, not student work."}
        </p>
      </div>
    </section>
  );
}