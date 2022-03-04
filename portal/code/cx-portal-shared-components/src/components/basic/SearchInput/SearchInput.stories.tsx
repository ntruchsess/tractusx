import { ComponentStory } from '@storybook/react'

import { SearchInput as Component } from '.'

export default {
  title: 'Search',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const SearchInput = Template.bind({})
SearchInput.args = {}
