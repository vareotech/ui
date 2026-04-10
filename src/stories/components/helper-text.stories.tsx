import type { Meta, StoryObj } from '@storybook/react-vite'

import { HelperText } from '@/components/ui/helper-text'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Forms/Helper Text',
  component: HelperText,
  tags: ['test'],
  args: {
    children: 'Use the operational name shown in listings and reports.',
  },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="helper-text" /> } },
  },
} satisfies Meta<typeof HelperText>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <div className="w-[320px]"><HelperText {...args} /></div>,
}
