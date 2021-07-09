// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { observer } from 'mobx-react';
import { PrimaryButton, Dropdown, IDropdownOption, TextField, SearchBox, ActionButton } from '@fluentui/react';
import adalContext from '../helpers/adalConfig';
import User from '../data/user';
import { observable } from 'mobx';


@observer
export default class AddUser extends React.Component {
  @observable private users: User[] = [];

  async componentDidMount() {
    this.users = await this.readPeople();
  }
  
  public readPeople(searchText?: string): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      adalContext.acquireToken('https://graph.microsoft.com').then((token) => {
        const query = searchText ? `?$filter=startswith(displayName, '${searchText}')&$top=25` : '';
        const u = `https://graph.microsoft.com/v1.0/users${query}`;
        fetch(u, { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
          .then((val) => val.json().then((data) => {
            const users: User[] = [];
            for (const user of data.value) {
              const usr = new User();
              Object.assign(usr, user);
              users.push(usr);
            }
            resolve(users);
          }).catch((error) => {
            console.log(error.message);
            reject(error.message);
          }))
      });
    });
  
    return promise;
  }
  
  
  public render() {

    const statusOptions: IDropdownOption[] = [
      { key: 'active', text: 'Active' },
      { key: 'inactive', text: 'InActive' }
    ];

    return (
      <div className='w100pc h100pc df fdc'>
        <div className='w100-60 bgwhite df fdc ml30 mt30'>
          <span className='fs20 bold ml30 mt20'>Add new user</span>
          <span className='fs14 pb20 ml30 mt10'>
            To add a new user, please enter the following data,
            <span className='bold fglgreen ml5'>UPLOAD CSV FILE </span>
            or integrate your organization's
            <span className='bold fglgreen ml5'>IDENTITY PROVIDER</span>
          </span>
          <div className='pb8 df fdc'>
            <div className='pb6 ml30 df w100-60'>
              <TextField placeholder='Email address' disabled className='flex2 br0 br4 pr10 h36' />
              <Dropdown className='pr10 flex1' disabled placeholder='Role' options={statusOptions} />
              <Dropdown className='flex1' disabled placeholder='Team' options={statusOptions} />
            </div>
            <div className='df w100-30'>
              <ActionButton className='fgblack bold fs17 ml30 minw300' text='ADD ANOTHER USER' iconProps={{ iconName: 'Add', className: 'fgblack' }} />
              <div className='flex1' />
              <PrimaryButton className='fs14 bold mb20 minw200' text='SEND INVITE' />
            </div>
          </div>
        </div>
        <div className='pb5pc' />
        <div className='w100pc bgf5 h100pc df fdc ml30'>
          <div className='df bgf5 mb15 mt20 w100-60'>
            <span className='fs16 bold ml10 mr5 flex3'>User management</span>
            <span className='fs14 fggrey mr5 flex1'>Sort by:  <span className='bold'>email address</span></span>
            <span className='fs14 fggrey mr5 flex1'>Filter:  <span className='bold'>none</span></span>
            <span className='fs14 fggrey flex1'><SearchBox className='bcwhite' placeholder='Search' /></span>
          </div>
          <div className='df mb5 w100-60'>
            <span className='fs14 fggrey ml10 mr5 flex3'>Email address</span>
            <span className='fs14 fggrey mr5 flex2'>Full Name</span>
            <span className='fs14 fggrey mr5 flex1'>Company</span>
            <span className='fs14 fggrey flex1'>Status</span>
          </div>
          {this.users.map((c, index) => (
            <div key={index} className='df bgwhite h36 mb5 w100-60'>
              <span className='fs14 bold mr5 ml10 mt7 flex3 minw100'>{c.mail || c.userPrincipalName}</span>
              <span className='fs14 mr5 mt7 flex2'>{c.displayName}</span>
              <span className='fs14 mr5 mt7 flex1'>{adalContext.getDomain(c.mail || c.userPrincipalName)}</span>
              <div className='flex1 df'>
                <span className='dot mt12 bggraphgreen' />
                <span className='fs14 mt7 pl5 flex1'>Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
