import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StoryDocsDescription } from '@/stories/_internal/docs-helpers'
import { useStorybookI18n } from '@/stories/i18n'

type AvatarStoryArgs = {
  src: string
  alt: string
  fallback: string
  size: 'sm' | 'md' | 'lg'
}

const sizeMap: Record<AvatarStoryArgs['size'], string> = {
  sm: 'size-10',
  md: 'size-12',
  lg: 'size-14',
}

function AvatarStory({ src, alt, fallback, size }: AvatarStoryArgs) {
  return (
    <Avatar className={sizeMap[size]}>
      {src ? <AvatarImage src={src} alt={alt} /> : null}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

const meta = {
  title: 'Data Display/Avatar',
  component: AvatarStory,
  tags: ['test'],
  args: {
    src: '',
    size: 'md',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: <StoryDocsDescription story="avatar" /> } },
  },
} satisfies Meta<typeof AvatarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    alt: '',
    fallback: '',
  },
  render: (args) => {
    const { messages } = useStorybookI18n()
    const content = messages.docs.stories.avatar
    const { alt, fallback, ...rest } = args

    return <AvatarStory {...rest} alt={alt ?? content.alt} fallback={fallback ?? content.fallback} />
  },
}
