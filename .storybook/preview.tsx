import { type ReactNode, useEffect, useRef } from 'react'
import type { Preview } from '@storybook/react-vite'
import { DocsContainer } from '@storybook/addon-docs/blocks'

import { create } from 'storybook/theming/create'

import '@/index.css'
import { Toaster } from '@/components/ui/toaster'

function ThemeFrame({ theme, children, centered = false }: { theme: string; children: ReactNode; centered?: boolean }) {
  const isLight = theme === 'light'
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.toggle('theme-light', isLight)
    root.style.colorScheme = isLight ? 'light' : 'dark'
    body.classList.add('bg-background', 'text-foreground')

    return () => {
      root.classList.remove('theme-light')
      root.style.colorScheme = 'dark'
      body.classList.remove('bg-background', 'text-foreground')
    }
  }, [isLight])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const syncInertState = () => {
      const isHidden = container.getAttribute('aria-hidden') === 'true' || container.getAttribute('data-aria-hidden') === 'true'
      container.toggleAttribute('inert', isHidden)
    }

    syncInertState()

    const observer = new MutationObserver(syncInertState)
    observer.observe(container, {
      attributes: true,
      attributeFilter: ['aria-hidden', 'data-aria-hidden'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div ref={containerRef} className={`min-h-screen w-full px-4 py-5 sm:px-6 lg:px-8 ${centered ? 'flex items-center justify-center' : ''}`}>
        {children}
      </div>
      <Toaster />
    </div>
  )
}

const createDocsTheme = (mode: 'dark' | 'light') => create({
  base: mode,
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  colorPrimary: mode === 'dark' ? 'hsl(210 92% 60%)' : 'hsl(211 90% 50%)',
  colorSecondary: mode === 'dark' ? 'hsl(210 92% 60%)' : 'hsl(211 90% 50%)',
  appBg: mode === 'dark' ? 'hsl(222 22% 8%)' : 'hsl(210 20% 98%)',
  appContentBg: mode === 'dark' ? 'hsl(222 18% 11%)' : 'hsl(0 0% 100%)',
  appPreviewBg: mode === 'dark' ? 'hsl(222 22% 8%)' : 'hsl(210 20% 98%)',
  appBorderColor: mode === 'dark' ? 'hsl(220 14% 22%)' : 'hsl(214 18% 88%)',
  textColor: mode === 'dark' ? 'hsl(210 20% 96%)' : 'hsl(222 40% 10%)',
  textMutedColor: mode === 'dark' ? 'hsl(215 14% 70%)' : 'hsl(215 16% 42%)',
  barBg: mode === 'dark' ? 'hsl(222 18% 11%)' : 'hsl(0 0% 100%)',
})

const darkDocsTheme = createDocsTheme('dark')
const lightDocsTheme = createDocsTheme('light')

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme mode for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark'
      return (
        <ThemeFrame theme={theme} centered>
          <Story />
        </ThemeFrame>
      )
    },
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Docs', 'Foundations', 'Forms', 'Data Display', 'Layout', 'Navigation', 'Feedback', 'Overlays', 'Templates'],
      },
    },
    docs: {
      container: ({ children, context }) => {
        const mode = context?.store?.userGlobals?.globals?.theme === 'light' || context?.globals?.theme === 'light' ? 'light' : 'dark'
        const theme = mode === 'light' ? lightDocsTheme : darkDocsTheme

        return (
          <ThemeFrame theme={mode}>
            <DocsContainer context={context} theme={theme}>
              {children}
            </DocsContainer>
          </ThemeFrame>
        )
      },
      story: {
        inline: true,
      },
    },
  },
}

export default preview
