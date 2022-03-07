import { Box } from '@mui/material'
interface LogoProps {
  variant: 'standard' | 'short' | 'text'
  altText: string
}

export const Logo = ({
  variant = 'standard',
  altText = 'CatenaX logo',
  ...props
}: LogoProps) => {
  let image

  switch (variant) {
    case 'short':
      image = '/cx-logo-short.svg'
      break
    case 'text':
      image = '/cx-logo-text.svg'
      break
    default:
      image = '/cx-logo.svg'
  }

  return (
    <Box
      component="img"
      sx={{
        maxWidth: '100%',
      }}
      src={image}
      alt={altText}
      {...props}
    />
  )
}
