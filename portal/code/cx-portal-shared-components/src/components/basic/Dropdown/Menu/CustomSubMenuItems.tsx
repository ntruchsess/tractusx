import * as React from 'react'
import { MenuItem } from '@mui/material'
import { CustomMenu } from './CustomMenu'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CustomMenuItemsProps {
  caption: string,
  menuItems: any
}

export const CustomSubMenuItems = (props: CustomMenuItemsProps) => {
  const { menuItems, caption } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <React.Fragment>
      <MenuItem onClick={handleClick} sx={{ display: 'flex', justifyContent: "space-between" }}>
        {caption}
        <ArrowForwardIcon />
      </MenuItem>
      <CustomMenu
        anchorElement={anchorEl}
        open={open}
        onClose={handleClose} 
        items={menuItems} />
    </React.Fragment>
  )
}
