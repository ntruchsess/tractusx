import { useSelector } from 'react-redux'
import AccessService from '../../../../services/AccessService'
import { LangSwitch } from '../LangSwitch'
import { NavMenu } from '../NavMenu'
import './UserMenu.scss'

export const UserMenu = () => {
  const user = useSelector((state: any) => state.user)
  return (
    <div className="UserMenu">
      <div className="Info">
        <span className="Name">{user.name}</span>
        <span className="Company">{user.company}</span>
      </div>
      <NavMenu pages={AccessService.userMenu()} />
      <LangSwitch />
    </div>
  )
}
