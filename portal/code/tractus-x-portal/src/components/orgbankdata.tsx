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
import { Dropdown, IDropdownOption, TextField } from '@fluentui/react';


@observer
export default class OrgBankData extends React.Component {

  public render() {

    const currencyOptions: IDropdownOption[] = [
      { key: 'yen', text: '¥' },
      { key: 'dollar', text: '$' },
      { key: 'euro', text: '€' },
      { key: 'pound', text: '£' }
    ];

    const countryOptions: IDropdownOption[] = [
      { key: 'germany', text: 'Germany' },
      { key: 'russia', text: 'Russia' },
      { key: 'china', text: 'China' },
      { key: 'india', text: 'India' }
    ];

    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div className='pb20'>
          <div className=' bold fs14 pb8'>Account</div>
          <div className='pb6 df'>
            <TextField placeholder='IBAN' disabled className='w50pc pr10 brnone br4 h36' required></TextField>
            <Dropdown className='w50pc ' disabled placeholder='Currency' options={currencyOptions} required></Dropdown>
          </div>
          <div className='pb6 df'>
            <TextField placeholder='BIC' disabled className='w50pc pr10 brnone br4 h36' required></TextField>
            <Dropdown className='w50pc ' disabled placeholder='Country of bank' options={countryOptions} required></Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
