import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag } from '@/components/ui/tag'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'

const meta = {
  title: 'Data Display/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.dataDisplay.docsDescription,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const measurements = [
  { id: 'TEN-01', account: 'Retail Prime', status: 'active', segment: 'retail' },
  { id: 'TEN-02', account: 'Studio Commerce', status: 'inRollout', segment: 'saas' },
  { id: 'TEN-03', account: 'Franquia Norte', status: 'underReview', segment: 'services' },
]

function DataDisplayOverview() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.dataDisplay
  const formsContent = messages.docs.stories.forms

  const statusLabels: Record<string, string> = {
    active: content.active,
    inRollout: content.inRollout,
    underReview: content.underReview,
  }

  const segmentLabels: Record<string, string> = {
    retail: formsContent.retail,
    saas: formsContent.saas,
    services: formsContent.services,
  }

  return (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">{content.kicker}</div>
        <h2 className="story-title mt-2">{content.title}</h2>
      </div>

      <div className="preview-frame space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{content.designSystem}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{content.table}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Tabs defaultValue="table">
          <TabsList>
            <TabsTrigger value="table">{content.table}</TabsTrigger>
            <TabsTrigger value="people">{content.people}</TabsTrigger>
            <TabsTrigger value="faq">{content.accordion}</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{content.id}</TableHead>
                  <TableHead>{content.account}</TableHead>
                  <TableHead>{content.status}</TableHead>
                  <TableHead>{content.segment}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {measurements.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.account}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{statusLabels[row.status] ?? row.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Tag>{segmentLabels[row.segment] ?? row.segment}</Tag>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="people">
            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader>
                <CardTitle>{content.team}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['CA', 'DS', 'PM'].map((name) => (
                  <div key={name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3">
                    <Avatar>
                      <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-foreground">
                        {name} {content.squad}
                      </p>
                      <p className="text-sm text-muted-foreground">{content.squadDescription}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="one">
                <AccordionTrigger>{content.whenToUseTable}</AccordionTrigger>
                <AccordionContent>{content.whenToUseTableBody}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="two">
                <AccordionTrigger>{content.whenToUseCards}</AccordionTrigger>
                <AccordionContent>{content.whenToUseCardsBody}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <Separator />

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export const Overview: Story = {
  render: () => <DataDisplayOverview />,
}
