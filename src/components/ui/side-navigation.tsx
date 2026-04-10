import type * as React from 'react'

import { cn } from '@/lib/utils'

interface SideNavigationItem {
  label: string
  href?: string
  section?: string
  active?: boolean
}

interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  items: SideNavigationItem[]
  footer?: React.ReactNode
}

function SideNavigation({ className, title, items, footer, ...props }: SideNavigationProps) {
  return (
    <aside className={cn('flex h-full flex-col rounded-2xl border border-white/10 bg-[rgba(17,24,34,0.94)] p-4 shadow-soft', className)} {...props}>
      <div className="px-2 pb-4 pt-2">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/90">{title}</div>
      </div>
      <div className="flex-1 space-y-2">
        {items.map((item) => (
          <a key={item.label} href={item.href ?? '#'} aria-current={item.active ? 'page' : undefined} className={cn('block rounded-xl border px-3 py-3 text-sm transition-colors', item.active ? 'border-primary/20 bg-primary/10 text-foreground' : 'border-transparent bg-transparent text-muted-foreground hover:border-white/10 hover:bg-white/[0.03] hover:text-foreground')}>
            {item.section ? <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-primary" aria-hidden="true">{item.section}</div> : null}
            <div className="font-medium">{item.label}</div>
          </a>
        ))}
      </div>
      {footer ? <div className="mt-4 border-t border-white/10 pt-4">{footer}</div> : null}
    </aside>
  )
}

export type { SideNavigationItem }
export { SideNavigation }
