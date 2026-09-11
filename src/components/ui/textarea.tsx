import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none",

        // Focus
        "focus-visible:border-theme-4",
        "focus-visible:ring-outline-input",
        "focus-visible:ring-offset-0",

        // Placeholder
        "placeholder:text-muted-foreground",

        // Disabled
        "disabled:cursor-not-allowed",
        "disabled:bg-input/50",
        "disabled:opacity-50",

        // Invalid
        "aria-invalid:border-destructive",
        "aria-invalid:ring-3",
        "aria-invalid:ring-destructive/20",

        // Responsive
        "md:text-sm",

        // Dark mode
        "dark:bg-input/30",
        "dark:disabled:bg-input/80",
        "dark:aria-invalid:border-destructive/50",
        "dark:aria-invalid:ring-destructive/40",

        className
      )}
      {...props}
    />
  )
}

export { Textarea }
