import type * as React from 'react'

import { cn } from '@/lib/utils'
import { Badge } from './badge'

type OperationalTone = 'primary' | 'success' | 'warning' | 'destructive' | 'neutral'

const toneClasses: Record<OperationalTone, string> = {
  primary: 'border-l-primary after:border-b-primary/25',
  success: 'border-l-success after:border-b-success/25',
  warning: 'border-l-warning after:border-b-warning/30',
  destructive: 'border-l-destructive after:border-b-destructive/25',
  neutral: 'border-l-border after:border-b-border/90',
}

const stampVariant: Record<OperationalTone, React.ComponentProps<typeof Badge>['variant']> = {
  primary: 'stamp',
  success: 'stamp-success',
  warning: 'stamp-warning',
  destructive: 'stamp-danger',
  neutral: 'stamp',
}

export interface StatusStampProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: OperationalTone
}

function StatusStamp({ className, tone = 'neutral', ...props }: StatusStampProps) {
  return <Badge variant={stampVariant[tone]} className={className} {...props} />
}

export interface OperationalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: OperationalTone
}

function OperationalCard({ className, tone = 'primary', ...props }: OperationalCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[0.625rem] border border-border/70 border-l-[6px] bg-surface text-foreground shadow-[5px_5px_0_hsl(var(--border))] transition-[transform,box-shadow,border-color] duration-base ease-productive after:absolute after:right-0 after:top-0 after:border-b-[18px] after:border-l-[18px] after:border-l-transparent hover:-translate-y-0.5 hover:shadow-[3px_3px_0_hsl(var(--border))]',
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
    <OperationalCard tone={tone} className={cn('p-4', className)} {...props}>
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
        {status ? <StatusStamp tone={tone}>{status}</StatusStamp> : null}
      </div>
      <p className="mt-4 text-3xl font-semibold text-foreground">{value}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p> : null}
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
}

function ModuleCard({ label, title, description, details, icon, preview, tone = 'primary', className, ...props }: ModuleCardProps) {
  return (
    <OperationalCard tone={tone} className={cn('flex h-full flex-col p-5', className)} {...props}>
      <div className="mb-5 flex items-start justify-between gap-3">
        <StatusStamp tone={tone}>{label}</StatusStamp>
        {icon ? (
          <span className="flex size-10 items-center justify-center rounded-[0.45rem] border border-border/70 bg-surface-muted text-foreground">
            {icon}
          </span>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold leading-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      {details?.length ? (
        <ul className="mt-5 grid gap-2 border-t border-border/50 pt-4">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm leading-6 text-foreground">
              <span className="mt-2 size-1.5 shrink-0 bg-primary" />
              {detail}
            </li>
          ))}
        </ul>
      ) : null}
      {preview ? (
        <div className="mt-auto border border-border/70 bg-surface-muted/60 p-3">
          {preview}
        </div>
      ) : null}
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
    <OperationalCard tone={tone} className={cn('p-6', className)} {...props}>
      <StatusStamp tone={tone}>{label}</StatusStamp>
      <blockquote className="mt-5 text-lg font-semibold leading-8 text-foreground">
        {quote}
      </blockquote>
      {author || context ? (
        <div className="mt-6 border-t border-border/50 pt-4">
          {author ? <p className="text-sm font-semibold text-foreground">{author}</p> : null}
          {context ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{context}</p> : null}
        </div>
      ) : null}
    </OperationalCard>
  )
}

export { MetricCard, ModuleCard, OperationalCard, StatusStamp, StepCard, TestimonialCard }
