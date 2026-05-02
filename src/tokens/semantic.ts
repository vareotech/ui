export const semanticTokens = [
  { group: 'surface', name: 'background', value: 'hsl(var(--background))', usage: 'Canvas preto quase puro para superfícies marketing/produto' },
  { group: 'surface', name: 'surface', value: 'hsl(var(--surface))', usage: 'Cards escuros, code windows e mockups de produto' },
  { group: 'surface', name: 'surface-muted', value: 'hsl(var(--surface-muted))', usage: 'Superfícies elevadas sutis e painéis internos' },
  { group: 'text', name: 'foreground', value: 'hsl(var(--foreground))', usage: 'Texto branco primário e títulos em peso 700' },
  { group: 'text', name: 'muted', value: 'hsl(var(--muted))', usage: 'Áreas neutras e separações quase pretas' },
  { group: 'text', name: 'muted-foreground', value: 'hsl(var(--muted-foreground))', usage: 'Texto secundário cinza claro sobre preto' },
  { group: 'feedback', name: 'border', value: 'hsl(var(--border))', usage: 'Hairline 1px para cartões, inputs e divisores' },
  { group: 'feedback', name: 'input', value: 'hsl(var(--input))', usage: 'Superfícies editáveis escuras' },
  { group: 'feedback', name: 'ring', value: 'hsl(var(--ring))', usage: 'Foco visível azul elétrico' },
  { group: 'brand', name: 'primary', value: 'hsl(var(--primary))', usage: 'Ação dominante, números estatísticos e CTAs em azul elétrico' },
  { group: 'brand', name: 'secondary', value: 'hsl(var(--secondary))', usage: 'Ações de suporte e navegação secundária' },
  { group: 'brand', name: 'accent', value: 'hsl(var(--accent))', usage: 'Ênfase complementar' },
  { group: 'status', name: 'success', value: 'hsl(var(--success))', usage: 'Confirmação e estados positivos' },
  { group: 'status', name: 'warning', value: 'hsl(var(--warning))', usage: 'Atenção moderada e risco controlado' },
  { group: 'status', name: 'destructive', value: 'hsl(var(--destructive))', usage: 'Erro e ações destrutivas' },
  { group: 'status', name: 'info', value: 'hsl(var(--info))', usage: 'Informação contextual' },
  { group: 'status', name: 'disabled', value: 'hsl(var(--disabled))', usage: 'Elementos indisponíveis' },
] as const

export const foundationScale = {
  typography: ['display-xl 72/1.05/700', 'display-lg 56/1.1/700', 'display-md 40/1.15/700', 'title 24/1.3/700', 'body 16/1.55/400', 'caption 12/1.4/600'],
  spacing: ['4', '8', '12', '16', '24', '32', '48', '64', '96'],
  sizing: ['field 40', 'touch 44', 'icon 16/20/24', 'sidebar 280', 'container 1280'],
  radius: ['xs 4', 'sm 6', 'md 8', 'lg 12', 'pill 9999'],
  borderWidth: ['1 default', '2 focus/high emphasis'],
  shadows: ['none by default; depth via black/surface/hairline contrast'],
  motion: ['fast 120ms', 'base 180ms', 'slow 240ms', 'productive cubic-bezier(0.2,0.8,0.2,1)'],
  breakpoints: ['sm 640', 'md 768', 'lg 1024', '2xl container 1280'],
  density: ['relaxed marketing', 'balanced forms', 'compact tables'],
} as const

export const tokenGroups = {
  colors: ['background', 'foreground', 'surface', 'surface-muted', 'primary', 'secondary', 'accent', 'success', 'warning', 'destructive', 'info'],
  typography: ['display', 'heading', 'subheading', 'body', 'label', 'caption'],
  spacing: ['4', '8', '12', '16', '24', '32', '48', '64', '96'],
  sizing: ['field', 'touch', 'icon', 'sidebar', 'container'],
  radius: ['xs', 'sm', 'md', 'lg', 'pill'],
  shadow: ['soft', 'elevated', 'overlay'],
  border: ['default', 'high-emphasis'],
  motion: ['fast', 'base', 'slow', 'productive'],
  breakpoints: ['sm', 'md', 'lg', '2xl-container'],
} as const
