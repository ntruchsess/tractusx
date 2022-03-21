import MuiChip, { ChipProps as MuiStatusChipProps } from '@mui/material/Chip'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

interface StatusChipProps extends Omit<MuiStatusChipProps, 'color'> {
  color?: 'pending' | 'confirmed' | 'declined' | 'label'
}

interface StatusChipCustomProps extends StatusChipProps {
  withIcon?: true | false
}

export const StatusTag = ({
                            variant = 'filled',
                            color = 'pending',
                            onDelete = () => null, // To avoid default delete icon appear
                            withIcon = false,
                            ...props
                          }: StatusChipCustomProps) => {

  let icon
  switch (color) {
    case 'pending':
      icon = <AccessTimeIcon />
      break
    case 'confirmed':
      icon = <CheckCircleOutlineIcon />
      break
    case 'declined':
      icon = <HighlightOffIcon />
      break
    default:
      icon = <EditOutlinedIcon />
  }

  // Manual paddingRight overwrite for usage of without label, see custom sx prop
  // https://github.com/mui/material-ui/issues/29964
  return <MuiChip
    variant={variant}
    color={color}
    icon={withIcon ? icon : undefined}
    sx={{
      '.MuiChip-label': {
        paddingRight: (props.label === undefined) ? 0 : "12px"
      },
    }}
    {...props}  />
}

