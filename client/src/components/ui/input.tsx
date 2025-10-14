import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14  bg-no-repeat bg-center bg-cover  placeholder-gray-400 w-full rounded-md border border-input borderr bg-background px-3 py-2 text-base  ring-offset-background    focus:outline-none focus:ring-0 focus:ring-ring disabled:cursor-not-allowed  disabled:opacity-50 md:text-md",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
