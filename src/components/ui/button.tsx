import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// items-center justify-center   text-sm font-medium  disabled:opacity-50
/*
destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
*/

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
          "bg-white text-brand-200 shadow-sm hover:text-brand-300 disabled:border-natural-200 disabled:text-natural-200"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
