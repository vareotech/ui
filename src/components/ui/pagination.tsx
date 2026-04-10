import type * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('flex flex-row items-center gap-2', className)} {...props} />
}

function PaginationItem(props: React.ComponentProps<'li'>) {
  return <li {...props} />
}

function PaginationLink({ isActive, className, ...props }: React.ComponentProps<'button'> & { isActive?: boolean }) {
  return <Button aria-current={isActive ? 'page' : undefined} variant={isActive ? 'primary' : 'ghost'} size="sm" className={cn('min-w-9', className)} {...props} />
}

function PaginationPrevious(props: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to previous page" className="gap-1 pl-2.5" {...props}><ChevronLeft className="size-4" />Anterior</PaginationLink>
}

function PaginationNext(props: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to next page" className="gap-1 pr-2.5" {...props}>Próxima<ChevronRight className="size-4" /></PaginationLink>
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center text-muted-foreground', className)} {...props}><MoreHorizontal className="size-4" /></span>
}

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
