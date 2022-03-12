import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function MyAccount() {
  const { t } = useTranslation()
  const token = useSelector((state: any) => state.user.parsedToken)

  return (
    <main>
      <h2>{t('pages.account')}</h2>
      <p>{t('content.account.token')}</p>
      <pre>{JSON.stringify(token, null, 2)}</pre>
    </main>
  )
}
