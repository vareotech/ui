import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type TooltipStoryArgs = {
  triggerLabel: string
  content: string
}

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  tags: ['test'],
  args: {
    triggerLabel: 'Tooltip',
    content: 'Contextual help',
  },
  argTypes: {
    triggerLabel: { control: 'text' },
    content: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Tooltip explica affordances rapidamente em hover ou foco.' } },
  },
} satisfies Meta<TooltipStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ triggerLabel, content }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">{triggerLabel}</Button>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
