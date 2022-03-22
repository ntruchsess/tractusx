import { Box, useTheme } from '@mui/material'
import { CustomIcon } from '../../CustomIcons'
import { Typography } from '../../Typography'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

export const Preview = ({ meta }: any) => {
  const { name, percent, status } = meta
  const theme = useTheme()
  const { icon01 } = theme.palette.icon
  const onRemoveButtonClick = () => {}
  const onReloadButtonClick = () => {}

  return (
    <Box sx={{display: 'flex',  margin: '24px 0'}}
    >
      <CustomIcon name={"file"} fillColor={icon01} size={80} />

      <Box sx={{width: '100%', margin: '8px 32px'}}>
        <Typography variant="caption2" sx={{ display: 'block', color: theme.palette.common.black }}>
          {name}
        </Typography>
        <Typography variant="helper" sx={{ display: 'block' }}>
          {status}
        </Typography>
         <progress max={100} value={status === 'done' || status === 'headers_received' ? 100 : percent} />
      </Box>

      {status === 'uploading' && (
        <Box onClick={onReloadButtonClick}>
          <RestartAltOutlinedIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>
      )}
      {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && (
        <Box onClick={onRemoveButtonClick}>
          <DeleteOutlineIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>
      )}
      {['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready'].includes(status) && ( 
        <Box onClick={onReloadButtonClick}>
          <DeleteOutlineIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>)
      }
    </Box>
  )
}