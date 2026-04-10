import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { SideNavigation } from '@/components/ui/side-navigation'
import { TopNavigation } from '@/components/ui/top-navigation'
import { componentGuidelines } from '@/stories/docs/component-guidelines'

const meta = {
  title: 'Navigation/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Header, top navigation, side navigation e footer para fornecer orientação, contexto e navegação previsível em produtos administrativos.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="story-shell space-y-5">
      <TopNavigation
        brand="Vareo"
        items={[
          { label: 'Dashboard', href: '#', active: true },
          { label: 'Pedidos', href: '#' },
          { label: 'Configurações', href: '#' },
        ]}
        actions={<Button variant="secondary">Nova ação</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <SideNavigation
          title="Workspace"
          items={[
            { section: 'Core', label: 'Dashboard', active: true, href: '#' },
            { label: 'Operação', href: '#' },
            { label: 'Financeiro', href: '#' },
            { section: 'Config', label: 'Permissões', href: '#' },
            { label: 'Integrações', href: '#' },
          ]}
          footer={<div className="text-sm text-muted-foreground">{componentGuidelines.navigation.purpose}</div>}
        />
        <div className="space-y-4">
          <Header title="Header de página" description="Use para consolidar breadcrumb, contexto atual e ação dominante." breadcrumb={['Operação', 'Pedidos']} actions={<><Button variant="secondary">Filtrar</Button><Button>Exportar</Button></>} />
          <Footer>O footer deve ser discreto, estável e útil para contexto institucional ou links de apoio.</Footer>
        </div>
      </div>
    </div>
  ),
}
