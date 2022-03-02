import { ComponentStory } from '@storybook/react'

import { IconButton as Component } from './IconButton'
import { Icon } from '../Icons/Icon'

export default {
  title: 'Buttons',
  component: Component,
  argTypes: {},
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  children: <Icon name={"add"} color={"#000"} size={25} />,
};
