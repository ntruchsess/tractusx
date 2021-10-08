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
import { Checkbox } from '@fluentui/react';

@observer
export default class Identity extends React.Component {

  public render() {
    return (
        <div className='mb10'>
        <input className='collapse-open' type='checkbox' id='collapse-5' />
        <label className='collapse-btn bgwhite' htmlFor='collapse-5'>
          <div className='fl fs22 dblock pr20 bold'>5</div>
          <div className='df fdc'>
            <span className='fs22 bold'>Identity Provider</span>
            <div className='fs14 mt10'>Use Catena-X own IDP or set up and integrate your own IDP
            </div>
          </div>
        </label>
        <div className='collapse-panel bgwhite'>
          <div className='p20'>
          <div className='pb20 p24'>
                <span className='fs18 bold mt30'>App Provider Terms & Conditions</span>
                <Checkbox className='mt20' label="Catena-X IDP" />
                  <Checkbox className='mt20' label="Own IDP" />
            </div>
          </div>
        </div>
      </div>
     
    )} 
}