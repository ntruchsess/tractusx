import { ComponentStory } from '@storybook/react'

import { ButtonRadio } from './Button-radio'

export default {
  title: 'ButtonRadio',
  component: ButtonRadio,
  argTypes: {
    children: {
      name: 'label'
    },
  },
};

const Template: ComponentStory<typeof ButtonRadio> = (args: any) => <ButtonRadio {...args} />;

export const RadioButton = Template.bind({});
RadioButton.args = {
  children: 'Radio Label'
};
