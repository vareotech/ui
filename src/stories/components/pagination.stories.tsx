import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

type PaginationStoryArgs = {
  currentPage: 1 | 2 | 3
}

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['test'],
  args: {
    currentPage: 1,
  },
  argTypes: {
    currentPage: { control: 'select', options: [1, 2, 3] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Paginação renderizada sozinha, com página ativa controlável.' } },
  },
} satisfies Meta<PaginationStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

function PaginationExample({ currentPage }: PaginationStoryArgs) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={page === currentPage}>{page}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export const Playground: Story = {
  render: (args) => <PaginationExample {...args} />,
}

export const KeyboardFocus: Story = {
  render: (args) => <PaginationExample {...args} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Go to previous page' })).toHaveFocus()
  },
}
