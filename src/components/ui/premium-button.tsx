import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const premiumButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-electric text-primary-foreground shadow-[var(--shadow-premium)] hover:bg-electric-dim hover:shadow-[var(--shadow-glow)] hover:-translate-y-1",
        glass: "glass-card text-foreground hover:bg-glass-bg/60 hover:-translate-y-1",
        outline: "border-2 border-electric text-electric hover:bg-electric hover:text-primary-foreground hover:-translate-y-1",
        ghost: "text-electric hover:bg-electric/10 hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof premiumButtonVariants> {
  asChild?: boolean
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(premiumButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PremiumButton.displayName = "PremiumButton"

export { PremiumButton, premiumButtonVariants }