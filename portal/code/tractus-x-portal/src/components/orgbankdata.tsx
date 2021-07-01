// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

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
