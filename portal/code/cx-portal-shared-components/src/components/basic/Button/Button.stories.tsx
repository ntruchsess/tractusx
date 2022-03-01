import { ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      name: 'label'
    }
  },
};

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const BaseButton = Template.bind({});
BaseButton.args = {
  style: 'primary',
  size: 'large',
  disabled: false,
  children: 'Button',
};
