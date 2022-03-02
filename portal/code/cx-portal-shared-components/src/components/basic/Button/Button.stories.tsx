import { ComponentStory } from '@storybook/react'

import { Button as Component } from './Button'

export default {
  title: 'Buttons',
  component: Component,
  argTypes: {
    children: {
      name: 'label'
    }
  },
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
  variant: 'primary',
  size: 'large',
  disabled: false,
  children: 'Button',
};
