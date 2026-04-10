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
import { useComponentGuidelines } from '@/stories/docs/component-guidelines'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'

const meta = {
  title: 'Forms/Form Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.forms.docsDescription,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function FormShowcase() {
  const { messages, t } = useStorybookI18n()
  const componentGuidelines = useComponentGuidelines()
  const content = messages.docs.stories.forms
  const planOptions = content.planOptions
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
          <div className="story-kicker">{content.kicker}</div>
          <h2 className="story-title mt-2">{content.title}</h2>
          <p className="story-subtitle mt-2 max-w-3xl">{componentGuidelines.field.purpose}</p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>{t('ui.overview')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="grid gap-5 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{content.accountName}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>{content.accountNameDescription}</FormDescription>
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel htmlFor="default-input">{content.defaultInput}</FormLabel>
                  <Input id="default-input" placeholder={content.defaultInputPlaceholder} />
                  <HelperText>{content.defaultInputHelp}</HelperText>
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor="date-field">{content.datePicker}</FormLabel>
                  <DatePicker id="date-field" defaultValue="2026-04-03" />
                  <HelperText>{content.datePickerHelp}</HelperText>
                </FormItem>
                <FormField
                  control={form.control}
                  name="segment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.segment}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="retail">{content.retail}</SelectItem>
                          <SelectItem value="saas">{content.saas}</SelectItem>
                          <SelectItem value="services">{content.services}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel htmlFor="readonly">{content.readonly}</FormLabel>
                  <Input id="readonly" readOnly value={content.readonlyValue} />
                  <HelperText>{content.readonlyHelp}</HelperText>
                </FormItem>
                <FormItem className="md:col-span-2">
                  <FormLabel htmlFor="long-content">{content.longContent}</FormLabel>
                  <Textarea id="long-content" defaultValue={content.longContentValue} />
                </FormItem>
                <div className="space-y-3 md:col-span-2">
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4 text-sm text-foreground">
                      <Checkbox defaultChecked />
                      {content.catalogSync}
                    </label>
                    <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium text-foreground">{content.operationalAlerts}</div>
                          <p className="m-0 text-sm leading-6 text-muted-foreground">{content.operationalAlertsHelp}</p>
                        </div>
                        <Switch defaultChecked aria-label={content.operationalAlerts} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                    <div className="mb-3 text-sm font-medium text-foreground">{content.radioGroup}</div>
                    <RadioGroup defaultValue="growth" className="grid gap-3 md:grid-cols-3">
                      {planOptions.map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface-muted/70 p-3 text-sm text-foreground">
                          <RadioGroupItem value={value} />
                          {label}
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:col-span-2">
                  <Button>{content.saveChanges}</Button>
                  <Button variant="secondary">{content.saveDraft}</Button>
                  <Button variant="outline">{content.cancel}</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>{content.statesAndPractices}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">{content.validationMessageLabel}</div>
              <ValidationMessage>{content.validationMessage}</ValidationMessage>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">{content.successMessageLabel}</div>
              <ValidationMessage tone="success">{content.successMessage}</ValidationMessage>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">{t('ui.doLabel')}</div>
              <ul className="m-0 space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {componentGuidelines.field.do.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-3 text-sm font-medium text-foreground">{t('ui.antiPatterns')}</div>
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

function ValidationStatesShowcase() {
  const { messages } = useStorybookI18n()

  return (
    <div className="story-shell">
      <div className="preview-frame preview-grid md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="error-field">{messages.docs.stories.forms.errorLabel}</Label>
          <Input id="error-field" aria-invalid value="abc" readOnly />
          <ValidationMessage>{messages.docs.stories.forms.invalidIdentifier}</ValidationMessage>
        </div>
        <div className="space-y-3">
          <Label htmlFor="success-field">{messages.docs.stories.forms.successLabel}</Label>
          <Input id="success-field" value="52.132.443/0001-09" readOnly />
          <ValidationMessage tone="success">{messages.docs.stories.forms.successIdentifier}</ValidationMessage>
        </div>
      </div>
    </div>
  )
}

export const Overview: Story = { render: () => <FormShowcase /> }

export const ValidationStates: Story = {
  render: () => <ValidationStatesShowcase />,
}
