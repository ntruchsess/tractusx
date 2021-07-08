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
import { Icon } from '@fluentui/react/lib/Icon';
import {Connectors } from '../stores/connectors';
import  ConnectorCard from './connectorcard';

@observer
export default class SetUpConnector extends React.Component {

  public render() {
    const InfoSolidIcon = () => <Icon iconName='InfoSolid' className='h30 w30 mt4' />;
    return (
      <div className='w100pc pt18 h100pc df fdc'>
        {!this && <span className='h19 w748 fs16 lh19 ls016 fgac df ml100'>
          <InfoSolidIcon />   No Connector found. Please choose an option to setup your Connector, or choose a third party service.</span>}
        <div className='w100pc mt100'>
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