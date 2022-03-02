import { Outlet } from 'react-router-dom'
import { Header } from './shared/frame/Header/Header'
import { useTranslation } from 'react-i18next'
import './Main.scss'

export default function Main() {
  document.title = useTranslation().t('title')
  return (
    <>
      <Header
        pages={[
          'dashboard',
          'appstore',
          'datacatalog',
          'digitaltwins',
          'semantichub',
          'developerhub',
        ]}
      />
      <Outlet />
    </>
  )
}
