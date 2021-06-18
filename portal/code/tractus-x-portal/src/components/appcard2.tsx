// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { Application } from '../data/application';
import Ratings from './ratings';
import { RouteComponentProps, withRouter } from 'react-router';

interface IProp extends RouteComponentProps {
  app: Application, onClick?: Function
}

@observer
class AppCard2 extends React.Component<IProp> {

  cardClick(): void {
    if (this.props.onClick) {
      this.props.onClick(this.props.app);
    } else {
      this.props.history.push(`/home/appdetail/${this.props.app.id}`);
    }
  }

  public render() {
    const a = this.props.app;
    return (
      <div className='w340 minh160 maxh160 m5 br4 bsAppStore bgwhite cpointer' onClick={() => this.cardClick()}>
        <Ratings className='mt20 ml15 mb5' app={a} />
        <div className='ml15 fs14 fggrey mb5 mt20'>{a.companyName}</div>
        <div className='df'>
          <div className='ml15 bold fs14 minh40'>{a.title}</div>
          <div className='flex1'/>
          <div className='h50 mt20 mr20'>
            <div className='fglgreen bold fs14'>{a.purchase}</div>
            <div className='fsxs fgb5'>{a.usage}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppCard2);
