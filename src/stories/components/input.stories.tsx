import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Input } from '@/components/ui/input'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['test'],
  args: {
    type: 'text',
    placeholder: 'Workspace name',
    defaultValue: '',
    disabled: false,
    readOnly: false,
    'aria-invalid': false,
    'aria-label': 'Workspace name',
    onChange: fn(),
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'search', 'email', 'password', 'tel'] },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Campo textual base para busca, cadastro e filtros. O canvas expõe apenas o input com controls.' } },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Input className="w-[320px]" {...args} />,
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'abc',
  },
}

export const TypingInteraction: Story = {
  args: {
    'aria-label': 'Search field',
    placeholder: 'Search',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByRole('textbox', { name: 'Search field' })
    await userEvent.type(input, 'vareo')
    await expect(input).toHaveValue('vareo')
    await expect(args.onChange).toHaveBeenCalled()
  },
}
