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
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './footer';
import Header from './cat-header'
import { AiOutlineQuestionCircle, AiOutlineCalendar } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation, WithTranslation } from 'react-i18next';

@observer
class RegistrationCax extends React.Component<WithTranslation> {
    public render() {

        return (
            <Container>
                <Header href={window.location.href} />
                <Row>
                    <Col>
                        <div className="mx-auto col-9">
                            <h4>{this.props.t('registration')}</h4>
                            <div>{this.props.t('regiStep')}.</div>
                            <div>{this.props.t('regiSubHeading')}</div>
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
                        <div className='mx-auto col-9 container-registration'>
                            <div className='head-section'>
                                <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>1</div>
                                <h4 className='mx-auto d-flex align-items-center justify-content-center'>Verify your company data</h4>
                                <div className='mx-auto text-center col-9'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                            </div>
                            <div className='companydata-form'>
                                <Row className='mx-auto col-9'>
                                    <div className='form-search'>
                                        <label> Search database for your company </label>
                                        <input type="text" defaultValue='12312' />
                                    </div>
                                </Row>
                                <Row className='col-9 mx-auto'>
                                    <div className="section-divider">
                                        <span className='text-center'>or enter your data manually:</span>
                                    </div>
                                </Row>
                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> BPN <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /></label>
                                        <input type="text" defaultValue='450284560' />
                                        <div className='company-hint'>Your BPN code lorem ipsum dolores.</div>
                                    </div>
                                </Row>
                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> Legal Entity Name <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /> </label>
                                        <input type="text" defaultValue='' />
                                        <div className='company-hint'>Helper Text lorem Ipsum dolores.</div>
                                    </div>
                                </Row>
                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> Registered name <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /></label>
                                        <input type="text" defaultValue='' />
                                        <div className='company-hint'>Helper Text lorem Ipsum dolores.</div>
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <span className='form-heading'>Organization Address</span>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> Street with House Number </label>
                                        <input type="text" defaultValue='' />
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='col-4 form-data'>
                                        <label> Postal Code </label>
                                        <input type="text" defaultValue='' />
                                    </div>

                                    <div className='col-8 form-data'>
                                        <label> City </label>
                                        <input type="text" defaultValue='' />
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> Country </label>
                                        <select
                                            defaultValue='Choose your country'
                                        >
                                            <option value="">Choose your country</option>
                                            <option value="test1">test 1</option>
                                            <option value="test2">Test 2</option>
                                            <option value="test3">Test 3</option>
                                        </select>
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <span className='form-heading'>Business status</span>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='form-data'>
                                        <label> State of activity /operation </label>
                                        <select
                                            defaultValue='active'
                                        >
                                            <option value="active">Active</option>
                                            <option value="test2">Test 2</option>
                                            <option value="test3">Test 3</option>
                                        </select>
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='form-data calender'>
                                        <label> Valid until </label>
                                        <DatePicker className='date-picker' />
                                        <AiOutlineCalendar className='calender-icon' />
                                    </div>
                                </Row>

                                <Row className='mx-auto col-9'>
                                    <div className='form-data calender'>
                                        <label> Valid until </label>
                                        <DatePicker className='date-picker' />
                                        <AiOutlineCalendar className='calender-icon' />
                                    </div>
                                </Row>

                            </div>
                        </div>
                        <div className="mx-auto col-9 d-flex align-items-center justify-content-center info">
                            <span className=''>Please enter all the required information before proceeding. More information in our <a href=''>help section</a>.
                            </span>
                        </div>
                    </Col>
                </Row>
                <Footer />
                <ReactTooltip />
            </Container >
        );
    }
}
export default withTranslation()(RegistrationCax);