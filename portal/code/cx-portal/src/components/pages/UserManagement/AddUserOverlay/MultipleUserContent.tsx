import { useTranslation } from 'react-i18next'
import { Button, Typography } from 'cx-portal-shared-components'

export const MultipleUserContent = () => {
  const { t } = useTranslation()

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
