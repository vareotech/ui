import { OctagonAlert } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ErrorTemplate() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10">
      <div className="surface-elevated w-full space-y-5 p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/12 text-destructive">
          <OctagonAlert className="size-7" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl">Não foi possível concluir a operação</h1>
          <p className="mx-auto max-w-xl">Explique o erro com clareza, diga o impacto e indique a próxima ação segura para o usuário.</p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary">Ver detalhes técnicos</Button>
          <Button>Nova tentativa</Button>
        </div>
      </div>
    </section>
  )
}
