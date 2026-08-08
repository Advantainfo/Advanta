import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-(--container-advanta) px-6 md:px-10 lg:px-14", className)}>
      {children}
    </Tag>
  );
}
