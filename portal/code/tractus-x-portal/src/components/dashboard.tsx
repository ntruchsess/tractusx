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
import { AppState } from '../stores/appstate';
import AppCard from './appcard';
import { Icon } from '@fluentui/react';
import { Link } from 'react-router-dom';

@observer
export default class Dashboard extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        {AppState.state.isAdmin && <div className='ml50 mr50 mt50 bgwhite w100-100 df fdc'>
          <span className='fs20 bold ml50 mt20'>Welcome to Catena-X</span>
          <span className='fs20 bold ml50'>Lets get started!</span>
          <span className='fs14 ml50 mt30'>Please finish the following tasks to actively participate in the Catena-X Automotive Network.</span>
          <div className='df ml50 mt50 aic'>
            <Icon className='fgblack fs14 bold mr5' iconName='Forward' />
            <span className='fs14'>Set up your </span>
            <Link className='fglgreen fs14 bold mr5 tdn ml5' to='/home/myconnectors?tab=3'>CONNECTOR</Link>
          </div>
          <div className='df ml50 mt10 mb50 aic'>
            <Icon className='fgblack fs14 bold mr5' iconName='Forward' />
            <span className='fs14'>Install your first app. Find &amp; browse the</span>
            <Link className='fglgreen fs14 bold mr5 tdn ml5' to='/home/appstore'>APP STORE</Link>
          </div>
        </div>}
        <div className='df fdc mt50'>
          {AppState.state.dashboardCategories.map((c, index) => (
            <div key={index} className='ml50 mr50 mb30 w100pc df fdc'>
              <span className='bold fs14 ml10'>{c.text}</span>
              <div className='w100-100'>
                <div className='ovx h250 df'>
                  {c.apps.map((a, idx) => <AppCard key={idx} app={a} buttonText={index === 0 ? 'OPEN' : undefined} hideUsage={index === 0} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='df ml50 mt10 mb50 aic'>
          <Icon className='fgblack fs14 bold mr5' iconName='Forward' />
          <span className='fs14'>Find more apps in the</span>
          <Link className='fglgreen fs14 bold mr5 tdn ml5' to='/home/appstore'>APP STORE</Link>
        </div>
      </div>
    );
  }
}
