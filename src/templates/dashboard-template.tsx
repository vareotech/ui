import { ArrowUpRight, CircleAlert, CreditCard, ShoppingCart, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { ProgressBar } from '@/templates/shared'

const stats = [
  { label: 'GMV', value: 'R$ 184.240', delta: '+14%', icon: CreditCard },
  { label: 'Pedidos', value: '12.842', delta: '+9%', icon: ShoppingCart },
  { label: 'Lojas ativas', value: '128', delta: '+6%', icon: Users },
]

export function DashboardTemplate() {
  return (
    <section className="page-section border-t border-border/70 bg-surface/40">
      <div className="container-grid gap-y-6">
        <div className="col-span-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Performance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h3>Dashboard SaaS</h3>
              <p>Visão executiva com foco em performance operacional e receita.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Filtrar período</Button>
            <Button>
              Exportar relatório
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        {stats.map(({ icon: Icon, label, value, delta }) => (
          <Card key={label} className="col-span-12 md:col-span-4">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div>
                <CardDescription>{label}</CardDescription>
                <CardTitle className="mt-2 text-2xl">{value}</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon className="size-5" />
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="success">{delta} vs. mês anterior</Badge>
            </CardContent>
          </Card>
        ))}

        <Card className="col-span-12 xl:col-span-8">
          <CardHeader>
            <CardTitle>Eficiência operacional</CardTitle>
            <CardDescription>KPIs de atendimento, logística e SLA.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ProgressBar label="SLA de entrega" value={88} />
            <ProgressBar label="Conciliação financeira" value={74} tone="info" />
            <ProgressBar label="Tickets resolvidos no primeiro contato" value={93} tone="success" />
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-4">
          <CardHeader>
            <CardTitle>Fila crítica</CardTitle>
            <CardDescription>Itens que pedem resposta rápida.</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              className="border-none bg-transparent p-0 shadow-none"
              title="Sem incidentes bloqueantes"
              description="As automações estão saudáveis e não há pendências críticas no momento."
            />
          </CardContent>
        </Card>

        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>Alertas do workspace</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-warning/30 bg-warning/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-warning">
                <CircleAlert className="size-4" />
                Reprocessar 8 pagamentos conciliados fora da janela.
              </div>
              <p className="text-sm">Impacto moderado. Revisar antes do fechamento diário.</p>
            </div>
            <div className="rounded-xl border border-info/30 bg-info/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-info">
                <CircleAlert className="size-4" />
                Nova release disponível para dois tenants enterprise.
              </div>
              <p className="text-sm">Aplique rollout gradual durante a madrugada.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
