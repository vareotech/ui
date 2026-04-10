import { BadgePercent, Package, ShoppingBasket, Store } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const lines = [
  ['SKU-204', 'Café especial 250g', '42 un', 'Reposição hoje'],
  ['SKU-411', 'Combo café + caneca', '18 un', 'Promoção ativa'],
  ['SKU-019', 'Assinatura mensal', '164', 'Maior margem'],
]

export function RetailTemplate() {
  return (
    <section className="page-section border-t border-border/70 bg-surface/30">
      <div className="container-grid gap-y-6">
        <div className="col-span-12 max-w-3xl space-y-3">
          <h2>Tela de software de varejo</h2>
          <p>Painel compacto para operação diária com leitura rápida, hierarquia clara e densidade controlada.</p>
        </div>
        <Card className="col-span-12 lg:col-span-4">
          <CardHeader>
            <CardTitle>Status da operação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: 'Lojas sincronizadas', value: '112', Icon: Store },
              { label: 'Itens em estoque crítico', value: '24', Icon: Package },
              { label: 'Campanhas ao vivo', value: '7', Icon: BadgePercent },
              { label: 'Pedidos em picking', value: '39', Icon: ShoppingBasket },
            ].map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center justify-between rounded-xl border border-border/80 bg-surface-muted p-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm text-foreground">{label}</span>
                </div>
                <Badge variant="secondary">{value}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="col-span-12 lg:col-span-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lines.map((line) => (
                <TableRow key={line[0]}>
                  {line.map((cell) => (
                    <TableCell key={cell}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
