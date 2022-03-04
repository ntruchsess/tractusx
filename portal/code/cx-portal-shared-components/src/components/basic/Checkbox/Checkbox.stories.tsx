import { ComponentStory } from '@storybook/react'

import { Checkbox as Component } from '.'

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

export const MuiCheckbox = Template.bind({})
MuiCheckbox.args = {
  disabled: true,
}
