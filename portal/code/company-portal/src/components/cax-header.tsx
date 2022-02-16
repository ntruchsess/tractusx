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
import i18n from '../i18n';
import { Row, Col } from 'react-bootstrap';
import UserService from '../helpers/UserService';
import { getUserClientRolesComposite } from '../helpers/utils';
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

export const Header = () => {
    const username =  UserService.getUsername();
    const initials =  UserService.getInitials();
    const [userRoles, setuserRoles] =  useState([]);
    const [language, setlanguage] =  useState(i18n.language);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const data = await getUserClientRolesComposite();
          setuserRoles(data);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])


    const logoutClick = () => {
        const token = UserService.getCachedToken();
        console.log(token);
        UserService.logOut();
    }


        const changeLanguage = lng => {
            setlanguage(lng);
            i18n.changeLanguage(lng);
        };

        return (

            <Row className='header-container' >
                <Col>
                    <div className='logo'>
                        <img src='/logo_cx.svg' alt='logo' />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex flex-row-reverse profile'>
                        <div className='profile-lang'><span className={language === 'en' ? 'lang-sel' : ''} onClick={() => changeLanguage('en')} > EN </span></div>
                        <div className='profile-lang'><span className={language === 'de' ? 'lang-sel' : ''} onClick={() => changeLanguage('de')} > DE</span></div>
                        <div className='profile-link partion'></div>
                        <div className='profile-link user'>
                            <input id="myid" type="checkbox" />
                            <label htmlFor="myid" className='user-icon'></label>
                            <span className="tooltiptext"> <div> {username}</div>
                                < div > {UserService.getDomain()}</div>
                                <div>({userRoles.join(", ")})</div>
                                <div className='logout' onClick={() => logoutClick()}>Logout</div>
                            </span>
                        </div>
                        {/* <div className='profile-link user'><span className='user-icon'></span>
                            <span className="tooltiptext">Tooltip text</span>
                        </div> */}
                        <div className='profile-link'><a href='/help'>Help</a></div>
                    </div>
                </Col >
            </Row >
        );
}
export default withRouter(Header);
