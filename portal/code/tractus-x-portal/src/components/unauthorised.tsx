// Copyright (c) 2021 Microsoft, BMW, Catena-X
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
import '../styles/unauthorised.css';

class UnauthorisedPage extends React.Component {

    public render() {
        return (
            <div className="wrapper">
                <img src='/Catena-X_Logo_mit_Zusatz_2021.svg' alt='logo' />
                <div className="pageBody">
                    <div className="infoBackground">
                        <div className="infoContent">
                            <div>
                                <h1>Access Denied</h1>
                                <span>You do not have the required access for this service.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UnauthorisedPage;
