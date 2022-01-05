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
import { Row, Col } from 'react-bootstrap';

@observer
export default class Header extends React.Component {
    public render() {
        return (
            <Row className='header-container'>
                <Col>
                    <div className='logo'>
                        <img src='/logo_cx.svg' alt='logo' />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex flex-row-reverse profile'>
                        <div className='profile-lang'><a href='/profile'>EN</a></div>
                        <div className='profile-lang lang-sel'><a href='/help'>DE</a></div>
                        <div className='profile-link partion'></div>
                        <div className='profile-link user'><span className='user-icon'></span>
                        </div>
                        <div className='profile-link'><a href='/help'>Help</a></div>
                    </div>
                </Col>
            </Row>
        );
    }
}