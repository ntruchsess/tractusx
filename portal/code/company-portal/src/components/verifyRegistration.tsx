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

import { Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { FooterButton } from "./footerButton";
import { connect } from "react-redux";
import { IState } from "../types/store/redux.store.types";
import { addCurrentStep } from "../actions/user.action";
import { withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { FaEdit } from "react-icons/fa";
import { CompanyDetailsData } from "../data/companyDetails";
import { useHistory } from "react-router-dom";
import { DataErrorCodes } from "../helpers/DataError";
import { ToastContainer, toast } from "react-toastify";
import { submitCustodianWallet } from "../helpers/utils";

interface VerifyRegistrationProps {
  currentActiveStep: number;
  addCurrentStep: (step: number) => void;
  companyDetailsData: CompanyDetailsData;
  fileNames: string[];
}

export const VerifyRegistration = ({
  currentActiveStep,
  addCurrentStep,
  companyDetailsData,
  fileNames,
}: VerifyRegistrationProps) => {
  const { t } = useTranslation();
  let history = useHistory();

  const editClick = (n) => {
    // setcurrentActiveStep(n);
  };
  // const companyRoleChecked =  new Map();

  const backClick = () => {
    addCurrentStep(currentActiveStep - 1);
  };

  const nextClick = () => {
    const data = {
      bpn: companyDetailsData?.bpn || "",
      name: companyDetailsData?.registrationName || "",
    };
    const fetchData = async () => {
      const custodianWallet = await submitCustodianWallet(data);
      toast.success(custodianWallet);
      history.push("/finish");
    };
    fetchData().catch((errorCode: number) => {
      let message = DataErrorCodes.includes(errorCode)
        ? t(`ErrorMessage.${errorCode}`)
        : t(`ErrorMessage.default`);
      toast.error(message);
    });
  };
  const getTooltip = () => {
    if (!hasCompanyData()) {
      return t("ErrorMessage.error1");
    }
    if (!hasRoles()) {
      return t("ErrorMessage.error2");
    }
    if (!hasDocuments()) {
      return t("ErrorMessage.error3")
    }
    return null;
  };
  const hasCompanyData = () => {
     return companyDetailsData.bpn ? true : false;
    // return true
  };
  const hasRoles = () => {return true};
  const hasDocuments = () => {
    return fileNames && fileNames.length > 0 ? true : false 
  };

  return (
    <>
      <div className="mx-auto col-9 container-registration">
        <div className="head-section">
          <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
            5
          </div>
          <h4 className="mx-auto d-flex align-items-center justify-content-center">
            {t("verifyRegistration.title")}
          </h4>
          <div className="mx-auto text-center col-9">
            {t("verifyRegistration.subtitle")}
          </div>
        </div>
        <div className="companydata-form mx-auto col-9">
          <Row>
            <ul className="list-group-cax px-2">
              <li className="list-group-item-cax list-header">
                <Row>
                  <span className="col-11">
                    {t("verifyRegistration.heading1")}
                  </span>
                  <span className="col-1" onClick={() => editClick(1)}>
                    <FaEdit className="editIcon" />
                  </span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">{t("verifyRegistration.bpn")}</span>
                  <span className="col-6">{companyDetailsData?.bpn}</span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.legalEntity")}
                  </span>
                  <span className="col-6">
                    {companyDetailsData?.legalEntity}
                  </span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.registeredName")}
                  </span>
                  <span className="col-6">
                    {companyDetailsData?.registrationName}
                  </span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.street")}
                  </span>
                  <span className="col-6">{companyDetailsData?.address}</span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">{t("verifyRegistration.city")}</span>
                  <span className="col-6">{companyDetailsData?.city}</span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.country")}
                  </span>
                  <span className="col-6">{companyDetailsData?.country}</span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.stateOfActivity")}
                  </span>
                  <span className="col-6"></span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.validFrom")}
                  </span>
                  <span className="col-6"></span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-6">
                    {t("verifyRegistration.validUntil")}
                  </span>
                  <span className="col-6"></span>
                </Row>
              </li>
            </ul>
          </Row>
          <Row>
            <ul className="list-group-cax px-2">
              <li className="list-group-item-cax list-header">
                <Row>
                  <span className="col-11">{t("verifyRegistration.ActiveRole")}</span>
                  <span className="col-1" onClick={() => editClick(2)}>
                    <FaEdit className="editIcon" />
                  </span>
                </Row>
              </li>
              <li className="list-group-item-cax">
                <Row>
                  <span className="col-12">{t("verifyRegistration.ActiveParticipant")}</span>
                </Row>
              </li>
            </ul>
          </Row>
          <Row>
            <ul className="list-group-cax px-2">
              <li className="list-group-item-cax list-header">
                <Row>
                  <span className="col-11">{t("verifyRegistration.UploadedCertificates")}</span>
                  <span className="col-1" onClick={() => editClick(3)}>
                    <FaEdit className="editIcon" />
                  </span>
                </Row>
              </li>
              {fileNames.map(file => {
                return (<li className="list-group-item-cax">
                <Row>
                  <span className="col-12">{file}</span>
                </Row>
              </li>)
              })}
            </ul>
          </Row>
        </div>
        <ToastContainer />
      </div>

      <FooterButton
        labelBack={t("button.back")}
        labelNext={t("button.submit")}
        handleBackClick={() => backClick()}
        handleNextClick={() => nextClick()}
        tooltip={getTooltip()}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCurrentStep: (step: number) => {
    dispatch(addCurrentStep(step));
  },
});

export default withRouter(
  connect(
    (state: IState) => ({
      currentActiveStep: state.user.currentStep,
      companyDetailsData: state.user.companyData,
      fileNames: state.user.fileNames
    }),
    mapDispatchToProps
  )(VerifyRegistration)
);
