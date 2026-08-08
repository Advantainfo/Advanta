import { SITE } from "@/lib/constants";

const ITEMS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { label: "Location", value: SITE.addressLine, href: undefined },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        {ITEMS.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
              {item.label}
            </p>
            {item.href ? (
              <a href={item.href} className="mt-2 block text-lg text-fg transition-colors hover:text-fg/80">
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg text-fg">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-hairline pt-6">
        <p className="text-sm leading-relaxed text-fg-muted">
          Prefer email? Reach us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="text-fg underline underline-offset-4">
            {SITE.email}
          </a>{" "}
          and we&apos;ll reply from there.
        </p>
      </div>
    </div>
  );
}
