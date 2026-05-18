import type * as React from 'react'

import { cn } from '@/lib/utils'
import { Badge } from './badge'

type OperationalTone = 'primary' | 'success' | 'warning' | 'destructive' | 'neutral'

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
}

function ModuleCard({ label, title, description, details, icon, preview, tone = 'primary', className, ...props }: ModuleCardProps) {
  return (
    <OperationalCard tone={tone} className={cn('flex h-full flex-col rounded-[1.125rem] p-6', className)} {...props}>
      <div className="mb-6 flex items-start justify-between gap-3">
        {icon ? (
          <span className="flex size-10 items-center justify-center rounded-[0.7rem] border border-border/70 bg-primary/10 text-primary">
            {icon}
          </span>
        ) : null}
        <StatusStamp tone={tone} className="shadow-[2px_2px_0_hsl(var(--border)/0.7)]">{label}</StatusStamp>
      </div>
      <h3 className="text-xl font-semibold leading-tight tracking-normal text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
      {details?.length ? (
        <ul className="mt-6 grid gap-2 border-t border-border/50 pt-5">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm leading-6 text-foreground">
              <span className="mt-2 size-1.5 shrink-0 bg-primary" />
              {detail}
            </li>
          ))}
        </ul>
      ) : null}
      {preview ? (
        <div className="mt-auto border border-border/70 bg-surface-muted/50 p-3">
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
