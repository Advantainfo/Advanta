import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell us what you're working on. Advanta will get back to you and explore how we can help — web development, design or digital marketing.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="blue" size={480} opacity={0.22} className="-top-24 -left-24" />
        <GlowOrb color="magenta" size={440} opacity={0.18} className="right-[-10%] bottom-[10%]" />
      </div>

      <Container className="relative">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
          Let&apos;s build something great.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
          Tell us what you&apos;re working on. We&apos;ll get back to you and explore how Advanta
          can help.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
}
