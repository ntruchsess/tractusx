import { Outlet } from 'react-router-dom'
import { Header } from './shared/frame/Header'
import { useTranslation } from 'react-i18next'
import AccessService from '../services/AccessService'
import { Footer } from './shared/frame/Footer'
import './Main.scss'

export default function Main() {
  document.title = useTranslation().t('title')
  return (
    <>
      <Header pages={AccessService.mainMenu()} />
      <Outlet />
      <Footer pages={AccessService.footerMenu()} />
    </>
  )
}
