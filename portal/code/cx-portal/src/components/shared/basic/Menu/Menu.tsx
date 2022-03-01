import { NavLink } from 'react-router-dom'
import { MenuItem } from '../../SharedTypes'
import './Menu.css'

interface MenuProps {
  items: MenuItem[]
  horizontal?: boolean
}

export const Menu = ({ items, horizontal }: MenuProps) => (
  <nav className={`Menu ${horizontal ? 'horizontal' : 'vertical'}`}>
    {items.map((item, i) => (
      <NavLink key={i} to={item.url}>
        {item.label}
      </NavLink>
    ))}
  </nav>
)
