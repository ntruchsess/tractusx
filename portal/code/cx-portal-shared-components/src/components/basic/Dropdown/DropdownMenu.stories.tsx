import { ComponentStory } from '@storybook/react'

import { CustomDropdown as Component } from './CustomDropdown'
import { UserAvatar } from '../Avatar'

export default {
  title: 'Dropdown',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const CustomDropdown = Template.bind({})
CustomDropdown.args = {
  children: (
    <UserAvatar
      userImage={''}
      notificationCount={5}
      isNotificationAlert={false}
      altText={'Avatar alt text'}
    />
  ),
}
