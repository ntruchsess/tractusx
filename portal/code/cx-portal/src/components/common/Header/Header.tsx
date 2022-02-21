import { NavLink } from "react-router-dom";
import { UserInfo } from "../UserInfo/UserInfo";
import { Logo } from "../Logo/Logo";
import "./Header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header>
    <Logo/>
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/appstore">App Store</NavLink>
      <NavLink to="/catalog">Data Catalog</NavLink>
      <NavLink to="/applications">Applications</NavLink>
    </nav>
    <UserInfo />
  </header>
);
