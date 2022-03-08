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
import { Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineUser, AiOutlineDelete } from "react-icons/ai";
import Button from "./button";
import { getClientRolesComposite, submitSendInvites } from "../helpers/utils";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { IUserItem } from "../types/user/user.types";
import { IState } from "../types/store/redux.store.types";
import { Dispatch } from "redux";
import {
  addToInviteList,
  removeFromInviteList,
  addCurrentStep,
} from "../actions/user.action";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FooterButton from "./footerButton";
import { DataErrorCodes } from "../helpers/DataError";
interface ResponsibilitiesCaxProps {
  addToInviteList: (userItem: IUserItem) => void;
  removeFromInviteList: (userItem: string) => void;
  userInviteList: IUserItem[];
  currentActiveStep: number;
  addCurrentStep: (step: number) => void;
}

export const ResponsibilitiesCax = ({
  userInviteList,
  currentActiveStep,
  addToInviteList,
  addCurrentStep,
  removeFromInviteList,
}: ResponsibilitiesCaxProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string | null>("");
  const [role, setRole] = useState<string | null>("");
  const [personalNote, setPersonalNote] = useState<string | null>("");
  const [availableUserRoles, setavailableUserRoles] = useState([]);
  const [error, setError] = useState<{ email: string; role: string }>({
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataRoles = await getClientRolesComposite();

      setavailableUserRoles(dataRoles);
      if (dataRoles && dataRoles.length > 0) setRole(dataRoles[0]);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch((errorCode: number) => {
        let message = DataErrorCodes.includes(errorCode)
          ? t(`ErrorMessage.${errorCode}`)
          : t(`ErrorMessage.default`);
        toast.error(message);
      });
  }, []);

  const onRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleClick = () => {
    verifyEntry();
    if (email !== "") {
      const data = {
        uiId: uuidv4(),
        email: email,
        role: role,
        personalNote: personalNote,
      };

      addToInviteList(data);
      setEmail("");
      setPersonalNote("");
      if (availableUserRoles && availableUserRoles.length > 0)
        setRole(availableUserRoles[0]);
    }
  };

  const verifyEntry = () => {
    if (email === "")
      setError({ email: "Email is required", role: error.role });
    else {
      setError({ email: "", role: error.role });
    }
  };

  const removeUser = (userUiId) => {
    removeFromInviteList(userUiId);
  };

  const backClick = () => {
    addCurrentStep(currentActiveStep - 1);
  };

  const nextClick = () => {
    if (userInviteList.length > 0) {
      const fetchData = async () => {
    const dataRoles = await submitSendInvites(userInviteList);
            toast.success(dataRoles);
      }
      fetchData()
      .catch((errorCode: number) => {
      
        let message = DataErrorCodes.includes(errorCode)
          ? t(`ErrorMessage.${errorCode}`)
          : t(`ErrorMessage.default`);
        //   alert(message)
  
        toast.error(message);
        //  history.push("/finish");
      });
  } else {
    toast.error("Email or User Role empty.");
  }
    addCurrentStep(currentActiveStep + 1);
  };


  return (
    <>
      <div className="mx-auto col-9 container-registration">
        <div className="head-section">
          <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
            2
          </div>
          <h4 className="mx-auto d-flex align-items-center justify-content-center">
            {t("Responsibility.responsAndAdmin")}
          </h4>
          <div className="mx-auto text-center col-9">
            {t("Responsibility.subTitle")}
          </div>
        </div>
        <div className="companydata-form">
          {userInviteList && (
            <Row className="mx-auto col-9 send-invite">
              <h5>Users selected to invite</h5>
              <Row>
                <ul className="list-group-cax px-2">
                  {userInviteList.map((d) => {
                    return (
                      <li className="list-group-item-cax">
                        <Row>
                          <span className="col-1">
                            <AiOutlineUser />
                          </span>
                          <span className="col-6">{d.email}</span>
                          <span className="badge-cax  bg-list-group-cax col-4">
                            {d.role}
                          </span>
                          <span className="col-1 list-group-item-delete">
                            <AiOutlineDelete
                              onClick={() => removeUser(d.uiId)}
                            />
                          </span>
                        </Row>
                      </li>
                    );
                  })}
                </ul>
              </Row>
            </Row>
          )}

          <Row className="mx-auto col-9">
            <h5>Users to invite</h5>
            <div>No users defined, please use the form below to add users:</div>
          </Row>

          <Row className="mx-auto col-9">
            <div
              className={
                error.email !== ""
                  ? "form-data error calender"
                  : "form-data calender"
              }
            >
              <label> E-mail address </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineExclamationCircle className="error-icon" />
              <div className="error-message">{error.email}</div>
            </div>
          </Row>

          <Row className="mx-auto col-9">
            <div className="form-data">
              <label> User role </label>
              <select value={role} onChange={(e) => onRoleChange(e)}>
                {availableUserRoles &&
                  availableUserRoles.map((role, index) => (
                    <option value={role}>{role}</option>
                  ))}
              </select>
            </div>
          </Row>

          <Row className="mx-auto col-9">
            <div className="form-data">
              <label> Personal note</label>
              <textarea
                name="message"
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
              />
              <div className="company-hint">
                Optional message in the invitation e-mail. Lorem Ipsum
              </div>
            </div>
          </Row>

          <Row className="mx-auto col-9">
            <div>
              <Button
                styleClass="button btn-primaryCax"
                label="Add User"
                handleClick={() => handleClick()}
                icon={true}
              />
            </div>
              <ToastContainer />
          </Row>
        </div>
      </div>
      <FooterButton
        labelBack={t("button.back")}
        labelNext={t("button.next")}
        handleBackClick={() => backClick()}
        handleNextClick={() => nextClick()}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToInviteList: (userItem: IUserItem) => {
    dispatch(addToInviteList(userItem));
  },
  removeFromInviteList: (userUiId: string) => {
    dispatch(removeFromInviteList(userUiId));
  },
  addCurrentStep: (step: number) => {
    dispatch(addCurrentStep(step));
  },
});

export default withRouter(
  connect(
    (state: IState) => ({
      userInviteList: state.user.userInviteList,
      currentActiveStep: state.user.currentStep,
      roleComposite: state.user.roleComposite,
    }),
    mapDispatchToProps
  )(ResponsibilitiesCax)
);
