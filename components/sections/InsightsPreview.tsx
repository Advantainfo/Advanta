import Link from "next/link";
import { INSIGHTS } from "@/lib/content/insights";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InView } from "@/components/animations/InView";
import { formatDate } from "@/lib/format";

export function InsightsPreview() {
  const articles = [...INSIGHTS]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Notes on building things that work."
            description="Practical, specific writing on web development, SEO and digital marketing — no filler, no fabricated statistics."
          />
          <Button href="/insights" variant="secondary" className="shrink-0">
            All insights
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {articles.map((article, i) => (
            <InView key={article.slug} delay={i * 0.08}>
              <Link href={`/insights/${article.slug}`} className="group flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
                  {article.topic} · {formatDate(article.publishedAt)}
                </p>
                <h3 className="text-xl leading-snug font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">{article.description}</p>
                <span className="mt-1 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
                  Read article →
                </span>
              </Link>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}
