import { ArrowRight, DatabaseZap, ShieldCheck, Sparkles, TimerReset } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const highlights = [
  { icon: Sparkles, title: 'Entrega rápida', description: 'Componentes e templates prontos para MVPs e produtos maduros.' },
  { icon: ShieldCheck, title: 'Consistência real', description: 'Tokens, estados e decisões visuais alinhadas desde a base.' },
  { icon: TimerReset, title: 'Menos retrabalho', description: 'Primitives reutilizáveis para marketing, produto e operação.' },
]

export function LandingPageTemplate() {
  return (
    <section className="page-section">
      <div className="container-grid items-center gap-y-10">
        <div className="col-span-12 space-y-6 lg:col-span-7">
          <Badge variant="primary">Landing page</Badge>
          <h1 className="max-w-4xl text-balance">Escalando produtos digitais com uma superfície preta, precisa e confiável.</h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Use a mesma linguagem visual em dashboards, páginas comerciais e ferramentas operacionais com contraste editorial, cards técnicos e CTAs azuis.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Solicitar demonstração</Button>
            <Button size="lg" variant="secondary">
              Conhecer a abordagem
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-6 pt-6">
            <div>
              <div className="stat-callout">96</div>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">px ritmo</p>
            </div>
            <div>
              <div className="stat-callout">12</div>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">colunas</p>
            </div>
            <div>
              <div className="stat-callout">1</div>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">cor de ação</p>
            </div>
          </div>
        </div>
        <Card className="col-span-12 lg:col-span-5">
          <CardHeader>
            <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <DatabaseZap className="size-5" />
            </div>
            <CardTitle>Proposta de valor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-lg border border-border bg-surface-muted p-4">
                <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h4 className="mb-1 text-base">{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
