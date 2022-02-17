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
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import "./styles/newApp.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import RegistrationCax from "./components/cax-registration";
import Finish from "./components/finish"
import {Provider} from 'react-redux';
import store from './stores/store';
import Registrationoneid from "./components/registrationoneid";

const history = createBrowserHistory();


export default class App extends React.Component {

    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Redirect path="/" exact to="/landing"/>
                        <Route path="/landing" render={(props) => <Landing {...props} />}/>
                        <Route
                            path="/registration"
                            render={(props) => <RegistrationCax />}
                        />
                        <Route
                            path="/finish"
                            component={(props) => <Finish {...props} />}
                        />
                        <Route
                            path="/finish"
                            component={(props) => <Finish {...props} />}
                        />
                        <Route
                            path="/registrationoneid"
                            component={(props) => <Registrationoneid {...props} />}
                        />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
