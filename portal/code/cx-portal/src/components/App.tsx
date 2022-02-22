import { Outlet } from "react-router-dom";
import { Header } from "./common/Header/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
