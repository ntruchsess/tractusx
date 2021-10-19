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

interface OrgContactDataProps {
  orgDetails: OrganizationalDetails;
}

@observer
export default class OrgContactData extends React.Component<OrgContactDataProps>{
  public render() {
    const street: string = this.props.orgDetails?.addressData?.[0]?.street || '';
    const houseNumber: string = this.props.orgDetails?.addressData?.[0]?.houseNumber || '';
    const addInfo: string = this.props.orgDetails?.addressData?.[0]?.itinaryInformation || '';
    const postalCode: string = this.props.orgDetails?.addressData?.[0]?.postalCode || '';
    const city: string = this.props.orgDetails?.addressData?.[0]?.city || '';
    const districtName: string = this.props.orgDetails?.addressData?.[0]?.region || '';
    const countryName: string = this.props.orgDetails?.addressData?.[0]?.country?.countryNameEN || '';
    const emailAddress: string = this.props.orgDetails?.contactData?.[0]?.emailAddress || '';
    const website: string = this.props.orgDetails?.contactData?.[0]?.website || '';
    const countryPrefix: string = this.props.orgDetails?.contactData?.[0]?.phoneNumbers?.[0]?.countryPrefix || '';
    const phnNumber: string = this.props.orgDetails?.contactData?.[0]?.phoneNumbers?.[0]?.number || '';
    
    const districtOptions: IDropdownOption[] = [
      { key: districtName, text: districtName }
    ];
    
    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div className='pb20'>
          <div className='bold fs14 pb8'>Address Information</div>
          <div className='fb pb6 df'>
            <TextField label='Street' disabled className='w50pc brnone br4 pr10 h36' defaultValue={street} />
            <TextField label='Street 2' disabled className='w50pc brnone br4 h36' />
          </div>
          <div className='fb pb6 df mt20'>
            <TextField label='House number' disabled className='w50pc brnone br4 pr10 h36' defaultValue={houseNumber} />
            <TextField label='Add. Information' disabled className='w50pc brnone br4 h36' defaultValue={addInfo} />
          </div>
        </div>
        <div className='pb8 mt10'>
          <div className='fb pb6 df'>
            <TextField className='w50pc pr10' disabled label='Country' defaultValue={countryName} />
            <Dropdown className='w50pc' disabled label='District' options={districtOptions} defaultSelectedKey={districtName} />
          </div>
          <div className='fb pb6 df mt10'>
            <TextField label='Postal code' disabled className='w50pc pr10 brnone br4 h36' defaultValue={postalCode} />
            <TextField label='City' disabled className='w50pc brnone br4 h36' defaultValue={city} />
          </div>
        </div>
        <div className='pb20 mt30'>
          <div className='bold fs14 pb8'>Contact</div>
          <div className='pb6 df mt10'>
            <TextField label='Email address' disabled className='w50pc pr10 brnone br4 h36' defaultValue={emailAddress} />
            <TextField label='Website' disabled className='w50pc brnone br4 h36' defaultValue={website} />
          </div>
        </div>
        <div className='pb20 mt20'>
          <div className='pb6 df'>
            <TextField label='Country prefix' disabled className='w50pc pr10 brnone br4 h36' defaultValue={countryPrefix} />
            <TextField label='Phone number' disabled className='w50pc brnone br4 h36' defaultValue={phnNumber} />
          </div>
          <div className='pb6 df mt20'>
            <TextField label='Mobile phone' disabled className='w50pc pr10 brnone br4 h36' />
            <TextField label='Fax' disabled className='w50pc brnone br4 h36' />
          </div>
        </div>
      </div>
    );
  }
}
