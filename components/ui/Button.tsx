import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost" | "solid" | "solidGhost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[-0.005em] " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-45";

/*
 * Fills come from the dedicated `primary` / `accent` tokens rather than
 * from `neon` / `lime`, because a colour that works on ivory does not
 * work on a forest band. `primary` is deep forest on light grounds and
 * light terracotta inside `.on-forest`; both carry their foreground at
 * well above 4.5:1, which is why the fg is a token too.
 *
 * `accent` is terracotta. It cannot carry small white text (3.6:1), so it
 * takes charcoal — 5.2:1 — which is also why it reads warmer than a
 * filled button that is merely a lighter shade of the primary.
 */
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-fg shadow-soft hover:bg-primary-hover hover:shadow-neon focus-visible:outline-primary",
  accent:
    "bg-accent text-accent-fg shadow-soft hover:bg-accent-hover hover:shadow-lime focus-visible:outline-accent",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-primary hover:bg-primary/6 hover:text-primary focus-visible:outline-primary",
  ghost: "text-ink hover:bg-primary/6 hover:text-primary focus-visible:outline-primary",
  /* Sits on a tinted band, so it lifts to a raised white card. */
  solid:
    "border border-line-strong bg-card text-ink shadow-soft hover:bg-surface-2 hover:shadow-neon focus-visible:outline-primary",
  solidGhost:
    "border border-primary/30 text-primary hover:border-primary/55 hover:bg-primary/8 focus-visible:outline-primary",
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
