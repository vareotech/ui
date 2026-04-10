import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tag } from '@/components/ui/tag'

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
    docs: { description: { component: 'Tag representa atributos ou filtros compactos, com opção de remoção visual.' } },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Tag {...args} />,
}
