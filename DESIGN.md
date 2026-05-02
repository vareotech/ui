# @vareotech/ui — Design System

> A colônia não tem centro de comando. Cada formiga carrega uma fração do mapa,
> e o caminho emerge da soma. Este design system funciona da mesma forma:
> tokens discretos, componentes autônomos, e a coerência nasce do contrato
> entre eles — não de um supervisor central.

O `@vareotech/ui` é a fundação visual e de componentes de todo o ecossistema Vareo.
Ele fornece os **tokens de cor, tipografia, espaçamento, profundidade e motion**
que definem como qualquer produto da Vareo.tech — do LumoSuite à landing
institucional — aparenta, responde e se comporta.

Este documento é a fonte de verdade.

## 2026 marketing surface update

O sistema visual agora segue uma direção **black canvas + electric blue** para superfícies de marketing e produto:

- Canvas padrão quase preto: `--background: 0 0% 4%` (`#0a0a0a`).
- Cards e mockups escuros: `--surface: 0 0% 10%` e hairline `--border: 0 0% 16%`.
- A cor de ação única é azul elétrico: `--primary: 217 100% 62%`. Esta cor substitui qualquer referência ao amarelo ClickHouse.
- Títulos display usam Inter 700 com tracking negativo mais forte (`-0.04em`) para uma presença editorial precisa.
- Profundidade deve vir de contraste entre canvas/surface/border, não de drop shadows.
- Ritmo de seção principal: `96px` (`lg:py-24`).
- Radius principal: `8px` para botões/inputs e `12px` para cards.

As seções históricas abaixo descrevem a origem do sistema, mas as regras acima prevalecem para novos componentes e ajustes visuais.

---

## 1. Visual Theme & Atmosphere

### Por quê dark-first

Dashboards de varejo são ambientes de trabalho prolongado. O gerente de loja
verifica pedidos às 22h; o analista de integração monitora filas de
processamento durante horas. O fundo grafite (`222 22% 8%`) reduz a emissão
de luz branca sem cair no preto absoluto, que esmaga a percepção de
profundidade em telas OLED e isola demais os elementos.

O grafite tem um tint azul sutil (hue 222) que mantém a temperatura fria sem
ser estéril — a mesma linguagem de cor usada por cockpits e control rooms.

### Por quê azul + cyan

O **Signal Blue** (`210 92% 60%`) é a cor de ação. Vibrante o suficiente
para saltar do grafite, institucional o suficiente para não parecer jovial.
Azul é a cor com maior associação universal a confiança e tecnologia.

O **Electric Cyan** (`199 89% 60%`) existe como accent — diferente o
suficiente do primary para criar hierarquia cromática, próximo o suficiente
para não fragmentar a paleta. Cyan marca dados, destaques e estados ativos
que não são ação direta.

### Por quê Inter

Inter Variable é a tipografia de interfaces de alta densidade. Projetada
especificamente para telas, com x-height generosa, numerais tabulares, e um
sistema de optical sizes que mantém legibilidade de 11px a 48px. Não é
decorativa — é infraestrutura.

### Consumidores podem redefinir a identidade cromática

O sistema é propositalmente agnóstico sobre _qual_ cor o primary deve ser.
O LumoSuite usa azul. A landing Vareo.tech usa laranja. Ambos sobrescrevem
`--primary`, `--accent` e `--ring` no `:root` dos seus respectivos CSS.
**Tudo mais permanece intacto.** Esta é a regra de ouro do theming.

---

## 2. Color Palette

Todas as cores são variáveis CSS em formato HSL (sem wrapper `hsl()`),
consumidas via `hsl(var(--token))`. Cada token tem um nome semântico que
descreve a função, nunca a aparência.

### Surfaces & Backgrounds

