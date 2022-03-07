import { useTranslation } from 'react-i18next'

export default function DeveloperHub() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t('pages.developerhub')}</h2>
      <p>content of the developer hub</p>
    </main>
  )
}
