import { ComponentStory } from '@storybook/react'

import { UserNav as Component } from '.'

export default {
  title: 'UserMenu',
  component: Component,
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const UserNav = Template.bind({})
UserNav.args = {
  items: [
    { link: '/account', title: 'My Account' },
    { link: '/notification', title: 'Notification Center' },
    { link: '/organisation', title: 'Organisation' },
    { link: '/logout', title: 'Logout' },
  ],
}
