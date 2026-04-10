import { ArrowRight, CheckCircle2, Component, Layers3, Palette } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { vareoPrinciples, vareoTemplates } from '@/stories/foundations/brand'
import { DashboardTemplate } from '@/templates/dashboard-template'

const pillars = [
  {
    icon: Palette,
    title: 'Tokens semânticos',
    description: 'Base pronta para crescer para multi-theme sem retrabalho estrutural.',
  },
  {
    icon: Component,
    title: 'Primitives reutilizáveis',
    description: 'shadcn como fundação com ajustes de API, ritmo visual e estados.',
  },
  {
    icon: Layers3,
    title: 'Templates reais',
    description: 'Padrões prontos para dashboard, marketing, institucional e mobile.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-background">
      <section className="page-section border-b border-border/70">
        <div className="container-grid items-center gap-y-10">
          <div className="col-span-12 space-y-6 lg:col-span-7">
            <Badge variant="secondary" className="w-fit">vareo.tech design system</Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-balance">
                Base dark-first para produtos B2B, varejo e experiências internas.
              </h1>
              <p className="max-w-2xl text-base sm:text-lg">
                Uma V1 coesa com tokens, fundações, componentes e templates para acelerar
                dashboards SaaS, páginas institucionais e apps orientados a operação.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Explorar componentes
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="secondary">
                Abrir Storybook
              </Button>
            </div>
          </div>
          <Card className="col-span-12 lg:col-span-5">
            <CardHeader>
              <CardTitle>Princípios visuais</CardTitle>
              <CardDescription>
                Menos ruído, mais clareza para software e comunicação institucional.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {vareoPrinciples.map((principle) => (
                <div key={principle} className="flex items-start gap-3 rounded-lg border border-border/80 bg-surface-muted p-4">
                  <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                  <p className="text-sm text-foreground">{principle}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="page-section">
        <div className="container-grid gap-y-6">
          <div className="col-span-12 flex items-center justify-between gap-4">
            <div>
              <h2>Escopo da V1</h2>
              <p>Fundação pragmática para evolução incremental do ecossistema vareo.tech.</p>
            </div>
          </div>
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="col-span-12 md:col-span-4">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container-grid gap-y-6">
          <div className="col-span-12">
            <Separator className="mb-6" />
            <h3 className="mb-2">Templates de validação</h3>
            <p>Todos os templates usam somente tokens e componentes do próprio sistema.</p>
          </div>
          {vareoTemplates.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="col-span-12 md:col-span-6 xl:col-span-4">
              <CardHeader>
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <DashboardTemplate />
    </main>
  )
}

export default App
