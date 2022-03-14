--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.company_usecases DROP CONSTRAINT fktgryxfhqy65nrsma372464ofv;
ALTER TABLE ONLY public.agreement DROP CONSTRAINT fkt91pkkfiegka64h156tano4y4;
ALTER TABLE ONLY public.policy DROP CONSTRAINT fkrn4r8y9dijpr4arhe1cse0o6j;
ALTER TABLE ONLY public.company_apps DROP CONSTRAINT fkqpe388nsvq4dbboqhbhr771ld;
ALTER TABLE ONLY public.app_agreements DROP CONSTRAINT fkq37h8ql6av2ywp9m9wtq0ydv5;
ALTER TABLE ONLY public.invitation DROP CONSTRAINT fkphjtfnn8m3nrg0cwa5beco7hh;
ALTER TABLE ONLY public.agreement_documents DROP CONSTRAINT fkne75pie16l1mxjggyyhg1er5y;
ALTER TABLE ONLY public.company_user_appfavourites DROP CONSTRAINT fkn75rh2x2cgersusxc5u8yn8h8;
ALTER TABLE ONLY public.consent DROP CONSTRAINT fkmgq37cv032gltkh2ynjcas6f8;
ALTER TABLE ONLY public.agreement_roles DROP CONSTRAINT fkltfqljkacdmlgtr9iec71kq0o;
ALTER TABLE ONLY public.agreement_documents DROP CONSTRAINT fklrjavekoem3kgj7pawsh0yk9c;
ALTER TABLE ONLY public.document DROP CONSTRAINT fkll9ftqsw3b8banx5283kno8lq;
ALTER TABLE ONLY public.company_user_roles DROP CONSTRAINT fklf5962qg3a3e9ie9t1xmt67im;
ALTER TABLE ONLY public.address DROP CONSTRAINT fkkcwlkhkrfj54b1yx1dmeidam9;
ALTER TABLE ONLY public.app_version_description DROP CONSTRAINT fkjq6u4ns756dm82vu30crsvshq;
ALTER TABLE ONLY public.company_user_roles DROP CONSTRAINT fkjj8n34jkirg6ykpm6u8pklo1d;
ALTER TABLE ONLY public.company_apps DROP CONSTRAINT fkjj1f6x78qaxvyq0gbp0fhdjmk;
ALTER TABLE ONLY public.app_usecases DROP CONSTRAINT fkikhw2cj2gr24hloglo0pawrfx;
ALTER TABLE ONLY public.company_application_memberroles DROP CONSTRAINT fki3iscrbwdykl7xjx4j9f3yhkp;
ALTER TABLE ONLY public.app_licenses DROP CONSTRAINT fkhqxy6x66cbkyuxpwf56gflo3c;
ALTER TABLE ONLY public.agreement DROP CONSTRAINT fkhkgeafcjpvqnkxwnkmbjc8dcj;
ALTER TABLE ONLY public.app_agreements DROP CONSTRAINT fkh5kkr03xr1a47daubljxcakwf;
ALTER TABLE ONLY public.company DROP CONSTRAINT fkgfifm4874ce6mecwj54wdb3ma;
ALTER TABLE ONLY public.company_application_agreements DROP CONSTRAINT fkgfdphek1b09ajg1gmte0pr8tx;
ALTER TABLE ONLY public.company_application_agreements DROP CONSTRAINT fkfk859lnpnse1cbixrm53esih1;
ALTER TABLE ONLY public.invitation DROP CONSTRAINT fkfdkg6wep556f3rlai3agfegpu;
ALTER TABLE ONLY public.consent DROP CONSTRAINT fkej741e2gq48jklp2eaa1uj9vx;
ALTER TABLE ONLY public.app_licenses DROP CONSTRAINT fkdb45v2bwdke9tx1m0tsnnac63;
ALTER TABLE ONLY public.company_usecases DROP CONSTRAINT fkbp1tvb29367du7hpa57tvhgy9;
ALTER TABLE ONLY public.company_application_memberroles DROP CONSTRAINT fkblrrkqoy8fsudr535562k6t1h;
ALTER TABLE ONLY public.consent DROP CONSTRAINT fkbewkgq5i1vuwat3j1mhewvhlh;
ALTER TABLE ONLY public.consent DROP CONSTRAINT fkb4bewdytswsa0y9o65txhilwt;
ALTER TABLE ONLY public.company_roles DROP CONSTRAINT fka6piwm3sqag62go5r9aorsb8c;
ALTER TABLE ONLY public.company DROP CONSTRAINT fk9wb8u851ode72lhd1mc8h1haa;
ALTER TABLE ONLY public.company_user DROP CONSTRAINT fk8pux05366ewknmfn8p0vgjy77;
ALTER TABLE ONLY public.app_version_description DROP CONSTRAINT fk8kneyusmjlnim17b7xovoeemw;
ALTER TABLE ONLY public.usage_agreement DROP CONSTRAINT fk81ilbpcpqqiedyqrv99gpx96d;
ALTER TABLE ONLY public.agreement_roles DROP CONSTRAINT fk7l5dld6yyhpywh5giib5kj19y;
ALTER TABLE ONLY public.identity_provider_external DROP CONSTRAINT fk75y7rvtw1vs8coecjt2fpg6pg;
ALTER TABLE ONLY public.app DROP CONSTRAINT fk70a0e2hglyj9cdlonish9e48n;
ALTER TABLE ONLY public.app_description DROP CONSTRAINT fk64exjwmhnq0uqfe2yy47atqps;
ALTER TABLE ONLY public.contract DROP CONSTRAINT fk5q4ff0eqigaiiqin276trmywi;
ALTER TABLE ONLY public.company_user_appfavourites DROP CONSTRAINT fk5gm8ptc6poufq58a5g45pxlpf;
ALTER TABLE ONLY public.identity_provider_catenax DROP CONSTRAINT fk4bsqkfyueu1w9s6ccgjc1uvak;
ALTER TABLE ONLY public.app DROP CONSTRAINT fk4861pdemj1btodptattucjk54;
ALTER TABLE ONLY public.app_roles DROP CONSTRAINT fk3r8h92kipu2buoiav1jk5lbx0;
ALTER TABLE ONLY public.app_usecases DROP CONSTRAINT fk29km31qqbxkufggkwlvr8i09g;
ALTER TABLE ONLY public.company_application DROP CONSTRAINT fk1w6s3pgqhrw55emsgc3xerqpx;
ALTER TABLE ONLY public.app_roles DROP CONSTRAINT fk1jpppdhu2ykhvmi1cl6vvpt7f;
ALTER TABLE ONLY public.agreement_roles DROP CONSTRAINT fk19s6pf9l28g63cyb5e4j8pcv4;
ALTER TABLE ONLY public.company_roles DROP CONSTRAINT fk13go3wxdsx4585n92cximkuwq;
ALTER TABLE ONLY public.use_case DROP CONSTRAINT use_case_pkey;
ALTER TABLE ONLY public.usage_agreement DROP CONSTRAINT usage_agreement_pkey;
ALTER TABLE ONLY public.app_agreements DROP CONSTRAINT uk_rt919mlxl4n5w1sqgr71277ju;
ALTER TABLE ONLY public.agreement_documents DROP CONSTRAINT uk_otgpqx8sag78de31n9ln46ty6;
ALTER TABLE ONLY public.company_application_agreements DROP CONSTRAINT uk_nn2q7ay0gkx0glnvt8h8lx47d;
ALTER TABLE ONLY public.company_application_memberroles DROP CONSTRAINT uk_jnin6ptxtaysis2uyo9624ypr;
ALTER TABLE ONLY public.agreement_roles DROP CONSTRAINT uk_6kruknd6fon8yo3qkv29g6hoe;
ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
ALTER TABLE ONLY public.policy DROP CONSTRAINT policy_pkey;
ALTER TABLE ONLY public.language DROP CONSTRAINT language_pkey;
ALTER TABLE ONLY public.invitation DROP CONSTRAINT invitation_pkey;
ALTER TABLE ONLY public.identity_provider DROP CONSTRAINT identity_provider_pkey;
ALTER TABLE ONLY public.identity_provider_external DROP CONSTRAINT identity_provider_external_pkey;
ALTER TABLE ONLY public.identity_provider_catenax DROP CONSTRAINT identity_provider_catenax_pkey;
ALTER TABLE ONLY public.document_template DROP CONSTRAINT document_template_pkey;
ALTER TABLE ONLY public.document DROP CONSTRAINT document_pkey;
ALTER TABLE ONLY public.country DROP CONSTRAINT country_pkey;
ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_pkey;
ALTER TABLE ONLY public.consent DROP CONSTRAINT consent_pkey;
ALTER TABLE ONLY public.company_user DROP CONSTRAINT company_user_pkey;
ALTER TABLE ONLY public.company_role DROP CONSTRAINT company_role_pkey;
ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
ALTER TABLE ONLY public.company_application DROP CONSTRAINT company_application_pkey;
ALTER TABLE ONLY public.app_version DROP CONSTRAINT app_version_pkey;
ALTER TABLE ONLY public.app DROP CONSTRAINT app_pkey;
ALTER TABLE ONLY public.app_license DROP CONSTRAINT app_license_pkey;
ALTER TABLE ONLY public.app_description DROP CONSTRAINT app_description_pkey;
ALTER TABLE ONLY public.agreement DROP CONSTRAINT agreement_pkey;
ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
DROP TABLE public.use_case;
DROP TABLE public.usage_agreement;
DROP TABLE public.role;
DROP TABLE public.policy;
DROP TABLE public.language;
DROP TABLE public.invitation;
DROP TABLE public.identity_provider_external;
DROP TABLE public.identity_provider_catenax;
DROP TABLE public.identity_provider;
DROP SEQUENCE public.hibernate_sequence;
DROP TABLE public.document_template;
DROP TABLE public.document;
DROP TABLE public.country;
DROP TABLE public.contract;
DROP TABLE public.consent;
DROP TABLE public.company_user_roles;
DROP TABLE public.company_user_appfavourites;
DROP TABLE public.company_user;
DROP TABLE public.company_usecases;
DROP TABLE public.company_roles;
DROP TABLE public.company_role;
DROP TABLE public.company_apps;
DROP TABLE public.company_application_memberroles;
DROP TABLE public.company_application_agreements;
DROP TABLE public.company_application;
DROP TABLE public.company;
DROP TABLE public.app_version_description;
DROP TABLE public.app_version;
DROP TABLE public.app_usecases;
DROP TABLE public.app_roles;
DROP TABLE public.app_licenses;
DROP TABLE public.app_license;
DROP TABLE public.app_description;
DROP TABLE public.app_agreements;
DROP TABLE public.app;
DROP TABLE public.agreement_roles;
DROP TABLE public.agreement_documents;
DROP TABLE public.agreement;
DROP TABLE public.address;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.address (
    id bigint NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    city character varying(255),
    region character varying(255),
    streetadditional character varying(255),
    streetname character varying(255),
    streetnumber character varying(255),
    zipcode numeric(19,2),
    country_country_name_en character varying(255)
);


