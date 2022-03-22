import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";

import { Layout } from './components/Layout'
import { InputContent } from './components/InputContent'
import { Preview } from './components/Preview'

import "react-dropzone-uploader/dist/styles.css";
import './Dropzone.scss';

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
  )
}
