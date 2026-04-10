export const semanticTokens = [
  { group: 'surface', name: 'background', value: 'hsl(var(--background))', usage: 'Canvas base do produto' },
  { group: 'surface', name: 'surface', value: 'hsl(var(--surface))', usage: 'Cards, painéis e regiões principais' },
  { group: 'surface', name: 'surface-muted', value: 'hsl(var(--surface-muted))', usage: 'Blocos secundários e agrupamentos internos' },
  { group: 'text', name: 'foreground', value: 'hsl(var(--foreground))', usage: 'Texto primário e títulos' },
  { group: 'text', name: 'muted', value: 'hsl(var(--muted))', usage: 'Áreas neutras, placeholders e apoio' },
  { group: 'text', name: 'muted-foreground', value: 'hsl(var(--muted-foreground))', usage: 'Texto secundário' },
  { group: 'feedback', name: 'border', value: 'hsl(var(--border))', usage: 'Separadores e contornos' },
  { group: 'feedback', name: 'input', value: 'hsl(var(--input))', usage: 'Contorno de campos e superfícies editáveis' },
  { group: 'feedback', name: 'ring', value: 'hsl(var(--ring))', usage: 'Foco visível e destaque acessível' },
  { group: 'brand', name: 'primary', value: 'hsl(var(--primary))', usage: 'Ação dominante e destaque principal' },
  { group: 'brand', name: 'secondary', value: 'hsl(var(--secondary))', usage: 'Ações de suporte e navegação secundária' },
  { group: 'brand', name: 'accent', value: 'hsl(var(--accent))', usage: 'Ênfase complementar' },
  { group: 'status', name: 'success', value: 'hsl(var(--success))', usage: 'Confirmação e estados positivos' },
  { group: 'status', name: 'warning', value: 'hsl(var(--warning))', usage: 'Atenção moderada e risco controlado' },
  { group: 'status', name: 'destructive', value: 'hsl(var(--destructive))', usage: 'Erro e ações destrutivas' },
  { group: 'status', name: 'info', value: 'hsl(var(--info))', usage: 'Informação contextual' },
  { group: 'status', name: 'disabled', value: 'hsl(var(--disabled))', usage: 'Elementos indisponíveis' },
] as const

export const foundationScale = {
  typography: ['display 48/56', 'heading 30/38', 'subheading 24/32', 'body 16/28', 'label 14/20', 'caption 12/18'],
  spacing: ['4', '8', '12', '16', '20', '24', '32', '40', '48', '64', '80'],
  sizing: ['field 40', 'touch 44', 'icon 16/20/24', 'sidebar 280', 'container 1280'],
  radius: ['xs 8', 'sm 10', 'md 12', 'lg 14', 'xl 18', '2xl 28'],
  borderWidth: ['1 default', '2 focus/high emphasis'],
  shadows: ['soft', 'elevated', 'overlay'],
  motion: ['fast 120ms', 'base 180ms', 'slow 240ms', 'productive cubic-bezier(0.2,0.8,0.2,1)'],
  breakpoints: ['sm 640', 'md 768', 'lg 1024', '2xl container 1280'],
  density: ['relaxed marketing', 'balanced forms', 'compact tables'],
} as const

export const tokenGroups = {
  colors: ['background', 'foreground', 'surface', 'surface-muted', 'primary', 'secondary', 'accent', 'success', 'warning', 'destructive', 'info'],
  typography: ['display', 'heading', 'subheading', 'body', 'label', 'caption'],
  spacing: ['4', '8', '12', '16', '20', '24', '32', '40', '48', '64', '80'],
  sizing: ['field', 'touch', 'icon', 'sidebar', 'container'],
  radius: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  shadow: ['soft', 'elevated', 'overlay'],
  border: ['default', 'high-emphasis'],
  motion: ['fast', 'base', 'slow', 'productive'],
  breakpoints: ['sm', 'md', 'lg', '2xl-container'],
} as const
