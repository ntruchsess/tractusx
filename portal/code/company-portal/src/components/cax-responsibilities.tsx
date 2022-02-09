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
import {Row} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {withTranslation, WithTranslation} from "react-i18next";
import {AiOutlineUser, AiOutlineDelete} from "react-icons/ai";
import Button from "./button";
import {getClientRolesComposite} from "../helpers/utils";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import UserService from '../helpers/UserService';
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux';
import {IUserItem, IUserResponsibilities} from "../types/user/user.types";
import {IState} from "../types/store/redux.store.types";
import {Dispatch} from 'redux';
import {addToInviteList} from "../actions/user.action";
import {useEffect, useState} from "react";


interface ResponsibilitiesCaxProps {
    addToInviteList: (userItem: IUserItem) => void;
    userInviteList: IUserItem[];
}

const ResponsibilitiesCax = ({userInviteList, addToInviteList}: ResponsibilitiesCaxProps) => {
    const [email, setEmail] = useState<string | null>("");
    const [role,] = useState<string | null>("Invitation");
    const [personalNote, setPersonalNote] = useState<string | null>("");


    /*
    useEffect(() => {


    }, [userInviteList])


     */

    const handleClick = () => {
        // this.validateUser()
        debugger;

        const data = {

            email: email,
            role: 'Invitation',
            personalNote: personalNote,
        };
        //this.newarray.push(data);
        addToInviteList(data)
        setEmail("");
        setPersonalNote("");

    }


    return (
        <div className="mx-auto col-9 container-registration">
            <div className="head-section">
                <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
                    2
                </div>
                <h4 className="mx-auto d-flex align-items-center justify-content-center">
                    Responsibility & admin account
                </h4>
                <div className="mx-auto text-center col-9">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
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
                                                    <AiOutlineUser/>
                                                  </span>
                                                <span className="col-6">{d.email}</span>
                                                <span className="badge-cax  bg-list-group-cax col-4">
                                                    {d.role}
                                                  </span>
                                                <span className="col-1 list-group-item-delete">
                                                    <AiOutlineDelete/>
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
                    <div>
                        <label> E-mail address </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                </Row>

                <Row className="mx-auto col-9">

                    <label> User role </label>
                    <select value={role}>
                        <option value='Invitation'>Invitation</option>
                    </select>


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
                    <div>

                        <ToastContainer/>
                    </div>
                </Row>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
    addToInviteList: (userItem: IUserItem) => {

        dispatch(addToInviteList(userItem));
    },
});


export default connect(
    (state: IState) => ({
        userInviteList: state.user.userInviteList,
    }),
    mapDispatchToProps
)(withTranslation()(ResponsibilitiesCax));
