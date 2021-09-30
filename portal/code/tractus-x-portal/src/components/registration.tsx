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
import { PrimaryButton, TextField } from '@fluentui/react';

@observer
export default class Login extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fwrap fdc bgregisterimage aic'>
          <div className='w40pc mt100 df fdc'> 
          <span className='fs60 bold mt20 ml30'>Welcome to Catena-X</span>
          <span className='fs20 bold mt10 ml30'>Automotive network</span>
          <span className='fs14 bold mt30 ml30'>If you have problems, please contact our support</span>
          </div>
          <div className="w40pc bgwhite mt100 br7 df fdc bsPanel">
          <span className='fs20 bold mt20 ml50'>Register to Catena-X</span>
          <span className='fs14 m50'>
                    <TextField placeholder='Enter your Email - Address' className='w100pc br4 pr10 h40' defaultValue='' />
                    <TextField placeholder='One ID' className='w100pc br4 pr10 h40' defaultValue='' />
                    <PrimaryButton className='w60pc br4 pr10 h40 mt20' text='REGISTRATION' />
          </span>
          </div>
      </div>
    )} 
}