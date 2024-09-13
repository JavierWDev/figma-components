import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "font-semibold inline-flex items-center border px-3 py-0.5 text-[10px] md:text-[12px] ",
  {
    variants: {
      variant: {
        default:
          "border-brand-200 bg-brand-100 text-brand-300/70",
        success:
          "border-success-200 bg-success-100/20 text-success-200",
        warning: "border-warning-200 bg-warning-100/35 text-warning-200",
        error:
          "border-error-200 bg-error-100/40 text-error-200",
      },
      border: {
        default: "rounded-sm",
        rounded: "rounded-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      border: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, border, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, border }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
