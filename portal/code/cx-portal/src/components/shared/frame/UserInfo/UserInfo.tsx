import { useState } from 'react'
import InfoBox_alternative from 'components/shared/Functional/InfoBox_alternative'
import { UserMenu } from '../../frame/UserMenu/UserMenu'
import './UserInfo.css'

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
      <button className='UserInfo' onClick={toggleMenuOpen}>
        {isAdmin ? '👑' : '👤'}
      </button>
      {/* Ignore just because it's not real name of this component */}
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <InfoBox_alternative
        show={menuOpen}
        onClickOutside={() => {
          setMenuOpen(false)
        }}
        element={<UserMenu />}
      />
    </div>
  )
}
