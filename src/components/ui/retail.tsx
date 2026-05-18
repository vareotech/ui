import type * as React from 'react'

import { cn } from '@/lib/utils'
import { Badge } from './badge'

export type OperationalTone = 'primary' | 'success' | 'warning' | 'destructive' | 'neutral'
export type ModuleCardVariant = 'showcase' | 'ledger' | 'soft' | 'compact'
export type ModuleCardHeaderLayout = 'icon-first' | 'label-first'
export type ModuleCardSlot =
  | 'root'
  | 'body'
  | 'header'
  | 'label'
  | 'icon'
  | 'title'
  | 'description'
  | 'details'
  | 'detail'
  | 'detailMarker'
  | 'preview'

export type ModuleCardClassNames = Partial<Record<ModuleCardSlot, string>>

const toneClasses: Record<OperationalTone, string> = {
  primary: 'data-[accent=true]:border-l-primary',
  success: 'data-[accent=true]:border-l-success',
  warning: 'data-[accent=true]:border-l-warning',
  destructive: 'data-[accent=true]:border-l-destructive',
  neutral: 'data-[accent=true]:border-l-border',
}

const stampVariant: Record<OperationalTone, React.ComponentProps<typeof Badge>['variant']> = {
  primary: 'stamp',
  success: 'stamp-success',
  warning: 'stamp-warning',
  destructive: 'stamp-danger',
  neutral: 'stamp',
}

const moduleToneClasses: Record<
  OperationalTone,
  {
    rail: string
    corner: string
    icon: string
    marker: string
    preview: string
  }
> = {
  primary: {
    rail: 'border-l-primary',
    corner: 'after:bg-primary/35',
    icon: 'border-primary/25 bg-primary/10 text-primary',
    marker: 'bg-primary',
    preview: 'border-primary/20',
  },
  success: {
    rail: 'border-l-success',
    corner: 'after:bg-success/35',
    icon: 'border-success/25 bg-success/10 text-success',
    marker: 'bg-success',
    preview: 'border-success/20',
  },
  warning: {
    rail: 'border-l-warning',
    corner: 'after:bg-warning/35',
    icon: 'border-warning/30 bg-warning/10 text-warning',
    marker: 'bg-warning',
    preview: 'border-warning/20',
  },
  destructive: {
    rail: 'border-l-destructive',
    corner: 'after:bg-destructive/35',
    icon: 'border-destructive/30 bg-destructive/10 text-destructive',
    marker: 'bg-destructive',
    preview: 'border-destructive/20',
  },
  neutral: {
    rail: 'border-l-border',
    corner: 'after:bg-border',
    icon: 'border-border/80 bg-surface-muted text-muted-foreground',
    marker: 'bg-border',
    preview: 'border-border/70',
  },
}

const moduleVariantClasses: Record<
  ModuleCardVariant,
  {
    root: string
    body: string
    header: string
    title: string
    description: string
    details: string
    preview: string
    showCorner: boolean
    usesRail: boolean
    headerLayout: ModuleCardHeaderLayout
    label: string
  }