--
-- Name: agreement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreement (
    item_category integer NOT NULL,
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name character varying(255) NOT NULL,
    issuer_companyid character varying(255) NOT NULL,
    app_uuid character varying(255)
);


--
-- Name: agreement_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreement_documents (
    agreement_id character varying(255) NOT NULL,
    documents_id character varying(255) NOT NULL
);


--
-- Name: agreement_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreement_roles (
    policy_id character varying(255) NOT NULL,
    roles_companyrole character varying(255) NOT NULL,
    contract_id character varying(255) NOT NULL
);


--
-- Name: app; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name character varying(255),
    currentversion_uuid character varying(255),
    vendor_companyid character varying(255)
);


--
-- Name: app_agreements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_agreements (
    app_uuid character varying(255) NOT NULL,
    agreements_id character varying(255) NOT NULL
);


--
-- Name: app_description; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_description (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    app character varying(255),
    description_long character varying(4096),
    description_short character varying(255),
    language_short_name character varying(255)
);


--
-- Name: app_license; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_license (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    licensetext character varying(255)
);


--
-- Name: app_licenses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_licenses (
    app_uuid character varying(255) NOT NULL,
    licenses_uuid character varying(255) NOT NULL
);


--
-- Name: app_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_roles (
    app_uuid character varying(255) NOT NULL,
    roles_uuid character varying(255) NOT NULL
);


