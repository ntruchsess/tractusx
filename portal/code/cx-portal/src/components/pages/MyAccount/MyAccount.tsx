import { useTranslation } from 'react-i18next'
import UserService from '../../../services/UserService'

export default function MyAccount() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.account')}</h2>
      <p>{t('content.account.token')}</p>
      <pre>{JSON.stringify(UserService.getParsedToken(), null, 2)}</pre>
    </main>
  )
}
