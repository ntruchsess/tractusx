import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { AppstoreApp } from './AppstoreApp'

export default {
  title: 'Catena-X/AppstoreApp',
  component: AppstoreApp,
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
} as ComponentMeta<typeof AppstoreApp>

const Template: ComponentStory<typeof AppstoreApp> = (args) => (
  <AppstoreApp {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  app: {
    name: 'Circular Economy',
    id: 1995,
    price: '$10,800',
    rel: '12/05/1995',
  },
}
