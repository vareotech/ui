import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['test'],
  args: {
    children: 'Primary',
    variant: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Badge destaca status ou metadados curtos.' } },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Badge {...args} />,
}
