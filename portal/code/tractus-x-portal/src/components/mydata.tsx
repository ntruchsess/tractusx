// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { Pivot, PivotItem } from '@fluentui/react';
import MyDataOverview from './mydataoverview'

@observer
export default class MyData extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <Pivot className='bgwhite' aria-label='Header'>
          <PivotItem className='bgf5' headerText='Overview' >
            <MyDataOverview/>
          </PivotItem>
          <PivotItem className='mr20' headerText='Provided Data' />
          <PivotItem className='mr20' headerText='Consumed Data' />
        </Pivot>
      </div>
    );
  }
}
