import { ComponentStory } from '@storybook/react'
import { Chip as Component } from '.'

export default {
  title: 'Chip',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const Decline = Template.bind({})
Decline.args = {
  color: 'label',
  variant: 'filled',
  label: 'decline',
  type: 'decline',
  withIcon: true
}


export const Confirm = Template.bind({})
Confirm.args = {
  color: 'label',
  variant: 'filled',
  label: 'confirm',
  type: 'confirm',
  withIcon: true
}
