import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-fg-muted uppercase",
        className,
      )}
    >
      <span className="h-px w-6 [background:var(--advanta-gradient)]" aria-hidden />
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: React.ElementType;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-fg md:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
