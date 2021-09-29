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
import { PrimaryButton, DefaultButton } from '@fluentui/react';

@observer
export default class Onboarding extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <div className='ml50 mr50 mt50 bgfe w100-100 df fdc'>
          <span className='fs20 bold mt20'>Welcome to Catena-X</span>
          <span className='fs14 mt30'>Please finish the company onboarding by finishing the following task to actively participate and use all functions in the Catena-X Automotive Network Portal. Most of the tasks can be done parallel.</span>
        </div>
        <div className='ml50 mr50 mt30 bgfe w100-100 df fdc'>
          <div className='collapse-list'>
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
                <div className='pb20 p24'>
                  <div className='fb pb6 df'>
                    <TextField label='Street' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4 pr10 h36' />
                    <TextField label='Street 3' disabled className='w50pc brnone br4 h36' />
                  </div>
                  <div className='fb pb6 df mt20'>
                    <TextField label='House number' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4 pr10 h36' />
                    <TextField label='Add. Information' disabled className='w50pc brnone br4 h36' defaultValue='' />
                  </div>
                </div>
                <div className='pb8 mt10 p24'>
                  <div className='bold fs14 pb8'>Address Information</div>
                  <div className='fb pb6 df'>
                    <TextField className='w50pc pr10' disabled label='Country' defaultValue='' />
                    <TextField className='w50pc pr10' disabled label='Country' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4 pr10 h36' />
                  </div>
                  <div className='fb pb6 df mt10'>
                    <TextField label='Postal code' disabled className='w50pc pr10 brnone br4 h36' defaultValue='' />
                    <TextField label='City' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4  h36' />
                  </div>
                </div>

                <div className='pb8 mt10 p24'>
                  <div className='bold fs14 pb8'>Address Information</div>
                  <div className='fb pb6 df'>
                    <TextField className='w50pc pr10' disabled label='Country' defaultValue='' />
                    <TextField className='w50pc pr10' disabled label='Country' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4 pr10 h36' />
                  </div>
                  <div className='fb pb6 df mt10'>
                    <TextField label='Postal code' disabled className='w50pc pr10 brnone br4 h36' defaultValue='' />
                    <TextField label='City' disabled className='w50pc brnone br4 pr10 h36' defaultValue='' />
                    <TextField label='Street 2' disabled className='w50pc brnone br4  h36' />
                  </div>
                </div>

                <div className='pb8 mt50 p24 pb20 brbt'>
                  <DefaultButton text='REPORT INCORRECT DATA ' />
                  <PrimaryButton text='DATA IS CORRECT' />
                </div>

              </div>
            </div>
            <div className='mb10'>
              <input className='collapse-open' type='checkbox' id='collapse-2' />
              <label className='collapse-btn bgwhite' htmlFor='collapse-2'>
                <div className='fl fs22 dblock pr20 bold'>2</div>
                <div className='df fdc'>
                  <span className='fs22 bold'>Responsibilities &amp; Admin Account</span>
                  <div className='fs14 mt10'>Distribute responsibilities and add admin account for the persons that know the best what need to be done .
                  </div>
                </div>
              </label>
              <div className='collapse-panel bgwhite'>
                <div className='p20'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className='mb10'>
              <input className='collapse-open' type='checkbox' id='collapse-3' />
              <label className='collapse-btn bgwhite' htmlFor='collapse-3'>
                <div className='fl fs22 dblock pr20 bold'>3</div>
                <div className='df fdc'>
                  <span className='fs22 bold'>Catena-X Company Role</span>
                  <div className='fs14 mt10'>You can choose different roles to participate in Catena-X. Don't worry, you can change it later again.</div>
                </div>
              </label>
              <div className='collapse-panel bgwhite'>
                <div className='p20'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className='mb10'>
              <input className='collapse-open' type='checkbox' id='collapse-4' />
              <label className='collapse-btn bgwhite' htmlFor='collapse-4'>
                <div className='fl fs22 dblock pr20 bold'>4</div>
                <div className='df fdc'>
                  <span className='fs22 bold'>Terms &amp; Conditions</span>
                  <div className='fs14 mt10'>Please check and agree to our terms and condition. Depending on your selection role, there are different versions.
                  </div>
                </div>
              </label>
              <div className='collapse-panel bgwhite'>
                <div className='p20'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className='mb10'>
              <input className='collapse-open' type='checkbox' id='collapse-6' />
              <label className='collapse-btn bgwhite' htmlFor='collapse-6'>
                <div className='fl fs22 dblock pr20 bold'>6</div>
                <div className='df fdc'>
                  <span className='fs22 bold'>Certificates</span>
                  <div className='fs14 mt10'>Upload and verify your certificate</div>
                </div>
              </label>
              <div className='collapse-panel bgwhite'>
                <div className='p20'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
