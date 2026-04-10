import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Forms/Separator',
  component: Separator,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Separator organiza blocos longos de conteúdo ou formulário.' } },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <Separator className="w-[320px]" />,
}
