import { useTranslation } from 'react-i18next'

export default function DataCatalog() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.datacatalog')}</h2>
      <p>content of the data catalog</p>
    </main>
  )
}
