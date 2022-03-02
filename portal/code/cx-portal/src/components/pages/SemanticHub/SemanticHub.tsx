import { useTranslation } from 'react-i18next'

export default function SemanticHub() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.semantichub')}</h2>
      <p>content of the semantic hub</p>
    </main>
  )
}
