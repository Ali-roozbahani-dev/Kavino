"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      position="top-center"
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
      classNames: {
        toast: "cn-toast",

        success: `
          !border-green-200
          !bg-green-50
          !text-green-800
        `,

        error: `
          !border-red-200
          !bg-red-50
          !text-red-800
        `,

        warning: `
          !border-yellow-200
          !bg-yellow-50
          !text-yellow-800
        `,

        info: `
          !border-blue-200
          !bg-blue-50
          !text-blue-800
        `,

        loading: `
          !border-gray-200
          !bg-gray-50
          !text-gray-800
        `,

        title: "!font-semibold",
        description: "!text-sm",
      },
    }}
      {...props}
    />
  )
}

export { Toaster }
