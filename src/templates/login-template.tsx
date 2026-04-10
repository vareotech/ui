import { LockKeyhole, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HelperText } from '@/components/ui/helper-text'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LoginTemplate() {
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="story-kicker">Login</div>
        <h1 className="max-w-xl text-balance">Acesso seguro e direto para operações críticas.</h1>
        <p className="max-w-xl text-base">Fluxo de entrada pensado para ambientes internos, gestão operacional e trabalho recorrente com foco em velocidade e clareza.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="story-section">
            <ShieldCheck className="mb-4 size-5 text-primary" />
            <h2 className="text-base font-semibold">Segurança perceptível</h2>
            <p className="m-0 text-sm">Hierarquia simples, foco claro e sem distrações antes da autenticação.</p>
          </div>
          <div className="story-section">
            <LockKeyhole className="mb-4 size-5 text-primary" />
            <h2 className="text-base font-semibold">Pronto para MFA</h2>
            <p className="m-0 text-sm">A estrutura suporta evolução para autenticação contextual e fatores adicionais.</p>
          </div>
        </div>
      </div>
      <Card className="border-white/10 bg-[rgba(18,24,35,0.9)]">
        <CardHeader>
          <CardTitle>Entrar no workspace</CardTitle>
          <CardDescription>Use seu e-mail corporativo e senha para continuar.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="time@vareo.tech" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
            <HelperText>Esqueceu sua senha? Use recuperação com link seguro.</HelperText>
          </div>
          <Button className="w-full">Entrar</Button>
        </CardContent>
      </Card>
    </section>
  )
}
