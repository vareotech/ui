import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { SideNavigation } from '@/components/ui/side-navigation'
import { TopNavigation } from '@/components/ui/top-navigation'
import { useComponentGuidelines } from '@/stories/docs/component-guidelines'
import { useStorybookI18n } from '@/stories/i18n'
import { enUS } from '@/stories/i18n/locales/en-US'

const meta = {
  title: 'Navigation/Showcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: enUS.docs.stories.navigation.docsDescription,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function NavigationShowcase() {
  const { messages } = useStorybookI18n()
  const componentGuidelines = useComponentGuidelines()
  const content = messages.docs.stories.navigation

  return (
    <div className="story-shell space-y-5">
      <TopNavigation
        brand="Vareo"
        items={[
          { label: content.dashboard, href: '#', active: true },
          { label: content.orders, href: '#' },
          { label: content.settings, href: '#' },
        ]}
        actions={<Button variant="secondary">{content.newAction}</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <SideNavigation
          title={content.workspace}
          items={[
            { section: content.core, label: content.dashboard, active: true, href: '#' },
            { label: content.operations, href: '#' },
            { label: content.finance, href: '#' },
            { section: content.config, label: content.permissions, href: '#' },
            { label: content.integrations, href: '#' },
          ]}
          footer={<div className="text-sm text-muted-foreground">{componentGuidelines.navigation.purpose}</div>}
        />
        <div className="space-y-4">
          <Header title={content.pageHeader} description={content.pageHeaderDescription} breadcrumb={[content.operations, content.orders]} actions={<><Button variant="secondary">{content.filter}</Button><Button>{content.export}</Button></>} />
          <Footer>{content.footer}</Footer>
        </div>
      </div>
    </div>
  )
}

export const Overview: Story = {
  render: () => <NavigationShowcase />,
}
