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
import { observable } from 'mobx'
import { observer } from 'mobx-react';
import { TextField } from '@fluentui/react';
import { PrimaryButton, IDropdownOption, Dropdown, Icon } from '@fluentui/react';
import { ToastContainer, toast } from 'react-toastify';

const options: IDropdownOption[] = [
  { key: 'admin', text: 'IT Administrator' },
  { key: 'legal', text: 'Legal' },
  { key: 'signinmanager', text: 'Signin Manager' }]

interface IUserResponsibilities{
  id:number,
  userRole:string,
  eMail:string
}



@observer
export default class Responsibilities extends React.Component {
  @observable private email: string = "";
  @observable private userRole: any = "admin";
  @observable private newarray: IUserResponsibilities[] = [];
  
  constructor(props) {
    super(props);
    this.state = { userRole: ''};
  }

  // static newarray = [];
  private addButtonClick() {
    if (this.email === "" || this.userRole === "") {
      toast.error('Email or User Role empty.');
      return;
    }
    var data =
    {
      "id": Math.floor(Math.random() * 100),
      "userRole": this.userRole,
      "eMail": this.email
    }
    this.newarray.push(data);
    this.email='';
    this.userRole='admin';
  }

  private removeUser(id: number) {
        this.newarray = this.newarray.filter(x => x.id !== id);
  }

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
                    <TextField label='Email Address' className='w50pc brnone br4 pr10 h36' value={this.email} onChange={(ev, val) => this.email = val} />
                    <Dropdown placeholder="User Role" label="User Role" options={options} className='w50pc brnone br4 pr10 h36' onChange={(ev, val) => this.userRole = val.key} selectedKey={this.userRole} />
                    <PrimaryButton className='w10pc mt24 br4 h36' text='ADD'  onClick={() => this.addButtonClick()}/>
                  </div>
                  <div className='ml30 mt10 df'>
                 {this.newarray.map(d => {
                      return ( <div key={d.id} className='bgcda br15 pl10 pr10 pt3 pb3 mr15'> <Icon className='fgblack fs14 bold mr5' iconName='mail' />
                      {d.eMail} ({d.userRole}) <Icon className='fgblack fs14 bold mr5' iconName='BoxMultiplySolid' onClick={() => this.removeUser(d.id)}/> </div>)
                    })
                    }
                  </div>
                </div>
                <div className='ml30 pb8 mt50 p24 pb20 brbt df fdc fdrr'>
                  <PrimaryButton text='SEND INVITE(S)' />
                </div>
              </div>
              <ToastContainer />
            </div>
    )} 
}