| Token | HSL | Hex ~aprox | Nome | Papel |
|:------|:----|:-----------|:-----|:------|
| `--background` | `222 22% 8%` | `#101318` | Abyss Graphite | Canvas da aplicação. A escuridão que dá contexto a tudo. |
| `--surface` | `222 18% 11%` | `#161b23` | Control Surface | Cards, painéis, containers elevados — um degrau acima do abismo. |
| `--surface-muted` | `222 16% 14%` | `#1d222c` | Dim Surface | Hover states, superfícies secundárias, áreas recuadas. |
| `--muted` | `220 15% 18%` | `#272d37` | Twilight Gray | Backgrounds terciários, divisores visuais entre seções. |
| `--input` | `220 14% 18%` | `#272d36` | Field Gray | Fundo de inputs e textareas — visualmente distinto do surface. |
| `--secondary` | `220 14% 18%` | `#272d36` | Quiet Gray | Botões secundários, chips, superfícies de baixa ênfase. |

### Text

| Token | HSL | Hex ~aprox | Nome | Papel |
|:------|:----|:-----------|:-----|:------|
| `--foreground` | `210 20% 96%` | `#f2f5f8` | Ghost White | Texto primário — off-white para evitar o brilho puro. |
| `--muted-foreground` | `215 14% 70%` | `#a3acba` | Silver Prose | Texto secundário, descrições, labels, timestamps. |
| `--secondary-foreground` | `210 20% 96%` | `#f2f5f8` | — | Texto sobre superfícies secondary. |

### Brand & Accent

| Token | HSL | Hex ~aprox | Nome | Papel |
|:------|:----|:-----------|:-----|:------|
| `--primary` | `210 92% 60%` | `#3b8cf5` | Signal Blue | A cor de ação. CTAs, links, estados ativos. |
| `--primary-foreground` | `222 40% 8%` | `#0c1019` | — | Texto sobre primary — grafite escuro para contraste. |
| `--accent` | `199 89% 60%` | `#29c5e6` | Electric Cyan | Destaques complementares, dados, indicadores. |
| `--accent-foreground` | `222 40% 8%` | `#0c1019` | — | Texto sobre accent. |
| `--ring` | `211 90% 62%` | `#4194f5` | Focus Halo | Anel de foco para acessibilidade — sempre visível via teclado. |

### Semantic States

| Token | HSL | Hex ~aprox | Nome | Papel |
|:------|:----|:-----------|:-----|:------|
| `--success` | `146 60% 45%` | `#2eb874` | Vibrant Moss | Confirmação, status positivo, saúde do sistema. |
| `--warning` | `39 92% 57%` | `#e8a631` | Amber Alert | Atenção sem pânico — visibilidade alta em dark mode. |
| `--destructive` | `0 72% 48%` | `#d4342a` | Pulse Red | Erros, ações irreversíveis, falhas de processamento. |
| `--info` | `210 92% 60%` | `#3b8cf5` | — | Informação contextual (alias do primary). |

### Disabled

| Token | HSL | Papel |
|:------|:----|:------|
| `--disabled` | `220 10% 28%` | Background de elementos desabilitados. |
| `--disabled-foreground` | `220 10% 58%` | Texto em elementos desabilitados. |

### Shadows

| Token | Value | Papel |
|:------|:------|:------|
| `--shadow-soft` | `0 10px 30px rgba(2,6,23,0.24)` | Elevação padrão — cards, painéis. |
| `--shadow-elevated` | `0 20px 60px rgba(2,6,23,0.3)` | Modais, popovers, elementos flutuantes. |
| `--shadow-overlay` | `0 24px 80px rgba(2,6,23,0.55)` | Overlays de tela cheia, toasts críticos. |

As sombras usam `rgba(2,6,23,...)` — um quase-preto com tint azul — porque
sombras puras (`rgba(0,0,0,...)`) parecem "sujas" sobre grafite.

---

## 3. Typography

### The Inter Standard

A Inter é carregada como Variable Font com `font-feature-settings: 'rlig' 1, 'calt' 1`
para ligaduras contextuais e alternativas estilísticas.

