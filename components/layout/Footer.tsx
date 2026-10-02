import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site } from "@/data/site";
import { programs } from "@/data/programs";

/**
 * growthyari.com publishes no email, phone, address or social profiles,
 * so none appear here. The enquiry form is the single contact channel,
 * which is also how the current site handles it.
 */
export function Footer() {
  const year = new Date().getFullYear();

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
            <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              {site.descriptor}
            </p>
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

          <nav aria-label="Programs" className="md:col-span-4">
            <h2 className="label-xs text-muted">Programs</h2>
            <ul className="mt-4 space-y-3">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group inline-flex items-center gap-1.5 text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-neon-text"
                  >
                    {program.name}
                    <span className="font-mono text-[12px] text-muted">
                      {program.price.amount}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="text-[14.5px] font-medium text-neon-text transition-colors duration-200 hover:text-neon-text"
                >
                  Compare both programs
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">
            Privacy policy and terms are not published yet.
          </p>
        </div>
      </div>
    </footer>
  );
}
