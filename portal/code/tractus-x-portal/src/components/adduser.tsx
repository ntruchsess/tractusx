// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { PrimaryButton, Dropdown, IDropdownOption, TextField, SearchBox, ActionButton } from '@fluentui/react';


@observer
export default class AddUser extends React.Component {

  public render() {

    const statusOptions: IDropdownOption[] = [
      { key: 'active', text: 'Active' },
      { key: 'inactive', text: 'InActive' }
    ];


    const gridData: any[] = [
      {
        email: 'shachipandey@microsoft.com',
        role: 'Standard User',
        team: 'procurement',
        status: 'pending',
        statusColor: ''
      },
      {
        email: 'v-srputta@microsoft.com',
        role: 'admin',
        team: '-',
        status: 'active',
        statusColor: ''
      }
    ]

    gridData.forEach(element => {
      if (element.status === 'active') {
        element.statusColor = <span className='dot mt12 bggraphgreen' />
      }
      else if (element.status === 'pending') {
        element.statusColor = <span className='dot mt12 bggraphyellow' />
      }
    });

    return (
      <div className='w100pc h100pc df fdc'>
        <div className='w100-60 bgwhite df fdc ml30 mt30'>
          <span className='fs20 bold ml30 mt20'>Add new user</span>
          <span className='fs14 pb20 ml30 mt10'>
            To add a new user, please enter the following data,
            <text className='bold fglgreen ml5'>UPLOAD CSV FILE </text>
            or integrate your organization's
            <text className='bold fglgreen ml5'>IDENTITY PROVIDER</text>
          </span>
          <div className='pb8 df fdc'>
            <div className='pb6 ml30 df w100-60'>
              <TextField placeholder='Email address' disabled className='flex2 br0 br4 pr10 h36' />
              <Dropdown className='pr10 flex1' disabled placeholder='Role' options={statusOptions} />
              <Dropdown className='flex1' disabled placeholder='Team' options={statusOptions} />
            </div>
            <div className='df w100-310'>
              <ActionButton className='fgblack bold fs17 ml30 minw300' text='ADD ANOTHER USER' iconProps={{ iconName: 'Add', className: 'fgblack' }} />
              <div className='flex1'/>
              <PrimaryButton className='fs14 bold ml75pc mb20 minw200' text='SEND INVITE' />
            </div>
          </div>
        </div>
        <div className='pb5pc' />
        <div className='w100pc bgef h100pc df fdc ml30'>
          <div className='df bgef mb15 mt20 w100-60'>
            <span className='fs16 bold ml10 mr5 flex3'>User management</span>
            <span className='fs14 fggrey mr5 flex1'>Sort by:  <text className='bold'>email address</text></span>
            <span className='fs14 fggrey mr5 flex1'>Filter:  <text className='bold'>none</text></span>
            <span className='fs14 fggrey flex1'><SearchBox className='bcwhite' placeholder='Search' /></span>
          </div>
          <div className='df mb5 w100-60'>
            <span className='fs14 fggrey ml10 mr5 flex3'>Email address</span>
            <span className='fs14 fggrey mr5 flex1'>Role</span>
            <span className='fs14 fggrey mr5 flex1'>Team</span>
            <span className='fs14 fggrey flex1'>Status</span>
          </div>
          {gridData.map((c, index) => (
            <div key={index} className='df bgwhite h36 mb5 w100-60'>
              <span className='fs14 bold mr5 ml10 mt7 flex3 minw100'>{c.email}</span>
              <span className='fs14 mr5 mt7 flex1'>{c.role}</span>
              <span className='fs14 mr5 mt7 flex1'>{c.team}</span>
              {c.statusColor}<span className='fs14 mt7 pl5 flex1'>{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
