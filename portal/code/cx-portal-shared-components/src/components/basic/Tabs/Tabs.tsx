import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs'
import React from 'react'

interface TabsProps extends MuiTabsProps {
  children?: React.ReactElement[]
}

export const Tabs = ({ children, ...props }: TabsProps) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  return (
    <MuiTabs value={value} onChange={handleChange} {...props}>
      {children}
    </MuiTabs>
  )
}
