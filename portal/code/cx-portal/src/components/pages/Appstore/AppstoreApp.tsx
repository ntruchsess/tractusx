import { NavLink } from 'react-router-dom'
import './AppstoreApp.css'


interface AppstoreAppProps {
  app: any
}
 
export const AppstoreApp = ({ app = {} }: AppstoreAppProps) => {
  return (
    <NavLink key={app.id} to={`/appstore/${app.id}`} className="AppstoreApp">
      <h3>{app.name}</h3>
      <p className="rating">{app.rating || '-'}</p>
    </NavLink>
  )
}
