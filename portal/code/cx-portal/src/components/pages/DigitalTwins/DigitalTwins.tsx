import { useTranslation } from 'react-i18next'

export default function DigitalTwins() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.digitaltwins')}</h2>
      <p>content of the digital Twins</p>
    </main>
  )
}
