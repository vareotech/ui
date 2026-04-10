import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmptyState } from '@/components/ui/empty-state'

type EmptyStateArgs = {
  title: string
  description: string
  actionLabel: string
}

const meta = {
  title: 'Feedback/Empty State',
  component: EmptyState,
  tags: ['test'],
  args: {
    title: 'No services yet',
    description: 'Explain the empty state and next possible action.',
    actionLabel: 'Create service',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Empty State orienta a próxima ação quando ainda não há conteúdo.' } },
  },
} satisfies Meta<EmptyStateArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ title, description, actionLabel }) => (
    <div className="w-[380px]">
      <EmptyState title={title} description={description} actionLabel={actionLabel} />
    </div>
  ),
}
