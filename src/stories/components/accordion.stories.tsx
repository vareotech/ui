import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const meta = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="accordion" /> } },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-[360px]">
      <AccordionItem value="when-to-use">
        <AccordionTrigger>When to use?</AccordionTrigger>
        <AccordionContent>Use for progressive disclosure and support information.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
