import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { Box } from '@mui/material'
import { Layout } from './components/Layout'
import { InputContent } from './components/InputContent'
import { Preview } from './components/Preview'

import "react-dropzone-uploader/dist/styles.css";

interface DropzoneProps {
  fileTypes: string,
  title: string,
  subTitle: string,
  maxFilesCount: number
}

export const CustomDropzone = ({
  title,
  subTitle,
  fileTypes,
  maxFilesCount,
}: DropzoneProps) => {

  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      console.log(`${meta.name} uploaded!`)
      // remove()
    } else if (status === 'aborted') {
      console.log(`${meta.name}, upload failed...`)
    }
  }

  const DroptoneInputContent = () => { 
    return <InputContent title={title} subTitle={subTitle} />
  }

  return (
    <Box sx={{
      '.dzu-dropzone': {
        backgroundColor: 'background.background01',
        borderRadius: '40px',
        border: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='40' ry='40' stroke='%23B6B6B6FF' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        padding: '60px 0px 48px',
        textAlign: 'center',
        minHeight: '265px'
      },
      '.dzu-inputLabelWithFiles': {
        margin: 'auto',
        backgroundColor: 'transparent'
      }
    }}>
      <Dropzone
        maxFiles={maxFilesCount}
        LayoutComponent={Layout}
        accept={fileTypes}
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        onChangeStatus={handleChangeStatus}
        inputContent={DroptoneInputContent}
        inputWithFilesContent={DroptoneInputContent}
        PreviewComponent={Preview}
        submitButtonDisabled={files => files.length > maxFilesCount || files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
      />
    </Box>
   
  )
}
