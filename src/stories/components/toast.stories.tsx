import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

type ToastStoryArgs = {
  triggerLabel: string
  message: string
  tone: 'success' | 'error'
}

const meta = {
  title: 'Overlays/Toast',
  component: Button,
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
    docs: { description: { component: 'Toast comunica resultados temporários sem interromper o fluxo.' } },
  },
} satisfies Meta<ToastStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ triggerLabel, message, tone }) => (
    <Button variant="secondary" onClick={() => tone === 'success' ? toast.success(message) : toast.error(message)}>
      {triggerLabel}
    </Button>
  ),
}
