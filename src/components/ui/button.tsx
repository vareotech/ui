import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'focus-ring interactive-scale inline-flex items-center justify-center gap-2 whitespace-nowrap border border-transparent text-sm font-medium transition-all disabled:pointer-events-none disabled:border-disabled disabled:bg-disabled disabled:text-disabled-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'rounded-full bg-primary text-primary-foreground hover:brightness-110',
        secondary: 'rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90',
        outline: 'rounded-full border-border bg-transparent text-foreground hover:bg-surface-muted',
        ghost: 'rounded-full bg-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground',
        destructive: 'rounded-full bg-destructive text-destructive-foreground hover:brightness-110',
        retail:
          'rounded-[0.625rem] border-2 border-primary bg-primary text-primary-foreground shadow-[0_14px_30px_-22px_rgba(0,0,0,0.36)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-24px_rgba(0,0,0,0.40)]',
        'retail-outline':
          'rounded-[0.625rem] border-2 border-foreground/20 bg-surface text-foreground shadow-[0_12px_28px_-22px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_14px_32px_-24px_rgba(0,0,0,0.32)]',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-10 px-5',
        lg: 'h-12 px-6 text-[15px]',
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