### Hierarchy

| Nível | Tamanho | Peso | Tracking | Line Height | Uso |
|:------|:--------|:-----|:---------|:------------|:----|
| **H1** | `text-4xl` / `sm:text-5xl` | Semibold (600) | `-0.02em` | Tight | Títulos de página. |
| **H2** | `text-3xl` | Semibold (600) | `-0.02em` | Tight | Títulos de seção. |
| **H3** | `text-2xl` | Semibold (600) | `-0.02em` | Tight | Títulos de card, subsections. |
| **H4** | `text-xl` | Medium (500) | Normal | Normal | Sub-headings leves. |
| **Body** | `text-sm` / `sm:text-base` | Regular (400) | Normal | `leading-7` | Parágrafos, descrições. |
| **Label** | `text-sm` | Medium (500) | Normal | None | Form labels, nav links. |
| **Micro** | `text-xs` | Medium (500) | `tracking-wide` | Normal | Badges, tags, overlines. |

### Principles

**Semibold, não Bold.** O peso 600 preserva a abertura dos glifos da Inter
em telas de densidade média. Bold (700) fecha as contraformas e perde
legibilidade abaixo de 16px.

**Tracking negativo nos headings.** `-0.02em` comprime levemente os títulos
para criar massa visual e autoridade sem aumentar o tamanho da fonte.

**Body em `text-sm` como default.** Em ambientes de alta densidade
(tabelas, dashboards, listas), 14px (0.875rem) é o tamanho que maximiza
a quantidade de informação visível sem sacrificar conforto.

**`::selection` em primary/30.** Selecionar texto revela a cor do sistema
em 30% de opacidade — feedback sutil de que o conteúdo é interativo.

---

## 4. Components

Todos os componentes são React, usam `class-variance-authority` (cva)
para variantes, `@radix-ui` para primitivos de acessibilidade, e `cn()`
(clsx + twMerge) para composição de classes.

### Button

O componente mais usado do sistema. `forwardRef`, com suporte a `asChild`
(Radix Slot) para composição com links e outras primitivas.

```tsx
import { Button, IconButton } from '@vareotech/ui'
```

| Prop | Tipo | Default | Descrição |
|:-----|:-----|:--------|:----------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Estilo visual. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Dimensão. |
| `asChild` | `boolean` | `false` | Renderiza como Slot (para `<a>`, `<Link>`, etc.). |
| `loading` | `boolean` | `false` | Exibe spinner `LoaderCircle` e desabilita. |
| `disabled` | `boolean` | `false` | Estado desabilitado com tokens `--disabled`. |

**Variant details:**

| Variant | Background | Text | Border | Hover |
|:--------|:-----------|:-----|:-------|:------|
| `primary` | `bg-primary` | `text-primary-foreground` | Transparent | `brightness-110` |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | Transparent | `bg-secondary/90` |
| `outline` | Transparent | `text-foreground` | `border-border` | `bg-surface-muted` |
| `ghost` | Transparent | `text-muted-foreground` | None | `bg-surface-muted` + `text-foreground` |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | Transparent | `brightness-110` |

**Size details:**

| Size | Height | Padding | Font |
|:-----|:-------|:--------|:-----|
| `sm` | `h-9` (36px) | `px-3` | `text-sm` |
| `md` | `h-10` (40px) | `px-4` | `text-sm` |
| `lg` | `h-11` (44px) | `px-5` | `text-[15px]` |
| `icon` | `size-10` (40×40) | — | — |

**IconButton** é um wrapper de `Button` com `size="icon"` que exige `aria-label`.

### Card Family

