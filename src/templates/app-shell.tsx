import type * as React from 'react'

import { Footer } from '@/components/ui/footer'
import { SideNavigation } from '@/components/ui/side-navigation'
import { TopNavigation } from '@/components/ui/top-navigation'

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1440px] gap-4 p-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="hidden lg:block">
        <SideNavigation
          title="Vareo Hub"
          items={[
            { section: 'Core', label: 'Dashboard', active: true, href: '#' },
            { label: 'Operação', href: '#' },
            { label: 'Catálogo', href: '#' },
            { section: 'Support', label: 'Configurações', href: '#' },
            { label: 'Documentação', href: '#' },
          ]}
          footer={<div className="text-sm text-muted-foreground">Plano enterprise · 14 workspaces</div>}
        />
      </div>
      <div className="space-y-4">
        <TopNavigation brand="Vareo" items={[{ label: 'Produto', href: '#', active: true }, { label: 'Operação', href: '#' }, { label: 'Relatórios', href: '#' }]} />
        <div className="space-y-4">{children}</div>
        <Footer>© Vareo.Tech · Design system para operações, SaaS e serviços internos.</Footer>
      </div>
    </div>
  )
}

export { AppShell }
