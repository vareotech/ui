import { Save } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { Header } from '@/components/ui/header'
import { HelperText } from '@/components/ui/helper-text'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { AppShell } from '@/templates/app-shell'

export function RegistrationFormTemplate() {
  return (
    <AppShell>
      <Header
        title="Formulário de cadastro"
        description="Campos agrupados por contexto, apoio textual objetivo e ação principal evidente."
        breadcrumb={['Cadastro', 'Novo cliente']}
        actions={<Button><Save className="size-4" />Salvar cadastro</Button>}
      />
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="story-section grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="company-name">Razão social</Label>
            <Input id="company-name" placeholder="Vareo Commerce Ltda" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="segment">Segmento</Label>
            <Select defaultValue="retail">
              <SelectTrigger id="segment"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Varejo</SelectItem>
                <SelectItem value="services">Serviços</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="go-live">Go-live previsto</Label>
            <DatePicker id="go-live" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="owner">Responsável</Label>
            <Input id="owner" placeholder="Ana Martins" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">Observações operacionais</Label>
            <Textarea id="notes" placeholder="Restrições, integrações e contexto relevante para ativação." />
          </div>
        </div>
        <div className="story-section">
          <div className="story-kicker">Guidance</div>
          <h3 className="mt-2 text-lg">Boas práticas do fluxo</h3>
          <div className="mt-4 space-y-4">
            <HelperText>Divida o formulário por grupos lógicos e preserve a ação principal no rodapé ou header.</HelperText>
            <HelperText>Explique campos ambíguos com helper text curto, nunca com texto excessivo dentro do label.</HelperText>
            <HelperText>Antecipe estados extremos: prazo indefinido, conteúdo longo, erro de validação e salvamento em progresso.</HelperText>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
