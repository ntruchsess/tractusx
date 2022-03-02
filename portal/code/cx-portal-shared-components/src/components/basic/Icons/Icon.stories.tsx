import { ComponentStory } from '@storybook/react'

import { Icon } from './Icon'

export default {
  title: 'Icon',
  component: Icon,
};

const Template: ComponentStory<typeof Icon> = (args: any) => <Icon {...args} />;

export const BaseIcon = Template.bind({});
BaseIcon.args = {
  name: 'done',
  size: 25,
  color: '#d91e18',
};
