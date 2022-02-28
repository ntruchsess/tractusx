import { NavLink } from 'react-router-dom'
import { UserInfo } from '../UserInfo/UserInfo'
import { Logo } from '../Logo/Logo'
import { useTranslation } from 'react-i18next'
import './Header.css'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <header>
      <Logo />
      <nav>
        <NavLink to="/">{t('pages.dashboard')}</NavLink>
        <NavLink to="/appstore">{t('pages.appstore')}</NavLink>
        <NavLink to="/catalog">{t('pages.datacatalog')}</NavLink>
        <NavLink to="/applications">{t('pages.applications')}</NavLink>
      </nav>
      <UserInfo />
    </header>
  )
}
