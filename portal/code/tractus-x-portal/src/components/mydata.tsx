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
import Overview from './mydataoverview'

@observer
export default class MyData extends React.Component {

  public render() {
    return (
      <div className='w100pc bgpanel3 h100pc df fdc'>
        <Pivot className='px30 bgwhite' aria-label='Header'>
          <PivotItem className='mr20 bgpanel3' headerText='Overview' >
            <Overview/>
          </PivotItem>
          <PivotItem className='mr20' headerText='Provided Data' />
          <PivotItem className='mr20' headerText='Consumed Data' />
        </Pivot>
      </div>
    );
  }
}
