import { Box, ClickAwayListener, useTheme } from '@mui/material'
import { Typography } from '../../basic/Typography'

interface UserMenuProps {
  open: boolean
  userName: string
  userRole: string
  top?: number
  children?: React.ReactElement[]
  onClickAway?: (event: MouseEvent | TouchEvent) => void
}

export const UserMenu = ({
  open,
  userName,
  userRole,
  children,
  top = 0,
  onClickAway = () => {},
  ...props
}: UserMenuProps) => {
  const { spacing, shadows } = useTheme()

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box
        display={open ? 'block' : 'none'}
        sx={{
          borderRadius: 4,
          backgroundColor: 'background.background01',
          boxShadow: shadows['20'],
          width: 256,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top,
        }}
        {...props}
      >
        <Box
          sx={{
            backgroundColor: 'background.background02',
            borderBottom: '1px solid',
            borderColor: 'border.border01',
            padding: spacing(2, 3),
          }}
        >
          <Typography
            variant="label3"
            sx={{ color: 'text.secondary', display: 'block' }}
          >
            {userName}
          </Typography>
          <Typography variant="label4" sx={{ color: 'text.tertiary' }}>
            {userRole}
          </Typography>
        </Box>
        {children}
      </Box>
    </ClickAwayListener>
  )
}
