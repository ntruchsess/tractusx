import { ComponentStory } from '@storybook/react'

import { IconButton as Component } from '.'
import AddIcon from '@mui/icons-material/Add'

export default {
  title: 'Buttons',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const MuiIconButton = Template.bind({})
MuiIconButton.args = {
  // color: 'primary',
  // size: 'large',
  // disabled: true,
  children: <AddIcon />,
}
