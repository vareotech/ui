# @vareotech/ui — Design System

> A colony has no command centre. Each ant carries a fraction of the map,
> and the path emerges from the sum. This design system works the same way:
> discrete tokens, autonomous components, and coherence born from the contract
> between them — not from a central supervisor.

`@vareotech/ui` is the visual and component foundation for every Vareo product.
It supplies the **colour, typography, spacing, depth, and motion tokens** that
define how any Vareo surface — from the LumoSuite dashboard to the institutional
landing page — looks, feels, and behaves.

This document is the source of truth.

## 2026 retail operation layer

The current Vareo.tech landing uses a retail-operation layer on top of the
shared system. This layer is for surfaces that need to feel like real store
workflows: WhatsApp conversation, order, receipt, product tag, seller, stock,
customer history, payment status, and repurchase.

Reusable primitives added for that layer:

- `Button` variants `retail` and `retail-outline`: compact angular geometry,
  2px borders, dry offset shadow, and perceptible movement in consumers.
- `Badge` stamp variants: `stamp`, `stamp-success`, `stamp-warning`, and
  `stamp-danger` for operational states such as `AGUARDANDO`, `PAGO`,
  `RECOMPRA`, and `ESTOQUE BAIXO`.
- `OperationalCard`: document-like card with stronger left border, top-right
  notch, internal structure, and dry offset depth.
- `MetricCard`, `StepCard`, `ModuleCard`, and `TestimonialCard`: specialized
  retail cards that avoid generic white-card grids.

Recommended retail tokens for consumers:

| Token | HSL | Role |
|:------|:----|:-----|
| `--background` | `45 33% 96%` | warm paper canvas |
| `--surface` | `0 0% 99%` | document/card surface |
| `--surface-muted` | `142 18% 91%` | operational row fill |
| `--foreground` | `170 35% 10%` | strong ink text |
| `--border` | `160 13% 78%` | visible document line |
| `--primary` | `148 72% 35%` | WhatsApp/action green |
| `--warning` | `37 92% 56%` | pending/payment attention |
| `--success` | `148 68% 34%` | paid/active/positive status |

Depth in this layer should come from offset shadows such as
`4px 4px 0 hsl(var(--foreground) / 0.12)`, visible dividers, and status rails,
not from generic blur shadows.

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

### Why pure-black-first

Retail operation software lives on screens that are open all day: a store
manager checking orders at 10 pm, an analyst watching fulfilment queues for
hours. The near-pure-black canvas (`#000000`) eliminates ambient light bleed,
makes hardware OLED panels look their sharpest, and forces all depth
communication to happen through luminosity stepping and hairline borders —
the most precise tools available.

Black is not "flat". The system builds depth through a deliberate stepping
ladder: `background (#000) → surface (#0a0a0a) → surface-muted (#111) → muted (#171717)`.
Each rung is 3–4 percentage points lighter — enough to differentiate layers,
not enough to compete with content.

### Why Geist

Geist is designed for dense interface work. It ships with tabular numerals,
contextual ligatures, optical size calibration from 10 px to 64 px, and a
Mono sibling that shares the same skeleton — making code, IDs, and data
labels feel like part of the same type family. Unlike Inter, Geist was built
with dark backgrounds in mind: the letter shapes remain open and legible
even at the smallest dashboard label sizes.

Geist Mono is used for overlines, kicker text, metric labels, and anything
that benefits from fixed-width rhythm — timestamps, status codes, monetary
values, short identifiers.

### Why Geist + Space Grotesk (landing only)

The institutional landing needs a display face with more personality than
Geist alone provides. Space Grotesk brings geometric authority, monolinear
terminals, and dramatic letter spacing to hero headlines. It is strictly a
landing-layer addition — it never enters the application product.

### The primary colour is a consumer choice

The system is deliberately agnostic about which hue `--primary` should be.
LumoSuite uses Signal Blue. The Vareo.tech landing uses Burnt Orange. Both
override `--primary`, `--primary-foreground`, `--accent`, `--accent-foreground`,
and `--ring` in their own `:root`. Everything else is inherited intact.
This is the golden rule of theming.

---

## 2. Colour Palette

