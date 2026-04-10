import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

type BreadcrumbStoryArgs = {
  workspaceLabel: string
  sectionLabel: string
  currentLabel: string
}

function BreadcrumbStory({ workspaceLabel, sectionLabel, currentLabel }: BreadcrumbStoryArgs) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{workspaceLabel}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{sectionLabel}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

const meta = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbStory,
  tags: ['test'],
  args: {
    workspaceLabel: 'Workspace',
    sectionLabel: 'Pedidos',
    currentLabel: 'Pedido #10293',
  },
  argTypes: {
    workspaceLabel: { control: 'text' },
    sectionLabel: { control: 'text' },
    currentLabel: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Breadcrumb aparece isolado com labels configuráveis via args.' } },
  },
} satisfies Meta<typeof BreadcrumbStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
