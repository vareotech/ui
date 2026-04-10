import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Checkbox } from '@/components/ui/checkbox'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['test'],
  args: {
    defaultChecked: true,
    disabled: false,
    'aria-label': 'Enable reports',
    onCheckedChange: fn(),
  },
  argTypes: {
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Checkbox para seleção múltipla e confirmação explícita.' } },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Checkbox {...args} />,
}

export const Interaction: Story = {
  args: {
    defaultChecked: false,
    'aria-label': 'Enable sync',
  },
  render: (args) => <Checkbox {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const checkbox = canvas.getByRole('checkbox', { name: 'Enable sync' })
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    await expect(args.onCheckedChange).toHaveBeenCalled()
  },
}
