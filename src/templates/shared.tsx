import { cn } from '@/lib/utils'

export function ProgressBar({ label, value, tone = 'primary' }: { label: string; value: number; tone?: 'primary' | 'success' | 'info' }) {
  const toneClass = {
    primary: 'bg-primary',
    success: 'bg-success',
    info: 'bg-info',
  }[tone]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface-muted">
        <div className={cn('h-2 rounded-full', toneClass)} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
