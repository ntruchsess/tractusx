import InfoBox from 'components/shared/functional/InfoBox'
import { useState } from 'react'
import { UserMenu } from '../UserMenu'
import './UserInfo.scss'

interface UserInfoProps {
  isAdmin?: boolean
  isMenuOpen?: boolean
}

export const UserInfo = ({ isAdmin, isMenuOpen }: UserInfoProps) => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen)
  const toggleMenuOpen = () => {
    if (!menuOpen) setMenuOpen(true)
  }

  return (
    <div>
      <button
        className={`UserInfo${isAdmin ? ' admin' : ''}`}
        onClick={toggleMenuOpen}
      ></button>
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
