import { LoaderCircle } from 'lucide-react'
import type * as React from 'react'

import { cn } from '@/lib/utils'

interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

function LoadingState({ className, title = 'Carregando dados', description = 'Aguarde alguns instantes enquanto organizamos a próxima etapa.', ...props }: LoadingStateProps) {
  return (
    <div role="status" aria-live="polite" className={cn('surface flex flex-col items-center justify-center gap-4 px-6 py-10 text-center', className)} {...props}>
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
        <LoaderCircle className="size-5 animate-spin" />
      </div>
      <div className="space-y-1">
        <div className="text-xl font-medium text-foreground" style={{ letterSpacing: '-0.02em' }}>{title}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export { LoadingState }
