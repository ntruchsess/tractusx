import { ComponentStory } from '@storybook/react'

import { ButtonPlus } from './Button-plus'

export default {
  title: 'ButtonPlus',
  component: ButtonPlus,
  argTypes: {
    children: {
      name: 'label'
    },
  },
};

const Template: ComponentStory<typeof ButtonPlus> = (args: any) => <ButtonPlus {...args} />;

export const PlusButton = Template.bind({});
PlusButton.args = {
  style: 'primary',
  size: 'medium',
  disabled: false,
  children: '+',
};
