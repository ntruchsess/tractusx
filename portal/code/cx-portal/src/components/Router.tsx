import React, { useEffect } from 'react'
import Main from 'components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from 'components/pages/Dashboard/Dashboard'
import Admin from 'components/pages/Admin/Admin'
import Appstore from 'components/pages/Appstore/Appstore'
import AppstoreDetail from 'components/pages/Appstore/AppstoreDetail/AppstoreDetail'
import MyAccount from './pages/MyAccount/MyAccount'
import Connector from 'components/pages/Connector/Connector'
import DataCatalog from 'components/pages/DataCatalog/DataCatalog'
import DeveloperHub from 'components/pages/DeveloperHub/DeveloperHub'
import DigitalTwins from 'components/pages/DigitalTwins/DigitalTwins'
import Logout from 'components/pages/Logout/Logout'
import SemanticHub from 'components/pages/SemanticHub/SemanticHub'
import Translator from 'components/pages/Translator/Translator'
import { PAGES } from '../types/MainTypes'
import NotFound from './pages/NotFound/NotFound'
import AccessService from '../services/AccessService'
import UserService from 'services/UserService'
import { useDispatch } from 'react-redux'
import { setLoggedUser } from 'state/features/user/userSlice'
import { IUser } from 'types/user/UserTypes'
import PartnerNetwork from 'components/pages/PartnerNetwork/PartnerNetwork'


const plainRoutes: { [page: string]: JSX.Element } = {
  [PAGES.ROOT]: <Dashboard />,
  [PAGES.DASHBOARD]: <Dashboard />,
  [PAGES.DATACATALOG]: <DataCatalog />,
  [PAGES.DIGITALTWIN]: <DigitalTwins />,
  [PAGES.SEMANTICHUB]: <SemanticHub />,
  [PAGES.DEVELOPERHUB]: <DeveloperHub />,
  [PAGES.CONNECTOR]: <Connector />,
  [PAGES.ACCOUNT]: <MyAccount />,
  [PAGES.ADMINISTRATION]: <Admin />,
  [PAGES.TRANSLATOR]: <Translator />,
  [PAGES.LOGOUT]: <Logout />,
  [PAGES.PARTNER_NETWORK]: <PartnerNetwork />
}

export default function Router() {
  const dispatch = useDispatch()


  useEffect(() => {
    // Before loading component, check login flow
    UserService.init((loggedUser: IUser) => {
      // Login flow successful. Set data to Redux
      dispatch(setLoggedUser(loggedUser))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {Object.entries(plainRoutes)
            .filter(([page]) => AccessService.hasAccess(page))
            .map(([page, jsx], i) => (
              <Route key={i} path={page} element={jsx} />
            ))}
          {AccessService.hasAccess(PAGES.APPSTORE) ? (
            <Route path={PAGES.APPSTORE} element={<Appstore />}>
              <Route index element={<p>Select an app</p>} />
              <Route path=":appId" element={<AppstoreDetail />} />
            </Route>
          ) : (
            <></>
          )}
          <Route path="*" element={NotFound()} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
