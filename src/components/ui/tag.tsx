import type * as React from 'react'
import { X } from 'lucide-react'

import { Badge, badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  removable?: boolean
}

function Tag({ className, removable = false, children, ...props }: TagProps) {
  return (
    <Badge variant="secondary" className={cn('gap-1.5 rounded-md px-2.5 py-1 text-xs', badgeVariants({ variant: 'secondary' }), className)} {...props}>
      {children}
      {removable ? <X className="size-3.5 opacity-70" /> : null}
    </Badge>
  )
}

export { Tag }
