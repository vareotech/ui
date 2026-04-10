import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/ui/badge'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'
import { useStorybookI18n } from '@/stories/i18n'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['test'],
  args: {
    variant: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="badge" /> } },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.badge
    const { children, ...rest } = args

    return <Badge {...rest}>{children ?? content.primaryLabel}</Badge>
  },
}
