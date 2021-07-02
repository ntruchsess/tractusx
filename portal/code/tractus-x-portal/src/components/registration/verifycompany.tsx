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

@observer
export default class VerifyCompany extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc bge1 ds bgregisterimage'>
        <div className='w150 h66 df aic'>
          <img src='/logo.png' alt='logo' />
          <span className='fs22 bold'>Catena-X</span>
        </div>
        <div className='df mt100'>
          <div className='flex1 df jcc'>
            <RegisterTemplate />
          </div>
          <div className='df fdc bgwhite bleft flex2'>
            Verification stuff will come here.
          </div>
          <div className='w100' />
        </div>
      </div>
    );
  }
}
