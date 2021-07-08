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
// import { Pivot, PivotItem } from '@fluentui/react';
import MyDataOverview from './mydataoverview'

@observer
export default class MyData extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        {/* <Pivot className='bgwhite' aria-label='Header'>
          <PivotItem className='bgf5' headerText='Overview' > */}
            <MyDataOverview/>
          {/* </PivotItem>
          <PivotItem className='mr20' headerText='Provided Data' />
          <PivotItem className='mr20' headerText='Consumed Data' />
        </Pivot> */}
      </div>
    );
  }
}
