import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'

const meta = {
  title: 'Forms/Label',
  component: Label,
  tags: ['test'],
  args: {
    children: 'Company name',
  },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Label define o nome do campo de forma semântica e consistente.' } },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Label {...args} />,
}
