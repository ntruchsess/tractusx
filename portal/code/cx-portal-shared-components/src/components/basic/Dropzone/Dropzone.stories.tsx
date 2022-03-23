import { ComponentStory } from '@storybook/react'

import { CustomDropzone as Component } from '.'

export default {
  title: 'Dropzone',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const Dropzone = Template.bind({})
Dropzone.args = {
  title: 'Drag & drop your files here',
  subTitle: 'or browse files on your computer.',
  fileTypes: 'image/*,audio/*,video/*',
  maxFilesCount: 3,
  hideSubmitButton: false,
  getUploadParams: () => ({ url: 'https://httpbin.org/post' }),
  onSubmit: (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  },
  onChangeStatus: ({ meta }, status) => {
    if (status === 'headers_received') {
      console.log(`${meta.name} uploaded`)
    } else if (status === 'aborted') {
      console.log(`${meta.name}, upload failed...`)
    }
  },
  newStatusValue: (status: any) => {
    let newStatusValue
    switch (status) {
      case 'rejected_file_type':
        newStatusValue = 'new rejected_file_type'
        break
      case 'rejected_max_files':
        newStatusValue = 'new rejected_max_files'
        break
      case 'preparing':
        newStatusValue = 'new preparing'
        break
      case 'error_file_size':
        newStatusValue = 'new error_file_size'
        break
      case 'error_validation':
        newStatusValue = 'new error_validation'
        break
      case 'ready':
        newStatusValue = 'new ready'
        break
      case 'started':
        newStatusValue = 'new started'
        break
      case 'getting_upload_params':
        newStatusValue = 'new getting_upload_params'
        break
      case 'error_upload_params':
        newStatusValue = 'new error_upload_params'
        break
      case 'uploading':
        newStatusValue = 'new uploading'
        break
      case 'exception_upload':
        newStatusValue = 'new exception_upload'
        break
      case 'aborted':
        newStatusValue = 'new aborted'
        break
      case 'restarted':
        newStatusValue = 'new restarted'
        break
      case 'removed':
        newStatusValue = 'new removed'
        break
      case 'error_upload':
        newStatusValue = 'new error_upload'
        break
      case 'headers_received':
        newStatusValue = 'new headers_received'
        break
      case 'done':
        newStatusValue = 'new done'
        break
      default:
        newStatusValue = 'new '
        break
    }

    return newStatusValue
  },
  errorStatus: ['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready']
}
