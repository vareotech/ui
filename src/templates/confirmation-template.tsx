import { CircleCheckBig } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ConfirmationTemplate() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10">
      <div className="surface-elevated w-full space-y-5 p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-info/12 text-info">
          <CircleCheckBig className="size-7" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl">Confirmar publicação</h1>
          <p className="mx-auto max-w-xl">Revise os dados finais antes de publicar a configuração para todos os ambientes selecionados.</p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary">Voltar</Button>
          <Button>Confirmar e publicar</Button>
        </div>
      </div>
    </section>
  )
}
