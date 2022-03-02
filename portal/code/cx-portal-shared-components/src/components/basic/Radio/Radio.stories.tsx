import { ComponentStory } from '@storybook/react'

import { Radio as Component } from './Radio'

export default {
  title: 'Form',
  component: Component,
  argTypes: {},
};

const Template: ComponentStory<typeof Component> = (args: any) => <Component {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  value: 42,
  label: 'Radio Button',
  checked: true,
  disabled: false
};
