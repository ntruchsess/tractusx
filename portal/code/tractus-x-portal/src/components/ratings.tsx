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
import { Icon } from '@fluentui/react';

@observer
export default class Ratings extends React.Component<{ app: Application, className?: string }> {

  public render() {
    return (
      <div className={this.props.className || ''}>
        <Icon className='fgblack fs20' iconName='FavoriteStarFill' />
        <span className='fs14 fgblack bold ml5 mt2'>{this.props.app.rating}</span>
        <span className='fs14 fggrey ml5 mt2'>/ 5</span>
      </div>
    );
  }
}
