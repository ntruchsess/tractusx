import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { Box, useTheme } from '@mui/material'
import { Layout } from './components/Layout'
import { InputContent } from './components/InputContent'
import { Preview } from './components/Preview'
import "react-dropzone-uploader/dist/styles.css";
interface DropzoneProps extends IDropzoneProps {
  fileTypes: string,
  title: string,
  subTitle: string,
  maxFilesCount: number,
  errorStatus: String[],
  newStatusValue: Function,
  hideSubmitButton?: boolean
}

export const CustomDropzone = ({
  title,
  subTitle,
  fileTypes,
  maxFilesCount,
  getUploadParams,
  onSubmit,
  onChangeStatus,
  hideSubmitButton,
  newStatusValue,
  errorStatus,
}: DropzoneProps) => {
  const { spacing } = useTheme()
  const CustomInputContent = () => { 
    return <InputContent title={title} subTitle={subTitle} />
  }

  return (
    <Box sx={{
      '.dzu-dropzone': {
        backgroundColor: 'background.background01',
        borderRadius: '40px',
        border: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='40' ry='40' stroke='%23B6B6B6FF' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        padding: spacing(6, 0),
        textAlign: 'center',
        minHeight: '265px'
      },
      '.dzu-inputLabelWithFiles': {
        margin: 'auto',
        backgroundColor: 'transparent'
      }
    }}>
      <Dropzone
        LayoutComponent={props => <Layout {...props} hideSubmitButton={hideSubmitButton} />}
        PreviewComponent={props => <Preview {...props} setNewStatusValue={newStatusValue} errorStatus={errorStatus} />}
        maxFiles={maxFilesCount}
        submitButtonDisabled={files => files.length > maxFilesCount || files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
        accept={fileTypes}
        getUploadParams={getUploadParams}
        onSubmit={onSubmit}
        onChangeStatus={onChangeStatus}
        inputContent={CustomInputContent}
        inputWithFilesContent={CustomInputContent}
      />
    </Box>
   
  )
}
