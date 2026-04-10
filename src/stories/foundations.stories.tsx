import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'
import { foundationScale, semanticTokens, tokenGroups } from '@/tokens/semantic'

const typographyPreview = {
  'display 48/56': 'text-5xl leading-[56px] font-semibold tracking-tight',
  'heading 30/38': 'text-[30px] leading-[38px] font-semibold tracking-tight',
  'subheading 24/32': 'text-2xl leading-8 font-semibold tracking-tight',
  'body 16/28': 'text-base leading-7',
  'label 14/20': 'text-sm leading-5 font-medium',
  'caption 12/18': 'text-xs leading-[18px] font-medium uppercase tracking-[0.14em] text-muted-foreground',
} as const

function renderScaleItem(group: string, value: string, t: (key: string) => string) {
  if (group === 'typography') {
    return (
      <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4">
        <div className={typographyPreview[value as keyof typeof typographyPreview] ?? 'text-sm text-foreground'}>{t('ui.typographySample')}</div>
        <div className="mt-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">{value}</div>
      </div>
    )
  }

  if (group === 'spacing') {
    const size = Number(value)
    return (
      <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="h-3 rounded-full bg-primary" style={{ width: `${size * 3}px` }} />
          <span className="text-sm font-medium text-foreground">{value}{t('ui.pxLabel')}</span>
        </div>
      </div>
    )
  }

  if (group === 'radius') {
    const radiusMap: Record<string, string> = {
      'xs 8': 'rounded-xs',
      'sm 10': 'rounded-sm',
      'md 12': 'rounded-md',
      'lg 14': 'rounded-lg',
      'xl 18': 'rounded-xl',
      '2xl 28': 'rounded-[28px]',
    }

    return (
      <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4">
        <div className={`h-14 w-24 border border-primary/40 bg-primary/10 ${radiusMap[value] ?? 'rounded-lg'}`} />
        <div className="mt-3 text-sm font-medium text-foreground">{value}</div>
      </div>
    )
  }

  if (group === 'shadows') {
    const shadowMap: Record<string, string> = {
      soft: 'shadow-soft',
      elevated: 'shadow-elevated',
      overlay: 'shadow-overlay',
    }

    return (
      <div className="rounded-xl border border-border/50 bg-background px-4 py-4">
        <div className={`h-16 rounded-xl border border-border bg-surface ${shadowMap[value] ?? ''}`} />
        <div className="mt-3 text-sm font-medium text-foreground">{value}</div>
      </div>
    )
  }

  if (group === 'motion') {
    return (
      <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4">
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    )
  }

  return <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4 text-sm font-medium text-foreground">{value}</div>
}

const meta = {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.foundations.docsDescription,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function SemanticPaletteStory() {
  const { messages, t } = useStorybookI18n()
  const content = messages.docs.stories.foundations

  return (
    <div className="story-shell space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="story-kicker">{t('ui.foundationsLabel')}</div>
          <h2 className="story-title mt-2">{content.semanticPaletteTitle}</h2>
          <p className="story-subtitle mt-2 max-w-3xl">{content.semanticPaletteDescription}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {semanticTokens.map((token) => (
          <Card key={token.name} className="overflow-hidden border-border/50 bg-surface">
            <div className="token-swatch h-28 rounded-none border-x-0 border-t-0" style={{ backgroundColor: token.value }}>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/55 to-transparent" />
            </div>
            <CardHeader className="pb-2">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">{token.name}</div>
              <CardTitle className="text-base capitalize">{token.name.replace('-', ' ')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border border-border/50 bg-surface-muted/60 px-3 py-2 text-xs tracking-[0.16em] text-muted-foreground">
                {token.value}
              </div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{content.tokenUsage[token.name as keyof typeof content.tokenUsage] ?? token.usage}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function FoundationScaleStory() {
  const { messages, t } = useStorybookI18n()
  const content = messages.docs.stories.foundations

  return (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">{t('ui.foundationsLabel')}</div>
        <h2 className="story-title mt-2">{content.foundationScaleTitle}</h2>
        <p className="story-subtitle mt-2 max-w-3xl">{content.foundationScaleDescription}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(foundationScale).map(([group, values]) => (
          <Card key={group} className="border-border/50 bg-surface">
            <CardHeader>
              <div className="story-kicker">{t('ui.scaleLabel')}</div>
              <CardTitle className="capitalize">{group}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2.5">
              {values.map((value) => (
                <div key={value}>{renderScaleItem(group, value, t)}</div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function TokenArchitectureStory() {
  const { messages, t } = useStorybookI18n()
  const content = messages.docs.stories.foundations

  return (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">{t('ui.foundationsLabel')}</div>
        <h2 className="story-title mt-2">{content.tokenArchitectureTitle}</h2>
        <p className="story-subtitle mt-2 max-w-3xl">{content.tokenArchitectureDescription}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Object.entries(tokenGroups).map(([group, values]) => (
          <Card key={group} className="border-border/50 bg-surface">
            <CardHeader>
              <CardTitle className="capitalize text-base">{group}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {values.map((value) => (
                <div key={value} className="rounded-lg border border-border/50 bg-surface-muted/60 px-3 py-2 text-sm text-foreground">
                  {value}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const SemanticPalette: Story = {
  render: () => <SemanticPaletteStory />,
}

export const FoundationScale: Story = {
  render: () => <FoundationScaleStory />,
}

export const TokenArchitecture: Story = {
  render: () => <TokenArchitectureStory />,
}
