import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type AlertStoryArgs = {
  variant: 'default' | 'info' | 'success' | 'warning' | 'destructive'
  title: string
  description: string
}

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
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
} satisfies Meta<AlertStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ variant, title, description }) => (
    <div className="w-[420px]">
      <Alert variant={variant}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  ),
}
