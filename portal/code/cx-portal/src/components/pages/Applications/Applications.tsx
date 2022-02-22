import { NavLink } from "react-router-dom";
import "./Applications.css";

export default function Applications() {
  return (
    <main className="Applications">
      <h2>Applications</h2>
      <nav>
        <NavLink to="/digitaltwins">Digital Twins</NavLink>
        <NavLink to="/semantichub">Semantic Hub</NavLink>
        <NavLink to="/developerhub">Developer Hub</NavLink>
        <NavLink to="/connector">Connector</NavLink>
      </nav>
    </main>
  );
}
