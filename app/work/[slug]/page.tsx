import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { WORK_ENTRIES, getWorkEntry } from "@/lib/content/work";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { PlaceholderBadge } from "@/components/projects/PlaceholderBadge";
import { InView } from "@/components/animations/InView";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return WORK_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/work/${entry.slug}`,
  });
}

const RESERVED_SECTIONS = [
  {
    label: "Design",
    note: "Visual direction, UI system and key screens will be documented here.",
  },
  {
    label: "Development",
    note: "Technical approach, architecture and notable engineering decisions.",
  },
  {
    label: "Results",
    note: "Real, measured outcomes only — published once the project has launched.",
  },
  {
    label: "Gallery",
    note: "Final screens and visual walkthrough of the delivered product.",
  },
];

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) notFound();

  const index = WORK_ENTRIES.findIndex((e) => e.slug === slug);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
        <Container className="relative">
          <Link href="/work" className="text-sm text-fg-muted transition-colors hover:text-fg">
            ← All work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PlaceholderBadge />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {entry.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">Industry</p>
              <p className="mt-1 text-fg">{entry.category}</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">Services</p>
              <p className="mt-1 text-fg">{entry.services.join(", ")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <ImageReveal className="aspect-[16/9] rounded-3xl">
            <ProjectVisual index={index} className="h-full w-full" />
          </ImageReveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <InView>
            <Eyebrow as="h2">Challenge</Eyebrow>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-fg-muted">{entry.challenge}</p>
          </InView>
          <InView delay={0.08}>
            <Eyebrow as="h2">Strategy</Eyebrow>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-fg-muted">{entry.strategy}</p>
          </InView>
        </Container>
      </section>

      <section className="border-t border-hairline py-20">
        <Container>
          <Eyebrow as="h2">What follows, once this project is live</Eyebrow>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {RESERVED_SECTIONS.map((section) => (
              <div key={section.label} className="border-t border-hairline pt-5">
                <p className="text-sm font-semibold text-fg">{section.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{section.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
