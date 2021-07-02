// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
