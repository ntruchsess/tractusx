import Main from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin'
import Appstore from './pages/Appstore/Appstore'
import AppstoreDetail from './pages/Appstore/AppstoreDetail/AppstoreDetail'
import Authinfo from './pages/Authinfo/Authinfo'
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

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appstore" element={<Appstore />}>
            <Route
              index
              element={
                <div>
                  <p>Select an app</p>
                </div>
              }
            />
            <Route path=":appId" element={<AppstoreDetail />} />
          </Route>
          <Route path="datacatalog" element={<DataCatalog />} />
          <Route path="digitaltwins" element={<DigitalTwins />} />
          <Route path="semantichub" element={<SemanticHub />} />
          <Route path="developerhub" element={<DeveloperHub />} />
          <Route path="connector" element={<Connector />} />
          <Route path="authinfo" element={<Authinfo />} />
          <Route path="admin" element={<Admin />} />
          <Route path="developer" element={<Developer />} />
          <Route path="settings" element={<Settings />} />
          <Route path="testapi" element={<TestAPI />} />
          <Route path="translator" element={<Translator />} />
          <Route
            path="*"
            element={
              <main>
                <p>page not implemented</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