> = {
  showcase: {
    root:
      'flex h-full flex-col rounded-[1.125rem] bg-surface/90 p-0 shadow-none after:hidden hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface',
    body: 'flex flex-1 flex-col p-6',
    header: 'mb-7',
    title: 'text-xl',
    description: 'mt-4',
    details: 'mt-6 pt-5',
    preview: 'mt-auto rounded-[0.75rem]',
    showCorner: false,
    usesRail: false,
    headerLayout: 'icon-first',
    label: 'shadow-none',
  },
  ledger: {
    root:
      'flex h-full flex-col rounded-[0.875rem] border-l-4 bg-surface/95 p-0 shadow-[7px_7px_0_hsl(var(--border)/0.75)] after:pointer-events-none after:absolute after:right-0 after:top-0 after:size-6 after:[clip-path:polygon(100%_0,0_0,100%_100%)] hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--border)/0.7)]',
    body: 'flex flex-1 flex-col p-6',
    header: 'mb-7',
    title: 'text-lg',
    description: 'mt-4',
    details: 'mt-6 pt-5',
    preview: 'mt-auto',
    showCorner: true,
    usesRail: true,
    headerLayout: 'label-first',
    label: 'shadow-[2px_2px_0_hsl(var(--border)/0.72)]',
  },
  soft: {
    root:
      'flex h-full flex-col rounded-[1.125rem] bg-surface p-0 shadow-[0_1px_0_rgba(0,0,0,0.04)] after:hidden hover:-translate-y-0.5',
    body: 'flex flex-1 flex-col p-6',
    header: 'mb-6',
    title: 'text-xl',
    description: 'mt-4',
    details: 'mt-6 pt-5',
    preview: 'mt-auto',
    showCorner: false,
    usesRail: false,
    headerLayout: 'icon-first',
    label: 'shadow-none',
  },
  compact: {
    root:
      'flex h-full flex-col rounded-[0.75rem] border-l-4 bg-surface/95 p-0 shadow-[5px_5px_0_hsl(var(--border)/0.72)] after:hidden hover:-translate-y-0.5',
    body: 'flex flex-1 flex-col p-5',
    header: 'mb-5',
    title: 'text-base',
    description: 'mt-3',
    details: 'mt-5 pt-4',
    preview: 'mt-6',
    showCorner: false,
    usesRail: true,
    headerLayout: 'label-first',
    label: 'shadow-[2px_2px_0_hsl(var(--border)/0.72)]',
  },
}

export interface StatusStampProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: OperationalTone
}

function StatusStamp({ className, tone = 'neutral', ...props }: StatusStampProps) {
  return <Badge variant={stampVariant[tone]} className={className} {...props} />
}

export interface OperationalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: OperationalTone
  accent?: boolean
}

