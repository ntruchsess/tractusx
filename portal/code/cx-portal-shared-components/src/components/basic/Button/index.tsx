import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: 'primary' | 'secondary'
}

export const Button = ({
  variant = 'contained',
  color: colorProp = 'primary',
  ...props
}: ButtonProps) => {
  const color = ['outlined', 'text'].includes(variant) ? 'primary' : colorProp

  return <MuiButton variant={variant} color={color} {...props} />
}
