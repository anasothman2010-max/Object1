import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-3xl font-light tracking-widest">
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-500">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-500">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
