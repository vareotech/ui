import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition-colors',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary text-primary-foreground',
        secondary: 'border-border bg-secondary text-secondary-foreground',
        outline: 'border-border bg-transparent text-muted-foreground',
        success: 'border-success/30 bg-success/15 text-success',
        warning: 'border-warning/30 bg-warning/15 text-warning',
        destructive: 'border-destructive/30 bg-destructive/15 text-[hsl(0_72%_65%)]',
        stamp:
          'rounded-[0.25rem] border-2 border-foreground/25 bg-surface px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-foreground shadow-none',
        'stamp-success':
          'rounded-[0.25rem] border-2 border-success/45 bg-success/10 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-success shadow-none',
        'stamp-warning':
          'rounded-[0.25rem] border-2 border-warning/55 bg-warning/10 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-warning shadow-none',
        'stamp-danger':
          'rounded-[0.25rem] border-2 border-destructive/45 bg-destructive/10 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-destructive shadow-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
