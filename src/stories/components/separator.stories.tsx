import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from '@/components/ui/separator'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Forms/Separator',
  component: Separator,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="separator" /> } },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <Separator className="w-[320px]" />,
}
