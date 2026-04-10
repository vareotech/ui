import { Bell, Home, QrCode, Search, Wallet } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, IconButton } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function MobileTemplate() {
  return (
    <section className="page-section">
      <div className="container-grid">
        <div className="col-span-12 mx-auto w-full max-w-sm rounded-[2rem] border bg-background p-3 shadow-overlay">
          <Card className="overflow-hidden rounded-[1.5rem] border-border/80">
            <CardContent className="space-y-5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mobile</p>
                  <h4 className="mt-1">Experiência orientada à ação</h4>
                </div>
                <IconButton variant="ghost" aria-label="Notificações">
                  <Bell className="size-4" />
                </IconButton>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="Buscar loja, oferta ou pedido" />
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <Badge variant="secondary">Destaque</Badge>
                <h4 className="mt-3 text-lg">Saldo para cashback e fidelidade</h4>
                <p className="mt-2">Ação principal priorizada com contraste sem exagero visual.</p>
                <Button className="mt-4 w-full">Ver extrato</Button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[Home, Wallet, QrCode].map((Icon, index) => (
                  <div key={index} className="rounded-2xl border border-border/80 bg-surface-muted p-4 text-center">
                    <Icon className="mx-auto size-5 text-primary" />
                    <p className="mt-3 text-xs text-foreground">Ação {index + 1}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
