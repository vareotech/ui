import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type RadioGroupStoryArgs = {
  defaultValue: 'starter' | 'growth'
  onValueChange: ReturnType<typeof fn>
}

const meta = {
  title: 'Forms/Radio Group',
  component: RadioGroup,
  tags: ['test'],
  args: {
    defaultValue: 'growth',
    onValueChange: fn(),
  },
  argTypes: {
    defaultValue: { control: 'select', options: ['starter', 'growth'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Radio group para escolhas mutuamente exclusivas.' } },
  },
} satisfies Meta<RadioGroupStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultValue, onValueChange }) => (
    <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange} className="w-[220px]">
      <label className="flex items-center gap-3">
        <RadioGroupItem value="starter" />
        Starter
      </label>
      <label className="flex items-center gap-3">
        <RadioGroupItem value="growth" />
        Growth
      </label>
    </RadioGroup>
  ),
}

export const Interaction: Story = {
  render: ({ defaultValue, onValueChange }) => (
    <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange} className="w-[220px]">
      <label className="flex items-center gap-3">
        <RadioGroupItem value="starter" aria-label="Starter" />
        Starter
      </label>
      <label className="flex items-center gap-3">
        <RadioGroupItem value="growth" aria-label="Growth" />
        Growth
      </label>
    </RadioGroup>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('radio', { name: 'Starter' }))
    await expect(args.onValueChange).toHaveBeenCalledWith('starter')
  },
}
