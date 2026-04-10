import type { StoryObj } from '@storybook/react'
import { ArgTypes } from '@storybook/addon-docs/blocks'

import { enUS } from '@/stories/i18n/locales/en-US'
import { useStorybookI18n } from '@/stories/i18n'

type StoriesMessages = typeof enUS.docs.stories
export type ComponentDocKey = keyof StoriesMessages

interface ComponentDocProps {
  componentKey: ComponentDocKey
  stories: Record<string, StoryObj>
}

type ComponentDocVariant = {
  variant: string
  purpose: string
}

type ComponentDocData = {
  title: string
  description: string
  whenToUse?: readonly string[]
  variants?: readonly ComponentDocVariant[]
  dos?: readonly string[]
  donts?: readonly string[]
  usageCode?: string
}

type ComponentDocStory = StoriesMessages[ComponentDocKey] & {
  doc?: ComponentDocData
}

export function ComponentDoc({ componentKey, stories }: ComponentDocProps) {
  const { messages } = useStorybookI18n()
  const componentMessages = messages.docs.stories[componentKey] as ComponentDocStory | undefined
  const doc = componentMessages?.doc
  const headings = messages.docs.componentDocs

  if (!doc) {
    return null
  }

  return (
    <>
      <h1>{doc.title}</h1>
      <p>{doc.description}</p>
      <hr />
      <h2>{headings.tocTitle}</h2>
      <ol>
        {headings.tocItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <hr />
      <h2>{headings.whenToUse}</h2>
      <ul>
        {doc.whenToUse?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {doc.variants && doc.variants.length > 0 && (
        <>
          <hr />
          <h2>{headings.variants}</h2>
          <table>
            <thead>
              <tr>
                <th>{headings.variantColumn}</th>
                <th>{headings.purposeColumn}</th>
              </tr>
            </thead>
            <tbody>
              {doc.variants.map((variant) => (
                <tr key={variant.variant}>
                  <td>{variant.variant}</td>
                  <td>{variant.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <hr />
      <h3>{headings.dos}</h3>
      <ul>
        {doc.dos?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>{headings.donts}</h3>
      <ul>
        {doc.donts?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {doc.usageCode ? (
        <>
          <hr />
          <h2>{headings.usage}</h2>
          <pre>
            <code>{doc.usageCode}</code>
          </pre>
        </>
      ) : null}
      <hr />
      <h2>{headings.props}</h2>
      <ArgTypes of={stories} />
    </>
  )
}
