import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'
import { useStorybookI18n } from '@/stories/i18n'

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
    docs: { description: { component: <StoryDocsDescription story="radio-group" /> } },
  },
} satisfies Meta<RadioGroupStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

function PlanRadioGroup({ defaultValue = 'growth', onValueChange, withAriaLabel = false }: Partial<RadioGroupStoryArgs> & { withAriaLabel?: boolean }) {
  const { messages } = useStorybookI18n()
  const planOptions = messages.docs.stories.forms.planOptions

  return (
    <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange} className="w-[220px]">
      {planOptions.map(({ value, label }) => (
        <label key={value} className="flex items-center gap-3">
          <RadioGroupItem value={value} aria-label={withAriaLabel ? label : undefined} />
          {label}
        </label>
      ))}
    </RadioGroup>
  )
}

export const Playground: Story = {
  render: (args) => <PlanRadioGroup {...args} />,
}

export const Interaction: Story = {
  render: (args) => <PlanRadioGroup {...args} withAriaLabel />,
  play: async ({ canvas, userEvent, args }) => {
    const radios = canvas.getAllByRole('radio')
    const starterRadio = radios.find((radio) => radio.getAttribute('value') === 'starter')

    if (!starterRadio) {
      throw new Error('Starter radio not found')
    }

    await userEvent.click(starterRadio)
    await expect(args.onValueChange).toHaveBeenCalledWith('starter')
  },
}
