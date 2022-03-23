import { ILayoutProps } from "react-dropzone-uploader";
import { Box } from '@mui/material'
import "react-dropzone-uploader/dist/styles.css";
 
interface LayoutProps extends ILayoutProps {
  hideSubmitButton?: boolean
}

export const Layout = ({ hideSubmitButton, input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: LayoutProps) => {

  return (
    <Box>
      {previews}
      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      {files.length > 0 && !hideSubmitButton && submitButton}
    </Box>
  )
}