--
-- Name: app_usecases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_usecases (
    app_uuid character varying(255) NOT NULL,
    usecases_name character varying(255) NOT NULL
);


--
-- Name: app_version; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_version (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    app character varying(255),
    version character varying(255)
);


--
-- Name: app_version_description; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_version_description (
    appversion_uuid character varying(255) NOT NULL,
    description_uuid character varying(255) NOT NULL
);


--
-- Name: company; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company (
    companyid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    bpn character varying(20) NOT NULL,
    name character varying(255),
    parent character varying(255),
    shortname character varying(255),
    address_id bigint,
    idp_uuid character varying(255)
);


--
-- Name: company_application; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_application (
    applicationid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    deputyacknowledgement boolean,
    status character varying(255),
    company_companyid character varying(255) NOT NULL
);


--
-- Name: company_application_agreements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_application_agreements (
    companyapplication_applicationid character varying(255) NOT NULL,
    agreements_id character varying(255) NOT NULL
);


--
-- Name: company_application_memberroles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_application_memberroles (
    companyapplication_applicationid character varying(255) NOT NULL,
    memberroles_companyrole character varying(255) NOT NULL
);


--
-- Name: company_apps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_apps (
    company_companyid character varying(255) NOT NULL,
    apps_uuid character varying(255) NOT NULL
);


