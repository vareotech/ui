import { useStorybookI18n } from '@/stories/i18n'

export function useComponentGuidelines() {
  const { messages } = useStorybookI18n()

  return messages.docs.guidelines
}
