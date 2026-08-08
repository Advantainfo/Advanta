import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const variants = {
  primary:
    "text-white [background:var(--advanta-gradient)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_8px_30px_-10px_rgba(139,61,240,0.55)] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_10px_36px_-8px_rgba(233,52,197,0.5)]",
  secondary:
    "text-fg border border-hairline bg-bg-panel/60 hover:border-fg-faint hover:bg-bg-panel",
  ghost: "text-fg-muted hover:text-fg",
};

function Content({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {icon ? (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className, icon } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          <Content icon={icon}>{children}</Content>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        <Content icon={icon}>{children}</Content>
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripping non-DOM props from `rest`
  const { href: _href, variant: _variant, size: _size, className: _className, icon: _icon, children: _children, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      <Content icon={icon}>{children}</Content>
    </button>
  );
}
