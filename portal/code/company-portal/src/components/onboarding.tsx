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
import Companydata from './companydata';
import Responsibilities from './responsibilities';
import Companyrole from './companyrole';
import Termsncondition from './termsncondition';
import Identity from './identity';
import { PrimaryButton } from '@fluentui/react';
import { toast } from 'react-toastify';
import UserService from '../helpers/UserService';


@observer
export default class Onboarding extends React.Component {
  componentDidMount(){
   
    const onboarding = {
      companydata: false,
      userRole: false,
      companyrole: false,
      companyterms: false,
      identity: false
  }
    window.localStorage.setItem('onboarding', JSON.stringify(onboarding));
  }
  private onSubmitClick(){
    var realm = UserService.realm;
    const token = UserService.getToken();
    var u = `${process.env.REACT_APP_ONBOARDING_URL}/api/onboarding/company/${realm}/finishOnboarding`;
  
    fetch(u, { method: 'PUT', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((response) => {
        if (response.ok) {
          toast.success('Data Saved');
        }
        else throw Error();
      }

      ).catch((error) => {
        toast.error('Unable to save data')
      });
    }

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <div className='ml50 mr50 mt50 bgfe w100-100 df fdc'>
          <span className='fs20 bold mt20'>Welcome to Catena-X</span>
          <span className='fs14 mt30'>Please finish the company onboarding by finishing the following tasks to actively participate and use all functions in the Catena-X Automotive Network Portal. Most of the tasks can be done in parallel.</span>
        </div>
        <div className='ml50 mr50 mt30 bgfe w100-100 df fdc'>
          <div className='collapse-list'>
            <Companydata />
            <Responsibilities />
            <Companyrole />
            <Termsncondition />
            <Identity />
            <div className='pb8 mt50 p24 pb20 brbt df fdc fdrr'>
                   <PrimaryButton text='SAVE' onClick={()=>this.onSubmitClick()}/>
                </div>
          </div>
        </div >
      </div >
    );
  }
}
