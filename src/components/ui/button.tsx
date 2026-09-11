import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-theme text-white shadow-sm hover:bg-theme/90 focus-visible:ring-theme/40",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        Blue1:
          "border border-theme bg-theme text-white shadow-sm " +
          "hover:bg-white hover:text-theme hover:border-theme " +
          "focus-visible:ring-2 focus-visible:ring-theme/30",

        Blue2:
          "border border-theme-2 bg-theme-2 text-white shadow-sm " +
          "hover:bg-theme-2/90 hover:shadow-md " +
          "focus-visible:ring-2 focus-visible:ring-theme-2/30",

        Blue3:
          "border border-theme-4 bg-theme-4 text-white shadow-sm " +
          "hover:bg-theme-4/90 hover:shadow-md " +
          "focus-visible:ring-2 focus-visible:ring-theme-4/30",

        OutlineBlue:
          "border border-theme bg-white text-theme shadow-sm " +
          "hover:bg-theme hover:text-white hover:shadow-md " +
          "focus-visible:ring-2 focus-visible:ring-theme/30",

        SoftBlue:
          "border border-theme/10 bg-theme/10 text-theme " +
          "hover:border-theme/20 hover:bg-theme/15 hover:text-theme-2 " +
          "focus-visible:ring-2 focus-visible:ring-theme/20",

        DarkBlue:
          "border border-theme-2 bg-theme-2 text-white " +
          "hover:bg-theme hover:border-theme hover:shadow-md " +
          "focus-visible:ring-2 focus-visible:ring-theme-2/30",

        Light:
          "border border-theme-3 bg-theme-3 text-theme-2 " +
          "hover:bg-white hover:border-theme/30 hover:text-theme " +
          "focus-visible:ring-2 focus-visible:ring-theme/20",

        GhostBlue:
          "text-theme hover:bg-theme/10 hover:text-theme-2 " +
          "focus-visible:ring-2 focus-visible:ring-theme/20",

        GradientBlue:
          "border-0 bg-gradient-to-l from-theme-2 to-theme-4 text-white " +
          "shadow-sm hover:brightness-110 hover:shadow-md " +
          "focus-visible:ring-2 focus-visible:ring-theme-4/30",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
