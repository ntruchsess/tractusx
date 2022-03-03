import { ComponentStory } from '@storybook/react'

import { Button as Component } from './Button'

export default {
  title: 'Buttons',
  component: Component,
  argTypes: {
    children: {
      name: 'label'
    },
    onClick: {
      action: 'onClick'
    }
  },
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const MuiButton = Template.bind({});
MuiButton.args = {
  color: 'primary',
  size: 'large',
  disabled: true,
  children: 'Button',
};
