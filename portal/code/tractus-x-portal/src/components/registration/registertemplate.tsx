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
import { Icon, Link } from '@fluentui/react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

@observer
class RegisterTemplate extends React.Component<RouteComponentProps>{
  public linkClick(): void {
    this.props.history.push('/');
  }

  public render() {
    return (
      <div className='df fdc'>
        <span className='p140 fs74 bold fg191 lh72'>JOIN</span>
        <span className='fs55 bold fg191 lh67'>Catena-X</span>
        <span className='fs24 bold fg191 lh29'>Automotive Network</span>
        <span><p className='fs14 fw600 fg191 lh20'>If you have problems, please <br></br>contact our support.</p></span>
        <span className='h40 aic df pt24'><p className='fs18 bold fg191 lh40'>HELP? CONTACT US.</p></span>
        <span className='h40 aic df pt2'><Link className='fs18 bold fg191 lh40'
          onClick={() => this.linkClick()}><Icon className='h16 w16' iconName='SkypeArrow' /> BACK TO LOGIN </Link></span>
      </div>
    );
  }
}

export default withRouter(RegisterTemplate);
