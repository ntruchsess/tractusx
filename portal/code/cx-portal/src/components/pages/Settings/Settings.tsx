import { useTranslation } from 'react-i18next'
import './Settings.css'

export default function Settings() {
  const { t } = useTranslation()
  return (
    <main className="Settings">
      <h2>{t('pages.settings')}</h2>
      <p>settings, etc. </p>
    </main>
  )
}
