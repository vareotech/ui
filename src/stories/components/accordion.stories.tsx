import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const meta = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Accordion revela conteúdo progressivamente em listas verticais.' } },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[360px]">
      <AccordionItem value="when-to-use">
        <AccordionTrigger>When to use?</AccordionTrigger>
        <AccordionContent>Use for progressive disclosure and support information.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
