import { ComponentStory } from '@storybook/react'

import { Input as Component } from '.'

export default {
  title: 'Form',
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

export const Input = Template.bind({})
Input.args = {
  disabled: false,
  error: false,
}
