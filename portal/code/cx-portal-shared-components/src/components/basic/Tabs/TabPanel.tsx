import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../Typography'

interface ITabPanel {
  children: string
  index: number
  value: number
}

export const TabPanel = (props: ITabPanel): React.ReactElement => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`basic-tabpanel-${index}`}
      aria-labelledby={`basic-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
