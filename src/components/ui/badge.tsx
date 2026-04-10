import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide transition-colors',
  {
    variants: {
      variant: {
        primary: 'border-primary/30 bg-primary/15 text-primary',
        secondary: 'border-border bg-secondary text-secondary-foreground',
        outline: 'border-border bg-transparent text-muted-foreground',
        success: 'border-success/30 bg-success/15 text-success',
        warning: 'border-warning/30 bg-warning/15 text-warning',
        destructive: 'border-destructive/30 bg-destructive/15 text-[hsl(0_72%_65%)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