--
-- Name: company_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_role (
    companyrole character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name_de character varying(255) NOT NULL,
    name_en character varying(255) NOT NULL
);


--
-- Name: company_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_roles (
    company_companyid character varying(255) NOT NULL,
    roles_companyrole character varying(255) NOT NULL
);


--
-- Name: company_usecases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_usecases (
    company_companyid character varying(255) NOT NULL,
    usecases_name character varying(255) NOT NULL
);


--
-- Name: company_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user (
    uuid character varying(255) NOT NULL,
    companyadmin boolean NOT NULL,
    created bytea,
    email character varying(255),
    firstname character varying(255),
    lastlogin bytea,
    lastname character varying(255),
    company_companyid character varying(255) NOT NULL
);


--
-- Name: company_user_appfavourites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user_appfavourites (
    user_uuid character varying(255) NOT NULL,
    appfavourites_uuid character varying(255) NOT NULL
);


--
-- Name: company_user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user_roles (
    user_uuid character varying(255) NOT NULL,
    roles_uuid character varying(255) NOT NULL
);


--
-- Name: consent; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consent (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    content character varying(255),
    status character varying(255) NOT NULL,
    target character varying(255),
    "timestamp" bytea NOT NULL,
    agreement_id character varying(255) NOT NULL,
    company_companyid character varying(255) NOT NULL,
    documents_id character varying(255),
    user_uuid character varying(255) NOT NULL
);


--
-- Name: contract; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contract (
    id character varying(255) NOT NULL
);


--
-- Name: country; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.country (
    country_name_en character varying(255) NOT NULL,
    alpha_2_code character varying(255),
    alpha_3_code character varying(255),
    country_name_de character varying(255)
);


--
-- Name: document; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    document oid NOT NULL,
    documenthash character varying(255) NOT NULL,
    documentname character varying(255) NOT NULL,
    documentuploaddate bytea NOT NULL,
    documentversion character varying(255) NOT NULL,
    documentuser character varying(255)
);


--
-- Name: document_template; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document_template (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    documenttemplatename character varying(255) NOT NULL,
    documenttemplateversion character varying(255) NOT NULL
);


--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: identity_provider; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.identity_provider (
    item_category integer NOT NULL,
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    extenalurl character varying(255),
    realm character varying(255),
    auth_url character varying(2048)
);


--
-- Name: identity_provider_catenax; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.identity_provider_catenax (
    uuid character varying(255) NOT NULL
);


--
-- Name: identity_provider_external; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.identity_provider_external (
    uuid character varying(255) NOT NULL
);


--
-- Name: invitation; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.invitation (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    status integer NOT NULL,
    application_applicationid character varying(255),
    user_uuid character varying(255) NOT NULL
);


--
-- Name: language; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.language (
    short_name character varying(255) NOT NULL,
    long_name_de character varying(255),
    long_name_en character varying(255)
);


--
-- Name: policy; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.policy (
    id character varying(255) NOT NULL
);


--
-- Name: role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.role (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    namede character varying(255) NOT NULL,
    nameen character varying(255) NOT NULL
);


--
-- Name: usage_agreement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usage_agreement (
    id character varying(255) NOT NULL
);


