import { useTranslation } from 'react-i18next'
import {Button} from 'cx-portal-shared-components'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <main>
      <h2>{t('pages.admin')}</h2>
      <p>content of the admin area</p>
      <Button size="small" onClick={()=> navigate('registration-requests')}>Registration Requests Page</Button>
    </main>
  )
}
