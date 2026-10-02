import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

export default function NotFound() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-lg text-center">
          <Logo className="justify-center" />
          <p className="mt-10 font-mono text-[12px] tracking-[0.2em] text-lime-text uppercase">
            404
          </p>
          <h1 className="mt-4 text-[30px] leading-tight font-semibold text-ink sm:text-[36px]">
            That page doesn&apos;t exist.
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-body">
            The link may be out of date. Here&apos;s where everything lives.
          </p>

          <ul className="mt-9 flex flex-wrap justify-center gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex h-10 items-center rounded-full border border-line-strong px-4 text-[14px] font-medium text-ink-2 transition-colors duration-200 hover:border-ink/40 hover:bg-surface"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ButtonLink href="/" size="lg" className="mt-10">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
