import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type TooltipStoryArgs = {
  triggerLabel: string
  content: string
}

function TooltipStory({ triggerLabel, content }: TooltipStoryArgs) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">{triggerLabel}</Button>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const meta = {
  title: 'Overlays/Tooltip',
  component: TooltipStory,
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
    docs: { description: { component: <StoryDocsDescription story="tooltip" /> } },
  },
} satisfies Meta<typeof TooltipStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