All colours are CSS custom properties in HSL format (without the `hsl()` wrapper),
consumed as `hsl(var(--token))`. Every token carries a semantic name that
describes function, never appearance.

### Surfaces & Backgrounds

| Token | HSL | Hex (approx) | Role |
|:------|:----|:-------------|:-----|
| `--background` | `0 0% 0%` | `#000000` | Application canvas. Absolute black — forces every element above it to have presence. |
| `--surface` | `0 0% 4%` | `#0a0a0a` | Cards, panels, elevated containers — one rung above canvas. |
| `--surface-muted` | `0 0% 7%` | `#111111` | Hover states, secondary surfaces, recessed areas. |
| `--muted` | `0 0% 9%` | `#171717` | Tertiary backgrounds, visual dividers between sections. |
| `--input` | `0 0% 9%` | `#171717` | Input and textarea backgrounds — visually distinct from surface. |
| `--secondary` | `0 0% 9%` | `#171717` | Secondary buttons, chips, low-emphasis surfaces. |
| `--border` | `0 0% 10%` | `#1a1a1a` | Hairline borders. Always used with opacity modifiers (`/40` – `/90`). |

### Text

| Token | HSL | Hex (approx) | Role |
|:------|:----|:-------------|:-----|
| `--foreground` | `210 20% 96%` | `#f2f5f8` | Primary text — off-white to prevent hard contrast fatigue. |
| `--muted-foreground` | `215 14% 70%` | `#a3acba` | Secondary text: descriptions, labels, timestamps, captions. |
| `--secondary-foreground` | `210 20% 96%` | `#f2f5f8` | Text on secondary surfaces. |

### Brand & Accent (default — overridden by consumers)

| Token | HSL (default) | Hex (approx) | Role |
|:------|:--------------|:-------------|:-----|
| `--primary` | `210 92% 60%` | `#3b8cf5` | Signal Blue — primary action colour. CTAs, active states, links. |
| `--primary-foreground` | `0 0% 0%` | `#000000` | Text on primary background. Black on blue gives maximum contrast. |
| `--accent` | `199 89% 60%` | `#29c5e6` | Electric Cyan — complementary highlight for data and indicators. |
| `--accent-foreground` | `0 0% 0%` | `#000000` | Text on accent background. |
| `--ring` | `211 90% 62%` | `#4194f5` | Focus halo — always visible via keyboard navigation. |

### Semantic States

| Token | HSL | Hex (approx) | Role |
|:------|:----|:-------------|:-----|
| `--success` | `146 60% 45%` | `#2eb874` | Confirmation, positive status, system health. |
| `--warning` | `39 92% 57%` | `#e8a631` | Attention without panic — high visibility on dark backgrounds. |
| `--destructive` | `0 72% 48%` | `#d4342a` | Errors, irreversible actions, processing failures. |
| `--info` | `210 92% 60%` | `#3b8cf5` | Contextual information (alias of default primary). |

### Disabled

| Token | HSL | Role |
|:------|:----|:-----|
| `--disabled` | `0 0% 17%` | Background of disabled elements. |
| `--disabled-foreground` | `0 0% 40%` | Text inside disabled elements. |

### Shadows

| Token | Value | Role |
|:------|:------|:-----|
| `--shadow-soft` | `0 10px 30px rgba(0,0,0,0.40)` | Default elevation — cards, panels. |
| `--shadow-elevated` | `0 20px 60px rgba(0,0,0,0.55)` | Modals, popovers, floating elements. |
| `--shadow-overlay` | `0 24px 80px rgba(0,0,0,0.70)` | Full-screen overlays, critical toasts. |

Shadows use pure `rgba(0,0,0,…)` against the near-black canvas. Higher
opacities are needed precisely because the background is very dark — shadows
must create true depth separation.

---

## 3. Typography

### The Geist Standard

Geist is loaded from Google Fonts with `font-feature-settings: 'rlig' 1, 'calt' 1, 'ss01' 1, 'ss02' 1`
for contextual ligatures and stylistic alternates.

```css
font-family: "Geist", "Inter", ui-sans-serif, system-ui, sans-serif;
```

Inter is kept as an immediate fallback since it shares similar metrics,
preventing layout shifts if Geist fails to load.

### Geist Mono

