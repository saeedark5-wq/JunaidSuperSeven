import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gold text-black",
        secondary: "border-transparent bg-white/10 text-white",
        destructive: "border-transparent bg-red-500/20 text-red-400",
        outline: "text-white/70 border-white/20",
        rent: "border-transparent bg-blue-500/20 text-blue-400",
        buy: "border-transparent bg-green-500/20 text-green-400",
        offplan: "border-transparent bg-purple-500/20 text-purple-400",
        featured: "border-transparent gold-bg text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
