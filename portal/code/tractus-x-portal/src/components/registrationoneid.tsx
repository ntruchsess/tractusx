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
import Logo from './logo';
import 'react-toastify/dist/ReactToastify.css';
import UserService from "../helpers/UserService";
import { Spinner, SpinnerSize } from '@fluentui/react';

@observer
export default class Registrationoneid extends React.Component {



  @observable private email: string = "";
  @observable private firstname: string = "";
  @observable private lastname: string = "";
  @observable private companyname: string = "";
  @observable private loading: boolean = false;

  private registrationButtonClick() {

    this.loading = true;
    var u = `${process.env.REACT_APP_INVITE_ENDPOINT}/api/invitation`

    var data =
    {
      "userName": this.email,
      "firstName": this.firstname,
      "lastName": this.lastname,
      "email": this.email,
      "organisationName": this.companyname
    }

    if (this.email === "" || this.firstname === "" || this.lastname === "" || this.companyname === "") {
      toast.error('Mandatory fields not filled. Please fill out all fields.');
      this.loading = false;
      return;
    }


    fetch(u, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${UserService.getToken()}` }, body: JSON.stringify(data) })
      .then((response) => {
        if (response.ok) {
          toast.success(`Onboarding for company ${this.companyname} started`);
        }
        else throw Error();
      }

      ).catch((error) => {
        toast.error(`Onboarding for company ${this.companyname} failed`)
      }).finally(()=>{
        this.loading = false;
    });

  }


  public render() {
    return (

      <div className='w100pc h100pc df fdc bge1 bgregisterimage ds'>
        <Logo />
        <div className='df margin-auto mw800'>

          <div className='df fdc flex1 aic'>
            <div className="bgwhite w70pc br7 bsdatacatalog">
            <div className='m40 aic'>
              <span className='fs20 bold mt20'>Invite a Business Partner</span>
            </div>
            <div className='mr40 ml40 aic'>
              <TextField placeholder='Enter  Email - Address' className='w100pc br4 h40' value={this.email} onChange={(ev, val) => this.email = val} />
              <TextField placeholder='First Name' className='w100pc br4 h40 mt10' value={this.firstname} onChange={(ev, val) => this.firstname = val} />
              <TextField placeholder='Last Name' className='w100pc br4 h40 mt10' value={this.lastname} onChange={(ev, val) => this.lastname = val} />
              <TextField placeholder='Company Name' className='w100pc br4 h40 mt10' value={this.companyname} onChange={(ev, val) => this.companyname = val} />
              <PrimaryButton className='w100pc br4 pr10 h40 mt20' disabled={this.loading} onClick={() => this.registrationButtonClick()} >
                {
                  this.loading ? <><Spinner size={SpinnerSize.medium} className={"mr20"} />SENDING...</> : "INVITE"
                }
              </PrimaryButton>
            </div>
            <div className='m40 df fdc'>

            </div>
            <div className='ml40'>
              </div>

            </div>
          </div>
          <div className='w100' />
        </div>
        <ToastContainer />
      </div>
    )
  }
}
