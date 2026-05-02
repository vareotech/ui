import * as React from 'react'

import { cn } from '@/lib/utils'

export const inputBaseClassName =
  'focus-ring flex h-10 w-full rounded-md border border-input bg-surface px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled/20 disabled:text-disabled-foreground read-only:bg-surface-muted/80 aria-[invalid=true]:border-destructive aria-[invalid=true]:bg-destructive/5'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(inputBaseClassName, className)} ref={ref} {...props} />
  },
)
Input.displayName = 'Input'

export { Input }
