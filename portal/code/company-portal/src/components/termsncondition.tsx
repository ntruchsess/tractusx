// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { observer } from 'mobx-react';
import { Checkbox, Link } from '@fluentui/react';
import { getConsentForCompanyRoles } from '../helpers/utils';

@observer
export default class Termsncondition extends React.Component {

  public getConsent: any;

  async componentDidMount() {
    try {
      this.getConsent = await getConsentForCompanyRoles(1);
      console.log(this.getConsent);
    } catch {

    }
  }

  
 
    _renderLabelWithLinktnc() {
        return (
          <span>
            Yes, I agree to this{' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
            terms and conditions
            </Link>
          </span>
        );
      }
    
      _renderLabelWithLinkdsr() {
        return (
          <span>
            Yes, I agree to this{' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
            data security regulations
            </Link>
          </span>
        );
      }
    
      _renderLabelWithLinkaptnc() {
        return (
          <span>
            Yes, I agree to this{' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
            terms and conditions
            </Link>
          </span>
        );
      }
    
      _renderLabelWithLinkapdsr() {
        return (
          <span>
            Yes, I agree to this{' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
            data security regulations
            </Link>
          </span>
        );
      }
    
      _renderLabelWithLinkpnsc() {
        return (
          <span>
            Yes, I agree to {' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
            provider and seller conditions
            </Link>
          </span>
        );
      }
    

  public render() {
    return (
        <div className='mb10'>
        <input className='collapse-open' type='checkbox' id='collapse-4' />
        <label className='collapse-btn bgwhite' htmlFor='collapse-4'>
          <div className='fl fs22 dblock pr20 bold'>4</div>
          <div className='df fdc'>
            <span className='fs22 bold'>Terms &amp; Conditions</span>
            <div className='fs14 mt10'>Please check and agree to our terms and conditions. Depending on your selected role, there are different versions.
            </div>
          </div>
        </label>
        <div className='collapse-panel bgwhite'>
          <div className='p20'>
            <div className='pb20 p24'>
              <span className='fs18 bold mt20'>Active Participant Tearms & Condition</span>
              <Checkbox className='mt20' label="Yes, I agree to this"  onRenderLabel={this._renderLabelWithLinktnc}/>
              <Checkbox className='mt20' label="Yes, I agree to this" onRenderLabel={this._renderLabelWithLinkdsr} />
            </div>
            <div className='pb20 p24'>
            <span className='fs18 bold mt30'>App Provider Terms & Conditions</span>
            <Checkbox className='mt20' label="Yes, I agree to this"  onRenderLabel={this._renderLabelWithLinkaptnc}/>
              <Checkbox className='mt20' label="Yes, I agree to this" onRenderLabel={this._renderLabelWithLinkapdsr} />
            <Checkbox className='mt20' label="Yes, I agree to" onRenderLabel={this._renderLabelWithLinkpnsc} />
        </div>
      </div>
    </div>
  </div>
  
    )} 
}