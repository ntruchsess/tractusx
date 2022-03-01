import { UserInfo } from '../UserInfo/UserInfo'
import { Logo } from '../Logo/Logo'
import { useTranslation } from 'react-i18next'
import { Menu } from '../../basic/Menu/Menu'
import './Header.css'

interface HeaderProps {
  pages: string[]
}

export const Header = ({ pages }: HeaderProps) => {
  const { t } = useTranslation()
  return (
    <header>
      <Logo />
      <Menu
        horizontal={true}
        items={pages.map((p) => ({ url: `/${p}`, label: t(`pages.${p}`) }))}
      />
      <UserInfo />
    </header>
  )
}
