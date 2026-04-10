import type { Meta, StoryObj } from '@storybook/react-vite'

import { LoadingState } from '@/components/ui/loading-state'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Feedback/Loading State',
  component: LoadingState,
  tags: ['test'],
  args: {
    title: 'Carregando dados',
    description: 'Aguarde alguns instantes enquanto organizamos a próxima etapa.',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="loading-state" /> } },
  },
} satisfies Meta<typeof LoadingState>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <div className="w-[380px]"><LoadingState {...args} /></div>,
}
