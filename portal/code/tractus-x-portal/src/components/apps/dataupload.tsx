// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

import * as React from 'react';
import { observer } from 'mobx-react';
import Header from '../header';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ActionButton, Icon, SearchBox } from '@fluentui/react';
import { AppState } from '../../stores/appstate';
import AppCard from '../appcard';
import { Application } from '../../data/application';

@observer
class DataUpload extends React.Component<RouteComponentProps> {

  private backClick(): void {
    if (this.props.history.length > 1) {
      this.props.history.goBack();
    } else {
      this.props.history.push('/home/dashboard');
    }
  }

  appClick(a: Application) {
    if (a.title === 'Material Traceability') {
      this.props.history.replace('/dataupload2');
    }
  }

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <Header href={window.location.href} hidePivot appTitle='Data Upload Appplication' />
        <div className='h1 bgde w100pc' />
        <SearchBox className='ml250 bcwhite' placeholder='Search' underlined={true} />
        <div className='bgf5 df fdc flex1'>
          <div className='ml250 mt20 mr50 mb30 w100-200 df fdc'>
            <div className='fgblack fs15 fw600 tdn ml5 df mt10 mb20 aic cpointer' onClick={() => this.backClick()}>
              <Icon className='fgblack fs20 mt2 mr7' iconName='SkypeArrow' />
              BACK
            </div>
            <div className='df aic w100-100'>
              <span className='bold fs14 ml10'>My connected apps</span>
              <div className='flex1' />
              <ActionButton className='fglgreen fs14 bold mr5' iconProps={{ iconName: 'Add', className: 'fglgreen' }} text='CREATE NEW CONNECTION' />
            </div>
            <div className='w100-100'>
              <div className='ovx h250 df'>
                {AppState.state.connectedApps.map((a, index) => <AppCard key={index} app={a} upload onClick={() => this.appClick(a)}/>)}
              </div>
            </div>
          </div>
          <div className='df ml250 mt10 mb50 aic'>
            <Icon className='fgblack fs14 bold mr5' iconName='Forward' />
            <span className='fs14'>Find more apps in the</span>
            <div className='dib fglgreen bold fs14 ml5'>APP STORE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DataUpload);
