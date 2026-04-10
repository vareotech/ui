import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { DatePicker } from '@/components/ui/date-picker'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Forms/Date Picker',
  component: DatePicker,
  tags: ['test'],
  args: {
    'aria-label': 'Start date',
    defaultValue: '2026-04-03',
    disabled: false,
    readOnly: false,
    'aria-invalid': false,
    onChange: fn(),
  },
  argTypes: {
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="date-picker" /> } },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <DatePicker className="w-[220px]" {...args} />,
}

export const Invalid: Story = {
  args: {
    'aria-label': 'Invalid date',
    'aria-invalid': true,
    defaultValue: '2026-04-20',
  },
}

export const ValueInteraction: Story = {
  args: {
    'aria-label': 'Start date',
    defaultValue: '',
  },
  render: (args) => <DatePicker {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByLabelText('Start date')
    await userEvent.type(input, '2026-04-03')
    await expect(input).toHaveValue('2026-04-03')
    await expect(args.onChange).toHaveBeenCalled()
  },
}
