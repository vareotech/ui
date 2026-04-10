import type { Meta, StoryObj } from '@storybook/react'
import { BellRing, Inbox, Sparkles } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EmptyState } from '@/components/ui/empty-state'
import { LoadingState } from '@/components/ui/loading-state'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Tag } from '@/components/ui/tag'
import { toast } from '@/components/ui/toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const meta = {
  title: 'Feedback/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Estados de sistema, overlays e feedback imediato. Cada padrão precisa comunicar risco, progresso ou contexto sem depender apenas de cor.',
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
        <div className="story-kicker">Components / Feedback & Overlays</div>
        <h2 className="story-title mt-2">Feedback perceptível e contextual</h2>
        <p className="story-subtitle mt-2 max-w-3xl">Estados, overlays e comunicações rápidas devem orientar a próxima ação com clareza.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="preview-frame preview-grid lg:grid-cols-2">
          <Alert variant="info">
            <AlertTitle>Janela de manutenção</AlertTitle>
            <AlertDescription>Dois tenants serão migrados às 02:00 com rollback disponível.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Fila sob atenção</AlertTitle>
            <AlertDescription>Há 18 pedidos acima do SLA previsto. Reavalie a regra de expedição.</AlertDescription>
          </Alert>
          <EmptyState title="Sem tickets em aberto" description="Quando o estado for vazio, explique o contexto e a próxima ação possível." actionLabel="Abrir novo ticket" />
          <LoadingState />
        </div>
        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4 text-sm leading-7 text-muted-foreground">
              Sempre explique impacto, contexto e próximo passo. Estado visual sozinho não basta.
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="one">
                <AccordionTrigger>Quando usar modal</AccordionTrigger>
                <AccordionContent>Use para decisões pontuais, confirmação e edição focada.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="two">
                <AccordionTrigger>Quando usar drawer</AccordionTrigger>
                <AccordionContent>Use quando a tarefa precisa manter o contexto da tela principal.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
}

export const OverlayPatterns: Story = {
  render: () => (
    <div className="story-shell">
      <div className="preview-frame flex flex-wrap items-center gap-3">
        <Dialog>
          <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova configuração</DialogTitle>
              <DialogDescription>Use modais para decisões curtas e concentradas.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Cancelar</Button>
              <Button>Confirmar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild><Button variant="secondary">Open drawer</Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Resumo operacional</SheetTitle>
              <SheetDescription>Use drawer quando o usuário precisar manter o contexto ao lado.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline">Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><Inbox className="size-4" />Ver fila</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => toast.success('Toast disparado com sucesso')}><BellRing className="size-4" />Disparar toast</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button variant="ghost">Tooltip</Button></TooltipTrigger>
            <TooltipContent>Feedback contextual e discreto.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  ),
}

export const LoadingAndEmpty: Story = {
  render: () => (
    <div className="story-shell">
      <div className="preview-frame preview-grid md:grid-cols-3">
        <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
          <CardHeader><CardTitle className="text-base">Skeleton</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-40" />
          </CardContent>
        </Card>
        <EmptyState title="Nenhum serviço disponível" description="Explique o porquê do vazio e a próxima ação recomendada." actionLabel="Criar serviço" />
        <div className="space-y-3 rounded-2xl border border-white/10 bg-[rgba(17,24,34,0.88)] p-5">
          <Tag>Feedback</Tag>
          <LoadingState title="Publicando componentes" description="Atualize o usuário durante operações com duração perceptível." className="border-none bg-transparent p-0 shadow-none" />
          <Button variant="secondary" onClick={() => toast('Deploy iniciado', { description: 'Os componentes estão sendo publicados agora.' })}><Sparkles className="size-4" />Trigger toast</Button>
        </div>
      </div>
    </div>
  ),
}
