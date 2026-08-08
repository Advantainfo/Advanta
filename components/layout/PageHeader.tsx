import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlowOrb } from "@/components/animations/GlowOrb";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="violet" size={520} opacity={0.2} className="-top-32 left-1/2 -translate-x-1/2" />
      </div>
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