Seis function components que compõem a unidade padrão de agrupamento:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@vareotech/ui'
```

| Component | Classes aplicadas | Nota |
|:----------|:------------------|:-----|
| `Card` | `.surface overflow-hidden text-foreground` | Aplica a utility `.surface` (rounded-xl, border, bg-surface, shadow-soft). |
| `CardHeader` | `flex flex-col space-y-1.5 p-6` | — |
| `CardTitle` | `text-lg font-semibold leading-none tracking-tight` | Renderiza `<h3>`. |
| `CardDescription` | `text-sm text-muted-foreground` | Renderiza `<p>`. |
| `CardContent` | `p-6 pt-0` | Sem padding-top para colar no header. |
| `CardFooter` | `flex items-center p-6 pt-0` | Alinha ações horizontalmente. |

### Badge

Indicadores de status e categorias. Sempre `rounded-full`.

```tsx
import { Badge } from '@vareotech/ui'
```

| Variant | Border | Background | Text |
|:--------|:-------|:-----------|:-----|
| `primary` | `border-primary/30` | `bg-primary/15` | `text-primary` |
| `secondary` | `border-border` | `bg-secondary` | `text-secondary-foreground` |
| `outline` | `border-border` | Transparent | `text-muted-foreground` |
| `success` | `border-success/30` | `bg-success/15` | `text-success` |
| `warning` | `border-warning/30` | `bg-warning/15` | `text-warning` |
| `destructive` | `border-destructive/30` | `bg-destructive/15` | `text-[hsl(0_72%_65%)]` |

Base: `px-2.5 py-1 text-xs font-medium tracking-wide`.

### Input

Campo de entrada. Exporta `inputBaseClassName` para reuso em componentes derivados.

```tsx
import { Input, inputBaseClassName } from '@vareotech/ui'
```

Base: `focus-ring h-10 rounded-lg border-input bg-surface px-3 py-2 text-sm`.
States: `disabled` (cursor not-allowed, bg-disabled/20), `read-only` (bg-surface-muted/80),
`aria-invalid` (border-destructive, bg-destructive/5).

### Textarea

Estende `inputBaseClassName` com `min-h-28 resize-y py-3`.

### Label

Radix `LabelPrimitive` com `text-sm font-medium leading-none text-foreground`.
Reage a `peer-disabled` (text-disabled-foreground).

### Separator

Radix `SeparatorPrimitive`. Horizontal: `h-px w-full bg-border`.
Vertical: `h-full w-px bg-border`.

### Full Component Catalog

Além dos componentes acima, o pacote exporta:

Accordion · Alert · Avatar · Breadcrumb · Checkbox · DatePicker · Dialog ·
DropdownMenu · EmptyState · Form · HelperText · LoadingState · Pagination ·
RadioGroup · Select · Sheet · Skeleton · Switch · Table · Tabs · Tag ·
Toast · Toaster · Tooltip · TopNavigation · SideNavigation · Header ·
Footer · ValidationMessage

---

## 5. Layout

### Spacing System

A unidade base é **4px** (Tailwind default). Todas as margens, paddings e
gaps devem ser múltiplos de 4.

Ritmo primário: `8 → 16 → 20 → 24 → 32 → 48`.

### Container Grid

`.container-grid` — a grade padrão para aplicações (dashboards, páginas internas):

```
mx-auto grid w-full max-w-screen-2xl grid-cols-12 gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8
```

12 colunas oferecem divisibilidade máxima (1, 2, 3, 4, 6, 12 colunas),
essencial para dashboards com painéis de tamanho variável.

### Page Section Rhythm

`.page-section` define o respiro vertical entre grandes blocos de conteúdo:
`py-12 sm:py-16 lg:py-20`. Progressão de 48px → 64px → 80px.

### Container Config

```js
container: { center: true, padding: '1rem', screens: { '2xl': '1280px' } }
```

---

## 6. Depth & Elevation

No dark mode, sombras tradicionais são quase invisíveis (escuro sobre escuro).
A profundidade é comunicada por **três canais simultâneos**:

1. **Bordas semi-transparentes** — `border-border/40` a `border-border/90`.
   A opacidade é o dial: mais opaco = mais proeminente.
2. **Stepping de luminosidade** — `background → surface → surface-muted → muted`.
   Cada nível é ~3% mais claro que o anterior.
3. **Sombras com tint azul** — `rgba(2,6,23,...)` em vez de preto puro.

### Elevation Scale

| Level | Utility | Treatment | Uso |
|:------|:--------|:----------|:----|
| **0 — Flat** | — | Sem sombra, bg-background | Canvas, texto solto. |
| **1 — Surface** | `.surface` | `rounded-xl border-border/90 bg-surface shadow-soft` | Cards, painéis, containers. |
| **1b — Muted** | `.surface-muted` | `rounded-xl border-border/80 bg-surface-muted` | Seções recuadas, hover states. |
| **2 — Elevated** | `.surface-elevated` | `rounded-2xl border-border/40` + gradient branco 4%→1% + `shadow-elevated` | Modais, popovers, hero cards. |
| **3 — Overlay** | — | `shadow-overlay` | Toasts, notificações críticas. |

---

## 7. Motion

O movimento no `@vareotech/ui` é **produtivo** — existe para confirmar ação,
orientar foco e suavizar transições. Nunca é decorativo.

### Easing

`--ease-productive: cubic-bezier(0.2, 0.8, 0.2, 1)`

Aceleração rápida, desaceleração suave. O elemento "salta" para a posição
e assenta com naturalidade. Inspirado no Material Design 3, mas com
desaceleração mais longa para transmitir peso.

### Durations

| Token | Valor | Uso |
|:------|:------|:----|
| `--motion-fast` | `120ms` | Hover, active, color transitions. |
| `--motion-base` | `180ms` | Dropdowns, tabs, accordions, fade-in. |
| `--motion-slow` | `240ms` | Expansão de painéis, page transitions. |

### Animations Built-in

| Animation | Keyframes | Uso |
|:----------|:----------|:----|
| `accordion-down` | height: 0 → var(--radix-accordion-content-height) | Abertura de accordion. |
| `accordion-up` | Inverso | Fechamento de accordion. |
| `fade-in` | opacity 0 + translateY(4px) → visible | Entrada de componentes. |

---

## 8. Theming

### Como funciona

O sistema é construído sobre **CSS custom properties** consumidas pelo
Tailwind via `hsl(var(--token))`. Isso permite theming em runtime sem
recompilação.

- **Dark mode**: Ativo no `:root` (default).
- **Light mode**: Ativado via classe `.theme-light` no `<html>` ou container.

### Contrato de theming para consumidores

Consumidores do pacote (landing pages, micro-frontends, tenants do LumoSuite)
**podem e devem** sobrescrever:

| Token | Quando |
|:------|:-------|
| `--primary` | A cor de marca do consumidor (azul → laranja, verde, etc.). |
| `--primary-foreground` | Se o novo primary exigir foreground diferente. |
| `--accent` | Se o consumidor quiser um accent diferente do primary. |
| `--accent-foreground` | Idem. |
| `--ring` | Normalmente acompanha o primary. |

Consumidores **NÃO devem** sobrescrever:

| Token | Motivo |
|:------|:-------|
| `--background`, `--surface`, `--surface-muted` | Quebra a hierarquia de profundidade. |
| `--border`, `--input`, `--muted` | Altera a percepção de bordas e campos. |
| `--foreground`, `--muted-foreground` | Compromete a legibilidade testada. |
| `--radius` | Inconsistência geométrica entre componentes. |
| `--shadow-*` | Desalinha a escala de elevação. |

### Exemplo: landing Vareo.tech

```css
/* Apenas brand accent — tudo mais vem do UI */
:root {
  --primary: 24 80% 53%;
  --primary-foreground: 0 0% 100%;
  --accent: 24 80% 53%;
  --accent-foreground: 0 0% 100%;
  --ring: 24 80% 53%;
}
```

---

## 9. Do's & Don'ts

### Do

- **Use os tokens semânticos** (`bg-primary`, `text-muted-foreground`) — nunca hardcode hex.
- **Use `.surface` para agrupar conteúdo** — garante border, radius e shadow consistentes.
- **Use `.focus-ring` em interativos custom** — acessibilidade por teclado é obrigatória.
- **Use `text-balance` em títulos curtos** — evita linhas órfãs.
- **Use `aria-label` em `IconButton`** — ícones sem texto são invisíveis para screen readers.
- **Use `asChild` em Button** quando o destino for um `<a>` ou `<Link>`.
- **Mantenha densidade** — no varejo, ver mais dados é frequentemente melhor que mais whitespace.

### Don't

- **Não use preto puro (`#000`)** — esmaga a profundidade e causa smearing em OLED.
- **Não use `font-bold` (700) em Inter** — o máximo é `font-semibold` (600). Bold fecha contraformas.
- **Não crie componentes locais** para o que já existe no pacote.
- **Não use sombras com preto puro** — use o tint azul do token `--shadow-*`.
- **Não misture opacity no token e na classe** — use `border-border/50`, não `border-[hsl(var(--border)/0.5)]`.
- **Não sobrescreva tokens de surface/background** em consumidores — o contrato de profundidade é global.
- **Não use cores cromáticas arbitrárias** — se não existe como token, não deveria existir na UI.

