import { cn } from "@/lib/cn";

export function LegalSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-t border-hairline py-10", className)}>
      <h2 className="text-xl font-semibold tracking-tight text-fg">{title}</h2>
      <div className="mt-4 flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-fg-muted [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc">
        {children}
      </div>
    </section>
  );
}
