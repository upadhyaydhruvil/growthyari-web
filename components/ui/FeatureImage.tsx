import Image from "next/image";
import type { Illustration } from "@/data/illustrations";
import { cn } from "@/lib/cn";

/**
 * One image size, used everywhere. An earlier pass had a full-column "wide"
 * variant and a half-column one; the size difference read as inconsistent
 * rather than hierarchical, so there is now a single tile at `aspect-[4/3]`
 * sitting in a two-up grid.
 */
export function FeatureImage({
  item,
  priority = false,
  className,
}: {
  item: Illustration;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-line bg-surface",
        "transition-[transform,box-shadow,border-color] duration-300",
        "hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-surface-2">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33rem"
          className="object-cover"
        />
      </div>

      <figcaption className="flex items-center gap-3 px-5 py-4 sm:px-6">
        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-sm border border-line bg-surface-2 text-ink-2"
        >
          <item.icon className="size-4" strokeWidth={1.9} />
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold tracking-[-0.02em] text-ink">
            {item.label}
          </span>
          <span className="mt-0.5 block text-[12.5px] text-muted">
            Illustrative example of the format, not student work.
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * The only background image layer on the site. Rendered once, inside the hero,
 * faded well back so the heading keeps its contrast against the light green.
 */
export function BackgroundImageLayer({
  item,
  opacity = "soft",
}: {
  item: Illustration;
  opacity?: "soft" | "strong";
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-2/5 opacity-60 sm:w-[38%]">
        <Image
          src={item.src}
          alt=""
          fill
          priority
          sizes="38vw"
          className={cn(
            "object-cover object-center",
            opacity === "soft" ? "opacity-[0.16]" : "opacity-[0.24]",
          )}
        />
      </div>
      {/* Scrim keeps the hero text well clear of AA over the illustration. */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/92 to-surface/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent" />
    </div>
  );
}