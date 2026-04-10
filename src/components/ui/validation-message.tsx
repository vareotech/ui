import type * as React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ValidationMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: 'error' | 'success'
}

function ValidationMessage({ className, tone = 'error', children, ...props }: ValidationMessageProps) {
  const Icon = tone === 'success' ? CheckCircle2 : AlertCircle

  return (
    <p
      className={cn(
        'inline-flex items-start gap-2 text-sm leading-6',
        tone === 'success' ? 'text-success' : 'text-[hsl(0_80%_68%)]',
        className,
      )}
      {...props}
    >
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export { ValidationMessage }
