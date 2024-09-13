import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Definición de variantes para TooltipContent
const tooltipVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs animate-in data-[state=closed]:animate-out",
  {
    variants: {
      variant: {
        default: "bg-brand-300 text-white",
        success: "bg-success-100 text-success-300",
        warning: "bg-warning-100 text-warning-300",
        error: "bg-error-100 text-error-300",
      },
      tooltipSide: {
        top: "data-[side=top]:slide-in-from-bottom-2",
        right: "data-[side=right]:slide-in-from-left-2",
        bottom: "data-[side=bottom]:slide-in-from-top-2",
        left: "data-[side=left]:slide-in-from-right-2",
      },
    },
    defaultVariants: {
      variant: "default",
      tooltipSide: "bottom",
    },
  }
);

// Define las propiedades estándar del componente TooltipPrimitive.Content
type TooltipPrimitiveContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

// Define la interfaz para TooltipContent combinando las propiedades estándar y las variantes
export interface TooltipContentProps
  extends Omit<TooltipPrimitiveContentProps, "className">, // Excluye className para personalizarlo
    VariantProps<typeof tooltipVariants> { // Agrega las propiedades para variantes
  sideOffset?: number; // Agrega propiedades adicionales específicas
}

// Componente TooltipContent usando la interfaz definida
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, variant, tooltipSide, sideOffset = 4, side, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    side={side} // Usa el `side` que espera TooltipPrimitive
    sideOffset={sideOffset}
    className={cn(
      tooltipVariants({ variant, tooltipSide, className }) // Aplica las variantes y clases adicionales
    )}
    {...props} // Aplica el resto de las propiedades
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipProvider = TooltipPrimitive.Provider;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
