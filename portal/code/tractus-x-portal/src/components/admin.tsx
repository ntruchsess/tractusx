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
import { Link } from 'react-router-dom';

@observer
export default class Admin extends React.Component {

    public render() {
        return (
            <div className='m16 bgpanel bgpanel br4 p24'>
                <h1 className="fs24 bold mb20">Administration</h1>
                <div className='df fwrap'>

                    <Link className="m5 p20 bgpanel flex25 br4 bsdatacatalog tdn h40pc" to={{
                        pathname: ``
                    }}>
                        <h1 className='fs16 fg191 bold mb20 mt50pc minh40'>Company Data Management</h1>
                        <div className='fglgreen bold fs14'>Draft</div>
                    </Link>
                    <Link className="m5 p20 bgpanel flex25 br4 bsdatacatalog tdn h40pc" to={{
                        pathname: ``
                    }}>
                        <h1 className='fs16 fg191 bold mb20 mt50pc minh40'>User Management</h1>
                        <div className='fglgreen bold fs14'>Draft</div>

                    </Link>
                    <Link className="m5 p20 bgpanel flex25 br4 bsdatacatalog tdn h40pc" to={{
                        pathname: ``
                    }}>
                        <h1 className='fs16 fg191 bold mb20 mt50pc minh40'>Business Partner Management</h1>
                        <div className='fglgreen bold fs14'>Draft</div>
                    </Link>


                </div>
            </div>
        )
    }
}