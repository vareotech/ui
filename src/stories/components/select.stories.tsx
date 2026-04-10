import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type SelectStoryArgs = {
  label: string
  placeholder: string
  defaultValue: 'retail' | 'saas' | 'services'
  disabled: boolean
  invalid: boolean
  onValueChange: ReturnType<typeof fn>
}

const meta = {
  title: 'Forms/Select',
  component: SelectExample,
  tags: ['test'],
  args: {
    label: 'Segment',
    placeholder: 'Choose a segment',
    defaultValue: 'retail',
    disabled: false,
    invalid: false,
    onValueChange: fn(),
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'select', options: ['retail', 'saas', 'services'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="select" /> } },
  },
} satisfies Meta<typeof SelectExample>

export default meta
type Story = StoryObj<typeof meta>

function SelectExample({ label, placeholder, defaultValue, disabled, invalid, onValueChange }: SelectStoryArgs) {
  return (
    <Select defaultValue={defaultValue} disabled={disabled} onValueChange={onValueChange}>
      <SelectTrigger className="w-[260px]" aria-label={label} aria-invalid={invalid}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="retail">Retail</SelectItem>
        <SelectItem value="saas">SaaS</SelectItem>
        <SelectItem value="services">Services</SelectItem>
      </SelectContent>
    </Select>
  )
}

export const Playground: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'saas',
  },
}

export const OpenInteraction: Story = {
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('combobox', { name: 'Segment' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard('{ArrowDown}')
    const option = within(document.body).getByRole('option', { name: 'Retail' })
    await expect(option).toBeInTheDocument()
    await expect(option).toHaveFocus()
  },
}
