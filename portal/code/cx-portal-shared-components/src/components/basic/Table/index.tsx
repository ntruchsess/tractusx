import { DataGrid } from '@mui/x-data-grid'
import { TableProps } from '../../../@types/tableTypes'

export const Table = ({
                        columns,
                        rows,
                        autoHeight = true,
                        headerHeight = 76,
                        rowHeight = 76,
                        hideFooter = true,
                        disableColumnFilter = true,
                        disableColumnMenu = true,
                        disableColumnSelector = true,
                        disableDensitySelector = true,
                        disableSelectionOnClick = true,
                        loading = false,
                        ...props
                      }: TableProps) => {

  return (

    <DataGrid {...{
      rows,
      columns,
      autoHeight,
      headerHeight,
      rowHeight,
      hideFooter,
      loading,
      disableColumnFilter,
      disableColumnMenu,
      disableColumnSelector,
      disableDensitySelector,
      disableSelectionOnClick,
    }} {...props} />

  )

}
