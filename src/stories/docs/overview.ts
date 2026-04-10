import { useStorybookI18n } from '@/stories/i18n'

export function useOverviewContent() {
  const { messages } = useStorybookI18n()

  return {
    ...messages.docs.overview,
    do: messages.docs.guidelines.button.do,
    dont: messages.docs.guidelines.button.dont,
  }
}
