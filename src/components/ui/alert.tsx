import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva('relative w-full rounded-xl border p-4', {
  variants: {
    variant: {
      default: 'border-border bg-surface text-foreground',
      info: 'border-info/30 bg-info/10 text-foreground',
      success: 'border-success/30 bg-success/10 text-foreground',
      warning: 'border-warning/30 bg-warning/10 text-foreground',
      destructive: 'border-destructive/30 bg-destructive/10 text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

function Alert({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) {
  const role = variant === 'destructive' || variant === 'warning' ? 'alert' : 'status'
  return <div role={role} className={cn(alertVariants({ variant }), className)} {...props} />
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-1 font-medium leading-none tracking-tight text-foreground', className)} role="heading" aria-level={2} {...props} />
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-sm text-muted-foreground [&_p]:leading-6', className)} {...props} />
}

export { Alert, AlertDescription, AlertTitle }
