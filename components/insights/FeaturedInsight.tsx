import Link from "next/link";
import type { InsightArticle } from "@/lib/content/insights";
import { InsightVisual } from "@/components/insights/InsightVisual";
import { TopicBadge } from "@/components/insights/TopicBadge";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { formatDate } from "@/lib/format";

export function FeaturedInsight({ article }: { article: InsightArticle }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <ImageReveal className="relative aspect-[16/11] rounded-3xl">
        <InsightVisual
          topic={article.topic}
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute top-5 left-5">
          <TopicBadge topic={article.topic} />
        </div>
      </ImageReveal>

      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
          Latest — {formatDate(article.publishedAt)} · {article.readingTime}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {article.title}
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">{article.description}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors group-hover:text-fg/80">
          Read the full article
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
