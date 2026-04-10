import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/date-picker'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { HelperText } from '@/components/ui/helper-text'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { ValidationMessage } from '@/components/ui/validation-message'
import { componentGuidelines } from '@/stories/docs/component-guidelines'

const meta = {
  title: 'Forms/Form Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Campos, seleção e wrappers de formulário do Vareo DS. Use labels explícitas, helper text curto e feedback de validação contextual.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function FormShowcase() {
  const form = useForm({
    defaultValues: {
      company: 'Vareo Commerce',
      segment: 'retail',
      owner: '',
      notes: '',
      notifications: true,
      plan: 'growth',
      accepted: false,
    },
  })

  return (
    <div className="story-shell space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="story-kicker">Components / Forms</div>
          <h2 className="story-title mt-2">Campos com contexto, validação e estados reais</h2>
          <p className="story-subtitle mt-2 max-w-3xl">{componentGuidelines.field.purpose}</p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="grid gap-5 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Nome da conta</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Use o nome operacional visível em tabelas, filtros e detalhes.</FormDescription>
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel htmlFor="default-input">Input padrão</FormLabel>
                  <Input id="default-input" placeholder="Workspace principal" />
                  <HelperText>Labels continuam visíveis mesmo com conteúdo vazio.</HelperText>
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor="date-field">Date picker</FormLabel>
                  <DatePicker id="date-field" defaultValue="2026-04-03" />
                  <HelperText>Use para datas pontuais e previsíveis.</HelperText>
                </FormItem>
                <FormField
                  control={form.control}
                  name="segment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segmento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel htmlFor="readonly">Readonly</FormLabel>
                  <Input id="readonly" readOnly value="Plano enterprise" />
                  <HelperText>Use quando o valor for importante mas não editável neste contexto.</HelperText>
                </FormItem>
                <FormItem className="md:col-span-2">
                  <FormLabel htmlFor="long-content">Conteúdo longo</FormLabel>
                  <Textarea id="long-content" defaultValue="Descrição extensa de contexto operacional, integração com ERP, observações de rollout e dependências de negócio." />
                </FormItem>
                <div className="space-y-3 md:col-span-2">
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4 text-sm text-foreground">
                      <Checkbox defaultChecked />
                      Ativar sincronização automática de catálogos durante a madrugada.
                    </label>
                    <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium text-foreground">Alertas operacionais</div>
                          <p className="m-0 text-sm leading-6 text-muted-foreground">Feedback imediato para filas críticas.</p>
                        </div>
                        <Switch defaultChecked aria-label="Alertas operacionais" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                    <div className="mb-3 text-sm font-medium text-foreground">Radio group</div>
                    <RadioGroup defaultValue="growth" className="grid gap-3 md:grid-cols-3">
                      {['starter', 'growth', 'enterprise'].map((option) => (
                        <label key={option} className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface-muted/70 p-3 text-sm text-foreground">
                          <RadioGroupItem value={option} />
                          {option}
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:col-span-2">
                  <Button>Salvar alterações</Button>
                  <Button variant="secondary">Salvar rascunho</Button>
                  <Button variant="outline">Cancelar</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>Estados e boas práticas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">Validation message</div>
              <ValidationMessage>Revise o CNPJ: formato inválido para cadastro fiscal.</ValidationMessage>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">Success message</div>
              <ValidationMessage tone="success">Dados validados e prontos para publicação.</ValidationMessage>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">Do</div>
              <ul className="m-0 space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {componentGuidelines.field.do.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">Anti patterns</div>
              <ul className="m-0 space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {componentGuidelines.field.dont.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const Overview: Story = { render: () => <FormShowcase /> }

export const ValidationStates: Story = {
  render: () => (
    <div className="story-shell">
      <div className="preview-frame preview-grid md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="error-field">Error</Label>
          <Input id="error-field" aria-invalid value="abc" readOnly />
          <ValidationMessage>Use um identificador válido com 14 dígitos.</ValidationMessage>
        </div>
        <div className="space-y-3">
          <Label htmlFor="success-field">Success</Label>
          <Input id="success-field" value="52.132.443/0001-09" readOnly />
          <ValidationMessage tone="success">Documento validado com sucesso.</ValidationMessage>
        </div>
      </div>
    </div>
  ),
}
