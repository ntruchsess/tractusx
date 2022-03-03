import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Table } from './Table'

export default {
  title: 'basic/Table',
  component: Table,
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
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Standard = Template.bind({})
Standard.args = {
  data: {
    columns: ['name', 'value'],
    rows: [
      ['id', 1309],
      ['name', 'Hotzenplotz'],
      ['profession', 'robber'],
      ['age', 47],
    ],
  },
}

export const NoHeader = Template.bind({})
NoHeader.args = {
  data: {
    rows: [
      ['id', 1309],
      ['name', 'Hotzenplotz'],
      ['profession', 'robber'],
      ['age', 47],
    ],
  },
}
