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

const pivots = ['Dashboard', 'AppStore', 'Data Catalog', 'Vocabulary', 'Developer Hub'];
const keys = pivots.map((p) => p.toLowerCase().replace(' ', ''));

@observer
class Header extends React.Component<IProp> {
  @observable username = '';
  @observable selectedKey = '';

  componentDidMount() {
    this.username = adalContext.getUsername();
  }

  pivotClick(item: PivotItem): void {
    this.selectedKey = item.props.headerText.replace(' ', '').toLowerCase();
    this.props.history.push(`/home/${this.selectedKey}`);
  }

  public render() {
    const href = window.location.href;
    const path = href.substr(href.lastIndexOf('/') + 1);
    const key = String(keys.indexOf(path));
    return (
      <div className='w100pc minh80 df aic bgwhite'>
        <img src='/logo.png' alt='logo' />
        <span className='fs22 bold'>Catena-X</span>
        <div className='flex1' />
        <Pivot selectedKey={key} className='px30' aria-label='Header' onLinkClick={(item) => this.pivotClick(item)}>
          {pivots.map((p) => {
            return <PivotItem key={p.toLowerCase().replace(' ', '')} className='ml20 mr20' headerText={p} />
          })}
          <PivotItem key='search' className='ml20 mr20' headerText='' itemIcon='search' />
        </Pivot>
        <div className='flex1' />
        <span className='mr50 fs14'>{this.username}</span>
      </div>
    );
  }
}

export default withRouter(Header);