import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type ToastStoryArgs = {
  triggerLabel: string
  message: string
  tone: 'success' | 'error'
}

function ToastStory({ triggerLabel, message, tone }: ToastStoryArgs) {
  const handleClick = () => {
    if (tone === 'success') {
      toast.success(message)
    } else {
      toast.error(message)
    }
  }

  return (
    <Button variant="secondary" onClick={handleClick}>
      {triggerLabel}
    </Button>
  )
}

const meta = {
  title: 'Overlays/Toast',
  component: ToastStory,
  tags: ['test'],
  args: {
    triggerLabel: 'Show toast',
    message: 'Saved successfully',
    tone: 'success',
  },
  argTypes: {
    triggerLabel: { control: 'text' },
    message: { control: 'text' },
    tone: { control: 'select', options: ['success', 'error'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="toast" /> } },
  },
} satisfies Meta<typeof ToastStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
