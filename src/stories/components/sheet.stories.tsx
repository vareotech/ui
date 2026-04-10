import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

type SheetStoryArgs = {
  title: string
  description: string
}

const meta = {
  title: 'Overlays/Sheet',
  component: Sheet,
  tags: ['test'],
  args: {
    title: 'Drawer title',
    description: 'Context remains available while task continues.',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Sheet expõe contexto lateral sem remover totalmente a tela base.' } },
  },
} satisfies Meta<SheetStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ title, description }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
