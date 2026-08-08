import type { Metadata } from "next";
import { WORK_ENTRIES } from "@/lib/content/work";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { WorkGrid } from "@/components/projects/WorkGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work",
  description:
    "The range of web development, design and digital marketing work Advanta takes on, with real case studies published as projects go live.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected work."
        description="Advanta is a new studio based in Antwerp. These entries represent the type of work we take on — real case studies replace them as projects launch."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="sr-only">All projects</h2>
          <WorkGrid entries={WORK_ENTRIES} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
