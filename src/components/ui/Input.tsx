import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "border border-brand-100 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand-500",
          className,
        )}
        {...props}
      />
    </div>
  );
}
