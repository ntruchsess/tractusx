import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'frame/Header',
  component: Header,
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
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header />

export const Standard = Template.bind({})
