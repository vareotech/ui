import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontal, Plus } from 'lucide-react'
import { expect, fn } from 'storybook/test'

import { Button, IconButton } from '@/components/ui/button'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'
import { useStorybookI18n } from '@/stories/i18n'

const meta = {
  title: 'Forms/Button',
  component: Button,
  tags: ['test'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    onClick: fn(),
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: <StoryDocsDescription story="actions" />,
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.actions
    const { children, ...rest } = args

    return <Button {...rest}>{children ?? content.primaryAction}</Button>
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.actions

    return <Button {...args}>{content.deleteItem}</Button>
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.actions
    const { 'aria-label': ariaLabel, ...rest } = args

    return (
      <IconButton {...rest} aria-label={ariaLabel ?? content.moreActions}>
        <MoreHorizontal />
      </IconButton>
    )
  },
}

export const WithLeadingIcon: Story = {
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.actions
    const { children, ...rest } = args

    return (
      <Button {...rest}>
        <Plus />
        {children ?? content.primaryAction}
      </Button>
    )
  },
}

export const Interaction: Story = {
  args: { variant: 'primary' },
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.actions
    const { children, ...rest } = args

    return <Button {...rest}>{children ?? content.interactionAction}</Button>
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button')
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}
