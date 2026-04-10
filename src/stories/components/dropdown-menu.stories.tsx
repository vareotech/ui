import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type DropdownStoryArgs = {
  triggerLabel: string
  itemLabel: string
  onSelect: ReturnType<typeof fn>
}

function DropdownMenuStory({ triggerLabel, itemLabel, onSelect }: DropdownStoryArgs) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={onSelect}>{itemLabel}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const meta = {
  title: 'Overlays/Dropdown Menu',
  component: DropdownMenuStory,
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
    docs: { description: { component: <StoryDocsDescription story="dropdown-menu" /> } },
  },
} satisfies Meta<typeof DropdownMenuStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interaction: Story = {
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
