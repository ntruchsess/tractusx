import { NavLink } from 'react-router-dom'
import './AppCard.css'

export const AppCard = ({ app }: any) => {
  return (
    <NavLink key={app.id} to={`/appstore/${app.id}`} className="AppCard">
      <h3>{app.name}</h3>
      <p className="vendor">{app.vendor}</p>
      <p className="rating">{app.rating || '-'}</p>
    </NavLink>
  )
}
