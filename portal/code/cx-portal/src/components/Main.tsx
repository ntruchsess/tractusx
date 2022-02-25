import { Outlet } from 'react-router-dom'
import { Header } from './shared/frame/Header/Header'
import './Main.css'

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
