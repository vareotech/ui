import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

type PaginationStoryArgs = {
  currentPage: 1 | 2 | 3
}

const meta = {
  title: 'Navigation/Pagination',
  component: PaginationExample,
  tags: ['test'],
  args: {
    currentPage: 1,
  },
  argTypes: {
    currentPage: { control: 'select', options: [1, 2, 3] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="pagination" /> } },
  },
} satisfies Meta<typeof PaginationExample>

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

export const Playground: Story = {}

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Go to previous page' })).toHaveFocus()
  },
}