function OperationalCard({ className, tone = 'primary', accent = false, ...props }: OperationalCardProps) {
  return (
    <div
      data-accent={accent}
      className={cn(
        'group relative overflow-hidden rounded-[1rem] border border-border/70 bg-surface text-foreground shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[transform,border-color,background-color] duration-base ease-productive data-[accent=true]:border-l-4 hover:-translate-y-0.5 hover:border-primary/45',
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  )
}

export interface MetricCardProps extends Omit<OperationalCardProps, 'children'> {
  label: string
  value: string
  description?: string
  status?: string
}

function MetricCard({ label, value, description, status, tone = 'primary', className, ...props }: MetricCardProps) {
  return (
    <OperationalCard tone={tone} className={cn('min-h-36 rounded-[0.875rem] p-5 shadow-none', className)} {...props}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold leading-snug text-muted-foreground">{label}</p>
        {status ? <StatusStamp tone={tone}>{status}</StatusStamp> : null}
      </div>
      <p className="mt-3 text-3xl font-semibold leading-none tracking-normal text-primary">{value}</p>
      {description ? <p className="mt-3 text-xs leading-5 text-muted-foreground">{description}</p> : null}
    </OperationalCard>
  )
}

export interface StepCardProps extends Omit<OperationalCardProps, 'children'> {
  step: string
  title: string
  input: string
  action: string
  result: string
  icon?: React.ReactNode
}

function StepCard({ step, title, input, action, result, icon, tone = 'primary', className, ...props }: StepCardProps) {
  return (
    <OperationalCard tone={tone} className={cn('p-5', className)} {...props}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {step}
        </span>
        {icon ? (
          <span className="flex size-10 items-center justify-center rounded-[0.45rem] border border-border/70 bg-surface-muted text-foreground">
            {icon}
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold leading-snug text-foreground">{title}</h3>
      <dl className="mt-5 space-y-3">
        <div className="grid gap-1 border-t border-border/50 pt-3">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Entrada
          </dt>
          <dd className="text-sm leading-6 text-foreground">{input}</dd>
        </div>
        <div className="grid gap-1 border-t border-border/50 pt-3">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Ação
          </dt>
          <dd className="text-sm leading-6 text-foreground">{action}</dd>
        </div>
        <div className="grid gap-1 border-t border-border/50 pt-3">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Resultado
          </dt>
          <dd className="text-sm leading-6 text-foreground">{result}</dd>
        </div>
      </dl>
    </OperationalCard>
  )
}

export interface ModuleCardProps extends Omit<OperationalCardProps, 'children'> {
  label: string
  title: string
  description: string
  details?: readonly string[]
  icon?: React.ReactNode
  preview?: React.ReactNode
  variant?: ModuleCardVariant
  labelTone?: OperationalTone
  iconTone?: OperationalTone
  showCornerMark?: boolean
  headerLayout?: ModuleCardHeaderLayout
  classNames?: ModuleCardClassNames
}

function ModuleCard({
  label,
  title,
  description,
  details,
  icon,
  preview,
  tone = 'primary',
  labelTone = tone,
  iconTone = tone,
  variant = 'showcase',
  showCornerMark,
  headerLayout,
  className,
  classNames,
  ...props
}: ModuleCardProps) {
  const variantClasses = moduleVariantClasses[variant]
  const rootTone = moduleToneClasses[tone]
  const iconToneClasses = moduleToneClasses[iconTone]
  const shouldShowCorner = showCornerMark ?? variantClasses.showCorner
  const resolvedHeaderLayout = headerLayout ?? variantClasses.headerLayout
  const stamp = (
    <StatusStamp tone={labelTone} className={cn(variantClasses.label, classNames?.label)}>
      {label}
    </StatusStamp>
  )
  const iconNode = icon ? (
    <span
      className={cn(
        'flex size-10 items-center justify-center rounded-[0.7rem] border',
        iconToneClasses.icon,
        classNames?.icon,
      )}
    >
      {icon}
    </span>
  ) : null

  return (
    <OperationalCard
      tone={tone}
      className={cn(
        variantClasses.root,
        variantClasses.usesRail ? rootTone.rail : null,
        shouldShowCorner ? rootTone.corner : 'after:hidden',
        className,
        classNames?.root,
      )}
      {...props}
    >
      <div className={cn(variantClasses.body, classNames?.body)}>
        <div className={cn('flex items-start justify-between gap-3', variantClasses.header, classNames?.header)}>
          {resolvedHeaderLayout === 'icon-first' ? iconNode : stamp}
          {resolvedHeaderLayout === 'icon-first' ? stamp : iconNode}
        </div>
        <h3
          className={cn(
            'font-semibold leading-tight tracking-normal text-foreground',
            variantClasses.title,
            classNames?.title,
          )}
        >
          {title}
        </h3>
        <p className={cn('text-sm leading-6 text-muted-foreground', variantClasses.description, classNames?.description)}>
          {description}
        </p>
        {details?.length ? (
          <ul className={cn('grid gap-2 border-t border-border/55', variantClasses.details, classNames?.details)}>
            {details.map((detail) => (
              <li key={detail} className={cn('flex items-start gap-2 text-sm leading-6 text-foreground', classNames?.detail)}>
                <span className={cn('mt-2 size-1.5 shrink-0', rootTone.marker, classNames?.detailMarker)} />
                {detail}
              </li>
            ))}
          </ul>
        ) : null}
        {preview ? (
          <div
            className={cn(
              'border bg-background/25 p-3',
              variantClasses.preview,
              rootTone.preview,
              classNames?.preview,
            )}
          >
            {preview}
          </div>
        ) : null}
      </div>
    </OperationalCard>
  )
}

export interface TestimonialCardProps extends Omit<OperationalCardProps, 'children'> {
  label: string
  quote: string
  author?: string
  context?: string
}

function TestimonialCard({ label, quote, author, context, tone = 'neutral', className, ...props }: TestimonialCardProps) {
  return (
    <OperationalCard tone={tone} className={cn('rounded-[1rem] p-7 shadow-none', className)} {...props}>
      <span className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-background font-mono text-lg leading-none text-foreground" aria-hidden="true">
        &ldquo;
      </span>
      <StatusStamp tone={tone} className="mt-5">{label}</StatusStamp>
      <blockquote className="mt-5 text-base leading-8 text-foreground">
        {quote}
      </blockquote>
      {author || context ? (
        <div className="mt-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-foreground font-mono text-xs font-semibold text-background">
            {author?.split(' ').map((part) => part[0]).join('').slice(0, 2) || 'VT'}
          </span>
          <div>
            {author ? <p className="text-sm font-semibold text-foreground">{author}</p> : null}
            {context ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{context}</p> : null}
          </div>
        </div>
      ) : null}
    </OperationalCard>
  )
}

export { MetricCard, ModuleCard, OperationalCard, StatusStamp, StepCard, TestimonialCard }
