import { NavLink } from "react-router-dom";
import { UserInfo } from "../UserInfo/UserInfo";
import { Logo } from "../Logo/Logo";
import "./Header.css";

export const Header = () => (
  <header>
    <Logo />
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/appstore">App Store</NavLink>
      <NavLink to="/catalog">Data Catalog</NavLink>
      <NavLink to="/applications">Applications</NavLink>
    </nav>
    <UserInfo />
  </header>
);
