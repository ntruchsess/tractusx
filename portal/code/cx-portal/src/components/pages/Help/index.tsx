import { useTranslation } from 'react-i18next'

export default function Help() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.help')}</h2>
      <p>{t('content.help.message')}</p>
    </main>
  )
}
