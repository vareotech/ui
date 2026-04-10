import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { foundationScale, semanticTokens, tokenGroups } from '@/tokens/semantic'

const typographyPreview = {
  'display 48/56': 'text-5xl leading-[56px] font-semibold tracking-tight',
  'heading 30/38': 'text-[30px] leading-[38px] font-semibold tracking-tight',
  'subheading 24/32': 'text-2xl leading-8 font-semibold tracking-tight',
  'body 16/28': 'text-base leading-7',
  'label 14/20': 'text-sm leading-5 font-medium',
  'caption 12/18': 'text-xs leading-[18px] font-medium uppercase tracking-[0.14em] text-muted-foreground',
} as const

function renderScaleItem(group: string, value: string) {
  if (group === 'typography') {
    return (
      <div className="rounded-xl border border-border/50 bg-surface-muted/60 px-4 py-4">
        <div className={typographyPreview[value as keyof typeof typographyPreview] ?? 'text-sm text-foreground'}>The quick brown fox jumps over the lazy dog</div>
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
          <span className="text-sm font-medium text-foreground">{value}px</span>
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
        component:
          'Fundações visuais e tokens semânticos do Vareo DS. Toda decisão visual deve nascer destes contratos, não de valores isolados.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SemanticPalette: Story = {
  render: () => (
    <div className="story-shell space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="story-kicker">Foundations</div>
          <h2 className="story-title mt-2">Semantic palette</h2>
          <p className="story-subtitle mt-2 max-w-3xl">
            Tokens organizados para criar contraste claro entre canvas, superfícies e estados sem gerar ruído visual.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {semanticTokens.map((token) => (
          <Card key={token.name} className="overflow-hidden border-white/10 bg-[rgba(19,26,37,0.92)]">
            <div className="token-swatch h-28 rounded-none border-x-0 border-t-0" style={{ backgroundColor: token.value }}>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            <CardHeader className="pb-2">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">{token.name}</div>
              <CardTitle className="text-base capitalize">{token.name.replace('-', ' ')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-xs tracking-[0.16em] text-[hsl(var(--foreground)/0.78)]">
                {token.value}
              </div>
              <p className="m-0 text-sm leading-7 text-muted-foreground">{token.usage}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}

export const FoundationScale: Story = {
  render: () => (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">Foundations</div>
        <h2 className="story-title mt-2">Scale and system rhythm</h2>
        <p className="story-subtitle mt-2 max-w-3xl">
          Escalas que sustentam densidade controlada, leitura confortável e previsibilidade entre produto, docs e templates.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(foundationScale).map(([group, values]) => (
          <Card key={group} className="border-border/50 bg-surface">
            <CardHeader>
              <div className="story-kicker">Scale</div>
              <CardTitle className="capitalize">{group}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2.5">
              {values.map((value) => (
                <div key={value}>{renderScaleItem(group, value)}</div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}

export const TokenArchitecture: Story = {
  render: () => (
    <div className="story-shell space-y-6">
      <div>
        <div className="story-kicker">Foundations</div>
        <h2 className="story-title mt-2">Token architecture</h2>
        <p className="story-subtitle mt-2 max-w-3xl">Estrutura preparada para evolução de tema, escala e consistência entre componentes e templates.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Object.entries(tokenGroups).map(([group, values]) => (
          <Card key={group} className="border-white/10 bg-[rgba(19,26,37,0.92)]">
            <CardHeader>
              <CardTitle className="capitalize text-base">{group}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {values.map((value) => (
                <div key={value} className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-foreground">
                  {value}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}
