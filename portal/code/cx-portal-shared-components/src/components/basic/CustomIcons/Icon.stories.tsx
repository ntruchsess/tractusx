import { ComponentStory } from '@storybook/react'

import { CustomIcon as Component } from '.'

export default {
  title: 'Custom Icon',
  component: Component,
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  name: 'cloud-upload',
  size: 64,
  fillColor: '#5E5E5E',
};