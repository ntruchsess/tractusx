import { ILayoutProps } from "react-dropzone-uploader";
import { Box } from '@mui/material'
import "react-dropzone-uploader/dist/styles.css";

export const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {

  return (
    <Box>
      {previews}
      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      {files.length > 0 && submitButton}
    </Box>
  )
}