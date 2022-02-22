import { NavLink } from 'react-router-dom'
import './Menu.css'

interface MenuItem {
  url: string
  label: string
}

interface MenuProps {
  items: MenuItem[]
}

export const Menu = ({ items }: MenuProps) => (
  <nav className="Menu">
    {items.map((item, i) => (
      <NavLink key={i} to={item.url}>
        {item.label}
      </NavLink>
    ))}
  </nav>
)
