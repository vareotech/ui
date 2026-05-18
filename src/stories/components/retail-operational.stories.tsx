import type { Meta, StoryObj } from '@storybook/react-vite'
import { Receipt, RefreshCcw, Tag } from 'lucide-react'

import { MetricCard, ModuleCard, OperationalCard, StatusStamp, StepCard, TestimonialCard } from '@/components/ui/retail'

function RetailOperationalStory() {
  return (
    <div className="grid max-w-5xl gap-5 p-6 md:grid-cols-2">
      <OperationalCard className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Pedido #2401
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-foreground">
              Ana Beatriz · bota 37 reservada
            </h3>
          </div>
          <StatusStamp tone="warning">AGUARDANDO</StatusStamp>
        </div>
        <div className="mt-5 grid gap-2 border-t border-border/50 pt-4 text-sm text-foreground">
          <div className="flex justify-between gap-4">
            <span>Vendedora</span>
            <span className="font-mono">Júlia M.</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>Origem</span>
            <span className="font-mono">WhatsApp</span>
          </div>
        </div>
      </OperationalCard>

      <MetricCard
        label="Pedidos em aberto"
        value="18"
        status="AO VIVO"
        description="Fila com vendedor, status e próxima ação visíveis."
      />

      <StepCard
        step="03"
        title="Vendedor monta o pedido"
        input="Cliente pediu tamanho 37 pelo WhatsApp."
        action="Seleciona produto, desconto, observação e forma de pagamento."
        result="Pedido sai com link e fica ligado à vendedora."
        icon={<Receipt className="size-5" />}
      />

      <ModuleCard
        label="Catálogo"
        title="Vitrine por vendedor"
        description="Produto, variante, estoque e link de pagamento entram no mesmo fluxo."
        details={['Link próprio por vendedor', 'Status de estoque visível', 'Produtos sem app para cliente']}
        icon={<Tag className="size-5" />}
      />

      <ModuleCard
        label="Recompra"
        title="Retorno sem depender de memória"
        description="Campanhas de aniversário, pós-venda e cliente inativo partem do histórico."
        details={['Opt-out registrado', 'Segmentos por compra', 'Mensagem com contexto']}
        icon={<RefreshCcw className="size-5" />}
        tone="success"
      />

      <TestimonialCard
        label="Piloto"
        quote="Em validação com lojas de moda, cosméticos e petshop. Métricas públicas entram aqui só quando houver período, base e método."
        author="Vareo Tecnologia"
        context="Placeholder honesto para prova comercial ainda não publicada."
        tone="neutral"
      />
    </div>
  )
}

const meta = {
  title: 'Retail/Operational Components',
  component: RetailOperationalStory,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RetailOperationalStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
