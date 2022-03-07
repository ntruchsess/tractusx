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

import {  Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import React, {FC} from 'react';
import {connect} from 'react-redux';
import {IState} from "../types/store/redux.store.types";
import { useTranslation } from 'react-i18next';
interface StepperProps {
    currentActiveStep: number;
}

export const Stepper: FC<StepperProps> = ({currentActiveStep}) => {
    const { t } = useTranslation();
    console.log(currentActiveStep)
    return (
        <div className="mx-auto col-11 reg-steps">
              <Row className="stepper-wrapper row-cols-5">
                <div className="stepper-item completed col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= 1
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > 1
                          ? <span className="step-tick"><img src="./tick.svg" alt="tick" /></span>
                          : 1 
                      }</div>
                    <div className="step-name col-9">
                      {t("registration.companyData")}
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === 1
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div>
                <div className="stepper-item completed col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= 2
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > 2
                          ? <span className="step-tick">&#10003;</span>
                          : 2 
                      }</div>
                    <div className="step-name col-9">
                      {t("registration.responsAdmin")}
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === 2
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div>
                <div className="stepper-item active col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= 3
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > 3
                          ? <span className="step-tick">&#10003;</span>
                          : 3 
                      }</div>
                    <div className="step-name col-9">
                      {t("registration.companyRole")}
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === 3
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div>
                <div className="stepper-item col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= 4
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > 4
                          ? <span className="step-tick">&#10003;</span>
                          : 4 
                      }</div>
                    <div className="step-name col-9">
                      {t("registration.uploadDocument")}
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === 4
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div>
                <div className="stepper-item col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= 5
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > 5
                          ? <span className="step-tick">&#10003;</span>
                          : 5 
                      }</div>
                    <div className="step-name col-9">
                      {t("registration.verifyEntries")}
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === 5
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div>
              </Row>
            </div>
    )

}

export default connect((state: IState) => ({
    currentActiveStep: state.user.currentStep,
}))(Stepper);
