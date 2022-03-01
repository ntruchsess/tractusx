import { useState } from 'react'
import { InfoBox } from '../../Functional/InfoBox'
import { UserMenu } from '../../frame/UserMenu/UserMenu'
import './UserInfo.css'

interface UserInfoProps {  isAdmin?: boolean
  isMenuOpen?: boolean
}

export const UserInfo = ({ isAdmin, isMenuOpen }: UserInfoProps) => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen)
  const toggleMenuOpen = () => {
    if (!menuOpen) setMenuOpen(true)
  }

  return (
    <div>
      <button className="UserInfo" onClick={toggleMenuOpen}>
        {isAdmin ? '👑' : '👤'}
      </button>
      <InfoBox
        show={menuOpen}
        onClickOutside={() => {
          setMenuOpen(false)
        }}
        element={<UserMenu />}
      />
    </div>
  )
}
