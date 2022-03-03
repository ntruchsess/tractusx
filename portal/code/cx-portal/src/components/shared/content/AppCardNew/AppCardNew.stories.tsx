import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { AppCardNew } from './AppCardNew'

export default {
  title: 'content/AppCardNew',
  component: AppCardNew,
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
} as ComponentMeta<typeof AppCardNew>

const Template: ComponentStory<typeof AppCardNew> = (args) => (
  <AppCardNew {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  app: {
    id: '1001',
    name: 'Amazing Material Traceability',
    vendor: 'Catena-X',
    version: '0.1.0-beta',
    description: 'i18n.app.1001.description',
    license: 'Catena-X Unbelievable License',
    rating: 4.7,
  },
}
