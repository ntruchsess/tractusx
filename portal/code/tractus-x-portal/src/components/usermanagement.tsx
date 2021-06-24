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
import AddUser from './adduser';

@observer
export default class UserManagement extends React.Component {

  public render() {
    return (
      <div className='w100pc bgf5 h100pc df fdc'>
        <Pivot className='bgwhite' aria-label='Header'>
          <PivotItem className='bgf5' headerText='Overview' >
            <AddUser />
          </PivotItem>
          <PivotItem className='bgf5' headerText='Teams' />
        </Pivot>
      </div>
    );
  }
}
