import MuiChip, { ChipProps as MuiStatusChipProps } from '@mui/material/Chip'

interface StatusChipProps extends Omit<MuiStatusChipProps, 'color'> {
  color?: 'pending' | 'confirmed' | 'declined' | 'label'
}

export const StatusTag = ({
                     variant = 'filled',
                     color = 'label',
                     ...props
                   }: StatusChipProps) => {

  return <MuiChip variant={variant} color={color} {...props} />
}