---

## 10. Agent Prompt Guide

Referência rápida para IAs gerando interfaces com `@vareotech/ui`.

### Color Map (default dark theme)

```
Background:   hsl(222, 22%, 8%)     ← canvas
Surface:      hsl(222, 18%, 11%)    ← cards
Primary:      hsl(210, 92%, 60%)    ← ação (azul)
Accent:       hsl(199, 89%, 60%)    ← destaque (cyan)
Foreground:   hsl(210, 20%, 96%)    ← texto primário
Muted-fg:     hsl(215, 14%, 70%)    ← texto secundário
Border:       hsl(220, 14%, 22%)    ← bordas (com opacity)
Ring:         hsl(211, 90%, 62%)    ← focus
```

### Component Checklist

- [ ] Ações primárias: `<Button>` (nunca `<button>` nativo).
- [ ] Agrupamento: `<Card>` + sub-componentes (nunca `<div className="border...">` ad-hoc).
- [ ] Campos de form: `<Input>`, `<Textarea>`, `<Label>` (nunca `<input>` nativo).
- [ ] Status: `<Badge variant="success|warning|destructive">`.
- [ ] Acessibilidade: `focus-ring` em todo interativo, `aria-label` em `IconButton`.

### Layout Pattern

```
Container (.container-grid) → Seção (.page-section) → Card (.surface) → Content
```

### Gotchas

1. O `--radius` base é `0.875rem` (14px). `rounded-lg` = 14px, `rounded-xl` = 18px.
2. O `--primary-foreground` é grafite escuro (não branco) — projetado para primary azul.
   Se o consumidor usar primary mais escuro, deve override o foreground para branco.
3. Badge `destructive` usa `text-[hsl(0_72%_65%)]` (65% lightness) em vez do token
   `--destructive` (48%) para legibilidade no dark mode.
4. Textarea herda `inputBaseClassName` do Input — qualquer mudança no Input afeta o Textarea.
5. `.surface-elevated` usa `linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0.01))`
   como background — parece sutilmente mais "iluminado" que `.surface`.

### Iteration Protocol

1. Se a UI parecer "plana", aumente a opacidade das bordas (`/50` → `/80`).
2. Se parecer "barulhenta", reduza e use mais `text-muted-foreground`.
3. Se parecer "desconectada", verifique que os tokens estão sendo usados (não hex/rgb custom).
4. Se um componente não existir no pacote, questione se deveria existir antes de criar local.
