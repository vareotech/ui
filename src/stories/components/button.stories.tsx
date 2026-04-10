import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontal, Plus } from 'lucide-react'
import { expect, fn } from 'storybook/test'

import { Button, IconButton } from '@/components/ui/button'

const meta = {
  title: 'Forms/Button',
  component: Button,
  tags: ['test'],
  args: {
    children: 'Primary action',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    onClick: fn(),
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Botões comunicam prioridade, ação e risco. O canvas mostra o componente isolado com controls e action log.',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Button {...args} />,
}

export const Destructive: Story = {
  args: {
    children: 'Delete item',
    variant: 'destructive',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => (
    <IconButton {...args} aria-label="More actions">
      <MoreHorizontal />
    </IconButton>
  ),
}

export const WithLeadingIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Plus />
      {args.children}
    </Button>
  ),
}

export const Interaction: Story = {
  args: { children: 'Run action' },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Run action' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}
