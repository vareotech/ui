import type { Meta, StoryObj } from '@storybook/react'
import { MoreHorizontal, Plus, Trash2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, IconButton } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { componentGuidelines } from '@/stories/docs/component-guidelines'

const meta = {
  title: 'Forms/Actions Showcase',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Primary action',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `${componentGuidelines.button.purpose} Use contraste, tamanho e placement para comunicar prioridade sem ruído visual.`,
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Buttons: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  },
}

export const ActionSet: Story = {
  render: () => (
    <div className="story-shell space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="story-kicker">Components / Actions</div>
          <h2 className="story-title mt-2">Buttons with real hierarchy</h2>
          <p className="story-subtitle mt-2 max-w-3xl">
            As ações precisam comunicar prioridade, contexto e segurança visual sem depender de excesso de cor ou ruído decorativo.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">Primary, secondary, icon and destructive</Badge>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="preview-frame story-empty-grid">
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-sm font-medium text-foreground">Action showcase</div>
              <p className="m-0 text-sm text-muted-foreground">Estados principais em uma moldura de preview mais próxima de uso real.</p>
            </div>
            <Badge variant="outline">Preview</Badge>
          </div>

          <div className="preview-grid md:grid-cols-2">
            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader>
                <CardTitle className="text-base">Variants</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>Salvar</Button>
                <Button variant="secondary">Secundária</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">
                  <Trash2 className="size-4" />
                  Excluir
                </Button>
                <Button disabled>Desabilitado</Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader>
                <CardTitle className="text-base">Contextual actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <IconButton variant="secondary" aria-label="Adicionar item">
                    <Plus className="size-4" />
                  </IconButton>
                  <IconButton variant="ghost" aria-label="Mais ações">
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                  <Button size="sm">Compact</Button>
                  <Button size="lg" variant="secondary">Large action</Button>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <div className="mb-2 text-sm font-medium text-foreground">Usage note</div>
                  <p className="m-0 text-sm leading-7 text-muted-foreground">
                    Reserve primary para a ação dominante da área. Use secondary e ghost para suporte e contextualização.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <div className="story-kicker">Guidelines</div>
            <CardTitle>Leitura rápida</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">Primary</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">Ação principal da tela, modal ou bloco.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">Secondary / Outline</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">Ações auxiliares sem competir pela atenção principal.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">Destructive</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">Somente para risco real e sempre com contexto explícito.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
}
