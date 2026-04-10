import type * as React from 'react'

import { cn } from '@/lib/utils'

function Footer({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <footer className={cn('rounded-2xl border border-white/10 bg-[rgba(16,21,31,0.92)] px-5 py-4 text-sm text-muted-foreground shadow-soft', className)} {...props} />
}

export { Footer }
