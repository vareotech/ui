import { PartyPopper } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SuccessTemplate() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10">
      <div className="surface-elevated w-full space-y-5 p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-success/12 text-success">
          <PartyPopper className="size-7" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl">Configuração concluída com sucesso</h1>
          <p className="mx-auto max-w-xl">A interface deve reconhecer a conclusão sem parecer promocional, mantendo foco no próximo passo operacional.</p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary">Ver resumo</Button>
          <Button>Ir para dashboard</Button>
        </div>
      </div>
    </section>
  )
}
