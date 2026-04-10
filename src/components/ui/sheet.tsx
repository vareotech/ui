import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const sheetVariants = cva('fixed z-50 grid gap-4 bg-surface p-6 shadow-overlay', {
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b rounded-b-2xl',
      bottom: 'inset-x-0 bottom-0 border-t rounded-t-2xl',
      left: 'inset-y-0 left-0 h-full w-full max-w-md border-r',
      right: 'inset-y-0 right-0 h-full w-full max-w-md border-l',
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

const Sheet = Dialog
const SheetTrigger = DialogTrigger
const SheetClose = DialogClose
const SheetDescription = DialogDescription
const SheetFooter = DialogFooter
const SheetHeader = DialogHeader
const SheetTitle = DialogTitle

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogContent>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof DialogContent>, SheetContentProps>(
  ({ className, side = 'right', ...props }, ref) => (
    <DialogContent ref={ref} className={cn('left-auto top-auto translate-x-0 translate-y-0 rounded-none border-0 p-0 sm:max-w-none', sheetVariants({ side }), className)} {...props} />
  ),
)
SheetContent.displayName = 'SheetContent'

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}
