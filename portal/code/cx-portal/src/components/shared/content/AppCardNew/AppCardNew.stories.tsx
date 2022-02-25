import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { testAppData } from '../../../../test/data/AppData'
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
  app: testAppData[0],
}
