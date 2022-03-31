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

import { Row, Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

        return (
            <Row>
                <div className='footer-container flex-column d-flex align-items-center justify-content-center'>
                    <div>
                        <Navbar collapseOnSelect expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#features">{t("FooterLink.link1")}</Nav.Link>
                                        <Nav.Link href="#pricing">{t("FooterLink.link2")}</Nav.Link>
                                        <Nav.Link href="#features">{t("FooterLink.link3")}</Nav.Link>
                                        <Nav.Link href="#pricing">{t("FooterLink.link4")}</Nav.Link>
                                        <Nav.Link href="#features">{t("FooterLink.link5")}</Nav.Link>
                                        <Nav.Link href="#pricing">{t("FooterLink.link6")}</Nav.Link>
                                        <Nav.Link href="#features">{t("FooterLink.link7")}</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div>{t("FooterLink.copyright")}</div>
                </div>
            </Row>
        );
}

export default withRouter(Footer);
