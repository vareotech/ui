import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'focus-ring interactive-scale inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent text-sm font-semibold leading-none transition-colors disabled:pointer-events-none disabled:border-disabled disabled:bg-disabled disabled:text-disabled-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'border-border bg-secondary text-secondary-foreground hover:bg-surface-muted',
        outline: 'border-border bg-transparent text-foreground hover:bg-surface',
        ghost: 'bg-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-5 text-[15px]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    if (asChild) {
      return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>{children}</Comp>
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={disabled || loading} {...props}>
        {loading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : null}
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ size = 'icon', ...props }, ref) => (
  <Button ref={ref} size={size} aria-label={props['aria-label'] ?? 'Action'} {...props} />
))
IconButton.displayName = 'IconButton'

export { Button, IconButton }
