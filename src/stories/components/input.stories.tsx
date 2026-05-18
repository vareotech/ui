import type { Meta, StoryObj } from '@storybook/react-vite'
import type * as React from 'react'
import { expect, fn } from 'storybook/test'

import { Input } from '@/components/ui/input'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'
import { useStorybookI18n } from '@/stories/i18n'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['test'],
  args: {
    type: 'text',
    defaultValue: '',
    disabled: false,
    readOnly: false,
    'aria-invalid': false,
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
    docs: { description: { component: <StoryDocsDescription story="input" /> } },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
type InputStoryArgs = React.ComponentProps<typeof Input>

function PlaygroundRender(args: InputStoryArgs) {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.input
  const { placeholder, 'aria-label': ariaLabel, ...rest } = args

  return (
    <Input
      className="w-[320px]"
      {...rest}
      placeholder={placeholder ?? content.defaultPlaceholder}
      aria-label={ariaLabel ?? content.defaultAriaLabel}
    />
  )
}

function TypingInteractionRender(args: InputStoryArgs) {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.input
  const { placeholder, 'aria-label': ariaLabel, ...rest } = args

  return (
    <Input
      {...rest}
      placeholder={placeholder ?? content.searchPlaceholder}
      aria-label={ariaLabel ?? content.searchAriaLabel}
    />
  )
}

export const Playground: Story = {
  render: (args) => <PlaygroundRender {...args} />,
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'abc',
  },
}

export const TypingInteraction: Story = {
  args: {},
  render: (args) => <TypingInteractionRender {...args} />,
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'vareo')
    await expect(input).toHaveValue('vareo')
    await expect(args.onChange).toHaveBeenCalled()
  },
}
