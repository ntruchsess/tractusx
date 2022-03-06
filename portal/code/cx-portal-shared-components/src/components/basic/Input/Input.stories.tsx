import { ComponentStory } from '@storybook/react'

import { Input as Component } from '.'

export default {
  title: 'Input',
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

export const MuiInput = Template.bind({})
MuiInput.args = {
  disabled: false,
  error: false,
}
