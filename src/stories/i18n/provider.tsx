import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import { enUS } from './locales/en-US'
import { ptBR } from './locales/pt-BR'

export type StorybookLocale = 'en-US' | 'pt-BR'

type DeepMessageShape<T> =
  T extends string ? string
  : T extends readonly (infer U)[] ? readonly DeepMessageShape<U>[]
  : T extends object ? { [K in keyof T]: DeepMessageShape<T[K]> }
  : T

type Messages = DeepMessageShape<typeof enUS>

type StorybookI18nValue = {
  locale: StorybookLocale
  setLocale: (locale: StorybookLocale) => void
  messages: Messages
  t: (key: string) => string
}

const STORAGE_KEY = 'vareotech-storybook-locale'

const localeMap: Record<StorybookLocale, Messages> = {
  'en-US': enUS,
  'pt-BR': ptBR,
}

const StorybookI18nContext = createContext<StorybookI18nValue | null>(null)

function isStorybookLocale(value: string): value is StorybookLocale {
  return value === 'en-US' || value === 'pt-BR'
}

export function normalizeLocale(value?: string | null): StorybookLocale {
  if (!value) return 'en-US'
  if (value.toLowerCase().startsWith('pt')) return 'pt-BR'
  return 'en-US'
}

export function getPreferredLocale(): StorybookLocale {
  if (typeof window === 'undefined') return 'en-US'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && isStorybookLocale(stored)) return stored

  const browserLocale = window.navigator.languages?.[0] ?? window.navigator.language
  return normalizeLocale(browserLocale)
}

function getValueByPath(messages: Messages, key: string) {
  return key.split('.').reduce<unknown>((result, part) => {
    if (result && typeof result === 'object' && part in result) {
      return (result as Record<string, unknown>)[part]
    }

    return undefined
  }, messages)
}

export function StorybookI18nProvider({ children, locale }: { children: ReactNode; locale?: string }) {
  const [storedLocale, setStoredLocale] = useState<StorybookLocale>(() => normalizeLocale(locale ?? getPreferredLocale()))
  const currentLocale = locale ? normalizeLocale(locale) : storedLocale

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, currentLocale)
  }, [currentLocale])

  const value = useMemo<StorybookI18nValue>(() => {
    const messages = localeMap[currentLocale]

    return {
      locale: currentLocale,
      setLocale: setStoredLocale,
      messages,
      t: (key) => {
        const translated = getValueByPath(messages, key)
        return typeof translated === 'string' ? translated : key
      },
    }
  }, [currentLocale])

  return <StorybookI18nContext.Provider value={value}>{children}</StorybookI18nContext.Provider>
}

export function useStorybookI18n() {
  const context = useContext(StorybookI18nContext)

  if (!context) {
    throw new Error('useStorybookI18n must be used within StorybookI18nProvider')
  }

  return context
}
