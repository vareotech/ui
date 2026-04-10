import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type AlertStoryArgs = {
  variant: 'default' | 'info' | 'success' | 'warning' | 'destructive'
  title: string
  description: string
}

function AlertStory({ variant, title, description }: AlertStoryArgs) {
  return (
    <div className="w-[420px]">
      <Alert variant={variant}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  )
}

const meta = {
  title: 'Feedback/Alert',
  component: AlertStory,
  tags: ['test'],
  args: {
    variant: 'default',
    title: 'Default',
    description: 'Use para contexto adicional sem urgência extrema.',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'info', 'success', 'warning', 'destructive'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Alert renderizado sozinho, com variant e conteúdo controlados pelo painel.' } },
  },
} satisfies Meta<typeof AlertStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
