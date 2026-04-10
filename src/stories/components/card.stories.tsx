import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type CardStoryArgs = {
  title: string
  description: string
  body: string
}

function CardStory({ title, description, body }: CardStoryArgs) {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: 'Layout/Card',
  component: CardStory,
  tags: ['test'],
  args: {
    title: 'Operational summary',
    description: 'Resumo curto e direto.',
    body: 'Use para dados, filtros ou blocos de apoio.',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    body: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Card base renderizado sozinho no canvas, com conteúdo controlado por args.' } },
  },
} satisfies Meta<typeof CardStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
