import React, { useEffect } from 'react'
import Main from 'components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from 'components/pages/Dashboard/Dashboard'
import Admin from 'components/pages/Admin/Admin'
import Appstore from 'components/pages/Appstore/Appstore'
import AppstoreDetail from 'components/pages/Appstore/AppstoreDetail/AppstoreDetail'
import Authinfo from 'components/pages/Authinfo/Authinfo'
import Connector from 'components/pages/Connector/Connector'
import DataCatalog from 'components/pages/DataCatalog/DataCatalog'
import Developer from 'components/pages/Developer/Developer'
import DeveloperHub from 'components/pages/DeveloperHub/DeveloperHub'
import DigitalTwins from 'components/pages/DigitalTwins/DigitalTwins'
import Logout from 'components/pages/Logout/Logout'
import SemanticHub from 'components/pages/SemanticHub/SemanticHub'
import Settings from 'components/pages/Settings/Settings'
import TestAPI from 'components/pages/TestAPI/TestAPI'
import Translator from 'components/pages/Translator/Translator'
import UserService from 'services/UserService'

const Router = () => {
  useEffect(() => {
    // Before loading component, check login flow
    UserService.init(() => {
      console.log('authenticated')
    })
  }, [])

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

export default Router
