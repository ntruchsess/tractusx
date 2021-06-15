// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import Header from './header';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import AppStore from './appstore';
import DataCatalog from './datacatalog';
import Vocabulary from './vocabulary';
import DeveloperHub from './developerhub';

@observer
export default class Home extends React.Component {

  public render() {
    const navStyles: Partial<INavStyles> = {
      root: {
        width: 250,
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto'
      },
      // these link styles override the default truncation behavior
      link: {
        whiteSpace: 'normal',
        lineHeight: 'inherit'
      }
    };
    
    // adding an empty title string to each link removes the tooltip;
    // it's unnecessary now that the text wraps, and will not truncate
    const navLinkGroups: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'my Apps',
            url: '/home',
            key: 'key1',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'my Data',
            url: '/home',
            key: 'key2',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'my Connectors',
            url: '/home',
            key: 'key3',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          }
        ]
      }
    ];
 
    const navLinkGroups2: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'Notification Center',
            url: '/home',
            key: 'key4',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'Transactions & History',
            url: '/home',
            key: 'key5',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'Organization',
            url: '/home',
            key: 'key6',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'User Management',
            url: '/home',
            key: 'key7',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          }
        ]
      }
    ];
    return (
      <div className='w100pc h100pc df fdc bgf5'>
        <Header href={window.location.href} />
        <div className='df w100pc h100pc'>
          <div className='df fdc w250 h100pc'>
            <Nav className='bgwhite' selectedKey='key1' ariaLabel='Navigation panel' styles={navStyles} groups={navLinkGroups} />
            <div className='flex1 bgwhite' />
            <Nav className='bgwhite' selectedKey='' ariaLabel='Navigation panel' styles={navStyles} groups={navLinkGroups2} />
          </div>
          <div className='w100pc h100pc df fdc'>
            <Switch>
              <Redirect path='/home' exact to='/home/dashboard' />
              <Route path='/home/dashboard' component={(props) => <Dashboard {...props} />} />
              <Route path='/home/appstore' component={(props) => <AppStore {...props} />} />
              <Route path='/home/datacatalog' component={(props) => <DataCatalog {...props} />} />
              <Route path='/home/vocabulary' component={(props) => <Vocabulary {...props} />} />
              <Route path='/home/developerhub' component={(props) => <DeveloperHub {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
