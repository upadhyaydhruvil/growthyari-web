import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * GrowthYari logo.
 *
 * The supplied `growthyari-logo.jpg` was a 4001x4001 JPEG with a large
 * white border and a flat `#2C4736` fill. The artwork has been keyed out
 * and recoloured into transparent PNGs, one per background it is used on.
 *
 * The site is a light warm-ivory theme, so the default is `dark` — the
 * near-black mark is the only variant that reads on ivory. `light` is
 * kept for the forest bands, where a dark mark would disappear.
 */
const sources = {
  dark: "/brand/growthyari-logo-dark.png",
  emerald: "/brand/growthyari-logo-emerald.png",
  lime: "/brand/growthyari-logo-lime.png",
  light: "/brand/growthyari-logo-light.png",
} as const;

export type LogoVariant = keyof typeof sources;

export function LogoMark({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: LogoVariant;
}) {
  return (
    <span className={cn("relative inline-flex size-9 shrink-0", className)}>
      <Image
        src={sources[variant]}
        alt=""
        width={512}
        height={529}
        priority
        className="size-9 object-contain"
      />
    </span>
  );
}

/**
 * The wordmark splits "Growth" and "Yari" so the second half carries the
 * accent. On a light ground that is terracotta; inside a forest band the
 * same class resolves to the light step.
 */
export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: {
  className?: string;
  variant?: LogoVariant;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} />
      {showWordmark ? (
        <span className="font-display text-[20px] leading-none font-medium tracking-[-0.02em] text-ink">
          Growth<span className="text-accent">Yari</span>
        </span>
      ) : null}
    </span>
  );
}
