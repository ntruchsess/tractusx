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

import { Container, Row, Col } from "react-bootstrap";
import i18n from '../i18n';
import Footer from "./footer";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from "./button";

export const Registrationoneid = () => {

  const { t } = useTranslation();

  const [eMail, seteMail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] =  useState("");
  const [companyname, setcompanyname] = useState("");
  const [language, setlanguage] =  useState(i18n.language);

  const changeLanguage = lng => {
    setlanguage(lng);
    i18n.changeLanguage(lng);
};


  const registrationButtonClick = () => {
    console.log("register");

    var u = 'http://cxonbiardoing.azurewebsites.net/api/onboarding'

    var data =
    {
      "eMail": eMail,
      "firstname": firstname,
      "lastname": lastname,
      "companyname": companyname
    }

    if (eMail === ""  || firstname === "" || lastname === "" || companyname === "") {
      toast.error('Mandatory fields not filled. Please fill out all fields.');
      return;
    }


    console.log(data);

    fetch(u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then((response) => {
        if (response.ok) {
          toast.success('Done');
        }
        else throw Error();
      }

      ).catch((error) => {
        toast.error('error');
      });

  }



    return (
      <Container>
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
                        <div className='profile-link'><a href='/help'>Help</a></div>
                    </div>
                </Col >
            </Row >
        <Row>
          <Col>
            <div className="mx-auto col-9 container-body">
              <h4>Welcome to Catena-X Automotive Network</h4>
              <div className='companydata-form'>
                  
                    <Row className='mx-auto'>
                        <div className='form-data'>
                            <label>Enter  Email - Address</label>
                            <input type="text" value={eMail}  onChange={e => seteMail(e.target.value)} />
                        </div>
                    </Row>
                    <Row className='mx-auto'>
                        <div className='form-data'>
                            <label> First Name </label>
                            <input type="text" value={firstname} onChange={e => setfirstname(e.target.value)}/>
                        </div>
                    </Row>
                    <Row className='mx-auto'>
                        <div className='form-data'>
                            <label> Last Name</label>
                            <input type="text" value={lastname} onChange={e => setlastname(e.target.value)}/>
                        </div>
                    </Row>

                    <Row className='mx-auto'>
                        <div className='form-data'>
                            <label>Company Name</label>
                            <input type="text" value={companyname} onChange={e => setcompanyname(e.target.value)}/>
                        </div>
                    </Row>                   

                </div>
                <Row className="mx-auto">
                    <div>
                        <Button
                            styleClass="button btn-primaryCax"
                            label="Registration"
                            handleClick={() => registrationButtonClick()}
                            icon={false}
                        />
                    </div>
                    <div>

                        <ToastContainer/>
                    </div>
                </Row>
            </div>
            <div className="mx-auto col-9 d-flex align-items-center justify-content-center info small-info">
              <span className="">
                {t("landing.footerText1")}{" "}
                <a href="">{t("landing.footerText2")}</a>.
              </span>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );

}
export default Registrationoneid;
