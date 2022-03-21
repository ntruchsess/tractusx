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
                            withIcon = true,
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

  return <MuiChip variant={variant} color={color} icon={withIcon ? icon : undefined} {...props} />
}

