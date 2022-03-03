import { useTranslation } from 'react-i18next'
import UserService from '../../../../services/UserService'
import { Menu } from '../../basic/Menu/Menu'
import { LangSwitch } from '../LangSwitch/LangSwitch'
import './UserMenu.scss'

export const UserMenu = () => {
  const { t } = useTranslation()
  return (
    <div className="UserMenu">
      <div className="Info">
        <span className="Name">{UserService.getName()}</span>
        <span className="Company">{UserService.getCompany()}</span>
        <span className="Email">
          <a href={`mailto:${UserService.getEmail()}`}>
            {UserService.getEmail()}
          </a>
        </span>
      </div>
      <Menu
        items={
          UserService.isAdmin()
            ? [
                { url: '/authinfo', label: t('pages.authinfo') },
                { url: '/settings', label: t('pages.settings') },
                { url: '/admin', label: t('pages.admin') },
                { url: '/developer', label: t('pages.developer') },
                { url: '/logout', label: t('pages.logout') },
              ]
            : [
                { url: '/authinfo', label: t('pages.authinfo') },
                { url: '/settings', label: t('pages.settings') },
                { url: '/logout', label: t('pages.logout') },
              ]
        }
      />
      <LangSwitch />
    </div>
  )
}
