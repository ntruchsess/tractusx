import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { UserMenu } from '.'

export default {
  title: 'frame/UserMenu',
  component: UserMenu,
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
} as ComponentMeta<typeof UserMenu>

const Template: ComponentStory<typeof UserMenu> = () => <UserMenu />

export const Standard = Template.bind({})
