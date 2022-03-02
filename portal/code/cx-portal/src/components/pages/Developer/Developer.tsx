import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import './Developer.css'

export default function Developer() {
  const { t } = useTranslation()
  return (
    <main className="Developer">
      <h2>{t('pages.developer')}</h2>
      <nav>
        <NavLink to="/testapi">Test API</NavLink>
        <NavLink to="/translator">Translator</NavLink>
      </nav>
      <a href="/storybook">Storybook</a>
    </main>
  )
}
