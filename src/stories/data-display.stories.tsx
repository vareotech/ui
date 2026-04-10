import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag } from '@/components/ui/tag'

const meta = {
  title: 'Data Display/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Padrões para dados, navegação contextual e leitura rápida. A prioridade é escaneabilidade, densidade equilibrada e clareza entre conteúdo primário e apoio.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">Components / Data display</div>
        <h2 className="story-title mt-2">Dados, navegação e agrupamento contextual</h2>
      </div>
      <div className="preview-frame space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Design system</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Data display</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Tabs defaultValue="table">
          <TabsList>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="faq">Accordion</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Conta</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Segmento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ['TEN-01', 'Retail Prime', 'Ativo', 'Retail'],
                  ['TEN-02', 'Studio Commerce', 'Em rollout', 'SaaS'],
                  ['TEN-03', 'Franquia Norte', 'Em revisão', 'Serviços'],
                ].map((row) => (
                  <TableRow key={row[0]}>
                    <TableCell>{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell><Badge variant="secondary">{row[2]}</Badge></TableCell>
                    <TableCell><Tag>{row[3]}</Tag></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="people">
            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader><CardTitle>Equipe</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {['CA', 'DS', 'PM'].map((name) => (
                  <div key={name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3">
                    <Avatar><AvatarFallback>{name}</AvatarFallback></Avatar>
                    <div>
                      <p className="text-sm text-foreground">{name} squad</p>
                      <p className="text-sm">Acompanhando rollout e consistência.</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="one"><AccordionTrigger>Quando usar tabela?</AccordionTrigger><AccordionContent>Para comparação densa, filtro recorrente e análise operacional.</AccordionContent></AccordionItem>
              <AccordionItem value="two"><AccordionTrigger>Quando usar cards?</AccordionTrigger><AccordionContent>Para resumos, agrupamentos e blocos com pouca variação estrutural.</AccordionContent></AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <Separator />

        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious /></PaginationItem>
            <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
}