--
-- Name: use_case; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.use_case (
    name character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    shortname character varying(255)
);


--
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- Name: agreement agreement_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement
    ADD CONSTRAINT agreement_pkey PRIMARY KEY (id);


--
-- Name: app_description app_description_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_description
    ADD CONSTRAINT app_description_pkey PRIMARY KEY (uuid);


--
-- Name: app_license app_license_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_license
    ADD CONSTRAINT app_license_pkey PRIMARY KEY (uuid);


--
-- Name: app app_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app
    ADD CONSTRAINT app_pkey PRIMARY KEY (uuid);


--
-- Name: app_version app_version_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_version
    ADD CONSTRAINT app_version_pkey PRIMARY KEY (uuid);


--
-- Name: company_application company_application_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application
    ADD CONSTRAINT company_application_pkey PRIMARY KEY (applicationid);


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (companyid);


--
-- Name: company_role company_role_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_role
    ADD CONSTRAINT company_role_pkey PRIMARY KEY (companyrole);


--
-- Name: company_user company_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user
    ADD CONSTRAINT company_user_pkey PRIMARY KEY (uuid);


--
-- Name: consent consent_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consent
    ADD CONSTRAINT consent_pkey PRIMARY KEY (id);


--
-- Name: contract contract_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_pkey PRIMARY KEY (id);


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (country_name_en);


--
-- Name: document document_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_pkey PRIMARY KEY (id);


--
-- Name: document_template document_template_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_template
    ADD CONSTRAINT document_template_pkey PRIMARY KEY (id);


--
-- Name: identity_provider_catenax identity_provider_catenax_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_catenax
    ADD CONSTRAINT identity_provider_catenax_pkey PRIMARY KEY (uuid);


--
-- Name: identity_provider_external identity_provider_external_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_external
    ADD CONSTRAINT identity_provider_external_pkey PRIMARY KEY (uuid);


--
-- Name: identity_provider identity_provider_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider
    ADD CONSTRAINT identity_provider_pkey PRIMARY KEY (uuid);


--
-- Name: invitation invitation_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitation
    ADD CONSTRAINT invitation_pkey PRIMARY KEY (uuid);


--
-- Name: language language_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.language
    ADD CONSTRAINT language_pkey PRIMARY KEY (short_name);


--
-- Name: policy policy_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.policy
    ADD CONSTRAINT policy_pkey PRIMARY KEY (id);


--
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (uuid);


--
-- Name: agreement_roles uk_6kruknd6fon8yo3qkv29g6hoe; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_roles
    ADD CONSTRAINT uk_6kruknd6fon8yo3qkv29g6hoe UNIQUE (roles_companyrole);


--
-- Name: company_application_memberroles uk_jnin6ptxtaysis2uyo9624ypr; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_memberroles
    ADD CONSTRAINT uk_jnin6ptxtaysis2uyo9624ypr UNIQUE (memberroles_companyrole);


--
-- Name: company_application_agreements uk_nn2q7ay0gkx0glnvt8h8lx47d; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_agreements
    ADD CONSTRAINT uk_nn2q7ay0gkx0glnvt8h8lx47d UNIQUE (agreements_id);


--
-- Name: agreement_documents uk_otgpqx8sag78de31n9ln46ty6; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_documents
    ADD CONSTRAINT uk_otgpqx8sag78de31n9ln46ty6 UNIQUE (documents_id);


--
-- Name: app_agreements uk_rt919mlxl4n5w1sqgr71277ju; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_agreements
    ADD CONSTRAINT uk_rt919mlxl4n5w1sqgr71277ju UNIQUE (agreements_id);


--
-- Name: usage_agreement usage_agreement_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usage_agreement
    ADD CONSTRAINT usage_agreement_pkey PRIMARY KEY (id);


--
-- Name: use_case use_case_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.use_case
    ADD CONSTRAINT use_case_pkey PRIMARY KEY (name);


--
-- Name: company_roles fk13go3wxdsx4585n92cximkuwq; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_roles
    ADD CONSTRAINT fk13go3wxdsx4585n92cximkuwq FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: agreement_roles fk19s6pf9l28g63cyb5e4j8pcv4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_roles
    ADD CONSTRAINT fk19s6pf9l28g63cyb5e4j8pcv4 FOREIGN KEY (roles_companyrole) REFERENCES public.company_role(companyrole);


