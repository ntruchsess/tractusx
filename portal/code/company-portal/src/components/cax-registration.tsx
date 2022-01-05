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
export default class RegistrationCax extends React.Component {
    public render() {

        return (
            <Container>
                <Header />
                <Row>
                    <Col>
                        <div className="mx-auto col-9">
                            <h4>Registration</h4>
                            <div>Register to Catena-X by entering all information requested in the following 5 Steps.</div>
                            <div>In case you want to leave the registration and join back later, please use the logout function on the top right user icon.</div>
                        </div>
                        <div className="mx-auto col-11 reg-steps">
                            <Row className="stepper-wrapper row-cols-5">
                                <div className="stepper-item completed col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">1</div>
                                        <div className="step-name col-9">Company data</div>
                                    </Row>
                                </div>
                                <div className="stepper-item completed col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">2</div>
                                        <div className="step-name col-9">Responsibilities & admin account</div>
                                    </Row>
                                </div>
                                <div className="stepper-item active col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">3</div>
                                        <div className="step-name col-9">Company Role</div>
                                    </Row>
                                </div>
                                <div className="stepper-item col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">4</div>
                                        <div className="step-name col-9">Upload documents</div>
                                    </Row>
                                </div>
                                <div className="stepper-item col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">5</div>
                                        <div className="step-name col-9">Verfify your entries</div>
                                    </Row>
                                </div>
                            </Row>
                        </div>
                        <div className="mx-auto col-9 container-registration">
                            <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>1</div>
                            <h4 className='mx-auto d-flex align-items-center justify-content-center'>Verify your company data</h4>
                            <div className='mx-auto text-center col-9'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                        </div>
                        <div className="mx-auto col-9 d-flex align-items-center justify-content-center info">
                            <span className=''>More information in our <a href=''>help section</a>.
                            </span>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container >
        );
    }
}