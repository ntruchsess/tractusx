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

@observer
export default class AppCard extends React.Component<{ app: Application, onClick?: Function }> {

  cardClick(): void {
    if (this.props.onClick) {
      this.props.onClick(this.props.app);
    }
  }

  public render() {
    const a = this.props.app;
    return (
      <div className='h250 m5 br4 bsAppStore bgwhite minw200 maxw200 cpointer' onClick={() => this.cardClick()}>
        <Ratings className='mt80 ml15 mb5' app={a} />
        <div className='ml15 fs14 fggrey mb5'>{a.companyName}</div>
        <div className='ml15 bold fs14 minh40'>{a.title}</div>
        <div className='h50 mt20 tal ml15'>
          <div className='fglgreen bold fs14'>{a.purchase}</div>
          <div className='fsxs fgb5'>{a.usage}</div>
        </div>
      </div>
    );
  }
}