--
-- Name: app_roles fk1jpppdhu2ykhvmi1cl6vvpt7f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_roles
    ADD CONSTRAINT fk1jpppdhu2ykhvmi1cl6vvpt7f FOREIGN KEY (roles_uuid) REFERENCES public.role(uuid);


--
-- Name: company_application fk1w6s3pgqhrw55emsgc3xerqpx; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application
    ADD CONSTRAINT fk1w6s3pgqhrw55emsgc3xerqpx FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: app_usecases fk29km31qqbxkufggkwlvr8i09g; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_usecases
    ADD CONSTRAINT fk29km31qqbxkufggkwlvr8i09g FOREIGN KEY (app_uuid) REFERENCES public.app(uuid);


--
-- Name: app_roles fk3r8h92kipu2buoiav1jk5lbx0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_roles
    ADD CONSTRAINT fk3r8h92kipu2buoiav1jk5lbx0 FOREIGN KEY (app_uuid) REFERENCES public.app(uuid);


--
-- Name: app fk4861pdemj1btodptattucjk54; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app
    ADD CONSTRAINT fk4861pdemj1btodptattucjk54 FOREIGN KEY (currentversion_uuid) REFERENCES public.app_version(uuid);


--
-- Name: identity_provider_catenax fk4bsqkfyueu1w9s6ccgjc1uvak; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_catenax
    ADD CONSTRAINT fk4bsqkfyueu1w9s6ccgjc1uvak FOREIGN KEY (uuid) REFERENCES public.identity_provider(uuid);


--
-- Name: company_user_appfavourites fk5gm8ptc6poufq58a5g45pxlpf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_appfavourites
    ADD CONSTRAINT fk5gm8ptc6poufq58a5g45pxlpf FOREIGN KEY (user_uuid) REFERENCES public.company_user(uuid);


--
-- Name: contract fk5q4ff0eqigaiiqin276trmywi; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contract
    ADD CONSTRAINT fk5q4ff0eqigaiiqin276trmywi FOREIGN KEY (id) REFERENCES public.agreement(id);


--
-- Name: app_description fk64exjwmhnq0uqfe2yy47atqps; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_description
    ADD CONSTRAINT fk64exjwmhnq0uqfe2yy47atqps FOREIGN KEY (language_short_name) REFERENCES public.language(short_name);


--
-- Name: app fk70a0e2hglyj9cdlonish9e48n; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app
    ADD CONSTRAINT fk70a0e2hglyj9cdlonish9e48n FOREIGN KEY (vendor_companyid) REFERENCES public.company(companyid);


--
-- Name: identity_provider_external fk75y7rvtw1vs8coecjt2fpg6pg; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_external
    ADD CONSTRAINT fk75y7rvtw1vs8coecjt2fpg6pg FOREIGN KEY (uuid) REFERENCES public.identity_provider(uuid);


--
-- Name: agreement_roles fk7l5dld6yyhpywh5giib5kj19y; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_roles
    ADD CONSTRAINT fk7l5dld6yyhpywh5giib5kj19y FOREIGN KEY (policy_id) REFERENCES public.agreement(id);


--
-- Name: usage_agreement fk81ilbpcpqqiedyqrv99gpx96d; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usage_agreement
    ADD CONSTRAINT fk81ilbpcpqqiedyqrv99gpx96d FOREIGN KEY (id) REFERENCES public.agreement(id);


--
-- Name: app_version_description fk8kneyusmjlnim17b7xovoeemw; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_version_description
    ADD CONSTRAINT fk8kneyusmjlnim17b7xovoeemw FOREIGN KEY (appversion_uuid) REFERENCES public.app_version(uuid);


--
-- Name: company_user fk8pux05366ewknmfn8p0vgjy77; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user
    ADD CONSTRAINT fk8pux05366ewknmfn8p0vgjy77 FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: company fk9wb8u851ode72lhd1mc8h1haa; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT fk9wb8u851ode72lhd1mc8h1haa FOREIGN KEY (idp_uuid) REFERENCES public.identity_provider(uuid);


