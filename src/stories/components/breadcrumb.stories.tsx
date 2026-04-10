import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

type BreadcrumbStoryArgs = {
  workspaceLabel: string
  sectionLabel: string
  currentLabel: string
}

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
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
} satisfies Meta<BreadcrumbStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ workspaceLabel, sectionLabel, currentLabel }) => (
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
  ),
}
