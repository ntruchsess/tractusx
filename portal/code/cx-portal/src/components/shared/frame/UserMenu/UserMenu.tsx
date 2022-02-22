import UserService from '../../../../services/UserService'
import { Menu } from '../../basic/Menu/Menu'
import './UserMenu.css'

export const UserMenu = () => (
  <div className="UserMenu">
    <div className="Info">
      <span className="Name">{UserService.getName()}</span>
      <span className="Company">({UserService.getCompany()})</span>
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
              { url: '/authinfo', label: 'Auth Info' },
              { url: '/settings', label: 'Settings' },
              { url: '/admin', label: 'Administration' },
              { url: '/developer', label: 'Developer' },
              { url: '/logout', label: 'Sign Out' },
            ]
          : [
              { url: '/authinfo', label: 'Auth Info' },
              { url: '/settings', label: 'Settings' },
              { url: '/logout', label: 'Sign Out' },
            ]
      }
    />
  </div>
)