--
-- Name: company_roles fka6piwm3sqag62go5r9aorsb8c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_roles
    ADD CONSTRAINT fka6piwm3sqag62go5r9aorsb8c FOREIGN KEY (roles_companyrole) REFERENCES public.company_role(companyrole);


--
-- Name: consent fkb4bewdytswsa0y9o65txhilwt; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consent
    ADD CONSTRAINT fkb4bewdytswsa0y9o65txhilwt FOREIGN KEY (user_uuid) REFERENCES public.company_user(uuid);


--
-- Name: consent fkbewkgq5i1vuwat3j1mhewvhlh; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consent
    ADD CONSTRAINT fkbewkgq5i1vuwat3j1mhewvhlh FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: company_application_memberroles fkblrrkqoy8fsudr535562k6t1h; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_memberroles
    ADD CONSTRAINT fkblrrkqoy8fsudr535562k6t1h FOREIGN KEY (companyapplication_applicationid) REFERENCES public.company_application(applicationid);


--
-- Name: company_usecases fkbp1tvb29367du7hpa57tvhgy9; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_usecases
    ADD CONSTRAINT fkbp1tvb29367du7hpa57tvhgy9 FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: app_licenses fkdb45v2bwdke9tx1m0tsnnac63; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_licenses
    ADD CONSTRAINT fkdb45v2bwdke9tx1m0tsnnac63 FOREIGN KEY (app_uuid) REFERENCES public.app(uuid);


--
-- Name: consent fkej741e2gq48jklp2eaa1uj9vx; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consent
    ADD CONSTRAINT fkej741e2gq48jklp2eaa1uj9vx FOREIGN KEY (agreement_id) REFERENCES public.agreement(id);


--
-- Name: invitation fkfdkg6wep556f3rlai3agfegpu; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitation
    ADD CONSTRAINT fkfdkg6wep556f3rlai3agfegpu FOREIGN KEY (application_applicationid) REFERENCES public.company_application(applicationid);


--
-- Name: company_application_agreements fkfk859lnpnse1cbixrm53esih1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_agreements
    ADD CONSTRAINT fkfk859lnpnse1cbixrm53esih1 FOREIGN KEY (companyapplication_applicationid) REFERENCES public.company_application(applicationid);


--
-- Name: company_application_agreements fkgfdphek1b09ajg1gmte0pr8tx; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_agreements
    ADD CONSTRAINT fkgfdphek1b09ajg1gmte0pr8tx FOREIGN KEY (agreements_id) REFERENCES public.agreement(id);


--
-- Name: company fkgfifm4874ce6mecwj54wdb3ma; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT fkgfifm4874ce6mecwj54wdb3ma FOREIGN KEY (address_id) REFERENCES public.address(id);


--
-- Name: app_agreements fkh5kkr03xr1a47daubljxcakwf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_agreements
    ADD CONSTRAINT fkh5kkr03xr1a47daubljxcakwf FOREIGN KEY (app_uuid) REFERENCES public.app(uuid);


--
-- Name: agreement fkhkgeafcjpvqnkxwnkmbjc8dcj; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement
    ADD CONSTRAINT fkhkgeafcjpvqnkxwnkmbjc8dcj FOREIGN KEY (app_uuid) REFERENCES public.app(uuid);


--
-- Name: app_licenses fkhqxy6x66cbkyuxpwf56gflo3c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_licenses
    ADD CONSTRAINT fkhqxy6x66cbkyuxpwf56gflo3c FOREIGN KEY (licenses_uuid) REFERENCES public.app_license(uuid);


--
-- Name: company_application_memberroles fki3iscrbwdykl7xjx4j9f3yhkp; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_application_memberroles
    ADD CONSTRAINT fki3iscrbwdykl7xjx4j9f3yhkp FOREIGN KEY (memberroles_companyrole) REFERENCES public.company_role(companyrole);


--
-- Name: app_usecases fkikhw2cj2gr24hloglo0pawrfx; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_usecases
    ADD CONSTRAINT fkikhw2cj2gr24hloglo0pawrfx FOREIGN KEY (usecases_name) REFERENCES public.use_case(name);


--
-- Name: company_apps fkjj1f6x78qaxvyq0gbp0fhdjmk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_apps
    ADD CONSTRAINT fkjj1f6x78qaxvyq0gbp0fhdjmk FOREIGN KEY (company_companyid) REFERENCES public.company(companyid);


