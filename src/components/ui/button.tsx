import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors font-semibold rounded-md text-[10px] p-[8px] md:text-[12px] md:px-[16px] md:py-[8px] lg:text-[16px] disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-brand-200 text-natural-000 shadow hover:bg-brand-300 disabled:bg-natural-100 disabled:text-natural-300",
        secondary:
          "bg-white border border-brand-200 text-brand-200 hover:border-brand-300 hover:text-brand-300 disabled:border-natural-200 disabled:text-natural-200",
        third:
          "bg-white text-brand-200 shadow-sm hover:text-brand-300 disabled:text-natural-200 "
      },
      size: {
        default: "h-10",
        icon: "p-0 md:p-0 lg:p-0 "
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
