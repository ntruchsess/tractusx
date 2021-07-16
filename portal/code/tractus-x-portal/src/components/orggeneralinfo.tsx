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
import { convertDate } from '../helpers/utils';

interface OrgGeneralInfoProps {
  orgDetails: OrganizationalDetails;
}

@observer
export default class OrgGeneralInfo extends React.Component<OrgGeneralInfoProps> {
  public render() {
    if (!this.props.orgDetails) {
      return null;
    }

    const oneid: string = this.props.orgDetails?.oneID || '';
    const orgName: string = this.props.orgDetails?.businessPartnerName?.[0]?.name || '';
    const issuer: string = this.props.orgDetails?.businessPartnerIdentifiers?.[0]?.issuer || '';
    const regName: string = orgName + ' ' + this.props.orgDetails?.businessPartnerName?.[0]?.legalForm || '';
    const identifyNumberType: string = this.props.orgDetails?.businessPartnerIdentifiers?.[0]?.typeOfIdentificationNumber || '';
    const identifyNum: string = this.props.orgDetails?.businessPartnerIdentifiers?.[0]?.identificationNumber || '';
    const lang: string = this.props.orgDetails?.businessPartnerName?.[0]?.language || '';
    const activityStatus = this.props.orgDetails?.businessStatus?.[0]?.statusOfOperation || '';
    const validFrom: string = this.props.orgDetails?.businessStatus?.[0]?.validFrom || '';
    const validTo: string = this.props.orgDetails?.businessStatus?.[0]?.validTo || '';

    const langOptions: IDropdownOption[] = [
      { key: 'DE', text: 'German' },
      { key: 'EN', text: 'English' },
      { key: 'FR', text: 'French' },
      { key: 'RU', text: 'Russian' },
      { key: 'ES', text: 'Spanish' }
    ];

    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div className='h80'>
          <TextField label='One ID' disabled className='w90pc brnone br4 h36' defaultValue={oneid} />
        </div>
        <div className='df h80'>
          <TextField label='Organization name' disabled className='w50pc pr10 brnone br4 h36' defaultValue={orgName} />
          <Dropdown label='Prefered contact language' className='w50pc' disabled options={langOptions} defaultSelectedKey={lang} />
        </div>
        <div className='pb8'>
          <div className='bold fs14 pb12 pb8'>Organization Names</div>
          <div className='pb6 df'>
            <TextField label='Registered name' disabled className='w50pc brnone br4 pr10 h36' defaultValue={regName} />
            <TextField label='Local name' disabled className='w50pc brnone br4 h36' defaultValue={regName} />
          </div>
          <div className='pb6 df mt30'>
            <TextField label='International name' disabled className='w50pc brnone br4 pr10 h36' />
            <TextField label='Transliterated name' disabled className='w50pc brnone br4 h36' />
          </div>
          <div className='pb6 df mt30'>
            <TextField label='DBA name' disabled className='w50pc brnone br4 pr10 h36' />
            <TextField label='VAT registered name' disabled className='w50pc brnone br4 h36' />
          </div>
        </div>
        <div className='pb8 mt20'>
          <div className=' bold fs14 pb12 pb8'>Organization Identifiers</div>
          <div className='pb6 df'>
            <TextField label='External Business Partner Identifier' disabled className='w50pc brnone br4 pr10 h36' />
            <TextField label='Issuer' disabled className='w50pc brnone br4 h36' defaultValue={issuer} />
          </div>
          <div className='pb6 df mt30 '>
            <TextField label='Type of Business partner Identifier' disabled className='w50pc brnone br4 pr10 h36' defaultValue={identifyNumberType} />
            <TextField label='Identification Number' disabled className='w50pc brnone br4 h36' defaultValue={identifyNum} />
          </div>
        </div>
        <div className='pb8 mt30'>
          <div className=' bold fs14 pb12 pb8'>Business Status</div>
          <div className='pb6 df'>
            <TextField label='State of activity/operation' className='w30pc ' disabled placeholder='State of activity/operation' defaultValue={activityStatus} />
            <TextField label='Valid from' className='w30pc ml20' disabled defaultValue={convertDate(validFrom)} />
            <TextField label='Valid until' className='w30pc ml20' disabled defaultValue={convertDate(validTo)} />
          </div>
        </div>
      </div>
    );
  }
}
