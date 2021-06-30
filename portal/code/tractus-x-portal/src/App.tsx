// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import DataUpload from './components/apps/dataupload';
import DataUpload2 from './components/apps/dataupload2';
import Registration from './components/reg';
import { withAdalLoginApi } from './helpers/adalConfig';

const history = createBrowserHistory();

@observer
export default class App extends React.Component {
  private static first = true;
  constructor(props: any) {
    super(props);
    if (App.first) {
      initializeIcons();
      loadTheme({ palette: { themePrimary: '#BAC938', themeDarkAlt: '#E6AA1E' } })
    }

    App.first = false;
  }

  public render() {
    const ProtectedHome = withAdalLoginApi(Home, () => <div>Loading</div>, () => <div>Error</div>);
    const ProtectedUpload1 = withAdalLoginApi(DataUpload, () => <div>Loading</div>, () => <div>Error</div>);
    const ProtectedUpload2 = withAdalLoginApi(DataUpload2, () => <div>Loading</div>, () => <div>Error</div>);
    return (
      <Router history={history}>
        <Switch>
          <Redirect path='/' exact to='/home/dashboard' />
          <Route path='/home' render={(props) => <ProtectedHome/>} />
          <Route path='/registration' component={(props) => <Registration {...props}/>} />
          <Route path='/dataupload' render={()=><ProtectedUpload1/>} />
          <Route path='/dataupload2' render={()=><ProtectedUpload2/>} />
        </Switch>
      </Router>
    );
  }
}
