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
import { Nav, INavStyles, INavLinkGroup, INavLink } from '@fluentui/react/lib/Nav';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Dashboard from './dashboard';
import AppStore from './appstore';
import DataCatalog from './datacatalog';
import Vocabulary from './vocabulary';
import DeveloperHub from './developerhub';
import { ThemeProvider } from '@fluentui/react';
import NotImp from './notimplemented';
import AppDetail from './appdetail';

@observer
class Home extends React.Component<RouteComponentProps> {

  linkClick(ev: React.MouseEvent<HTMLElement, MouseEvent>, item: INavLink): void {
    ev.stopPropagation();
    ev.preventDefault();
    this.props.history.push(`/home${item.url}`);
  }

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
            url: '/dashboard',
            key: 'key1',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'my Data',
            url: '/appdetail',
            key: 'key2',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'my Connectors',
            url: '/notimp',
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
            url: '/notimp',
            key: 'key4',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'Transactions & History',
            url: '/notimp',
            key: 'key5',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'Organization',
            url: '/notimp',
            key: 'key6',
            expandAriaLabel: 'Expand section',
            collapseAriaLabel: 'Collapse section',
            title: ''
          },
          {
            name: 'User Management',
            url: '/notimp',
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
        <div className='df w100pc flex1'>
          <ThemeProvider theme={{ palette: { themePrimary: '#E6AA1E' } }}>
            <div className='df fdc w250 h100pc'>
              <Nav className='bgwhite' selectedKey='key1' ariaLabel='Navigation panel' styles={navStyles} groups={navLinkGroups}
                onLinkClick={(ev, item) => this.linkClick(ev, item)} />
              <div className='flex1 bgwhite' />
              <Nav className='bgwhite' selectedKey='' ariaLabel='Navigation panel' styles={navStyles} groups={navLinkGroups2}
                onLinkClick={(ev, item) => this.linkClick(ev, item)} />
            </div>
          </ThemeProvider>
          <div className='flex1 h100pc ova'>
            <Switch>
              <Redirect path='/home' exact to='/home/dashboard' />
              <Route path='/home/dashboard' component={(props) => <Dashboard {...props} />} />
              <Route path='/home/appstore' component={(props) => <AppStore {...props} />} />
              <Route path='/home/datacatalog' component={(props) => <DataCatalog {...props} />} />
              <Route path='/home/vocabulary' component={(props) => <Vocabulary {...props} />} />
              <Route path='/home/developerhub' component={(props) => <DeveloperHub {...props} />} />
              <Route path='/home/appdetail' component={(props) => <AppDetail {...props}/>} />
              <Route path='/home/notimp' component={(props) => <NotImp {...props}/>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