--
-- Name: company_user_roles fkjj8n34jkirg6ykpm6u8pklo1d; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_roles
    ADD CONSTRAINT fkjj8n34jkirg6ykpm6u8pklo1d FOREIGN KEY (roles_uuid) REFERENCES public.role(uuid);


--
-- Name: app_version_description fkjq6u4ns756dm82vu30crsvshq; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_version_description
    ADD CONSTRAINT fkjq6u4ns756dm82vu30crsvshq FOREIGN KEY (description_uuid) REFERENCES public.app_description(uuid);


--
-- Name: address fkkcwlkhkrfj54b1yx1dmeidam9; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fkkcwlkhkrfj54b1yx1dmeidam9 FOREIGN KEY (country_country_name_en) REFERENCES public.country(country_name_en);


--
-- Name: company_user_roles fklf5962qg3a3e9ie9t1xmt67im; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_roles
    ADD CONSTRAINT fklf5962qg3a3e9ie9t1xmt67im FOREIGN KEY (user_uuid) REFERENCES public.company_user(uuid);


--
-- Name: document fkll9ftqsw3b8banx5283kno8lq; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT fkll9ftqsw3b8banx5283kno8lq FOREIGN KEY (documentuser) REFERENCES public.company_user(uuid);


--
-- Name: agreement_documents fklrjavekoem3kgj7pawsh0yk9c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_documents
    ADD CONSTRAINT fklrjavekoem3kgj7pawsh0yk9c FOREIGN KEY (documents_id) REFERENCES public.document_template(id);


--
-- Name: agreement_roles fkltfqljkacdmlgtr9iec71kq0o; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_roles
    ADD CONSTRAINT fkltfqljkacdmlgtr9iec71kq0o FOREIGN KEY (contract_id) REFERENCES public.agreement(id);


--
-- Name: consent fkmgq37cv032gltkh2ynjcas6f8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consent
    ADD CONSTRAINT fkmgq37cv032gltkh2ynjcas6f8 FOREIGN KEY (documents_id) REFERENCES public.document(id);


--
-- Name: company_user_appfavourites fkn75rh2x2cgersusxc5u8yn8h8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_appfavourites
    ADD CONSTRAINT fkn75rh2x2cgersusxc5u8yn8h8 FOREIGN KEY (appfavourites_uuid) REFERENCES public.app(uuid);


--
-- Name: agreement_documents fkne75pie16l1mxjggyyhg1er5y; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_documents
    ADD CONSTRAINT fkne75pie16l1mxjggyyhg1er5y FOREIGN KEY (agreement_id) REFERENCES public.agreement(id);


--
-- Name: invitation fkphjtfnn8m3nrg0cwa5beco7hh; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitation
    ADD CONSTRAINT fkphjtfnn8m3nrg0cwa5beco7hh FOREIGN KEY (user_uuid) REFERENCES public.company_user(uuid);


--
-- Name: app_agreements fkq37h8ql6av2ywp9m9wtq0ydv5; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_agreements
    ADD CONSTRAINT fkq37h8ql6av2ywp9m9wtq0ydv5 FOREIGN KEY (agreements_id) REFERENCES public.agreement(id);


--
-- Name: company_apps fkqpe388nsvq4dbboqhbhr771ld; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_apps
    ADD CONSTRAINT fkqpe388nsvq4dbboqhbhr771ld FOREIGN KEY (apps_uuid) REFERENCES public.app(uuid);


--
-- Name: policy fkrn4r8y9dijpr4arhe1cse0o6j; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.policy
    ADD CONSTRAINT fkrn4r8y9dijpr4arhe1cse0o6j FOREIGN KEY (id) REFERENCES public.agreement(id);


--
-- Name: agreement fkt91pkkfiegka64h156tano4y4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement
    ADD CONSTRAINT fkt91pkkfiegka64h156tano4y4 FOREIGN KEY (issuer_companyid) REFERENCES public.company(companyid);


--
-- Name: company_usecases fktgryxfhqy65nrsma372464ofv; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_usecases
    ADD CONSTRAINT fktgryxfhqy65nrsma372464ofv FOREIGN KEY (usecases_name) REFERENCES public.use_case(name);


--
-- PostgreSQL database dump complete
--

