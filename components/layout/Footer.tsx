"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.11 3.5 3.25 4.37 3.25 5.47C3.25 6.55 4.09 7.44 5.22 7.44H5.25C6.41 7.44 7.25 6.55 7.25 5.47C7.23 4.37 6.41 3.5 5.25 3.5Z"
        fill="currentColor"
      />
      <path
        d="M20.75 13.61V20.5H17.38V14C17.38 12.39 16.8 11.29 15.36 11.29C14.26 11.29 13.6 12.03 13.31 12.75C13.2 13.01 13.18 13.38 13.18 13.75V20.5H9.8C9.8 20.5 9.85 9.47 9.8 8.5H13.18V9.94C13.63 9.25 14.44 8.27 16.78 8.27C19.68 8.27 20.75 10.34 20.75 13.61Z"
        fill="currentColor"
      />
    </svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" />
    </svg>
  ),
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium tracking-[0.25em] text-fg-faint uppercase">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isMarketing = pathname?.startsWith("/marketing") ?? false;

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-bg-elevated">
      {/* Strong, subtle visual ending — ambient Advanta light, GPU-cheap (transform/opacity only) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 bottom-[-260px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--footer-glow)_28%,transparent),transparent_70%)] animate-footer-glow" />
      </div>

      <Container className="relative py-20 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo
              size={isMarketing ? 112 : 30}
              theme={isMarketing ? "marketing" : "default"}
              href={isMarketing ? "/marketing" : "/"}
            />
            <p className="max-w-xs text-lg leading-relaxed text-fg-muted">
              Digital experiences that move businesses forward.
            </p>
            <ul className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg-faint transition-colors duration-300 hover:border-fg-faint hover:text-fg"
                  >
                    {SOCIAL_ICONS[social.label]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Navigate" links={FOOTER_LINKS.navigate} />
          <FooterColumn title="Services" links={FOOTER_LINKS.services} />

          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium tracking-[0.25em] text-fg-faint uppercase">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-fg-muted">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-fg">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-fg">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.addressLine}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-hairline pt-8 text-sm text-fg-faint md:flex-row md:items-center">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-fg-muted">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
