// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import adalContext from '../helpers/adalConfig';
import { Icon, Pivot, PivotItem } from '@fluentui/react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProp extends RouteComponentProps{
  href: string;
  hidePivot?: boolean;
  appTitle?: string;
}

const pivots = ['Dashboard', 'App Store', 'Data Catalog', 'Vocabulary', 'Developer Hub'];
const keys = pivots.map((p) => p.toLowerCase().replace(' ', ''));

@observer
class Header extends React.Component<IProp> {
  @observable username = '';
  @observable initials = '';
  @observable selectedKey = '';

  componentDidMount() {
    this.username = adalContext.getFullName();
    this.initials = adalContext.getInitials(this.username);
  }

  pivotClick(item: PivotItem): void {
    this.selectedKey = item.props.headerText.replace(' ', '').toLowerCase();
    this.props.history.push(`/home/${this.selectedKey}`);
  }

  homeClick(): void {
    this.props.history.push('/home/dashboard');
  }

  public render() {
    const href = window.location.href;
    const path = href.substr(href.lastIndexOf('/') + 1);
    const key = String(keys.indexOf(path));
    return (
      <div className='w100pc minh80 df aic bgwhite'>
        <div className='df w250 cpointer' onClick={() => this.homeClick()}>
          <img src='/logo.png' alt='logo' />
          <span className='fs22 bold'>Catena-X</span>
        </div>
        {this.props.appTitle && <div className='df aic'>
          <Icon className='fs14 bold fgblack' iconName='ChromeMinimize' />
          <div className='fs16 bold fgblack ml10 mb4'>{this.props.appTitle}</div>
        </div>}
        <div className='flex1' />
        {!this.props.hidePivot && <Pivot selectedKey={key} className='px30' aria-label='Header' onLinkClick={(item) => this.pivotClick(item)}>
          {pivots.map((p) => {
            return <PivotItem key={p.toLowerCase().replace(' ', '')} className='ml20 mr20' headerText={p} />
          })}
          <PivotItem key='search' className='ml20 mr20' headerText='' itemIcon='search' />
        </Pivot>}
        <div className='flex1' />
        <div className='bgblue fgwhite aic jcc df fs16 br50pc h40 w40 mr10'>{this.initials}</div>
        <div className='df fdc'>
          <span className='mr50 fs14'>{this.username}</span>
          <span className='mr50 fs14'>{adalContext.getDomain(adalContext.getUsername())}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);