import { useTranslation } from 'react-i18next'

export default function ThirdPartyLicenses() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.thirdpartylicenses')}</h2>
      <p>{t('content.thirdpartylicenses.message')}</p>
    </main>
  )
}
