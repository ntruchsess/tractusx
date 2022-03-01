import { ComponentStory } from '@storybook/react'

import { IconButton as Component } from './IconButton'
import { Add } from '../Icons'

export default {
  title: 'Buttons',
  component: Component,
  argTypes: {},
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const IconButton = Template.bind({});
IconButton.args = {
  style: 'primary',
  size: 'medium',
  disabled: false,
  children: <Add />,
};
