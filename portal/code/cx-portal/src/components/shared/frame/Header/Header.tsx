import { UserInfo } from '../UserInfo/UserInfo'
import { Logo } from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import { Navigation } from 'cx-portal-shared-components'
import './Header.scss'
import { useTranslation } from 'react-i18next'

export const Header = ({ pages }: { pages: string[] }) => {
  const { t } = useTranslation()

  const menu = pages.map((page) => ({
    to: page,
    title: t(`pages.${page}`),
  }))

  return (
    <header>
      <Logo />
      <Navigation items={menu} component={NavLink} />
      <UserInfo />
    </header>
  )
}
