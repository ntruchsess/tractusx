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
import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {IState} from "../types/store/redux.store.types";
import { stepNames } from "../helpers/steps"
interface StepperProps {
    currentActiveStep: number;
}

export const Stepper: FC<StepperProps> = ({currentActiveStep}) => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[currentActiveStep])

    return (
        <div className="mx-auto col-11 reg-steps">
              <Row className="stepper-wrapper row-cols-5">
             {
               Object.entries(stepNames).map(element => {
                let stepNumber = +element[0];
                let stepName = element[1];
               return ( 
               <div className="stepper-item col">
                  <Row className="stepper-row">
                    <div className={
                        currentActiveStep >= stepNumber
                          ? "step-counter step-active col-3"
                          : "step-counter col-3"
                      }>{
                        currentActiveStep > stepNumber
                          ? <span className="step-tick"><img src="./tick.svg" alt="tick" /></span>
                          : stepNumber
                      }</div>
                    <div className="step-name col-9">
                       { stepName }
                    </div>
                  </Row>
                  <Row>
                    <div
                      className={
                        currentActiveStep === stepNumber
                          ? "step-border col-10 mx-auto"
                          : ""
                      }
                    ></div>
                  </Row>
                </div> 
                );
               })}                   
              </Row>
            </div>
    )

}

export default connect((state: IState) => ({
    currentActiveStep: state.user.currentStep,
}))(Stepper);
