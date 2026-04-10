import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type TabsStoryArgs = {
  defaultValue: 'overview' | 'data'
  onValueChange: ReturnType<typeof fn>
}

const meta = {
  title: 'Data Display/Tabs',
  component: Tabs,
  tags: ['test'],
  args: {
    defaultValue: 'overview',
    onValueChange: fn(),
  },
  argTypes: {
    defaultValue: { control: 'select', options: ['overview', 'data'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="tabs" /> } },
  },
} satisfies Meta<TabsStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultValue, onValueChange }) => (
    <Tabs className="w-[360px]" defaultValue={defaultValue} onValueChange={onValueChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Operational summary</TabsContent>
      <TabsContent value="data">Detailed dataset</TabsContent>
    </Tabs>
  ),
}

export const Interaction: Story = {
  render: ({ defaultValue, onValueChange }) => (
    <Tabs className="w-[360px]" defaultValue={defaultValue} onValueChange={onValueChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Operational summary</TabsContent>
      <TabsContent value="data">Detailed dataset</TabsContent>
    </Tabs>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Data' }))
    await expect(canvas.getByText('Detailed dataset')).toBeInTheDocument()
    await expect(args.onValueChange).toHaveBeenCalledWith('data')
  },
}
