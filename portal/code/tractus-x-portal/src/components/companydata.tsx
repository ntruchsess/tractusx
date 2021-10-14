// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { observer } from 'mobx-react';
import { TextField } from '@fluentui/react';
import { PrimaryButton, DefaultButton} from '@fluentui/react';

@observer
export default class Companydata extends React.Component {

  public render() {
    return (
        <div className='mb10'>
        <input className='collapse-open' type='checkbox' id='collapse-1' />
        <label className='collapse-btn bgwhite' htmlFor='collapse-1'>
          <div className='fl fs22 dblock pr20 bold fggreen'>1</div>
          <div className='df fdc'>
            <span className='fs22 bold fggreen'>Verify Your Company Data</span>
            <div className='fs14 mt10'>Check your company data and verify.</div>
          </div>
        </label>
        <div className='collapse-panel bgwhite'>
          <div className='ml30 pb20 p24'>
            <div className='fb pb6 df'>
              <TextField label='OneID' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
              <TextField label='Organization name' disabled className='w50pc brnone br4 pr10 h36' />
              <TextField label='contact language' disabled className='w50pc brnone br4 h36' />
            </div>
          </div>
          <div className='ml30 pb8 mt10 p24'>
            <div className='bold fs14 pb8'>Organization names</div>
            <div className='fb pb6 df'>
              <TextField className='w50pc pr10' disabled label='Registered name' defaultValue='' />
              <TextField className='w50pc pr10' disabled label='local name' defaultValue='' />
              <TextField label='international name' disabled className='w50pc brnone br4 pr10 h36' />
            </div>
            <div className='fb pb6 df mt10'>
              <TextField label='transliterated Name' disabled className='w50pc pr10 brnone br4 h36' defaultValue='' />
              <TextField label='DBA name' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
              <TextField label='VAT registered name' disabled className='w50pc brnone br4  h36' />
            </div>
          </div>

          <div className='ml30 pb8 mt10 p24'>
            <div className='bold fs14 pb8'>Organization identifiers</div>
            <div className='fb pb6 df'>
              <TextField className='w50pc pr10' disabled label='External Business Partner Identifier' defaultValue='' />
              <TextField className='w50pc pr10' disabled label='issuer' defaultValue='' />
            </div>
            <div className='fb pb6 df mt10'>
              <TextField label='Type of Business Partner Identifier' disabled className='w50pc pr10 brnone br4 h36' defaultValue='' />
              <TextField label='Identification number' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
            </div>
          </div>

          <div className='ml30 pb8 mt10 p24'>
            <div className='bold fs14 pb8'>Business Status</div>
            <div className='fb pb6 df'>
              <TextField className='w50pc pr10' disabled label='State of active/operation' defaultValue='' />
              <TextField className='w50pc pr10' disabled label='Valid from' defaultValue='' />
              <TextField className='w50pc pr10' disabled label='Valid until' defaultValue='' />
            </div>
          </div>

          <div className='ml30 pb8 mt50 p24 pb20 brbt df fdc fdrr'>
            <PrimaryButton text='DATA IS CORRECT' className='ml30' />
            <DefaultButton text='REPORT INCORRECT DATA' />
          </div>

        </div>
      </div>
    )} 
}