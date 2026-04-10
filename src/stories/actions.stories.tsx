import type { Meta, StoryObj } from '@storybook/react'
import { MoreHorizontal, Plus, Trash2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, IconButton } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'

const meta = {
  title: 'Forms/Actions Showcase',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: enUS.docs.stories.actions.primaryAction,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.actions.docsDescription,
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

function ActionsShowcase() {
  const { messages, t } = useStorybookI18n()
  const content = messages.docs.stories.actions

  return (
    <div className="story-shell space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="story-kicker">{content.kicker}</div>
          <h2 className="story-title mt-2">{content.title}</h2>
          <p className="story-subtitle mt-2 max-w-3xl">{content.subtitle}</p>
        </div>
        <Badge variant="secondary" className="w-fit">{content.badge}</Badge>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="preview-frame story-empty-grid">
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-sm font-medium text-foreground">{content.showcaseTitle}</div>
              <p className="m-0 text-sm text-muted-foreground">{content.showcaseDescription}</p>
            </div>
            <Badge variant="outline">{t('ui.preview')}</Badge>
          </div>

          <div className="preview-grid md:grid-cols-2">
            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader>
                <CardTitle className="text-base">{content.variants}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>{content.save}</Button>
                <Button variant="secondary">{content.secondary}</Button>
                <Button variant="outline">{content.outline}</Button>
                <Button variant="ghost">{content.ghost}</Button>
                <Button variant="destructive">
                  <Trash2 className="size-4" />
                  {content.delete}
                </Button>
                <Button disabled>{content.disabled}</Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-[rgba(17,24,34,0.88)]">
              <CardHeader>
                <CardTitle className="text-base">{content.contextualActions}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <IconButton variant="secondary" aria-label={content.addItem}>
                    <Plus className="size-4" />
                  </IconButton>
                  <IconButton variant="ghost" aria-label={content.moreActions}>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                  <Button size="sm">{content.compact}</Button>
                  <Button size="lg" variant="secondary">{content.largeAction}</Button>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <div className="mb-2 text-sm font-medium text-foreground">{content.usageNote}</div>
                  <p className="m-0 text-sm leading-7 text-muted-foreground">{content.usageBody}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-white/10 bg-[rgba(19,26,37,0.92)]">
          <CardHeader>
            <div className="story-kicker">{t('ui.guidelines')}</div>
            <CardTitle>{content.quickRead}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">{content.primaryLabel}</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{content.primaryBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">{content.secondaryOutlineLabel}</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{content.secondaryBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-2 text-sm font-medium text-foreground">{content.destructiveLabel}</div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{content.destructiveBody}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const Buttons: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  },
}

export const ActionSet: Story = {
  render: () => <ActionsShowcase />,
}
