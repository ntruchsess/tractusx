// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';
import { PrimaryButton } from '@fluentui/react';
import { AppState } from '../stores/appstate';
import AppCard from './appcard';
import { RouteComponentProps, withRouter } from 'react-router';
import { Application } from '../data/application';

const categories = ['Most Popular', 'Top 10 Downloads', 'Best Rated'];

@observer
class AppStore extends React.Component<RouteComponentProps> {

  private cardClick(a: Application) {
    this.props.history.push('/home/appdetail');
  }

  public render() {

    return (
      <div className='w100pc bgef'>
          <div className='ml50 mr50 mt50 bgimage w100-100 df fdc br10 flex1 mb30'>
            <span className='fs20 bold ml50 pb5 mt20pc tac'>Alliance for secure and standardized data exchange</span>
            <span className='tac fs14 ml50'>We share the vision of continous data exchange for all participants <br />
              in the automotive value chain. We can only achieve this goal together.<br />
              That's what Catena-X is for.
            </span>
            <span className='tac pt18 ml50'>
              <PrimaryButton text='TRY OUT NOW' />
            </span>
            <span className='tac pt5 fgb5 fs10 ml50'>Test our FREE applications</span>
          </div>

          {categories.map((c, index) => (
            <div key={index} className='ml50 mr50 mb30 w100pc df fdc bgef'>
              <span className='bold fs14 ml10'>{c}</span>
              <div className='w100-100'>
                <div className='ovx h250 df'>
                  {AppState.state.apps.map((a, index) => <AppCard key={index} app={a} onClick={() => this.cardClick(a)} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
    );
  }
}

export default withRouter(AppStore);
