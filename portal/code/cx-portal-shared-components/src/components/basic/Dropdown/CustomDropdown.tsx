import * as React from 'react'
import { Box } from '@mui/material'
import { CustomMenu } from './Menu/CustomMenu'

interface CustomDropdownProps {
  children: React.ReactNode
}

const mockData = [
  {
    key: '1',
    caption: 'First',
    onClick: () => function () {},
  },
  {
    key: '2',
    caption: 'Second',
    onClick: () => function () {},
  },
  {
        key: 'item3',
        caption: 'Item 3',
        subMenuItems: [
            {
                key: 'item1',
                caption: 'Item 1',
                onClick: () => function () {},
            },
            {
                key: 'item2',
                caption: 'Item 2',
                onClick: () => function () {},
            }
        ]
    }
]

export const CustomDropdown = ({ children }: CustomDropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Box
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Box>
      <CustomMenu
        anchorElement={anchorEl}
        open={open}
        onClose={handleClose} 
        items={mockData} />
    </div>
  )
}
