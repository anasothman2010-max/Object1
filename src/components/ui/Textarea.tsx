import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "min-h-[140px] resize-y border border-brand-100 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand-500",
          className,
        )}
        {...props}
      />
    </div>
  );
}
