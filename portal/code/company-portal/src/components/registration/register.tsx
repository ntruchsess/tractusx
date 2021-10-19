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
import RegisterTemplate from './registertemplate';
import { TextField,Checkbox,DefaultButton,PrimaryButton,Link} from '@fluentui/react';
import { observable } from 'mobx';
import { RouteComponentProps,withRouter} from 'react-router-dom';
import {AccountDetail}from '../../data/accountdetail';
import { Icon } from '@fluentui/react/lib/Icon';
import Logo from '../logo';
import { AppState } from '../../stores/appstate';

const passwordCriteriaMsg = ['At least 8 characters - the more characters the better.', 'A mixture of both uppercase and lowercase letters.', 
  'A mixture of letters and numbers.', 'Incusion of at least one special character (e.g. !@#?])'];

@observer
class Registration extends React.Component<RouteComponentProps>{

  @observable registrationdone = false;
  @observable isRegistrationDisabled = true;
  @observable accountDetails = new AccountDetail();
    
  // index:0 -> length, index:1 -> lower and upper case , index:2 -> alphanumaric ,index:3 -> special chars
  private readonly passwordCriteriaCheck: String[] = observable(['', '', '', '']);
  private principles = false;
  private terms = false;
        
  private onFirstnameChange(event) {
    this.accountDetails.firstName = event.target.value;
    this.doButtons();
  }

  private onLastnameChange(event) {
    this.accountDetails.lastName = event.target.value;
    this.doButtons();
  }

  private onEmailAddressChange(event) {
    this.accountDetails.emailAddress = event.target.value;
    AppState.state.email = this.accountDetails.emailAddress;
    this.doButtons();
  }

  private onPasswordChange(event) {
    this.accountDetails.password = event.target.value;
    this.validatePassword();
    this.doButtons();
  }
      
  private doButtons() {
    if (this.validatePassword() && this.accountDetails.firstName !== '' && this.accountDetails.lastName !== '' &&
      this.accountDetails.emailAddress !== '' && this.accountDetails.password !== '' && this.terms && this.principles) {
      this.isRegistrationDisabled = false;
    } else {
      this.isRegistrationDisabled = true;
    }
  }

  private onRegisterClick() {
    this.registrationdone = true;
  }

  private linkClick() {
    this.props.history.push('/verifyoneid');
  }

  private validatePassword() {
    const reg: RegExp[] = [new RegExp('(?=.{8,})'),
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])'),
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'),
    new RegExp('(?=.*[!@#$%^&*])')];

    let ret = true;
    for (let i = 0; i < reg.length; i++) {
      const myreg = reg[i];
      if (myreg.test(this.accountDetails.password)) {
        this.passwordCriteriaCheck[i] = 'pass';
      }
      else {
        ret = false;
        this.passwordCriteriaCheck[i] = 'fail';
      }
    }

    return ret;
  }

  private printPwdCriteria(message: any, index: number) {
    if (this.passwordCriteriaCheck[index] === 'pass') {
      return <div className='fs11 pb8 fggrey'><Icon className='fggreen w10 h2' iconName='Accept' /> {message}</div>;
    } else if (this.passwordCriteriaCheck[index] === 'fail') {
      return <div className='fs11 pb8 fgred'>{message}</div>;
    } else {
      return <div className='fs11 pb8 fggrey'>{message}</div>;
    }
  }

  public render() {
    return (
      <div className='w100pc h100pc df fdc bge1 bgregisterimage ds'>
        <Logo />
        <div className='df mt100'>
          <div className='flex1 df jcc'>
            <RegisterTemplate />
          </div>
          {!this.registrationdone ?
            <div className='df fdc flex2 bgwhite bleft'>
              <div className='mt20 ml20'>
                <span className='fs11 lh14 fggrey '>Step1: Admin Account</span>
                <br />
                <span className='fs24 lh29 fg191 bold pt2'>Create your account</span>
              </div>
              <div className='mt30 ml20'>
                <div className=' bold fs14 pb8'>User information</div>
                <div className='pb6 df mr30'>
                  <TextField placeholder='First name' className='w50pc pr10 b0 br4 h36' required onChange={(ev) => this.onFirstnameChange(ev)} />
                  <TextField placeholder='Last name' className='w50pc pr10 bnone br4 h36' required onChange={(ev) => this.onLastnameChange(ev)} />
                </div>
              </div>
              <div className='mt30 ml20'>
                <div className='bold fs14 pb8'>Login details</div>
                <div className='pb6 df'>
                  <TextField placeholder='Email address' className='w100-40 bnone br4 h36' required onChange={(ev) => this.onEmailAddressChange(ev)} />
                </div>
                <div className='pb6 df'>
                  <TextField placeholder='Password' type='password' required canRevealPassword revealPasswordAriaLabel='Show password'
                    className='w50pc pr10 bnone br4 h36' onChange={(ev) => this.onPasswordChange(ev)} />
                </div>
              </div>
              <div className='mt20 ml20'>
                {passwordCriteriaMsg.map((passwordCriteriaMsg, index) => <div key={index}>
                  {this.printPwdCriteria(passwordCriteriaMsg, index)}
                </div>)}
              </div>
              <div className='mt40 ml20'>
                <div className='pb6 df'>
                  <Checkbox className='fg191 fs14 lh20' label='Yes, I accept the Catena-X terms and conditions.'
                    onChange={(ev, checked) => { this.terms = checked; this.doButtons() }} />
                </div>
                <div className='mt10 pb6 df'>
                  <Checkbox className='fg191 fs14 lh20' label='Yes, I accept the Catena-X principles,service agreements &amp; data regulation.'
                    onChange={(ev, checked) => { this.principles = checked; this.doButtons() }} />
                </div>
              </div>
              <div className='mt80 ml20 mb20'>
                <div className='pb6 df'>
                  <DefaultButton text='CANCEL' id='cancel' className='b0 bgwhite fggrey' onClick={() => this.props.history.push('/')} />
                  <PrimaryButton text='REGISTER' id='button' className='w30pc bold fs14 ml360' disabled={this.isRegistrationDisabled} onClick={() => this.onRegisterClick()} />
                </div>
              </div>
            </div> :
            <div className='df fdc bgwhite bleft flex2'>
              <div className='mt20 ml20'>
                <span className='fs11 lh14 fggrey '>Step1: Admin Account</span>
                <br />
                <span className='fs24 lh29 fg191 bold'>Your account was created</span>
              </div>
              <div className='mt100 ml40 aic'>
                <div className='bold fs74 lh72 pb8 '>Thank you.</div>
                <div className='bold fs24 lh29 pb8 mt20'>Your account has been successfully created.</div>
              </div>
              <div className='mt10 ml40'>
                <div className='fs14 lh20 pb8 fg191 w500'>Please check your inbox. We’ll sent an email to "{this.accountDetails.emailAddress}“
                  to validate your account information.<br /> <br />Follow the instructions described in the email and link your organization.</div>
              </div>
              <div className='mt10 ml40 df fdc'>
                <div className='df jcc'>
                  <img src='/registrationdone.png' alt='logo' className='w500 h300' />
                </div>
                <Link className='mt10 fs14 bold fggrey lh40' onClick={() => this.linkClick()}>OPEN ONEID VERIFICATION</Link>
              </div>
              <div className='ml40'>
              
              </div>
            </div>}
          <div className='w100' />
        </div>
      </div>
    );
  }
}

export default withRouter(Registration);