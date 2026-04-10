import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@/components/ui/skeleton'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="skeleton" /> } },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="w-[380px] space-y-3">
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-10 w-40" />
    </div>
  ),
}
