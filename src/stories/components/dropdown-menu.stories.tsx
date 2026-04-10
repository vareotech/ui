import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

type DropdownStoryArgs = {
  triggerLabel: string
  itemLabel: string
  onSelect: ReturnType<typeof fn>
}

const meta = {
  title: 'Overlays/Dropdown Menu',
  component: DropdownMenu,
  tags: ['test'],
  args: {
    triggerLabel: 'Open menu',
    itemLabel: 'Action item',
    onSelect: fn(),
  },
  argTypes: {
    triggerLabel: { control: 'text' },
    itemLabel: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Dropdown menu reúne ações compactas próximas ao gatilho.' } },
  },
} satisfies Meta<DropdownStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ triggerLabel, itemLabel, onSelect }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={onSelect}>{itemLabel}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Interaction: Story = {
  render: ({ triggerLabel, itemLabel, onSelect }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={onSelect}>{itemLabel}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvas, userEvent, args }) => {
    const trigger = canvas.getByRole('button', { name: args.triggerLabel })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    const item = within(document.body).getByRole('menuitem', { name: args.itemLabel })
    await expect(item).toBeInTheDocument()
    await expect(item).toHaveFocus()
  },
}
