import { useTranslation } from 'react-i18next'
import UserService from '../../../services/UserService'

export default function Admin() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.authinfo')}</h2>
      <p>{t('content.authinfo.token')}</p>
      <pre>{JSON.stringify(UserService.getParsedToken(), null, 2)}</pre>
    </main>
  )
}
