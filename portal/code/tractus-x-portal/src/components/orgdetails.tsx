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
import OrgContactData from './orgcontactdata';
import OrgGeneralInfo from './orggeneralinfo';
import OrgBankData from './orgbankdata';

@observer
export default class OrgDetails extends React.Component {

  public render() {
    return (
      <div className='w100pc bgpanel3 h100pc df fdc'>
        <Pivot className='px30 bgfa h100pc' aria-label='Header'>
          <PivotItem className='mr20' headerText='General Information' >
            <OrgGeneralInfo/>
          </PivotItem>
          <PivotItem className='mr20' headerText='Contact Data' >
            <OrgContactData/>
          </PivotItem>
          <PivotItem className='mr20' headerText='Bank Data' >
            <OrgBankData/>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
