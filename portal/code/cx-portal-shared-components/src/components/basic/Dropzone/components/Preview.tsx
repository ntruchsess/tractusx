import { Box, useTheme } from '@mui/material'
import { CustomIcon } from '../../CustomIcons'
import { Typography } from '../../Typography'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { IPreviewProps } from "react-dropzone-uploader";
export interface previewProps extends IPreviewProps{
  errorStatus?: String[]
}

export const Preview = ({ meta, fileWithMeta, canCancel, canRemove, canRestart, errorStatus }: previewProps) => {

  errorStatus = ['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready']

  const { name, percent, status } = meta
  const { cancel, remove, restart } = fileWithMeta
  const {spacing, palette} = useTheme()
  const { icon01 } = palette.icon
  
  return (
    <Box sx={{
              display: 'flex',  
              margin: spacing(4, 0),
              'progress': {
                width:' 100%',
                height: '4px',
                borderRadius: '40px',
                backgroundColor: 'textField.backgroundHover',
                '&::-webkit-progress-value': {
                  borderRadius: '40px',
                  backgroundColor: 'support.success',
                },
                '&.error::-webkit-progress-value': {
                  backgroundColor: 'danger.danger',
                }
              }
            }}
      >
      <CustomIcon name={"file"} fillColor={icon01} size={80} />

      <Box sx={{width: '100%', margin: spacing(1, 4)}}>
        <Typography variant="caption2" sx={{ display: 'block', color: 'common.black' }}>
          {name}
        </Typography>
        <Typography className={errorStatus.includes(status) ? 'error' : ''} variant="helper" sx={{ display: 'block', '&.error': {color: 'danger.danger'} }}>
          {status}
        </Typography>
         <progress max={100} value={status === 'done' || status === 'headers_received' ? 100 : percent} className={errorStatus.includes(status) ? 'error' : ''} />
      </Box>

      {status === 'uploading' && canCancel && (
        <Box onClick={cancel}>
          <RestartAltOutlinedIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>
      )}
      {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && canRemove && (
        <Box onClick={remove}>
          <DeleteOutlineIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>
      )}
      {errorStatus.includes(status) &&
            canRestart && ( 
        <Box onClick={restart}>
          <DeleteOutlineIcon sx={{ color: icon01 }} fontSize="small" />
        </Box>)
      }
    </Box>
  )
}