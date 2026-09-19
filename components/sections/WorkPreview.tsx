import dynamic from "next/dynamic";
import { WORK_ENTRIES } from "@/lib/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InView } from "@/components/animations/InView";

// Code-split: the carousel's drag/resize/idle-preload logic isn't needed for
// the initial paint, so its JS ships as its own chunk instead of the main bundle.
const WorkCarousel = dynamic(() =>
  import("@/components/projects/WorkCarousel").then((m) => m.WorkCarousel),
);

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
