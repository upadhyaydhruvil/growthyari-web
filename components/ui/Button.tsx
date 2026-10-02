import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "outline"
  | "ghost"
  | "solid"
  | "solidGhost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[-0.01em] " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-45";

/*
 * Text colour on a fill is decided by contrast, not by taste. The dark-theme
 * emerald #2fb188 is bright enough to carry the dark canvas text at 6.57:1,
 * where white would only reach 2.5:1 and fail. Lime #b6e05a carries the same
 * dark text at 12.6:1.
 *
 * So both filled variants use `text-canvas`. If you ever darken `--color-neon`
 * back toward #177c5d, this has to flip to white to stay above 4.5:1.
 */
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-neon text-canvas shadow-soft hover:bg-neon-soft hover:shadow-neon focus-visible:outline-neon",
  accent:
    "bg-lime text-canvas shadow-soft hover:bg-lime-soft hover:shadow-lime focus-visible:outline-lime",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-neon hover:bg-neon/6 hover:text-neon-text focus-visible:outline-neon",
  ghost: "text-ink hover:bg-neon/6 hover:text-neon-text focus-visible:outline-neon",
  /* Sits on the tinted panel band, so it lifts to a raised white card. */
  solid:
    "border border-line-strong bg-surface text-ink shadow-soft hover:bg-surface-2 hover:shadow-neon focus-visible:outline-neon",
  solidGhost:
    "border border-neon/25 text-neon-text hover:border-neon/50 hover:bg-neon/8 focus-visible:outline-neon",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-[16px]",
};

function classes(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

/** Derived from <Link> so `typedRoutes: true` keeps working. */
type Href = ComponentProps<typeof Link>["href"];

type LinkButtonProps = {
  href: Href;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
