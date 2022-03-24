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
  color: 'secondary',
  variant: 'filled',
  label: 'decline',
  type: 'decline',
  onClick: () => console.log('Decline clicked'),
  withIcon: true,
}

export const Confirm = Template.bind({})
Confirm.args = {
  color: 'secondary',
  variant: 'filled',
  label: 'confirm',
  type: 'confirm',
  onClick: () => console.log('Confirm clicked'),
  withIcon: true,
}
