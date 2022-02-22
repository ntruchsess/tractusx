import { Outlet } from 'react-router-dom'
import { Header } from './shared/frame/Header/Header'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
