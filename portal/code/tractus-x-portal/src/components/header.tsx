// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import adalContext from '../helpers/adalConfig';
import { Pivot, PivotItem } from '@fluentui/react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProp extends RouteComponentProps{
  href: string;
}

@observer
class Header extends React.Component<IProp> {
  @observable username = '';
  @observable selectedKey = '';

  componentDidMount() {
    this.username = adalContext.getUsername();
  }

  pivotClick(item: any): void {
    this.selectedKey = item.key.replace('.$', '');
    this.props.history.push(`/home/${this.selectedKey}`);
  }

  public render() {
    const href = window.location.href;
    const key = href.substr(href.lastIndexOf('/') + 1);
    return (
      <div className='w100pc h80 df aic bgwhite'>
        <img src='/logo.png' alt='logo' />
        <span className='fs22 bold'>Catena-X</span>
        <div className='flex1' />
        <Pivot defaultSelectedKey={key} className='px30' aria-label='Header' onLinkClick={(item) => this.pivotClick(item)}>
          <PivotItem key='dashboard' className='ml20 mr20' headerText='Dashboard' />
          <PivotItem key='appstore' className='ml20 mr20' headerText='App Store' />
          <PivotItem key='datacatalog' className='ml20 mr20' headerText='Data Catalog' />
          <PivotItem key='vocabulary' className='ml20 mr20' headerText='Vocabulary' />
          <PivotItem key='developerhub' className='ml20 mr20' headerText='Developer Hub' />
          <PivotItem key='search' className='ml20 mr20' headerText='' itemIcon='search' />
        </Pivot>
        <div className='flex1' />
        <span className='mr50 fs14'>{this.username}</span>
      </div>
    );
  }
}

export default withRouter(Header);