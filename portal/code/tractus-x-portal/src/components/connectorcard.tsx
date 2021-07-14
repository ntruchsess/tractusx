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
import { Connector } from '../data/connector';
import { RouteComponentProps, withRouter } from 'react-router';
import { calculateLength } from '../helpers/utils';
import { observable } from 'mobx';
import { Dialog} from '@fluentui/react/lib/Dialog';
import { TextField, PrimaryButton ,DefaultButton} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

interface IProp extends RouteComponentProps {
  conn: Connector, onClick?: Function
}

const steps = ['Allocating hardware resources', 'Setting up containers', 'Starting containers', 'Configuring firewall',
  'Granting system rights', 'Obtaining certificate from DAPS'];

@observer
class ConnectorCard extends React.Component<IProp> {

  connectorDetails = observable({
    connectorName: '',
    connectorDesc: ''
  });

  @observable length = 0;
  @observable isOpenedDialogInput = false;
  @observable isOpenedDiv1 = true;
  @observable isButtonDisabled = true;
  @observable step = 0;
  private timer: NodeJS.Timeout;

  private updateProperty(key, value) {
    this.connectorDetails[key] = value;
    if (key === this.connectorDetails.connectorName) {
      this.length = calculateLength(value);
    }
  }

  private onChange(event) {
    this.isButtonDisabled = false;
    this.updateProperty(event.target.name, event.target.value)
  }

  private onButtonClick() {
    this.step = 0;
    this.isOpenedDiv1 = false;
    this.isButtonDisabled = true;
    this.timer = setInterval(() => this.incrementStep(), 1000);
  }

  private incrementStep() {
    this.step++;
    if (this.step === 6) {
      this.isOpenedDialogInput = false;
    } else if (this.step > 7) {
      this.step = 0;
      this.isOpenedDiv1 = true;
      this.isButtonDisabled = true;
      clearInterval(this.timer);
    }
  }

  private cardClick() {
    if (this.props.conn.id === 'conn1') {
      this.isOpenedDialogInput = true;
    } else if (this.props.conn.id === 'conn3') {
      window.open('https://github.com/International-Data-Spaces-Association/DataspaceConnector', '_blank');
    }
  }

  private doTick(n: number) {
    if (this.step > n) {
      return <div className='br8 w16 h16 bggreen df aic jcc'><Icon className='fs10 fgwhite bold' iconName='Accept' /></div>;
    } else if (this.step === n) {
      return <Icon iconName='More' className='h16 mt4 bold mr2' />;
    } else {
      return <div className='h16 mt2 mr11'>&nbsp;</div>;
    }
  }

  public render() {
    const c = this.props.conn;
    return (
      <div className='h170 w170 m5 br4 bsAppStore bgwhite minw200 maxw200 cpointer' onClick={() => this.cardClick()}>
        <div className='h40 w170 ml20 bold fs14 mt40 '>{c.title}</div>
        <div className='h50 mt40 tal ml15'>
          <div className='fglgreen bold fs18'>{c.actions}</div>
          <div>
            {this.isOpenedDialogInput && <Dialog isOpen={true} modalProps={{ containerClassName: 'minw540' }}>
              <span className='fggrey fs11 ls0 lh14'>Wizard: setup connector</span>
              <h1 className='df fg191'>Add new Connector</h1>
              {this.isOpenedDiv1 ? <div className='' >
                <div className='aic w500 h57'>
                  <TextField id={this.connectorDetails.connectorName} className='bgf5 br4' placeholder='Connector name' maxLength={24} onChange={(ev) => this.onChange(ev)} />
                  <span className='ml470 tac fs12'>{this.length}/24</span>
                </div>
                <div className='aic w500 h57 mt18 bgf5'>
                  <TextField id={this.connectorDetails.connectorDesc} placeholder='Connector Description' className='bgf5 br4' multiline rows={6} />
                </div>
                <div className='aic pt30'>
                  <span>
                    <DefaultButton text='CANCEL' id='cancel' className='b0 bgwhite fggrey' onClick={() => this.isOpenedDialogInput = false} />
                  </span>
                  <span className='ml300'>
                    <PrimaryButton text='NEXT' id='button' className='pt80' disabled={this.isButtonDisabled} onClick={() => this.onButtonClick()} />
                  </span>
                </div>
              </div> :
                <div className='aic w500 h57 br4'>
                  <div>
                    <span className='fs15 semibold'>Please wait while we setting up your environment...</span>
                  </div>
                  <div className='mt10 ml20 fs14 aic'>
                    {steps.map((step, index) => <div key={index} className='mt10 df' >
                      {this.doTick(index)}
                      <span className='fs14 fgblack ml5'>{step}</span>
                    </div>)}
                  </div>
                </div>
              }
            </Dialog>}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConnectorCard);