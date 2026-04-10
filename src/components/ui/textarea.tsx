import * as React from 'react'

import { cn } from '@/lib/utils'
import { inputBaseClassName } from '@/components/ui/input'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(inputBaseClassName, 'min-h-28 resize-y py-3', className)}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
