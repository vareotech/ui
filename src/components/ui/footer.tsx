import type * as React from 'react'

import { cn } from '@/lib/utils'

function Footer({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <footer className={cn('border-t border-border bg-background px-5 py-16 text-sm text-muted-foreground', className)} {...props} />
}

export { Footer }
