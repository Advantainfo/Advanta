import { WORK_ENTRIES } from "@/lib/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WorkCarousel } from "@/components/projects/WorkCarousel";
import { InView } from "@/components/animations/InView";

export function WorkPreview() {
  const entries = WORK_ENTRIES.slice(0, 3);

  return (
    <section className="overflow-hidden py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading title="Selected Work" description="See what we've built." />
          <Button href="/work" variant="secondary" className="shrink-0">
            View all work
          </Button>
        </div>
      </Container>

      <InView className="mt-16" y={32}>
        <WorkCarousel entries={entries} />
      </InView>
    </section>
  );
}
