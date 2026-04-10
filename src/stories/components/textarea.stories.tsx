import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['test'],
  args: {
    placeholder: 'Describe the rollout context',
    defaultValue: '',
    disabled: false,
    readOnly: false,
    rows: 5,
    'aria-label': 'Notes',
    onChange: fn(),
  },
  argTypes: {
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    rows: { control: 'number' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Textarea para conteúdo livre. O canvas mostra apenas o campo com controls básicos.' } },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Textarea className="w-[360px]" {...args} />,
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Descrição longa de rollout, integrações, riscos operacionais e observações de negócio.',
  },
}

export const KeyboardInteraction: Story = {
  render: (args) => <Textarea {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const field = canvas.getByRole('textbox', { name: 'Notes' })
    await userEvent.type(field, 'Line 1{enter}Line 2')
    await expect(field).toHaveValue('Line 1\nLine 2')
    await expect(args.onChange).toHaveBeenCalled()
  },
}
