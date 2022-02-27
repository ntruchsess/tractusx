import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { AppCard } from './AppCard'

export default {
  title: 'content/AppCard',
  component: AppCard,
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
} as ComponentMeta<typeof AppCard>

const Template: ComponentStory<typeof AppCard> = (args) => <AppCard {...args} />

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
