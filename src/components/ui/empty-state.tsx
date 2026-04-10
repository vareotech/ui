import { SearchX } from 'lucide-react'
import type * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  actionLabel?: string
}

function EmptyState({ className, title, description, actionLabel, ...props }: EmptyStateProps) {
  return (
    <div className={cn('surface flex flex-col items-center justify-center gap-4 px-6 py-10 text-center', className)} {...props}>
      <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <SearchX className="size-5" />
      </div>
      <div className="space-y-1">
        <div className="text-xl font-medium text-foreground" style={{ letterSpacing: '-0.02em' }}>{title}</div>
        <p>{description}</p>
      </div>
      {actionLabel ? <Button variant="secondary">{actionLabel}</Button> : null}
    </div>
  )
}

export { EmptyState }
