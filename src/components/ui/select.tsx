"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-lg border border-card-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option value="" className="bg-background text-muted">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-background text-foreground">
            {opt.label}
          </option>
        ))}
      </select>
    )
  }
)
Select.displayName = "Select"

export { Select }
