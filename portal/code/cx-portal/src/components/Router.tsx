import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appstore from "./pages/Appstore/Appstore";
import DataCatalog from "./pages/DataCatalog/DataCatalog";
import AppstoreAppDetail from "./pages/Appstore/AppstoreAppDetail";
import Admin from "./pages/Admin/Admin";
import Authinfo from "./pages/Authinfo/Authinfo";
import Applications from "./pages/Applications/Applications";
import DigitalTwins from "./pages/DigitalTwins/DigitalTwins";
import SemanticHub from "./pages/SemanticHub/SemanticHub";
import Connector from "./pages/Connector/Connector";
import DeveloperHub from "./pages/DeveloperHub/DeveloperHub";
import Logout from "./pages/Logout/Logout";
import Settings from "./pages/Settings/Settings";
import Developer from "./pages/Developer/Developer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="appstore" element={<Appstore />}>
            <Route
              index
              element={
                <main>
                  <p>Select an app</p>
                </main>
              }
            />
            <Route path=":appId" element={<AppstoreAppDetail />} />
          </Route>
          <Route path="/catalog" element={<DataCatalog />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/digitaltwins" element={<DigitalTwins />} />
          <Route path="/semantichub" element={<SemanticHub />} />
          <Route path="/developerhub" element={<DeveloperHub />} />
          <Route path="/connector" element={<Connector />} />
          <Route path="/authinfo" element={<Authinfo />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/settings" element={<Settings />} />
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
  );
}
