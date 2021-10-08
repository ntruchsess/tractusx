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
import { PrimaryButton } from '@fluentui/react';

@observer
export default class Responsibilities extends React.Component {

  public render() {
    return (
        <div className='mb10'>
              <input className='collapse-open' type='checkbox' id='collapse-2' />
              <label className='collapse-btn bgwhite' htmlFor='collapse-2'>
                <div className='fl fs22 dblock pr20 bold'>2</div>
                <div className='df fdc'>
                  <span className='fs22 bold'>Responsibilities &amp; Admin Account</span>
                  <div className='fs14 mt10'>Distribute responsibilities and add admin account for the persons that know the best what needs to be done.
                  </div>
                </div>
              </label>
              <div className='collapse-panel bgwhite'>
                <div className='pb20 p24'>
                  <div className='ml30 fb pb6 df'>
                    <TextField label='Email Address' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
                    <TextField label='User Role' disabled className='w50pc brnone br4 pr10 h36' />
                    <PrimaryButton className='w10pc mt24 br4 h36' text='ADD' />
                  </div>
                </div>
                <div className='ml30 pb8 mt50 p24 pb20 brbt df fdc fdrr'>
                  <PrimaryButton text='SEND INVITE(S)' />
                </div>
              </div>
            </div>
    )} 
}