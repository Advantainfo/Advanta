import { getTopicAccent } from "@/lib/content/topics";

export function TopicBadge({ topic }: { topic: string }) {
  const { solid } = getTopicAccent(topic);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-bg/70 px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: solid }} aria-hidden />
      {topic}
    </span>
  );
}
