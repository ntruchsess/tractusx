import { Box, useTheme } from '@mui/material'
import { CustomIcon } from '../../CustomIcons'
import { Typography } from '../../Typography'

interface InputContentProps {
  title: string,
  subTitle: string,
}

export const InputContent = ({title,
  subTitle}: InputContentProps) => {
  const theme = useTheme()
  const { icon01 } = theme.palette.icon

  return (
    <Box>
      <CustomIcon name={"cloud-upload"} fillColor={icon01} size={64} />
      <Typography 
        variant="h4" 
        sx={{ 
              display: 'block', 
              fontFamily: theme.typography.body1.fontFamily,
              marginTop: '29.5px'
            }}
        >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ display: 'block' }}>
        {subTitle}
      </Typography>
    </Box>
  )
}
