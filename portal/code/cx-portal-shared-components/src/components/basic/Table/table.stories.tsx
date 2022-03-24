import { ComponentStory } from '@storybook/react'

import { Table as Component } from '.'
import {
  GridColDef,
  GridRowsProp,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import Link from '@mui/material/Link'
import TestRows from '../../../assets/data/TableRows.json'

const rows: GridRowsProp = TestRows

const columns: GridColDef[] = [
  { field: 'id', hide: true },
  {
    field: 'name',
    headerName: 'Name',
    description: 'Name of the user',
    flex: 2,
  },
  { field: 'company', headerName: 'Company', flex: 2 },
  {
    field: 'email',
    headerName: 'Email address',
    renderCell: (params: GridRenderCellParams<string>) => (
      <div>
        <Link href="#">{params.value}</Link>
      </div>
    ),
    flex: 5,
  },
  { field: 'note', headerName: 'Note', flex: 5 },
  {
    field: 'role',
    headerName: 'Role',
    flex: 1,
    renderCell: (params: GridRenderCellParams<string>) => <>{params.value}</>,
  },
]

export default {
  title: 'Table',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const Table = Template.bind({})
Table.args = {
  autoHeight: true,
  headerHeight: 76,
  rowHeight: 76,
  hideFooter: true,
  disableColumnFilter: true,
  disableColumnMenu: true,
  disableColumnSelector: true,
  disableDensitySelector: true,
  disableSelectionOnClick: true,
  loading: false,
  rows,
  columns,
}
