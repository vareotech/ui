import { Building2, Globe2, Users2 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const values = [
  { icon: Building2, title: 'Solidez', text: 'Visual institucional com confiança sem excesso de formalismo.' },
  { icon: Users2, title: 'Parceria', text: 'Sistema claro para devs, designers, time interno e clientes.' },
  { icon: Globe2, title: 'Escala', text: 'Pronto para múltiplos produtos e frentes de comunicação.' },
]

export function InstitutionalTemplate() {
  return (
    <section className="page-section border-y border-border/70 bg-surface/40">
      <div className="container-grid gap-y-8">
        <div className="col-span-12 max-w-3xl space-y-3">
          <h2>Institucional</h2>
          <p>Narrativa corporativa com hierarquia simples, tom profissional e foco em credibilidade.</p>
        </div>
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>Como a vareo.tech se apresenta</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="space-y-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-base">{title}</h4>
                  <p>{text}</p>
                </div>
                {index < values.length - 1 ? <Separator className="hidden md:block" /> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
