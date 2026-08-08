import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full rounded-xl border border-hairline bg-bg-panel/60 px-4 py-3 text-base text-fg placeholder:text-fg-faint transition-colors focus:border-cyan/60 focus:outline-none";

export function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-fg-muted">
        {label} {required ? <span className="text-magenta">*</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-magenta">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClasses, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClasses, "resize-y", props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(fieldClasses, "appearance-none pr-10", props.className)}
      >
        {props.children}
      </select>
      <svg
        aria-hidden
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-fg-muted"
      >
        <path
          d="M2 5L7 10L12 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
