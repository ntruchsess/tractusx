// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { PrimaryButton, Dropdown, IDropdownOption, TextField, SearchBox, Checkbox, Icon, ActionButton } from '@fluentui/react';


@observer
export default class MyDataOverview extends React.Component {

  public render() {

    const gridData: any[] = [
      {
        fileName: 'Data upload file',
        category: 'Traceability',
        type: 'upload',
        synced: 'NA',
        items: '21.578',
        size: '8.9MB',
        uploadData: 'today',
        user: 'Test User 1',
        typeIcon: '',
        syncIcon: ''
      },
      {
        fileName: 'Purchased data file set',
        category: 'Sustainability',
        type: 'sustain',
        synced: 'Yes',
        items: '21.578',
        size: '10.9MB',
        uploadData: '12.05.2021',
        user: 'Test User 1',
        typeIcon: '',
        syncIcon: ''
      },
      {
        fileName: 'Data file name 14575',
        category: 'Traceability',
        type: 'upload',
        synced: 'Yes',
        items: '7.013',
        size: '5.1MB',
        uploadData: '05.02.2021',
        user: 'Test User 2',
        typeIcon: '',
        syncIcon: ''
      },
      {
        fileName: 'Data file name 14575',
        category: 'Traceability',
        type: 'upload',
        synced: 'No',
        items: '',
        size: '',
        uploadData: '05.02.2021',
        user: 'Test User 2',
        typeIcon: '',
        syncIcon: ''
      },
      {
        fileName: 'File name',
        category: 'Traceability',
        type: 'upload',
        synced: 'Yes',
        items: '6.987',
        size: '4.9MB',
        uploadData: '31.10.2020',
        user: 'Test User 1',
        typeIcon: '',
        syncIcon: ''
      },
      {
        fileName: 'New parts to upload for MT...',
        category: 'Traceability',
        type: 'upload',
        synced: 'NA',
        items: '21.578',
        size: '8.9MB',
        uploadData: '22.10.2020',
        user: 'Test User 1',
        typeIcon: '',
        syncIcon: ''
      }
    ]

    gridData.forEach(element => {
      if(element.type === "upload"){
        element.typeIcon = <Icon className="mr5 mt7 flex1" iconName="Upload" />
      }
      else{
        element.typeIcon = <Icon className='fs14 mr5 mt7 flex1' iconName="AllCurrency" />
      }
      if(element.synced === "Yes"){
        element.syncIcon = <Icon className="pl5 mt7 flex1 fglgreen" iconName="CompletedSolid"/>
      }
      else if(element.synced === "No"){
        element.syncIcon = <Icon className="pl5 mt7 flex1 fgyellow" iconName="Warning"/>
      }
      else if(element.synced === "NA"){
        element.syncIcon = <Icon className="pl5 mt7 flex1" iconName="More" />
      }
    });

    return (
      <div className="w100pc bgpanel3 h100pc">
        <div className='w100pc bgpanel3 df fdc'>
        <div className='df bgpanel3 mb15 mt20'>
            <span className='fs16 bold ml30 mr5 flex3'>Data Overview</span>
            <span className='fs14 fggrey mr5 flex1'>sort by  <text className="bold">upload date</text></span>
            <span className='fs14 fggrey mr5 flex1'>filter  <text className="bold">none</text></span>
            <span className='fs14 fggrey flex1'><SearchBox placeholder="Search"></SearchBox></span>
          </div>
        </div>
        <div className='w100pc bgpanel3 h100pc df fdc'>
          <div className='df mb24'>
            <Checkbox className='fs14 fggrey ml30 mr5 flex3' label="file name" />
            <span className='fs14 fggrey mr5 flex1'>category</span>
            <span className='fs14 fggrey mr5 flex1'>type</span>
            <span className='fs14 fggrey mr5 flex1'>synced</span>
            <span className='fs14 fggrey mr5 flex1'>items</span>
            <span className='fs14 fggrey mr5 flex1'>size</span>
            <span className='fs14 fggrey mr5 flex1'>upload data</span>
            <span className='fs14 fggrey mr5 flex1'>user</span>
          </div>
          {gridData.map((c, index) => (
            <div key={index} className='df bgwhite h36 mb5'>
              <span className='fs14 bold ml10 mr5 ml30 mt7 flex3 minw100'>{c.fileName}</span>
              <span className='fs14 mr5 mt7 flex1'>{c.category}</span>
              {c.typeIcon}
              {c.syncIcon}
              <span className='fs14 mt7 pl5 flex1'>{c.items}</span>
              <span className='fs14 mt7 pl5 flex1'>{c.size}</span>
              <span className='fs14 mt7 pl5 flex1'>{c.uploadData}</span>
              <span className='fs14 mt7 pl5 flex1'>{c.user}</span>
              <Icon className="mt7" iconName="MoreVertical" />
            </div>
          ))}
          <div className='pb12' />
          <div className='df bgpanel3 h36 mb5'>
            <Icon className="bold mr10 mt12" iconName="Forward" />
            <span className="bold">Find more Data sets in the  
            <ActionButton className='fglgreen fs16 bold mr5' text='DATA CATALOG' />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
