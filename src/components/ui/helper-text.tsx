import type * as React from 'react'

import { cn } from '@/lib/utils'

function HelperText({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-6 text-muted-foreground', className)} {...props} />
}

export { HelperText }
