import { ComponentStory } from '@storybook/react'

import { UserMenu as Component } from '.'
import { LanguageSwitch } from '../../basic/LanguageSwitch'
import { UserNav } from '../UserNav'

export default {
  title: 'UserMenu',
  component: Component,
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args}>
    <UserNav
      items={[
        { link: '/account', title: 'My Account' },
        { link: '/notification', title: 'Notification Center' },
        { link: '/organisation', title: 'Organisation' },
      ]}
    />
    <UserNav items={[{ link: '/logout', title: 'Logout' }]} />
    <LanguageSwitch
      current="de"
      languages={[{ key: 'de' }, { key: 'en' }]}
      onChange={() => {}}
    />
  </Component>
)

export const UserMenu = Template.bind({})
UserMenu.args = {
  open: true,
  userName: 'Max Mustermann',
  userRole: 'Admin',
}
