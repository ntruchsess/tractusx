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
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import Header from './cat-header';
import Footer from './footer';


@observer
export default class Landing extends React.Component {
    public render() {

        return (
            <Container>
                <Header href={window.location.href} />
                <Row>
                    <Col>
                        <div className="mx-auto col-9 container-body">
                            <h4>Welcome to Catena-X - The Automotive Network</h4>
                            <h6 className='col-8'>Please finish the following application form to complete the registration of your company for Catena-X</h6>
                            <Row className='content'>
                                <Col>
                                    <div className='content-items'>
                                        <BsCheckCircle color='#0F71CB' className='check-circle' />The registration form consists of 5 steps and will take approximately 5-10 minutes of your time
                                    </div>
                                    <div className='content-items'>
                                        <BsCheckCircle color='#0F71CB' className='check-circle' /> You will need the commercial register form of your company. If you want to invite colleagues from your company, you need their email addresses
                                    </div>
                                    <div className='content-items'>
                                        <BsCheckCircle color='#0F71CB' className='check-circle' />You can pause the registration at any time. Re-connect to your registration status by using the login data which you received via e-mail.
                                    </div>
                                    <Button className='button' size="lg">
                                        Lets get started
                                    </Button>{' '}
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center'>
                                    <img src='/ID_Card.png' alt='' />
                                </Col>
                            </Row>
                        </div>
                        <div className="mx-auto w-75 d-flex align-items-center justify-content-center info">
                            <span className=''>More information in our <a href=''>help section</a>.
                            </span>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}