import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tag } from '@/components/ui/tag'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['test'],
  args: {
    children: 'Retail',
    removable: true,
  },
  argTypes: {
    children: { control: 'text' },
    removable: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="tag" /> } },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Tag {...args} />,
}
