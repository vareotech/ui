import { Toaster as Sonner } from 'sonner'

function Toaster() {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        classNames: {
          toast: '!rounded-lg !border !border-border !bg-surface !text-foreground !shadow-none',
          description: '!text-muted-foreground',
          actionButton: '!bg-primary !text-primary-foreground',
          cancelButton: '!bg-secondary !text-secondary-foreground',
        },
      }}
    />
  )
}

export { Toaster }
