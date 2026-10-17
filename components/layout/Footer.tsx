import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, primaryCta, site } from "@/data/site";

/**
 * The footer is the site's one permanent deep-forest band: a deliberate
 * dark ground at the very bottom so the page closes on contrast rather
 * than trailing off. Everything inside it runs on the `.on-forest`
 * role remap, so the shared type and button tokens read light-on-dark
 * without a second set of styles.
 *
 * GrowthYari publishes no email, phone, address or social profiles, so
 * none appear here. The registration portal and the enquiry form are the
 * two ways in. Public pricing was removed, so no prices appear anywhere
 * in the footer.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const moreLinks = [
    { label: "Case studies", href: "/case-studies" as const },
    { label: "Contact", href: "/contact" as const },
    { label: "Privacy", href: "/privacy" as const },
    { label: "Terms", href: "/terms" as const },
  ];

  return (
    <footer className="on-forest border-t border-line bg-forest">
      <div className="container-page py-16 sm:py-18">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label="GrowthYari — home" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-body">
              {site.headline}
            </p>
            <ButtonLink href={primaryCta.href} size="md" variant="solid" className="mt-7">
              {primaryCta.shortLabel}
            </ButtonLink>
          </div>

          <nav aria-label="Explore" className="md:col-span-3">
            <h2 className="label-xs text-muted">Explore</h2>
            <ul className="mt-5 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-2 transition-colors duration-200 hover:text-accent-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and more" className="md:col-span-4">
            <h2 className="label-xs text-muted">More</h2>
            <ul className="mt-5 space-y-3.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-2 transition-colors duration-200 hover:text-accent-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
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
