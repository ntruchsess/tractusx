import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { testAppData } from '../../../../test/data/AppData'
import { AppCard } from './AppCard'

export default {
  title: 'Catena-X/AppCard',
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

const Template: ComponentStory<typeof AppCard> = (args) => (
  <AppCard {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  app: testAppData[0],
}