Used for all data-adjacent text: overlines, metric labels, IDs, timestamps,
monetary values, status codes. The shared skeleton with Geist means the two
weights coexist without jarring contrast.

```css
font-family: "Geist Mono", "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;
```

### Hierarchy

| Level | Size | Weight | Tracking | Line Height | Use |
|:------|:-----|:-------|:---------|:------------|:----|
| H1 | `text-4xl` / `sm:text-5xl` | Semibold (600) | `−0.025em` | Tight | Page titles |
| H2 | `text-3xl` | Semibold (600) | `−0.025em` | Tight | Section titles |
| H3 | `text-2xl` | Semibold (600) | `−0.025em` | Tight | Card titles, sub-sections |
| H4 | `text-xl` | Medium (500) | Normal | `1.75rem` | Light sub-headings |
| Body | `text-sm` / `sm:text-base` | Regular (400) | Normal | `leading-7` | Paragraphs, descriptions |
| Label | `text-sm` | Medium (500) | Normal | — | Form labels, nav links |
| Micro | `text-xs` | Medium (500) | `tracking-wide` | Normal | Badges, tags, captions |

### Principles

**Semibold, not Bold.** Weight 600 keeps Geist's letter shapes open at
medium screen densities. Bold (700) closes counters below 16 px and hurts
legibility in dense tables and lists.

**Negative tracking on headings.** `−0.025em` compresses titles into tight
visual blocks, adding authority without increasing font size.

**Body at `text-sm` by default.** In high-density environments (dashboards,
order lists, data tables), 14 px maximises the amount of visible information
without sacrificing reading comfort.

**`::selection` at `primary/30`.** Selecting text reveals the system colour
at 30% opacity — a subtle signal that the content is interactive.

---

## 4. Utilities

Beyond the standard Tailwind utility classes, `@vareotech/ui` injects a small set
of semantic utility classes that encode recurring patterns from the product.

### `.eyebrow`

