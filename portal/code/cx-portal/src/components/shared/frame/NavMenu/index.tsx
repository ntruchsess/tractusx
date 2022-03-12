import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import './NavMenu.scss'

export const NavMenu = ({
  pages,
  horizontal,
  plain,
}: {
  pages: string[]
  horizontal?: boolean
  plain?: boolean
}) => {
  const { t } = useTranslation()
  return (
    <nav
      className={`NavMenu ${horizontal ? 'horizontal' : 'vertical'} ${
        plain ? 'plain' : 'fancy'
      }`}
    >
      {pages.map((page, i) => (
        <NavLink key={i} to={`/${page}`}>
          {t(`pages.${page}`)}
        </NavLink>
      ))}
    </nav>
  )
}
