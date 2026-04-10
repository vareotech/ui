import type * as React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useStorybookI18n } from '@/stories/i18n'

/* ─── Layout (stable API — used by 18 component stories) ─────── */

type StoryContentKey = keyof ReturnType<typeof useStorybookI18n>['messages']['docs']['stories']

export function StoryDocsDescription({ story }: { story: StoryContentKey }) {
  const { messages } = useStorybookI18n()

  const storyContent = messages.docs.stories[story] as { docsDescription: string }

  return <>{storyContent.docsDescription}</>
}

export function StoryLayout({ title, description, children, aside }: { title: string; description: string; children: React.ReactNode; aside?: React.ReactNode }) {
  const { t } = useStorybookI18n()

  return (
    <div className="story-shell space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
        <div>
          <div className="story-kicker">{t('ui.componentDocumentation')}</div>
          <h2 className="story-title mt-2">{title}</h2>
          <p className="story-subtitle mt-2 max-w-3xl">{description}</p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
      {children}
    </div>
  )
}

export function PreviewPanel({ title, description, children, className }: { title: string; description?: string; children: React.ReactNode; className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <Separator />
      <CardContent className="pt-5">{children}</CardContent>
    </Card>
  )
}

export function GuidanceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="m-0 space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
