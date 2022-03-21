import { ComponentStory } from '@storybook/react'
import { StatusTag as Component } from './StatusTag'

export default {
  title: 'StatusTag',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  color: 'label',
  variant: 'filled',
  label: 'label',
  withIcon: false
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  color: 'label',
  variant: 'filled',
  label: 'label',
  withIcon: true
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  color: 'label',
  variant: 'filled',
  withIcon: true
}
