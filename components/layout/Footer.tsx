import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, primaryCta, site } from "@/data/site";

/**
 * GrowthYari publishes no email, phone, address or social profiles, so none
 * appear here. The registration portal and the enquiry form are the two ways
 * in. Public pricing was removed, so no prices appear anywhere in the footer.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const legalLinks = [
    { label: "Privacy", href: "/privacy" as const },
    { label: "Terms", href: "/terms" as const },
    { label: "Case studies", href: "/case-studies" as const },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label="GrowthYari — home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-6 text-body">
              {site.defaultDescription}
            </p>
            <ButtonLink href={primaryCta.href} size="md" className="mt-6">
              {primaryCta.shortLabel}
            </ButtonLink>
          </div>

          <nav aria-label="Explore" className="md:col-span-3">
            <h2 className="label-xs text-muted">Explore</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-neon-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and more" className="md:col-span-4">
            <h2 className="label-xs text-muted">More</h2>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-neon-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">
            The 12-Week Sales &amp; Communication Pilot Batch · Applications open
          </p>
        </div>
      </div>
    </footer>
  );
}
