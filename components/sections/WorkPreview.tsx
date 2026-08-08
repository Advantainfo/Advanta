import { WORK_ENTRIES } from "@/lib/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WorkGrid } from "@/components/projects/WorkGrid";
import { InView } from "@/components/animations/InView";

export function WorkPreview() {
  const entries = WORK_ENTRIES.slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Built with the same care we bring to every project."
            description="Advanta is a new studio — this is the range of work we take on, with real case studies published as projects go live."
          />
          <Button href="/work" variant="secondary" className="shrink-0">
            View all work
          </Button>
        </div>

        <InView className="mt-16" y={32}>
          <WorkGrid entries={entries} />
        </InView>
      </Container>
    </section>
  );
}
