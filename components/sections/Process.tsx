import { PROCESS_STEPS } from "@/lib/content/process";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";

export function Process() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="sr-only">Our process: discover, plan, build, launch, grow</h2>
        <InView>
          <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-5">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.index} className="flex items-center gap-x-3 sm:gap-x-5">
                <span className="text-sm font-medium tracking-[0.15em] text-fg-muted uppercase sm:text-base">
                  {step.title}
                </span>
                {i < PROCESS_STEPS.length - 1 ? (
                  <span aria-hidden className="text-fg-faint">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </InView>
      </Container>
    </section>
  );
}