A kicker label — the small text fragment that precedes a section heading and
provides context before the headline lands.

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Geist Mono", monospace;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: hsl(var(--muted-foreground));
}
```

Usage: always paired with either `.eyebrow-dot` or `.live-dot` as its first child.

### `.eyebrow-dot`

Static coloured dot that precedes an eyebrow label.

```css
.eyebrow-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: hsl(var(--primary));
  flex-shrink: 0;
}
```

### `.live-dot`

Animated pulsing dot indicating live data, active connection, or real-time status.

```css
.live-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: hsl(var(--success));
  animation: live-pulse 1800ms ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes live-pulse {
  0%, 100% { opacity: 1;   transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}
```

Usage: `<span className="live-dot" /> ao vivo` inside `.eyebrow` containers.

### Display Scale

Large display headings for hero sections and major landing moments.
Intended for use with the Space Grotesk display font (`.heading-display`
in landing consumers).

| Class | Font Size | Line Height | Letter Spacing |
|:------|:----------|:------------|:---------------|
| `.display-xxl` | clamp(3rem, 7vw, 6rem) | 1.0 | −0.04em |
| `.display-xl` | clamp(2.5rem, 5vw, 4.5rem) | 1.02 | −0.035em |
| `.display-lg` | clamp(2rem, 4vw, 3.5rem) | 1.05 | −0.03em |
| `.display-md` | clamp(1.75rem, 3vw, 2.5rem) | 1.08 | −0.025em |
| `.display-sm` | clamp(1.5rem, 2.5vw, 2rem) | 1.1 | −0.02em |

---

## 5. Components

All components are React, use `class-variance-authority` (CVA) for variants,
`@radix-ui` for accessible primitives, and `cn()` (clsx + twMerge) for
class composition.

### Button

The most-used component. `forwardRef`, with `asChild` support (Radix Slot)
for composition with links and other primitives. Pill-shaped by default —
`rounded-full` across all variants and sizes.

```tsx
import { Button, IconButton } from '@vareotech/ui'
```

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Dimension. |
| `asChild` | `boolean` | `false` | Renders as Slot (for `<a>`, `<Link>`, etc.). |
| `loading` | `boolean` | `false` | Shows `LoaderCircle` spinner and disables. |
| `disabled` | `boolean` | `false` | Disabled state using `--disabled` tokens. |

**Variant details:**

| Variant | Background | Text | Border | Hover |
|:--------|:-----------|:-----|:-------|:------|
| `primary` | `bg-primary` | `text-primary-foreground` | Transparent | `brightness-110` |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | Transparent | `bg-secondary/90` |
| `outline` | Transparent | `text-foreground` | `border-border` | `bg-surface-muted` |
| `ghost` | Transparent | `text-muted-foreground` | None | `bg-surface-muted` + `text-foreground` |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | Transparent | `brightness-110` |

**Size details:**

| Size | Height | Padding | Font | Shape |
|:-----|:-------|:--------|:-----|:------|
| `sm` | `h-9` (36 px) | `px-4` | `text-sm` | `rounded-full` |
| `md` | `h-10` (40 px) | `px-5` | `text-sm` | `rounded-full` |
| `lg` | `h-12` (48 px) | `px-6` | `text-[15px]` | `rounded-full` |
| `icon` | `size-10` (40×40) | — | — | `rounded-full` |

**IconButton** is a wrapper of `Button` with `size="icon"` that requires `aria-label`.

### Card Family

Six function components that compose the standard content grouping unit:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@vareotech/ui'
```

| Component | Applied Classes | Note |
|:----------|:----------------|:-----|
| `Card` | `.surface overflow-hidden text-foreground` | Applies `.surface` utility (rounded-xl, border, bg-surface, shadow-soft). |
| `CardHeader` | `flex flex-col space-y-1.5 p-6` | — |
| `CardTitle` | `text-lg font-semibold leading-none tracking-tight` | Renders `<h3>`. |
| `CardDescription` | `text-sm text-muted-foreground` | Renders `<p>`. |
| `CardContent` | `p-6 pt-0` | No top padding — sits flush under the header. |
| `CardFooter` | `flex items-center p-6 pt-0` | Aligns actions horizontally. |

### Badge

Status indicators and categories. Always `rounded-full`.

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

Entry field. Exports `inputBaseClassName` for reuse in derived components.

```tsx
import { Input, inputBaseClassName } from '@vareotech/ui'
```

Base: `focus-ring h-10 rounded-lg border-input bg-surface px-3 py-2 text-sm`.
States: `disabled` (cursor not-allowed, bg-disabled/20), `read-only` (bg-surface-muted/80),
`aria-invalid` (border-destructive, bg-destructive/5).

### Textarea

Extends `inputBaseClassName` with `min-h-28 resize-y py-3`.

### Other Components

The package also exports:

Accordion · Alert · Avatar · Breadcrumb · Checkbox · DatePicker · Dialog ·
DropdownMenu · EmptyState · Form · HelperText · LoadingState · Pagination ·
RadioGroup · Select · Sheet · Skeleton · Switch · Table · Tabs · Tag ·
Toast · Toaster · Tooltip · TopNavigation · SideNavigation · Header ·
Footer · ValidationMessage

---

## 6. Layout

### Spacing System

The base unit is **4 px** (Tailwind default). All margins, paddings, and gaps
must be multiples of 4.

Primary rhythm: `8 → 16 → 20 → 24 → 32 → 48`.

### Container Grid

`.container-grid` — the standard grid for applications (dashboards, internal pages):

```
mx-auto grid w-full max-w-screen-2xl grid-cols-12 gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8
```

12 columns offer maximum divisibility (1, 2, 3, 4, 6, 12 columns), essential
for dashboards with panels of varying sizes.

### Page Section Rhythm

`.page-section` defines the vertical breathing space between large content blocks:
`py-12 sm:py-16 lg:py-20`. Progression: 48 px → 64 px → 80 px.

---

## 7. Depth & Elevation

On pure-black backgrounds, depth cannot rely on shadows alone (dark on dark).
The system communicates elevation through three simultaneous channels:

1. **Semi-transparent borders** — `border-border/40` to `border-border/90`.
   Opacity is the dial: more opaque = more prominent.
2. **Luminosity stepping** — `background → surface → surface-muted → muted`.
   Each level is ~3% lighter than the previous.
3. **High-opacity shadows** — `rgba(0,0,0,0.40–0.70)` create physical separation.

### Elevation Scale

| Level | Utility | Treatment | Use |
|:------|:--------|:----------|:----|
| **0 — Flat** | — | No shadow, `bg-background` | Canvas, loose text. |
| **1 — Surface** | `.surface` | `rounded-xl border-border/90 bg-surface shadow-soft` | Cards, panels, containers. |
| **1b — Muted** | `.surface-muted` | `rounded-xl border-border/80 bg-surface-muted` | Recessed sections, hover states. |
| **2 — Elevated** | `.surface-elevated` | `rounded-2xl border-border/40` + 4%→1% white gradient + `shadow-elevated` | Modals, popovers, hero cards. |
| **3 — Overlay** | — | `shadow-overlay` | Full-screen overlays, critical toasts. |

---

## 8. Motion

Motion in `@vareotech/ui` is **productive** — it exists to confirm actions,
orient focus, and smooth transitions. Never decorative.

### Easing

`--ease-productive: cubic-bezier(0.2, 0.8, 0.2, 1)`

Fast acceleration, soft deceleration. The element jumps to position and
settles naturally. A longer deceleration than standard Material curves
communicates weight and physicality.

### Durations

| Token | Value | Use |
|:------|:------|:----|
| `--motion-fast` | `120ms` | Hover, active, colour transitions. |
| `--motion-base` | `180ms` | Dropdowns, tabs, accordions, fade-in. |
| `--motion-slow` | `240ms` | Panel expansion, page transitions. |

### Built-in Animations

| Animation | Keyframes | Use |
|:----------|:----------|:----|
| `accordion-down` | height: 0 → var(--radix-accordion-content-height) | Accordion open. |
| `accordion-up` | Reverse | Accordion close. |
| `fade-in` | opacity 0 + translateY(4px) → visible | Component entrance. |
| `live-pulse` | opacity + scale oscillation | Live status dot. |

---

## 9. Theming

### How it works

The system is built on **CSS custom properties** consumed by Tailwind via
`hsl(var(--token))`. This enables runtime theming without recompilation.

- **Dark mode**: Active at `:root` (default — all products are dark-first).
- **Light mode**: Activated via the `.theme-light` class on `<html>` or a container.

### Consumer theming contract

Consumers (landing pages, micro-frontends, LumoSuite tenants) **may and should**
override:

| Token | When |
|:------|:-----|
| `--primary` | The consumer's brand colour (blue → orange, green, etc.). |
| `--primary-foreground` | If the new primary requires a different foreground for contrast. |
| `--accent` | If the consumer wants an accent distinct from primary. |
| `--accent-foreground` | Accordingly. |
| `--ring` | Typically follows primary. |

Consumers **must not** override:

| Token | Reason |
|:------|:-------|
| `--background`, `--surface`, `--surface-muted` | These form the calibrated depth hierarchy. |
| `--border`, `--input`, `--muted` | Alters the perception of borders and fields system-wide. |
| `--foreground`, `--muted-foreground` | Legibility has been tested for this exact dark theme. |
| `--radius` | Geometric inconsistency across components. |
| `--shadow-*` | Misaligns the elevation scale. |

### Example: Vareo.tech landing

```css
/* Only brand accent — everything else comes from the UI package */
:root {
  --primary: 24 80% 53%;           /* Burnt Orange */
  --primary-foreground: 0 0% 100%; /* White (blue used black) */
  --accent: 24 80% 53%;
  --accent-foreground: 0 0% 100%;
  --ring: 24 80% 53%;
}
```

---

## 10. Do's & Don'ts

### Do

- **Use semantic tokens** (`bg-primary`, `text-muted-foreground`) — never hardcode hex or rgb.
- **Use `.surface` to group content** — ensures consistent border, radius, and shadow.
- **Use `.focus-ring` on custom interactives** — keyboard accessibility is required.
- **Use `.eyebrow` + `.eyebrow-dot` / `.live-dot` for kicker labels** — standard overline pattern.
- **Use `text-balance` on short titles** — prevents orphan lines.
- **Use `aria-label` on `IconButton`** — icon-only buttons are invisible to screen readers.
- **Use `asChild` on Button** when the destination is an `<a>` or `<Link>`.
- **Maintain density** — in retail software, seeing more data is often better than more whitespace.
- **Use opacity modifiers on border** — `border-border/40` not `border-border` in most cases.

### Don't

- **Do not use saturated off-palette colours** — if it does not exist as a token, it should not exist in the UI.
- **Do not use `font-bold` (700) in Geist** — max is `font-semibold` (600). Bold closes counters.
- **Do not build local components** for what already exists in the package.
- **Do not override surface/background tokens** in consumers — the depth contract is global.
- **Do not mix inline opacity with token opacity** — use `border-border/50`, not `border-[hsl(var(--border)/0.5)]`.
- **Do not use high-opacity white overlays** — the near-black theme is destroyed by it.
- **Do not use decorative motion** — every animation must communicate state change.

---

## 11. Agent Prompt Guide

Quick reference for AI systems generating interfaces with `@vareotech/ui`.

### Default Dark Theme Colour Map

```
Background:      hsl(0, 0%, 0%)       ← pure black canvas
Surface:         hsl(0, 0%, 4%)       ← #0a0a0a — cards
Surface-muted:   hsl(0, 0%, 7%)       ← #111111 — recessed areas
Muted:           hsl(0, 0%, 9%)       ← #171717 — tertiary backgrounds
Border:          hsl(0, 0%, 10%)      ← #1a1a1a — hairlines (use with /40–/90)
Foreground:      hsl(210, 20%, 96%)   ← off-white primary text
Muted-fg:        hsl(215, 14%, 70%)   ← silver secondary text
Primary:         hsl(210, 92%, 60%)   ← Signal Blue (default — consumer overrides)
Ring:            hsl(211, 90%, 62%)   ← focus halo
Success:         hsl(146, 60%, 45%)   ← green
Warning:         hsl(39, 92%, 57%)    ← amber
Destructive:     hsl(0, 72%, 48%)     ← red
```

### Vareo.tech Consumer Override (Burnt Orange)

```
Primary:              hsl(24, 80%, 53%)   ← #e8772a
Primary-foreground:   hsl(0, 0%, 100%)   ← white on orange
Ring:                 hsl(24, 80%, 53%)   ← focus = brand
```

### Component Checklist

- [ ] Primary actions: `<Button>` (never native `<button>`).
- [ ] Content grouping: `<Card>` + sub-components (never ad-hoc `<div className="border …">`).
- [ ] Form fields: `<Input>`, `<Textarea>`, `<Label>` (never native `<input>`).
- [ ] Status: `<Badge variant="success|warning|destructive">`.
- [ ] Kicker labels: `<span className="eyebrow"><span className="eyebrow-dot" /> Label</span>`.
- [ ] Live status: `<span className="live-dot" /> ao vivo` inside an `.eyebrow`.
- [ ] Accessibility: `focus-ring` on every custom interactive, `aria-label` on `IconButton`.

### Layout Pattern

```
Container (.container-grid) → Section (.page-section) → Card (.surface) → Content
```

### Gotchas

1. `--radius` base is `0.875rem` (14 px). `rounded-lg` = 14 px, `rounded-xl` = 18 px.
   Buttons are `rounded-full` (pill) — this is intentional and must not be reverted.
2. `--primary-foreground` is now **pure black** (`0 0% 0%`) in the default theme —
   designed for the Signal Blue primary. Orange consumers override it to white.
3. Badge `destructive` uses `text-[hsl(0_72%_65%)]` (65% lightness) instead of
   the `--destructive` token (48%) for legibility on dark backgrounds.
4. Textarea inherits `inputBaseClassName` from Input — changes to Input affect Textarea.
5. `.surface-elevated` uses `linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0.01))`
   as background — it appears subtly more "illuminated" than `.surface`.
6. Geist Mono is for data labels, not for body text. If you need a mono eyebrow,
   use `.eyebrow` which already sets the correct family, size, and tracking.

### Iteration Protocol

1. If the UI feels **flat**: increase border opacity (`/50` → `/80`).
2. If it feels **noisy**: reduce borders and use more `text-muted-foreground`.
3. If it feels **disconnected**: verify tokens are being used (no hex/rgb custom values).
4. If a component is **missing from the package**: question whether it should be
   added before building it locally.
