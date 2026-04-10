import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { LoadingState } from '@/components/ui/loading-state'
import { ProgressBar } from '@/templates/shared'
import { AppShell } from '@/templates/app-shell'

export function ProcessTemplate() {
  return (
    <AppShell>
      <Header title="Consulta e processo" description="Fluxo de acompanhamento com status, progresso e CTA contextual." breadcrumb={['Conciliação', 'Processamento']} actions={<Button variant="secondary">Cancelar execução</Button>} />
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="story-section space-y-5">
          <ProgressBar label="Leitura de arquivos" value={100} tone="success" />
          <ProgressBar label="Conciliação de eventos" value={68} tone="info" />
          <ProgressBar label="Aplicação de ajustes" value={42} />
        </div>
        <LoadingState title="Processando 1.284 eventos" description="Acompanhe o progresso e exponha uma ação de interrupção apenas quando fizer sentido real." />
      </div>
    </AppShell>
  )
}
