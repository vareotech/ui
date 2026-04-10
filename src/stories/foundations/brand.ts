import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Building2,
  LayoutDashboard,
  MonitorSmartphone,
  ShoppingBag,
} from 'lucide-react'

import { enUS } from '@/stories/i18n/locales/en-US'
import { useStorybookI18n } from '@/stories/i18n'

const templateIcons = [LayoutDashboard, AppWindow, Building2, MonitorSmartphone, ShoppingBag] as const

export const vareoPrinciples = enUS.docs.brand.principles

export const vareoTemplates: Array<{ title: string; description: string; icon: LucideIcon }> = enUS.docs.brand.templates.map((template, index) => ({
  ...template,
  icon: templateIcons[index],
}))

export function useBrandContent() {
  const { messages } = useStorybookI18n()

  return {
    principles: messages.docs.brand.principles,
    templates: messages.docs.brand.templates.map((template, index) => ({
      ...template,
      icon: templateIcons[index],
    })),
  }
}
