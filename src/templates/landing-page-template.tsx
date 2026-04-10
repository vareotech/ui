import { ArrowRight, ShieldCheck, Sparkles, TimerReset } from 'lucide-react'

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
      <div className="container-grid items-center gap-y-8">
        <div className="col-span-12 space-y-5 lg:col-span-7">
          <Badge variant="primary">Landing page</Badge>
          <h2 className="max-w-2xl text-balance">Escalando produtos digitais com um sistema visual sóbrio e confiável.</h2>
          <p className="max-w-xl">Use a mesma linguagem visual em dashboards, páginas comerciais e ferramentas operacionais sem sacrificar clareza.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Solicitar demonstração</Button>
            <Button size="lg" variant="secondary">
              Conhecer a abordagem
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <Card className="col-span-12 lg:col-span-5">
          <CardHeader>
            <CardTitle>Proposta de valor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-border/80 bg-surface-muted p-4">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
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
