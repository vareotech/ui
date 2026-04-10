import type { Meta, StoryObj } from '@storybook/react'
import { BellRing, Inbox, Sparkles } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EmptyState } from '@/components/ui/empty-state'
import { LoadingState } from '@/components/ui/loading-state'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Tag } from '@/components/ui/tag'
import { toast } from '@/components/ui/toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'

const meta = {
  title: 'Feedback/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.feedback.docsDescription,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function FeedbackOverviewStory() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.feedback

  return (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">{content.kicker}</div>
        <h2 className="story-title mt-2">{content.title}</h2>
        <p className="story-subtitle mt-2 max-w-3xl">{content.subtitle}</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="preview-frame preview-grid lg:grid-cols-2">
          <Alert variant="info">
            <AlertTitle>{content.maintenanceTitle}</AlertTitle>
            <AlertDescription>{content.maintenanceDescription}</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>{content.slaTitle}</AlertTitle>
            <AlertDescription>{content.slaDescription}</AlertDescription>
          </Alert>
          <EmptyState
            title={content.emptyTicketsTitle}
            description={content.emptyTicketsDescription}
            actionLabel={content.emptyTicketsAction}
          />
          <LoadingState />
        </div>

        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <CardTitle>{content.guidelinesTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4 text-sm leading-7 text-muted-foreground">
              {content.guidelinesBody}
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="modal">
                <AccordionTrigger>{content.whenToUseModal}</AccordionTrigger>
                <AccordionContent>{content.whenToUseModalBody}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="drawer">
                <AccordionTrigger>{content.whenToUseDrawer}</AccordionTrigger>
                <AccordionContent>{content.whenToUseDrawerBody}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FeedbackOverlayPatternsStory() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.feedback

  return (
    <div className="story-shell">
      <div className="preview-frame flex flex-wrap items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button>{content.openDialog}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{content.newConfigTitle}</DialogTitle>
              <DialogDescription>{content.newConfigDescription}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">{content.cancel}</Button>
              <Button>{content.confirm}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">{content.openDrawer}</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{content.operationalSummaryTitle}</SheetTitle>
              <SheetDescription>{content.operationalSummaryDescription}</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{content.menu}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Inbox className="size-4" />
              {content.viewQueue}
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => toast.success(content.toastSuccess)}>
              <BellRing className="size-4" />
              {content.triggerToast}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">{content.tooltipTrigger}</Button>
            </TooltipTrigger>
            <TooltipContent>{content.tooltipBody}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

function FeedbackLoadingAndEmptyStory() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.stories.feedback

  return (
    <div className="story-shell">
      <div className="preview-frame preview-grid md:grid-cols-3">
        <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
          <CardHeader>
            <CardTitle className="text-base">{content.skeletonTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-40" />
          </CardContent>
        </Card>
        <EmptyState
          title={content.noServiceTitle}
          description={content.noServiceDescription}
          actionLabel={content.noServiceAction}
        />
        <div className="space-y-3 rounded-2xl border border-white/10 bg-[rgba(17,24,34,0.88)] p-5">
          <Tag>{content.tagLabel}</Tag>
          <LoadingState
            title={content.publishingTitle}
            description={content.publishingDescription}
            className="border-none bg-transparent p-0 shadow-none"
          />
          <Button
            variant="secondary"
            onClick={() => toast(content.deployStarted, { description: content.deployDescription })}
          >
            <Sparkles className="size-4" />
            {content.triggerToast}
          </Button>
        </div>
      </div>
    </div>
  )
}

export const Overview: Story = {
  render: () => <FeedbackOverviewStory />,
}

export const OverlayPatterns: Story = {
  render: () => <FeedbackOverlayPatternsStory />,
}

export const LoadingAndEmpty: Story = {
  render: () => <FeedbackLoadingAndEmptyStory />,
}
