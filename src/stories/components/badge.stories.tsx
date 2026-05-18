import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge, type BadgeProps } from '@/components/ui/badge'
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
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive', 'stamp', 'stamp-success', 'stamp-warning', 'stamp-danger'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="badge" /> } },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

function PlaygroundRender(args: BadgeProps) {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.badge
  const { children, ...rest } = args

  return <Badge {...rest}>{children ?? content.primaryLabel}</Badge>
}

export const Playground: Story = {
  render: (args) => <PlaygroundRender {...args} />,
}

export const OperationalStamps: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="stamp-warning">AGUARDANDO</Badge>
      <Badge variant="stamp-success">PAGO</Badge>
      <Badge variant="stamp">CLIENTE VIP</Badge>
      <Badge variant="stamp-danger">ESTOQUE BAIXO</Badge>
    </div>
  ),
}
