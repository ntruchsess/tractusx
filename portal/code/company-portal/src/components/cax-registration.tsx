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

import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import Header from "./cat-header";
import ReactTooltip from "react-tooltip";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation, WithTranslation } from "react-i18next";
import CompanyDataCax from "./cax-companyData";
import Button from "./button";
import ResponsibilitiesCax from "./cax-responsibilities";

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
              <h4>{this.props.t("registration.registration")}</h4>
              <div>{this.props.t("registration.regiStep")}.</div>
              <div>{this.props.t("registration.regiSubHeading")}</div>
            </div>
            <div className="mx-auto col-11 reg-steps">
              <Row className="stepper-wrapper row-cols-5">
                <div className="stepper-item completed col">
                  <Row className="stepper-row">
                    <div className="step-counter col-3">1</div>
                    <div className="step-name col-9">
                      {this.props.t("registration.companyData")}
                    </div>
                  </Row>
                  <Row><div className={this.currentActiveStep === 1?"step-border col-10 mx-auto" : ""}></div></Row>
                </div>
                <div className="stepper-item completed col">
                  <Row className="stepper-row">
                    <div className="step-counter col-3">2</div>
                    <div className="step-name col-9">
                      {this.props.t("registration.responsAdmin")}
                    </div>
                  </Row>
                  <Row><div className={this.currentActiveStep === 2?"step-border col-10 mx-auto" : ""}></div></Row>
                </div>
                <div className="stepper-item active col">
                  <Row className="stepper-row">
                    <div className="step-counter col-3">3</div>
                    <div className="step-name col-9">
                      {this.props.t("registration.companyRole")}
                    </div>
                  </Row>
                  <Row><div className={this.currentActiveStep === 3?"step-border col-10 mx-auto" : ""}></div></Row>
                </div>
                <div className="stepper-item col">
                  <Row className="stepper-row">
                    <div className="step-counter col-3">4</div>
                    <div className="step-name col-9">
                      {this.props.t("registration.uploadDocument")}
                    </div>
                  </Row>
                  <Row><div className={this.currentActiveStep === 4?"step-border col-10 mx-auto" : ""}></div></Row>
                </div>
                <div className="stepper-item col">
                  <Row className="stepper-row">
                    <div className="step-counter col-3">5</div>
                    <div className="step-name col-9">
                      {this.props.t("registration.verifyEntries")}
                    </div>
                  </Row>
                  <Row><div className={this.currentActiveStep === 5?"step-border col-10 mx-auto" : ""}></div></Row>
                </div>
              </Row>
            </div>
            {this.currentActiveStep === 1 ? (
              <CompanyDataCax />
            ) : this.currentActiveStep === 2 ? (
              <ResponsibilitiesCax />
            ) : this.currentActiveStep === 3 ? (
              <div className="mx-auto col-9 container-registration">
                <div className="head-section">
                  <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <h4 className="mx-auto d-flex align-items-center justify-content-center">
                    The role of your company
                  </h4>
                  <div className="mx-auto text-center col-9">
                    Please select one or more roles for your company to
                    participant in Catena-X. The company role can always get
                    updated/changed later. Depending on the selected role, the
                    offered portal services might differ.
                  </div>
                </div>
                <div className="companydata-form"></div>
              </div>
            ) : this.currentActiveStep === 4 ? (
              <div className="mx-auto col-9 container-registration">
                <div className="head-section">
                  <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
                    4
                  </div>
                  <h4 className="mx-auto d-flex align-items-center justify-content-center">
                    Upload documents
                  </h4>
                  <div className="mx-auto text-center col-9">
                    Please upload your legal company commercial register
                    document.
                  </div>
                </div>
                <div className="companydata-form"></div>
              </div>
            ) : (
              <p> default </p>
            )}
            <div className="mx-auto col-9 info">
              <Row>
                <div className="col12 d-flex align-items-center justify-content-center">
                  Please enter all the required information before proceeding.
                  More information in our <a href=""> help section</a>.
                </div>
                <div className="col12 d-flex align-items-center justify-content-center button-section">
                  <Button
                    styleClass="button btn-default"
                    label="Back"
                    handleClick={() => this.backClick()}
                  />
                  <Button
                    label="Confirm"
                    styleClass="button btn-primaryCax"
                    handleClick={() => this.nextClick()}
                  />
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <Footer />
        <ReactTooltip />
      </Container>
    );
  }
}
export default withTranslation()(RegistrationCax);
