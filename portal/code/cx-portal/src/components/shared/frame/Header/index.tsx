import { UserInfo } from '../UserInfo'
import { Logo } from '../Logo'
import { NavMenu } from '../NavMenu'
import './Header.scss'

export const Header = ({ pages }: { pages: string[] }) => (
  <header>
    <Logo />
    <NavMenu horizontal={true} pages={pages} />
    <UserInfo />
  </header>
)
