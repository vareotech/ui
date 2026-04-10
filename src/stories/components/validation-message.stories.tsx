import type { Meta, StoryObj } from '@storybook/react-vite'

import { ValidationMessage } from '@/components/ui/validation-message'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Forms/Validation Message',
  component: ValidationMessage,
  tags: ['test'],
  args: {
    tone: 'error',
    children: 'Review the fiscal identifier.',
  },
  argTypes: {
    tone: { control: 'select', options: ['error', 'success'] },
    children: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="validation-message" /> } },
  },
} satisfies Meta<typeof ValidationMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <ValidationMessage {...args} />,
}
