import { NavLink } from 'react-router-dom'
import { App } from '../../../../types/AppTypes'

import './AppCardNew.css'

export const AppCardNew = ({ app }: any) => {
  return (
    <NavLink key={app.id} to={`/appstore/${app.id}`} className="AppCardNew">
      <h3>{app.name}</h3>
      <p className="vendor">{app.vendor}</p>
      <p className="rating">{app.rating || '-'}</p>
      <div className="content">text</div>
    </NavLink>
  )
}
