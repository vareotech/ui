import * as React from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  breadcrumb?: string[]
  actions?: React.ReactNode
}

function Header({ className, title, description, breadcrumb, actions, ...props }: HeaderProps) {
  return (
    <header className={cn('flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 md:flex-row md:items-end md:justify-between md:p-8', className)} {...props}>
      <div className="space-y-3">
        {breadcrumb?.length ? (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={item}>
                  <BreadcrumbItem>
                    {index === breadcrumb.length - 1 ? <BreadcrumbPage>{item}</BreadcrumbPage> : <span>{item}</span>}
                  </BreadcrumbItem>
                  {index < breadcrumb.length - 1 ? <BreadcrumbSeparator /> : null}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
        <div>
          <h2 className="text-3xl sm:text-5xl">{title}</h2>
          {description ? <p className="mt-2 max-w-3xl text-sm sm:text-base">{description}</p> : null}
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </header>
  )
}

export { Header }
