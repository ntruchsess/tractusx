import Main from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin'
import Appstore from './pages/Appstore/Appstore'
import AppstoreDetail from './pages/Appstore/AppstoreDetail/AppstoreDetail'
import MyAccount from './pages/MyAccount/MyAccount'
import Connector from './pages/Connector/Connector'
import DataCatalog from './pages/DataCatalog/DataCatalog'
import Developer from './pages/Developer/Developer'
import DeveloperHub from './pages/DeveloperHub/DeveloperHub'
import DigitalTwins from './pages/DigitalTwins/DigitalTwins'
import Logout from './pages/Logout/Logout'
import SemanticHub from './pages/SemanticHub/SemanticHub'
import Settings from './pages/Settings/Settings'
import TestAPI from './pages/TestAPI/TestAPI'
import Translator from './pages/Translator/Translator'
import { PAGES } from '../types/MainTypes'
import NotFound from './pages/NotFound/NotFound'
import AccessService from '../services/AccessService'

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
  [PAGES.DEVELOPER]: <Developer />,
  [PAGES.SETTINGS]: <Settings />,
  [PAGES.TESTAPI]: <TestAPI />,
  [PAGES.TRANSLATOR]: <Translator />,
  [PAGES.LOGOUT]: <Logout />,
}

export default function Router() {
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
