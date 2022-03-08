import { GridRowsProp, GridColDef } from '@mui/x-data-grid'


type TableProps = {
  rows: GridRowsProp
  columns: Array<GridColDef>,
  autoHeight: boolean
  headerHeight: number,
  rowHeight: number,
  hideFooter: boolean,
  loading:boolean,
  disableColumnFilter: boolean,
  disableColumnMenu: boolean,
  disableColumnSelector:boolean,
  disableDensitySelector: boolean,
  disableSelectionOnClick: boolean,
}

export type {
  TableProps
}
