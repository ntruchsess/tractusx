// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from "react";
import {useEffect} from "react";
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch, useLocation} from "react-router-dom";
import "./styles/newApp.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./components/landing";
import RegistrationCax from "./components/cax-registration";
import Finish from "./components/finish"
import {Provider} from 'react-redux';
import store from './stores/store';
import Authinfo from "./components/authinfo";
import ProtectedRoute from "./helpers/authorisation/ProtectedRoute";
import UnauthorisedPage from "./components/unauthorised";

const history = createBrowserHistory();


const App = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Redirect path="/" exact to="/landing"/>
                    <ProtectedRoute path='/landing' rolesAllowedForTheRoute={["view_registration"]}
                                    component={(props) => <Landing {...props}  />}/>
                    <ProtectedRoute path='/registration' rolesAllowedForTheRoute={["view_registration"]}
                                    component={(props) => <RegistrationCax {...props}  />}/>
                    <ProtectedRoute path='/finish' rolesAllowedForTheRoute={["view_registration"]}
                                    component={(props) => <Finish {...props}  />}/>
                    <Route path="/authinfo" component={() => <Authinfo/>}/>
                    <Route path="/403" component={() => <UnauthorisedPage/>}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App
