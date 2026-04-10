import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

const vareoTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Vareo Design System',

  // Colors
  colorPrimary: 'hsl(210 92% 60%)',
  colorSecondary: 'hsl(210 92% 60%)',

  // UI
  appBg: 'hsl(222 22% 8%)',
  appContentBg: 'hsl(222 18% 11%)',
  appPreviewBg: 'hsl(222 22% 8%)',
  appBorderColor: 'hsl(220 14% 22%)',
  appBorderRadius: 14,

  // Text
  textColor: 'hsl(210 20% 96%)',
  textInverseColor: 'hsl(222 40% 8%)',
  textMutedColor: 'hsl(215 14% 70%)',

  // Toolbar
  barTextColor: 'hsl(215 14% 70%)',
  barSelectedColor: 'hsl(210 92% 60%)',
  barHoverColor: 'hsl(210 20% 96%)',
  barBg: 'hsl(222 18% 11%)',

  // Form
  inputBg: 'hsl(220 14% 18%)',
  inputBorder: 'hsl(220 14% 22%)',
  inputTextColor: 'hsl(210 20% 96%)',
  inputBorderRadius: 8,

  // Typography
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
})

addons.setConfig({
  theme: vareoTheme,
})
