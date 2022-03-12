import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { LangSwitch } from '.'

export default {
  title: 'frame/LangSwitch',
  component: LangSwitch,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  styles: ['./components/App.css'],
} as ComponentMeta<typeof LangSwitch>

const Template: ComponentStory<typeof LangSwitch> = () => <LangSwitch />

export const Standard = Template.bind({})
