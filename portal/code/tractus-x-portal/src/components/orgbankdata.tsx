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

import {OrganizationalDetails} from '../data/organizationdetails';

interface OrgBankDataProps {
  orgDetails: OrganizationalDetails;
}

@observer
export default class OrgBankData extends React.Component<OrgBankDataProps>{

  public render() {
    const iban: string = this.props.orgDetails?.bankData?.[0]?.IBAN || '';
    const bic: string = this.props.orgDetails?.bankData?.[0]?.bankIdentifier || '';
    const currency: string = this.props.orgDetails?.bankData?.[0]?.currency || '';
    const countryBank: string = this.props.orgDetails?.bankData?.[0]?.countryOfBank || '';

    const countryBankOptions: IDropdownOption[] = [
      { key: countryBank, text: countryBank }
    ];

    const currencyOptions: IDropdownOption[] = [
      { key: currency, text: currency }
    ];

    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div className='pb20'>
          <div className=' bold fs14 pb8'>Account</div>
          <div className='pb6 df mt6'>
            <TextField label='IBAN' disabled className='w50pc pr10 brnone br4 h36' defaultValue={iban}></TextField>
            <Dropdown className='w50pc ' disabled label='Currency' options={currencyOptions} defaultSelectedKey={currency}></Dropdown>
          </div>
          <div className='pb6 df mt6'>
            <TextField label='BIC' disabled className='w50pc pr10 brnone br4 h36' defaultValue={bic}></TextField>
            <Dropdown className='w50pc ' disabled label='Country of bank' options={countryBankOptions} defaultSelectedKey={countryBank}></Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
