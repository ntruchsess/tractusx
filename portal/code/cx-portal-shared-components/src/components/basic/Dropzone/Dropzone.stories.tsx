import { ComponentStory } from '@storybook/react'

import { CustomDropzone as Component } from '.'

export default {
  title: 'Dropzone',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const Dropzone = Template.bind({})
Dropzone.args = {
  title: 'Drag & drop your files here',
  subTitle: 'or browse files on your computer.',
  fileTypes: 'image/*,audio/*,video/*',
  maxFilesCount: 10
}
