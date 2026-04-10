import type * as React from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TopNavigationProps extends React.HTMLAttributes<HTMLElement> {
  brand: string
  items: Array<{ label: string; href?: string; active?: boolean }>
  actions?: React.ReactNode
}

function TopNavigation({ className, brand, items, actions, ...props }: TopNavigationProps) {
  return (
    <nav className={cn('flex flex-col gap-4 rounded-2xl border border-white/10 bg-[rgba(18,24,35,0.92)] px-5 py-4 shadow-soft md:flex-row md:items-center md:justify-between', className)} {...props}>
      <div className="flex items-center gap-6">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{brand}</div>
        <div className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <Button key={item.label} asChild variant={item.active ? 'secondary' : 'ghost'} size="sm">
              <a href={item.href ?? '#'} aria-current={item.active ? 'page' : undefined}>
                {item.label}
              </a>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {actions}
        <Avatar className="size-9">
          <AvatarFallback>VT</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}

export { TopNavigation }
