import { FileSearch, LifeBuoy, PlugZap, Settings2 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/ui/header'
import { AppShell } from '@/templates/app-shell'

const services = [
  { title: 'Catálogo e preço', description: 'Consultas, ajustes e sincronização.', icon: FileSearch },
  { title: 'Integrações', description: 'ERP, pagamentos e webhooks.', icon: PlugZap },
  { title: 'Suporte operacional', description: 'Atendimento e monitoramento.', icon: LifeBuoy },
  { title: 'Configurações', description: 'Permissões, módulos e automações.', icon: Settings2 },
]

export function ServiceCenterTemplate() {
  return (
    <AppShell>
      <Header title="Central de serviços" description="Organize acessos por contexto para reduzir ruído e acelerar tarefas recorrentes." breadcrumb={['Serviços', 'Central']} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="border-white/10 bg-[rgba(18,24,35,0.9)]">
            <CardHeader>
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  )
}
