import { Clock3, Receipt, Store } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/ui/header'
import { AppShell } from '@/templates/app-shell'

export function DetailTemplate() {
  const detailCards = [
    { label: 'Canal', value: 'App próprio', Icon: Store },
    { label: 'Pagamento', value: 'Cartão tokenizado', Icon: Receipt },
    { label: 'Prazo', value: 'Entregue em 32 min', Icon: Clock3 },
  ]

  return (
    <AppShell>
      <Header title="Detalhamento" description="Tela de detalhe com dados principais, contexto de status e blocos de apoio." breadcrumb={['Pedidos', 'Pedido #10293']} actions={<Badge variant="success">Concluído</Badge>} />
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-white/10 bg-[rgba(18,24,35,0.9)]">
          <CardHeader>
            <CardTitle>Resumo do pedido</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            {detailCards.map(({ label, value, Icon }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-black/10 p-4">
                <Icon className="mb-3 size-4 text-primary" />
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                <div className="mt-2 text-sm font-medium text-foreground">{value}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-[rgba(18,24,35,0.9)]">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['Pedido criado', 'Pagamento aprovado', 'Separação concluída', 'Entrega finalizada'].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="mt-1 size-2 rounded-full bg-primary" />
                <div>
                  <div className="text-sm font-medium text-foreground">{item}</div>
                  <div className="text-sm text-muted-foreground">Hoje · 14:32</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
