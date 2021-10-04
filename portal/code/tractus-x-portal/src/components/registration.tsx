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
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.minimal.css';

@observer
export default class Login extends React.Component {

  @observable private email: string = "";
  @observable private oneId: string = "CAXLZJVJEBYWYYZZ";

  private registrationButtonClick() {
    console.log("register");

    var u = 'http://cxonbiardoing.azurewebsites.net/api/onboarding'

    var data =
    {
      "oneId": this.oneId,
      "eMail": this.email
    }

    if (this.email === "" || this.oneId === "") {
      toast.error('Email or OneId empty.');
      return;
    }


    console.log(data);

    fetch(u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then((response) => {
        if (response.ok) {
          toast.success('Onboarding for company id: ' + this.oneId + ' started.');
        }
        else throw Error();
      }

      ).catch((error) => {
        toast.error('Onboarding for company id: ' + this.oneId + ' failed. Company is already registered.')
      });

  }


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
            <TextField placeholder='Enter  Email - Address' className='w100pc br4 pr10 h40' value={this.email} onChange={(ev, val) => this.email = val} />
            <TextField placeholder='One ID' className='w100pc br4 pr10 h40' value={this.oneId} onChange={(ev, val) => this.oneId = val} />
            <PrimaryButton className='w60pc br4 pr10 h40 mt20' text='REGISTRATION' onClick={() => this.registrationButtonClick()} />
          </span>
        </div>
        <ToastContainer />
      </div>
    )
  }
}