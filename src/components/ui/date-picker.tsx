import * as React from 'react'
import { CalendarDays } from 'lucide-react'

import { Input, inputBaseClassName } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const DatePicker = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input ref={ref} type="date" className={cn(inputBaseClassName, 'pl-9 [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0', className)} {...props} />
    </div>
  )
})
DatePicker.displayName = 'DatePicker'

export { DatePicker }
