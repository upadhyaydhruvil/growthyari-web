import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { illustrations, type PageRoute } from "@/data/illustrations";
import { cn } from "@/lib/cn";

/**
 * Photo band for /programs. Drives entirely off `data/illustrations.ts`, so
 * swapping an image or a caption is an array edit. Four photos on an lg grid,
 * two across on phones.
 */
export function ProgramPhotos({ page }: { page: PageRoute }) {
  const items = illustrations
    .filter((item) => item.page === page && item.placement !== "background")
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="In the room"
          title="Live sessions, small rooms."
          intro="Real cohorts, real screens, real practice — photos from the program."
        />

        <div
          className={cn(
            "mt-10 grid gap-4 sm:gap-5",
            items.length > 2 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2",
          )}
        >
          {items.map((item, index) => (
            <Reveal key={item.src} delay={index * 60}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Alts and captions below need one desc for each photo. */}
        <p className="mt-6 text-[12.5px] leading-5 text-muted">
          [PLACEHOLDER: Confirm what each of the four photos shows so the caption /
          alt text can be finalised. Every photo above currently carries a
          placeholder description.]
        </p>
      </div>
    </section>
  );
}