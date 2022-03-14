import AccessService from '../../../../services/AccessService'
import UserService from '../../../../services/UserService'
import { LangSwitch } from '../LangSwitch/LangSwitch'
import { NavMenu } from '../NavMenu/NavMenu'
import './UserMenu.scss'

export const UserMenu = () => {
  return (
    <div className="UserMenu">
      <div className="Info">
        <span className="Name">{UserService.getName()}</span>
        <span className="Company">{UserService.getCompany()}</span>
      </div>
      <NavMenu pages={AccessService.userMenu()} />
      <LangSwitch />
    </div>
  )
}
