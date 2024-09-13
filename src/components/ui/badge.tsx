import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "font-semibold inline-flex items-center border px-3 py-0.5 text-[10px] md:text-[12px] ",
  {
    variants: {
      variant: {
        default:
          "border-brand-300 bg-brand-100 text-brand-300",
        success:
          "border-success-300 bg-success-100/50 text-success-300",
        warning: "border-warning-300 bg-warning-100/50 text-warning-300",
        error:
          "border-error-300 bg-error-100/80 text-error-300",
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
