// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { Icon } from '@fluentui/react/lib/Icon';
import {Connectors } from '../stores/connectors';
import  ConnectorCard from './connectorcard';

@observer
export default class SetUpConnector extends React.Component {

  public render() {
    const InfoSolidIcon = () => <Icon iconName='InfoSolid' className='h30 w30 mt4' />;
    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <span className='h19 w748 fs16 lh19 ls016 fgac df ml100'>
          <InfoSolidIcon />   No Connector found. Please choose an option to setup your Connector, or choose a third party service.</span>
        <div className='w100pc'>
          {Connectors.state.categories.map((c, index) => (
            <div key={index} className='ml50 mr50 mb30 w100pc df fdc'>
              <div className='w100-100'>
                <div className='ovx h250 df'>
                  {c.apps.map((a, index) => <ConnectorCard key={index} conn={a} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}