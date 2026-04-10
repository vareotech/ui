import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['test'],
  args: {
    defaultChecked: true,
    disabled: false,
    'aria-label': 'Enable alerts',
    onCheckedChange: fn(),
  },
  argTypes: {
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Switch para toggles on/off imediatos.' } },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Switch {...args} />,
}

export const Interaction: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => <Switch {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const toggle = canvas.getByRole('switch', { name: 'Enable alerts' })
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'checked')
    await expect(args.onCheckedChange).toHaveBeenCalled()
  },
}
