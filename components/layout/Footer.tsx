import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { FOOTER_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

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

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-bg-elevated">
      {/* Strong, subtle visual ending — ambient Advanta light, GPU-cheap (transform/opacity only) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 bottom-[-260px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--violet)_28%,transparent),transparent_70%)] animate-footer-glow" />
      </div>

      <Container className="relative py-20 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo size={30} href="/" />
            <p className="max-w-xs text-lg leading-relaxed text-fg-muted">
              Digital experiences that move businesses forward.
            </p>
            <Button href="/contact" variant="secondary" className="w-fit">
              Start a project
            </Button>
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
            <ul className="mt-2 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-fg-faint transition-colors hover:text-fg"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
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
