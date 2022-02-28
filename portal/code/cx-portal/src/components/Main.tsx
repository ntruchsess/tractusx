import { Outlet } from 'react-router-dom'
import { Header } from './shared/frame/Header/Header'
import { useTranslation } from 'react-i18next'
import './Main.css'

export default function Main() {
  document.title = useTranslation().t('title')
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
