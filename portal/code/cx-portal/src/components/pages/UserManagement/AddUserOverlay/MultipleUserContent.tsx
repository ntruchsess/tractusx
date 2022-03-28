import { useTranslation } from 'react-i18next'
import { Button, Typography, Dropzone } from 'cx-portal-shared-components'

export const MultipleUserContent = () => {
  const { t } = useTranslation()
  const dropzoneProps = {
    getUploadParams: () => ({ url: 'https://httpbin.org/post' }),
    onSubmit: () => {
      console.log('submit')
    },
    onChangeStatus: () => {
      console.log('onChangeStatus')
    },
    statusText: {
      rejected_file_type: t('content.addUser.uploadStatus.rejected_file_type'),
      rejected_max_files: t('content.addUser.uploadStatus.rejected_max_files'),
      preparing: t('content.addUser.uploadStatus.preparing'),
      error_file_size: t('content.addUser.uploadStatus.error_file_size'),
      error_validation: t('content.addUser.uploadStatus.error_validation'),
      ready: t('content.addUser.uploadStatus.ready'),
      started: t('content.addUser.uploadStatus.started'),
      getting_upload_params: t('content.addUser.uploadStatus.getting_upload_params'),
      error_upload_params: t('content.addUser.uploadStatus.error_upload_params'),
      uploading: t('content.addUser.uploadStatus.uploading'),
      exception_upload: t('content.addUser.uploadStatus.exception_upload'),
      aborted: t('content.addUser.uploadStatus.aborted'),
      restarted: t('content.addUser.uploadStatus.restarted'),
      removed: t('content.addUser.uploadStatus.removed'),
      error_upload: t('content.addUser.uploadStatus.error_upload'),
      headers_received: t('content.addUser.uploadStatus.headers_received'),
      done: t('content.addUser.uploadStatus.done'),
    },
    errorStatus: ['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready']
  }

  return (
    <div className="multiple-user-content">
      <Typography sx={{margin: "60px 0 10px", textAlign: "center"}} variant="h5">{t('content.addUser.multipleUserHeadline')}</Typography>
      <Typography sx={{marginBottom: "30px", textAlign: "center"}} variant="body2">{t('content.addUser.multipleUserSubheadline')}</Typography>
       <Button variant="contained" sx={{margin: "40px auto", width: "100%"}}>
          -- Hier kommt Dropzone --
      </Button>
    </div>
  )
}
