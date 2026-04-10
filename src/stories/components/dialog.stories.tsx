import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type DialogStoryArgs = {
  triggerLabel: string
  title: string
  description: string
}

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['test'],
  args: {
    triggerLabel: 'Open dialog',
    title: 'Dialog title',
    description: 'Focused decision and short action.',
  },
  argTypes: {
    triggerLabel: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Dialog protege foco e prioriza decisões pontuais.' } },
  },
} satisfies Meta<DialogStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ triggerLabel, title, description }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Interaction: Story = {
  render: ({ triggerLabel, title, description }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: args.triggerLabel }))
    await expect(within(document.body).getByText(args.title)).toBeInTheDocument()
  },
}
