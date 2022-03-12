import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavMenu } from '.'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'frame/NavMenu',
  component: NavMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  styles: ['./components/App.css'],
} as ComponentMeta<typeof NavMenu>

const Template: ComponentStory<typeof NavMenu> = (args) => <NavMenu {...args} />

export const Standard = Template.bind({})
Standard.args = {
  horizontal: true,
  plain: false,
  pages: ['apple', 'orange', 'banana', 'melon', 'peach'],
}
