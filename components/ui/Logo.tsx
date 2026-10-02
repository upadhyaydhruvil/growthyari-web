import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * GrowthYari logo.
 *
 * The supplied `growthyari-logo.jpg` was a 4001x4001 JPEG with a large
 * white border and a flat `#2C4736` fill. The artwork has been keyed out
 * and recoloured into transparent PNGs, one per background it is used on.
 *
 * The site is now a dark theme, so the default is `light`. The near-black
 * `dark` variant is kept only for the white cards, where a dark mark is the
 * only thing that reads — against the `#101a16` base it would be invisible.
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
  variant = "light",
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

export function Logo({
  className,
  variant = "light",
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
        <span className="font-display text-[19px] leading-none font-semibold tracking-[-0.03em] text-ink">
          Growth
          <span className="text-neon-text">Yari</span>
        </span>
      ) : null}
    </span>
  );
}
