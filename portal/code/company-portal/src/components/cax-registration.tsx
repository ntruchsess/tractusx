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
import { observable } from 'mobx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from './footer';
import Header from './cat-header'
import { AiOutlineQuestionCircle, AiOutlineCalendar } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation, WithTranslation } from 'react-i18next';

@observer
class RegistrationCax extends React.Component<WithTranslation> {

    @observable currentActiveStep = 1;

    private nextClick() {
        this.currentActiveStep = this.currentActiveStep + 1;
    }

    private backClick() {
        this.currentActiveStep = this.currentActiveStep - 1;
    }

    public render() {

        return (
            <Container>
                <Header href={window.location.href} />
                <Row>
                    <Col>
                        <div className="mx-auto col-9">
                            <h4>{this.props.t('registration.registration')}</h4>
                            <div>{this.props.t('registration.regiStep')}.</div>
                            <div>{this.props.t('registration.regiSubHeading')}</div>
                        </div>
                        <div className="mx-auto col-11 reg-steps">
                            <Row className="stepper-wrapper row-cols-5">
                                <div className="stepper-item completed col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">1</div>
                                        <div className="step-name col-9">{this.props.t('registration.companyData')}</div>
                                    </Row>
                                </div>
                                <div className="stepper-item completed col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">2</div>
                                        <div className="step-name col-9">{this.props.t('registration.responsAdmin')}</div>
                                    </Row>
                                </div>
                                <div className="stepper-item active col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">3</div>
                                        <div className="step-name col-9">{this.props.t('registration.companyRole')}</div>
                                    </Row>
                                </div>
                                <div className="stepper-item col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">4</div>
                                        <div className="step-name col-9">{this.props.t('registration.uploadDocument')}</div>
                                    </Row>
                                </div>
                                <div className="stepper-item col">
                                    <Row className='stepper-row'>
                                        <div className="step-counter col-3">5</div>
                                        <div className="step-name col-9">{this.props.t('registration.verifyEntries')}</div>
                                    </Row>
                                </div>
                            </Row>
                        </div>
                        {
                            this.currentActiveStep === 1 ?
                                <div className='mx-auto col-9 container-registration'>
                                    <div className='head-section'>
                                        <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>1</div>
                                        <h4 className='mx-auto d-flex align-items-center justify-content-center'>{this.props.t('registrationStepOne.verifyCompayDataHeading')}</h4>
                                        <div className='mx-auto text-center col-9'>{this.props.t('registrationStepOne.verifyCompayDataSubHeading')}</div>
                                    </div>
                                    <div className='companydata-form'>
                                        <Row className='mx-auto col-9'>
                                            <div className='form-search'>
                                                <label> {this.props.t('registrationStepOne.seachDatabase')}</label>
                                                <input type="text" defaultValue='12312' />
                                            </div>
                                        </Row>
                                        <Row className='col-9 mx-auto'>
                                            <div className="section-divider">
                                                <span className='text-center'>{this.props.t('registrationStepOne.enterManualText')}</span>
                                            </div>
                                        </Row>
                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label> {this.props.t('bpn')} <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /></label>
                                                <input type="text" defaultValue='450284560' />
                                                <div className='company-hint'>{this.props.t('registrationStepOne.helperText')}</div>
                                            </div>
                                        </Row>
                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label> {this.props.t('legalEntity')} <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /> </label>
                                                <input type="text" defaultValue='' />
                                                <div className='company-hint'>{this.props.t('registrationStepOne.helperText')}</div>
                                            </div>
                                        </Row>
                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label> {this.props.t('registeredName')} <AiOutlineQuestionCircle color='#939393' data-tip="hello world" /></label>
                                                <input type="text" defaultValue='' />
                                                <div className='company-hint'>{this.props.t('registrationStepOne.helperText')}</div>
                                            </div>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <span className='form-heading'>{this.props.t('registrationStepOne.organizationAdd')}</span>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label> {this.props.t('registrationStepOne.streetHouseNumber')} </label>
                                                <input type="text" defaultValue='' />
                                            </div>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <div className='col-4 form-data'>
                                                <label> {this.props.t('registrationStepOne.postalCode')} </label>
                                                <input type="text" defaultValue='' />
                                            </div>

                                            <div className='col-8 form-data'>
                                                <label>{this.props.t('registrationStepOne.city')}</label>
                                                <input type="text" defaultValue='' />
                                            </div>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label>{this.props.t('registrationStepOne.country')}</label>
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
                                            <span className='form-heading'>{this.props.t('registrationStepOne.businessStatus')}</span>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <div className='form-data'>
                                                <label>{this.props.t('registrationStepOne.stateOfActivity')} </label>
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
                                                <label> {this.props.t('registrationStepOne.validFrom')}</label>
                                                <DatePicker className='date-picker' />
                                                <AiOutlineCalendar className='calender-icon' />
                                            </div>
                                        </Row>

                                        <Row className='mx-auto col-9'>
                                            <div className='form-data calender'>
                                                <label>  {this.props.t('registrationStepOne.validUntil')}</label>
                                                <DatePicker className='date-picker' />
                                                <AiOutlineCalendar className='calender-icon' />
                                            </div>
                                        </Row>

                                    </div>
                                </div>
                                : this.currentActiveStep === 2 ?
                                    <div className='mx-auto col-9 container-registration'>
                                        <div className='head-section'>
                                            <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>2</div>
                                            <h4 className='mx-auto d-flex align-items-center justify-content-center'>Responsibility & admin account</h4>
                                            <div className='mx-auto text-center col-9'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                                        </div>
                                        <div className='companydata-form'>
                                            <Row className='mx-auto col-9'>
                                                <h5>Users selected to invite</h5>
                                                <Row>
                                                    <ul className="list-group">
                                                        <ul className="list-group">
                                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                A list item
                                                                <span className="badge bg-primary rounded-pill">14</span>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                A second list item
                                                                <span className="badge bg-primary rounded-pill">2</span>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                A third list item
                                                                <span className="badge bg-primary rounded-pill">1</span>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </Row>
                                            </Row>

                                            <Row className='mx-auto col-9'>
                                                <h5>Users to invite</h5>
                                                <div>No users defined, please use the form below to add users:</div>
                                            </Row>

                                            <Row className='mx-auto col-9'>
                                                <div className='form-data'>
                                                    <label> E-mail address </label>
                                                    <input type="text" defaultValue='' />
                                                </div>
                                            </Row>

                                            <Row className='mx-auto col-9'>
                                                <div className='form-data'>
                                                    <label> User role </label>
                                                    <select
                                                        defaultValue='active'
                                                    >
                                                        <option value="active">Please select a role for this user</option>
                                                        <option value="test2">Test 2</option>
                                                        <option value="test3">Test 3</option>
                                                    </select>
                                                </div>
                                            </Row>

                                            <Row className='mx-auto col-9'>
                                                <div className='form-data'>
                                                    <label> Personal note
                                                    </label>
                                                    <textarea name="body"
                                                        defaultValue="" />
                                                    <div className='company-hint'>Optional message in the invitation e-mail. Lorem Ipsum</div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    :
                                    this.currentActiveStep === 3 ?
                                        <div className='mx-auto col-9 container-registration'>
                                            <div className='head-section'>
                                                <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>3</div>
                                                <h4 className='mx-auto d-flex align-items-center justify-content-center'>The role of your company
                                                </h4>
                                                <div className='mx-auto text-center col-9'>Please select one or more roles for your company to participant in Catena-X. The company role can always get updated/changed later. Depending on the selected role, the offered portal services might differ.</div>
                                            </div>
                                            <div className='companydata-form'></div>
                                        </div> :
                                        this.currentActiveStep === 4 ?
                                            <div className='mx-auto col-9 container-registration'>
                                                <div className='head-section'>
                                                    <div className='mx-auto step-highlight d-flex align-items-center justify-content-center'>4</div>
                                                    <h4 className='mx-auto d-flex align-items-center justify-content-center'>Upload documents
                                                    </h4>
                                                    <div className='mx-auto text-center col-9'>Please upload your legal company commercial register document.
                                                    </div>
                                                </div>
                                                <div className='companydata-form'></div>
                                            </div> :
                                            <p> default </p>

                        }
                        <div className="mx-auto col-9 info">
                            <Row>
                                <div className='col12 d-flex align-items-center justify-content-center'>Please enter all the required information before proceeding. More information in our <a href=''> help section</a>.
                                </div>
                                <div className='col12 d-flex align-items-center justify-content-center button-section'>
                                    <Button className='btn btn-light' size="lg" onClick={() => this.backClick()} >
                                        Back
                                    </Button>{' '}
                                    <Button className='btn' onClick={() => this.nextClick()}
                                        size="lg">
                                        Next
                                    </Button>{' '}
                                </div>
                            </Row>
                        </div>
                    </Col >
                </Row >
                <Footer />
                <ReactTooltip />
            </Container >
        );
    }
}
export default withTranslation()(RegistrationCax);