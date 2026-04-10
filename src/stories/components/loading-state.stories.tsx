import type { Meta, StoryObj } from '@storybook/react-vite'

import { LoadingState } from '@/components/ui/loading-state'

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
    docs: { description: { component: 'Loading State informa que o sistema ainda está processando ou buscando dados.' } },
  },
} satisfies Meta<typeof LoadingState>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <div className="w-[380px]"><LoadingState {...args} /></div>,
}
