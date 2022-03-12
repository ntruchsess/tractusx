import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { UserInfo } from '.'

export default {
  title: 'frame/UserInfo',
  component: UserInfo,
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
} as ComponentMeta<typeof UserInfo>

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <UserInfo {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  isAdmin: false,
}
