import Link from "next/link";
import type { InsightArticle } from "@/lib/content/insights";
import { InsightVisual } from "@/components/insights/InsightVisual";
import { TopicBadge } from "@/components/insights/TopicBadge";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { formatDate } from "@/lib/format";

export function InsightCard({ article }: { article: InsightArticle }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group flex flex-col gap-5">
      <ImageReveal className="relative aspect-[16/10] rounded-2xl">
        <InsightVisual
          article={article}
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute top-4 left-4">
          <TopicBadge topic={article.topic} />
        </div>
      </ImageReveal>
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
          {formatDate(article.publishedAt)} · {article.readingTime}
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
          {article.title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-fg-muted">{article.description}</p>
      <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
        Read article
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
