// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { Dropdown, IDropdownOption, TextField, DatePicker } from '@fluentui/react';

@observer
export default class OrgContactData extends React.Component {
  public render() {

    const langOptions: IDropdownOption[] = [
      { key: 'german', text: 'German' },
      { key: 'english', text: 'English' },
      { key: 'french', text: 'French' },
      { key: 'russian', text: 'Russian' },
      { key: 'spanish', text: 'Spanish' }
    ];

    const statusOptions: IDropdownOption[] = [
      { key: 'active', text: 'Active' },
      { key: 'inactive', text: 'InActive' }
    ];

    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div className='h80'>
          <TextField placeholder='One ID' disabled className='w90pc brnone br4 h36'/>
        </div>
        <div className='df h80'>
          <TextField placeholder='Organization name' disabled className='w50pc pr10 brnone br4 h36' required/>
          <Dropdown className='w50pc' disabled placeholder='Prefered contact language' options={langOptions} required/>
        </div>
        <div className='pb8'>
          <div className='bold fs14 pb12 pb8'>Organization Names</div>
          <div className='pb6 df'>
            <TextField placeholder='Registered name' disabled className='w50pc brnone br4 pr10 h36' required/>
            <TextField placeholder='Local name' disabled className='w50pc brnone br4 h36'/>
          </div>
          <div className='pb6 df'>
            <TextField placeholder='International name' disabled className='w50pc brnone br4 pr10 h36'/>
            <TextField placeholder='Transliterated name' disabled className='w50pc brnone br4 h36'/>
          </div>
          <div className='pb6 df'>
            <TextField placeholder='DBA name' disabled className='w50pc brnone br4 pr10 h36'/>
            <TextField placeholder='VAT registered name' disabled className='w50pc brnone br4 h36'/>
          </div>
        </div>
        <div className='pb8'>
          <div className=' bold fs14 pb12 pb8'>Organization Identifiers</div>
          <div className='pb6 df'>
            <TextField placeholder='External Business Partner Identifier' disabled className='w50pc brnone br4 pr10 h36' required/>
            <TextField placeholder='Issuer' disabled className='w50pc brnone br4 h36'/>
          </div>
          <div className='pb6 df'>
            <TextField placeholder='Type of Business partner Identifier' disabled className='w50pc brnone br4 pr10 h36'/>
            <TextField placeholder='Identification Number' disabled className='w50pc brnone br4 h36'/>
          </div>
        </div>
        <div className='pb8'>
          <div className=' bold fs14 pb12 pb8'>Business Status</div>
          <div className='pb6 df'>
            <Dropdown className='w30pc ' disabled placeholder='State of activity/operation' options={statusOptions}/>
            <DatePicker className='w30pc ml20' disabled placeholder='Valid from' ariaLabel='valid from' />
            <DatePicker className='w30pc ml20' disabled placeholder='Valid until' ariaLabel='valid until' />
          </div>
        </div>
      </div>
    );
  }
}
