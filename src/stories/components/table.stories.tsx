import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'

const rows = [
  ['TEN-01', 'Retail Prime', 'Active'],
  ['TEN-02', 'Studio Commerce', 'Rollout'],
  ['TEN-03', 'Franquia Norte', 'Review'],
]

const meta = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="table" /> } },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="w-[520px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Conta</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[0]}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>
                <Badge variant="secondary">{row[2]}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
