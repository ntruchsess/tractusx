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
import { Row } from 'react-bootstrap';
import { withTranslation, WithTranslation } from 'react-i18next';
import { AiOutlineQuestionCircle, AiOutlineCalendar } from 'react-icons/ai'
import DatePicker from "react-datepicker";

@observer
class CompanyDataCax extends React.Component<WithTranslation> {

    public render() {

        return (
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
            </div>)

    }
}
export default withTranslation()(CompanyDataCax);