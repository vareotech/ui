import { Download, Filter, Search } from 'lucide-react'

import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
import { AppShell } from '@/templates/app-shell'

const orders = [
  ['#10293', 'Loja Centro', 'Pagamento pendente', 'R$ 342,00'],
  ['#10294', 'Loja Norte', 'Aguardando expedição', 'R$ 118,50'],
  ['#10295', 'Canal app', 'Concluído', 'R$ 822,30'],
]

export function ListingWithFiltersTemplate() {
  return (
    <AppShell>
      <Header
        title="Listagem com filtros"
        description="Tabela orientada a operação com filtros frequentes, busca e ação principal clara."
        breadcrumb={['Pedidos', 'Listagem']}
        actions={<Button><Download className="size-4" />Exportar</Button>}
      />
      <div className="story-section space-y-5">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(2,minmax(0,0.6fr))_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar pedido, cliente ou loja" className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger aria-label="Filtrar por status"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="pending">Pendentes</SelectItem>
              <SelectItem value="done">Concluídos</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="today">
            <SelectTrigger aria-label="Filtrar por período"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Últimos 7 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="secondary"><Filter className="size-4" />Filtros</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order[0]}>
                <TableCell>{order[0]}</TableCell>
                <TableCell>{order[1]}</TableCell>
                <TableCell><Tag>{order[2]}</Tag></TableCell>
                <TableCell>{order[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppShell>
  )
}
