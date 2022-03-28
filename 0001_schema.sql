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

ALTER TABLE ONLY public.invitations DROP CONSTRAINT fktdlrst4ju9d0wcgkh4w1nnoj3;
ALTER TABLE ONLY public.app_descriptions DROP CONSTRAINT fkrvrom2pjij9x6stgovhaqkfxf;
ALTER TABLE ONLY public.app_assigned_use_cases DROP CONSTRAINT fkrqi320sp8lxy7drw6kt4vheka;
ALTER TABLE ONLY public.documents DROP CONSTRAINT fkqxcgobngn7vk56k8nfkuaysvn;
ALTER TABLE ONLY public.agreement_assigned_document_templates DROP CONSTRAINT fkqbvrvs5aktrcn4t6565pnj3ur;
ALTER TABLE ONLY public.consents DROP CONSTRAINT fko39a5cbiv35v59ysgfon5oole;
ALTER TABLE ONLY public.app_assigned_licenses DROP CONSTRAINT fklmes2xm3i1wotryfc88be4dkf;
ALTER TABLE ONLY public.company_user_assigned_app_favourites DROP CONSTRAINT fkleip97mygnbglivrtmkagesjh;
ALTER TABLE ONLY public.invitations DROP CONSTRAINT fkj9tgenb7p09hr5c24haxjw259;
ALTER TABLE ONLY public.company_user_assigned_roles DROP CONSTRAINT fkibw1yhel67uhrxfk7mevovq5p;
ALTER TABLE ONLY public.agreement_assigned_roles DROP CONSTRAINT fkhmxxtv8wflf9348kchdehy9w;
ALTER TABLE ONLY public.company_user_assigned_app_favourites DROP CONSTRAINT fkgwva553r3xiew3ngbdkvafk85;
ALTER TABLE ONLY public.agreements DROP CONSTRAINT fkfooy9ydkah696jxh4lq7pn0xe;
ALTER TABLE ONLY public.consents DROP CONSTRAINT fkf36j22f34lgi2444n4tynxamh;
ALTER TABLE ONLY public.identity_provider_users DROP CONSTRAINT fkexmc82l7c4u55jlik7s08js4h;
ALTER TABLE ONLY public.app_assigned_use_cases DROP CONSTRAINT fkesjyfs49ma0kxaqfknjbaye0i;
ALTER TABLE ONLY public.agreement_assigned_document_templates DROP CONSTRAINT fkdfvcwoptsuer9p23m055osose;
ALTER TABLE ONLY public.agreements DROP CONSTRAINT fkcwhby66dika71srejhja6g75a;
ALTER TABLE ONLY public.app_descriptions DROP CONSTRAINT fkcqamy6j7s3klebrf2s69v9k0i;
ALTER TABLE ONLY public.consents DROP CONSTRAINT fkc6nrtafckouq96m0fw2qtpwbs;
ALTER TABLE ONLY public.identity_provider_users DROP CONSTRAINT fkbpqod3ubjp9rxf9sev5ia9gqi;
ALTER TABLE ONLY public.consents DROP CONSTRAINT fkbasqxie2r7yr06cdrw9ifaex8;
ALTER TABLE ONLY public.app_assigned_licenses DROP CONSTRAINT fkb3of613iyw1jx8gcj5i46jc1h;
ALTER TABLE ONLY public.company_assigned_apps DROP CONSTRAINT fkak1dqlv81463yes0k8f2giyaf;
ALTER TABLE ONLY public.app_assigned_company_user_roles DROP CONSTRAINT fk9oayyvy590ngh5705yspep0up;
ALTER TABLE ONLY public.company_applications DROP CONSTRAINT fk93prv5i3o84vwvh7v0hh3sav7;
ALTER TABLE ONLY public.companies DROP CONSTRAINT fk8w70yf6urddd0ky7ev90okenf;
ALTER TABLE ONLY public.company_assigned_use_cases DROP CONSTRAINT fk7u65fkdrxnbkp8n0s7mate01v;
ALTER TABLE ONLY public.company_assigned_apps DROP CONSTRAINT fk7t365qpfvehuq40om25dyrnn5;
ALTER TABLE ONLY public.company_user_assigned_roles DROP CONSTRAINT fk70c9rjjf9gm3l0n6reb4o0f1s;
ALTER TABLE ONLY public.company_assigned_roles DROP CONSTRAINT fk64db4hgj3yvqlkn9h6q8m4e0j;
ALTER TABLE ONLY public.company_assigned_use_cases DROP CONSTRAINT fk4m5eyaohrl0g9ju52byxsouqk;
ALTER TABLE ONLY public.company_users DROP CONSTRAINT fk4ku01366dbcqk8h32lh8k5sx1;
ALTER TABLE ONLY public.app_assigned_company_user_roles DROP CONSTRAINT fk44m022ek8gffepnqlnuxwyxp8;
ALTER TABLE ONLY public.companies DROP CONSTRAINT fk42bkuo66ym9eqeqiu1fag3552;
ALTER TABLE ONLY public.agreement_assigned_roles DROP CONSTRAINT fk3t84kbcu9d1w6y5smfmbpw7ly;
ALTER TABLE ONLY public.addresses DROP CONSTRAINT fk36jg6itw07d2qww62deuyk0kh;
ALTER TABLE ONLY public.apps DROP CONSTRAINT fk368a9joedhyf43smfx2xc4rgm;
ALTER TABLE ONLY public.agreements DROP CONSTRAINT fk2n4nnf5bn8i3i9ijrf7kchfvc;
ALTER TABLE ONLY public.company_assigned_roles DROP CONSTRAINT fk1my2p7jlqrjf0tq1f8rhk0i0a;
ALTER TABLE ONLY public.use_cases DROP CONSTRAINT use_cases_pkey;
ALTER TABLE ONLY public.agreement_assigned_roles DROP CONSTRAINT uk_fytnk4ph9g43effwjverbu29w;
ALTER TABLE ONLY public.agreement_assigned_document_templates DROP CONSTRAINT uk_9ib7xuc1vke96s9rvlyhxbtuc;
ALTER TABLE ONLY public.languages DROP CONSTRAINT languages_pkey;
ALTER TABLE ONLY public.invitations DROP CONSTRAINT invitations_pkey;
ALTER TABLE ONLY public.identity_providers DROP CONSTRAINT identity_providers_pkey;
ALTER TABLE ONLY public.identity_provider_users DROP CONSTRAINT identity_provider_users_pkey;
ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
ALTER TABLE ONLY public.document_templates DROP CONSTRAINT document_templates_pkey;
ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
ALTER TABLE ONLY public.consents DROP CONSTRAINT consents_pkey;
ALTER TABLE ONLY public.company_users DROP CONSTRAINT company_users_pkey;
ALTER TABLE ONLY public.company_user_roles DROP CONSTRAINT company_user_roles_pkey;
ALTER TABLE ONLY public.company_roles DROP CONSTRAINT company_roles_pkey;
ALTER TABLE ONLY public.company_applications DROP CONSTRAINT company_applications_pkey;
ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
ALTER TABLE ONLY public.apps DROP CONSTRAINT apps_pkey;
ALTER TABLE ONLY public.app_licenses DROP CONSTRAINT app_licenses_pkey;
ALTER TABLE ONLY public.app_descriptions DROP CONSTRAINT app_descriptions_pkey;
ALTER TABLE ONLY public.agreements DROP CONSTRAINT agreements_pkey;
ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_pkey;
DROP TABLE public.use_cases;
DROP TABLE public.languages;
DROP TABLE public.invitations;
DROP TABLE public.identity_providers;
DROP TABLE public.identity_provider_users;
DROP SEQUENCE public.hibernate_sequence;
DROP TABLE public.documents;
DROP TABLE public.document_templates;
DROP TABLE public.countries;
DROP TABLE public.consents;
DROP TABLE public.company_users;
DROP TABLE public.company_user_roles;
DROP TABLE public.company_user_assigned_roles;
DROP TABLE public.company_user_assigned_app_favourites;
DROP TABLE public.company_roles;
DROP TABLE public.company_assigned_use_cases;
DROP TABLE public.company_assigned_roles;
DROP TABLE public.company_assigned_apps;
DROP TABLE public.company_applications;
DROP TABLE public.companies;
DROP TABLE public.apps;
DROP TABLE public.app_licenses;
DROP TABLE public.app_descriptions;
DROP TABLE public.app_assigned_use_cases;
DROP TABLE public.app_assigned_licenses;
DROP TABLE public.app_assigned_company_user_roles;
DROP TABLE public.agreements;
DROP TABLE public.agreement_assigned_roles;
DROP TABLE public.agreement_assigned_document_templates;
DROP TABLE public.addresses;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.addresses (
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
-- Name: agreement_assigned_document_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreement_assigned_document_templates (
    agreement_id uuid NOT NULL,
    document_template_id character varying(255) NOT NULL
);


--
-- Name: agreement_assigned_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreement_assigned_roles (
    agreement_id uuid NOT NULL,
    role_id character varying(255) NOT NULL
);


--
-- Name: agreements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.agreements (
    item_category integer NOT NULL,
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    agreement_type character varying(255),
    name character varying(255) NOT NULL,
    app_id uuid,
    issuer_companyid character varying(255) NOT NULL,
    usecase_id uuid
);


--
-- Name: app_assigned_company_user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_assigned_company_user_roles (
    app_id uuid NOT NULL,
    company_user_role_id character varying(255) NOT NULL
);


--
-- Name: app_assigned_licenses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_assigned_licenses (
    app_id uuid NOT NULL,
    app_license_id uuid NOT NULL
);


--
-- Name: app_assigned_use_cases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_assigned_use_cases (
    app_id uuid NOT NULL,
    use_case_id uuid NOT NULL
);


--
-- Name: app_descriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_descriptions (
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    description_long character varying(4096),
    description_short character varying(255),
    app_id uuid NOT NULL,
    language_short_name character varying(255) NOT NULL
);


--
-- Name: app_licenses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.app_licenses (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    licensetext character varying(255)
);


--
-- Name: apps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.apps (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name character varying(255),
    date_released timestamp without time zone,
    thumbnail_url character varying(255),
    vendor_companyid character varying(255)
);


--
-- Name: companies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.companies (
    companyid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    bpn character varying(20) NOT NULL,
    name character varying(255),
    parent character varying(255),
    shortname character varying(255),
    status character varying(255),
    address_id bigint,
    idp_id uuid
);


--
-- Name: company_applications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_applications (
    applicationid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    status character varying(255),
    company_companyid character varying(255) NOT NULL
);


--
-- Name: company_assigned_apps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_assigned_apps (
    company_id character varying(255) NOT NULL,
    app_id uuid NOT NULL
);


--
-- Name: company_assigned_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_assigned_roles (
    company_id character varying(255) NOT NULL,
    company_role_id character varying(255) NOT NULL
);


--
-- Name: company_assigned_use_cases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_assigned_use_cases (
    company_id character varying(255) NOT NULL,
    use_case_id uuid NOT NULL
);


--
-- Name: company_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_roles (
    company_role_id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name_de character varying(255) NOT NULL,
    name_en character varying(255) NOT NULL
);


--
-- Name: company_user_assigned_app_favourites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user_assigned_app_favourites (
    company_user_id uuid NOT NULL,
    app_id uuid NOT NULL
);


--
-- Name: company_user_assigned_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user_assigned_roles (
    company_user_id uuid NOT NULL,
    role_id character varying(255) NOT NULL
);


--
-- Name: company_user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_user_roles (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    namede character varying(255) NOT NULL,
    nameen character varying(255) NOT NULL
);


--
-- Name: company_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.company_users (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    email character varying(255),
    firstname character varying(255),
    lastlogin bytea,
    lastname character varying(255),
    company_companyid character varying(255) NOT NULL
);


--
-- Name: consents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consents (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    comment character varying(255),
    status character varying(255) NOT NULL,
    target character varying(255),
    "timestamp" bytea NOT NULL,
    agreement_id uuid NOT NULL,
    company_companyid character varying(255) NOT NULL,
    documents_id uuid,
    user_id uuid NOT NULL
);


--
-- Name: countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.countries (
    country_name_en character varying(255) NOT NULL,
    alpha_2_code character varying(255),
    alpha_3_code character varying(255),
    country_name_de character varying(255)
);


--
-- Name: document_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document_templates (
    id character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    documenttemplatename character varying(255) NOT NULL,
    documenttemplateversion character varying(255) NOT NULL
);


--
-- Name: documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.documents (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    document oid NOT NULL,
    documenthash character varying(255) NOT NULL,
    documentname character varying(255) NOT NULL,
    documentuploaddate bytea NOT NULL,
    documentversion character varying(255) NOT NULL,
    documentuser uuid
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
-- Name: identity_provider_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.identity_provider_users (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    idp_id uuid,
    user_id uuid
);


--
-- Name: identity_providers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.identity_providers (
    item_category integer NOT NULL,
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    realm character varying(255),
    auth_url character varying(2048)
);


--
-- Name: invitations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.invitations (
    uuid character varying(255) NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    status character varying(255) NOT NULL,
    application_applicationid character varying(255),
    user_id uuid NOT NULL
);


--
-- Name: languages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.languages (
    short_name character varying(255) NOT NULL,
    long_name_de character varying(255),
    long_name_en character varying(255)
);


--
-- Name: use_cases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.use_cases (
    id uuid NOT NULL,
    date_created timestamp without time zone,
    date_last_changed timestamp without time zone,
    name character varying(255),
    shortname character varying(255)
);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: agreements agreements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreements
    ADD CONSTRAINT agreements_pkey PRIMARY KEY (id);


--
-- Name: app_descriptions app_descriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_descriptions
    ADD CONSTRAINT app_descriptions_pkey PRIMARY KEY (app_id, language_short_name);


--
-- Name: app_licenses app_licenses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_licenses
    ADD CONSTRAINT app_licenses_pkey PRIMARY KEY (id);


--
-- Name: apps apps_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_pkey PRIMARY KEY (id);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (companyid);


--
-- Name: company_applications company_applications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_applications
    ADD CONSTRAINT company_applications_pkey PRIMARY KEY (applicationid);


--
-- Name: company_roles company_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_roles
    ADD CONSTRAINT company_roles_pkey PRIMARY KEY (company_role_id);


--
-- Name: company_user_roles company_user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_roles
    ADD CONSTRAINT company_user_roles_pkey PRIMARY KEY (id);


--
-- Name: company_users company_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_users
    ADD CONSTRAINT company_users_pkey PRIMARY KEY (id);


--
-- Name: consents consents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consents
    ADD CONSTRAINT consents_pkey PRIMARY KEY (id);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_name_en);


--
-- Name: document_templates document_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_templates
    ADD CONSTRAINT document_templates_pkey PRIMARY KEY (id);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);


--
-- Name: identity_provider_users identity_provider_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_users
    ADD CONSTRAINT identity_provider_users_pkey PRIMARY KEY (id);


--
-- Name: identity_providers identity_providers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_providers
    ADD CONSTRAINT identity_providers_pkey PRIMARY KEY (id);


--
-- Name: invitations invitations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitations
    ADD CONSTRAINT invitations_pkey PRIMARY KEY (uuid);


--
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (short_name);


--
-- Name: agreement_assigned_document_templates uk_9ib7xuc1vke96s9rvlyhxbtuc; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_document_templates
    ADD CONSTRAINT uk_9ib7xuc1vke96s9rvlyhxbtuc UNIQUE (document_template_id);


--
-- Name: agreement_assigned_roles uk_fytnk4ph9g43effwjverbu29w; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_roles
    ADD CONSTRAINT uk_fytnk4ph9g43effwjverbu29w UNIQUE (role_id);


--
-- Name: use_cases use_cases_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.use_cases
    ADD CONSTRAINT use_cases_pkey PRIMARY KEY (id);


--
-- Name: company_assigned_roles fk1my2p7jlqrjf0tq1f8rhk0i0a; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_roles
    ADD CONSTRAINT fk1my2p7jlqrjf0tq1f8rhk0i0a FOREIGN KEY (company_role_id) REFERENCES public.company_roles(company_role_id);


--
-- Name: agreements fk2n4nnf5bn8i3i9ijrf7kchfvc; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreements
    ADD CONSTRAINT fk2n4nnf5bn8i3i9ijrf7kchfvc FOREIGN KEY (issuer_companyid) REFERENCES public.companies(companyid);


--
-- Name: apps fk368a9joedhyf43smfx2xc4rgm; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT fk368a9joedhyf43smfx2xc4rgm FOREIGN KEY (vendor_companyid) REFERENCES public.companies(companyid);


--
-- Name: addresses fk36jg6itw07d2qww62deuyk0kh; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT fk36jg6itw07d2qww62deuyk0kh FOREIGN KEY (country_country_name_en) REFERENCES public.countries(country_name_en);


--
-- Name: agreement_assigned_roles fk3t84kbcu9d1w6y5smfmbpw7ly; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_roles
    ADD CONSTRAINT fk3t84kbcu9d1w6y5smfmbpw7ly FOREIGN KEY (agreement_id) REFERENCES public.agreements(id);


--
-- Name: companies fk42bkuo66ym9eqeqiu1fag3552; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT fk42bkuo66ym9eqeqiu1fag3552 FOREIGN KEY (idp_id) REFERENCES public.identity_providers(id);


--
-- Name: app_assigned_company_user_roles fk44m022ek8gffepnqlnuxwyxp8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_company_user_roles
    ADD CONSTRAINT fk44m022ek8gffepnqlnuxwyxp8 FOREIGN KEY (company_user_role_id) REFERENCES public.company_user_roles(id);


--
-- Name: company_users fk4ku01366dbcqk8h32lh8k5sx1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_users
    ADD CONSTRAINT fk4ku01366dbcqk8h32lh8k5sx1 FOREIGN KEY (company_companyid) REFERENCES public.companies(companyid);


--
-- Name: company_assigned_use_cases fk4m5eyaohrl0g9ju52byxsouqk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_use_cases
    ADD CONSTRAINT fk4m5eyaohrl0g9ju52byxsouqk FOREIGN KEY (use_case_id) REFERENCES public.use_cases(id);


--
-- Name: company_assigned_roles fk64db4hgj3yvqlkn9h6q8m4e0j; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_roles
    ADD CONSTRAINT fk64db4hgj3yvqlkn9h6q8m4e0j FOREIGN KEY (company_id) REFERENCES public.companies(companyid);


--
-- Name: company_user_assigned_roles fk70c9rjjf9gm3l0n6reb4o0f1s; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_assigned_roles
    ADD CONSTRAINT fk70c9rjjf9gm3l0n6reb4o0f1s FOREIGN KEY (company_user_id) REFERENCES public.company_users(id);


--
-- Name: company_assigned_apps fk7t365qpfvehuq40om25dyrnn5; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_apps
    ADD CONSTRAINT fk7t365qpfvehuq40om25dyrnn5 FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: company_assigned_use_cases fk7u65fkdrxnbkp8n0s7mate01v; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_use_cases
    ADD CONSTRAINT fk7u65fkdrxnbkp8n0s7mate01v FOREIGN KEY (company_id) REFERENCES public.companies(companyid);


--
-- Name: companies fk8w70yf6urddd0ky7ev90okenf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT fk8w70yf6urddd0ky7ev90okenf FOREIGN KEY (address_id) REFERENCES public.addresses(id);


--
-- Name: company_applications fk93prv5i3o84vwvh7v0hh3sav7; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_applications
    ADD CONSTRAINT fk93prv5i3o84vwvh7v0hh3sav7 FOREIGN KEY (company_companyid) REFERENCES public.companies(companyid);


--
-- Name: app_assigned_company_user_roles fk9oayyvy590ngh5705yspep0up; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_company_user_roles
    ADD CONSTRAINT fk9oayyvy590ngh5705yspep0up FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: company_assigned_apps fkak1dqlv81463yes0k8f2giyaf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_assigned_apps
    ADD CONSTRAINT fkak1dqlv81463yes0k8f2giyaf FOREIGN KEY (company_id) REFERENCES public.companies(companyid);


--
-- Name: app_assigned_licenses fkb3of613iyw1jx8gcj5i46jc1h; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_licenses
    ADD CONSTRAINT fkb3of613iyw1jx8gcj5i46jc1h FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: consents fkbasqxie2r7yr06cdrw9ifaex8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consents
    ADD CONSTRAINT fkbasqxie2r7yr06cdrw9ifaex8 FOREIGN KEY (company_companyid) REFERENCES public.companies(companyid);


--
-- Name: identity_provider_users fkbpqod3ubjp9rxf9sev5ia9gqi; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_users
    ADD CONSTRAINT fkbpqod3ubjp9rxf9sev5ia9gqi FOREIGN KEY (idp_id) REFERENCES public.identity_providers(id);


--
-- Name: consents fkc6nrtafckouq96m0fw2qtpwbs; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consents
    ADD CONSTRAINT fkc6nrtafckouq96m0fw2qtpwbs FOREIGN KEY (user_id) REFERENCES public.company_users(id);


--
-- Name: app_descriptions fkcqamy6j7s3klebrf2s69v9k0i; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_descriptions
    ADD CONSTRAINT fkcqamy6j7s3klebrf2s69v9k0i FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: agreements fkcwhby66dika71srejhja6g75a; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreements
    ADD CONSTRAINT fkcwhby66dika71srejhja6g75a FOREIGN KEY (usecase_id) REFERENCES public.use_cases(id);


--
-- Name: agreement_assigned_document_templates fkdfvcwoptsuer9p23m055osose; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_document_templates
    ADD CONSTRAINT fkdfvcwoptsuer9p23m055osose FOREIGN KEY (agreement_id) REFERENCES public.agreements(id);


--
-- Name: app_assigned_use_cases fkesjyfs49ma0kxaqfknjbaye0i; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_use_cases
    ADD CONSTRAINT fkesjyfs49ma0kxaqfknjbaye0i FOREIGN KEY (use_case_id) REFERENCES public.use_cases(id);


--
-- Name: identity_provider_users fkexmc82l7c4u55jlik7s08js4h; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.identity_provider_users
    ADD CONSTRAINT fkexmc82l7c4u55jlik7s08js4h FOREIGN KEY (user_id) REFERENCES public.company_users(id);


--
-- Name: consents fkf36j22f34lgi2444n4tynxamh; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consents
    ADD CONSTRAINT fkf36j22f34lgi2444n4tynxamh FOREIGN KEY (documents_id) REFERENCES public.documents(id);


--
-- Name: agreements fkfooy9ydkah696jxh4lq7pn0xe; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreements
    ADD CONSTRAINT fkfooy9ydkah696jxh4lq7pn0xe FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: company_user_assigned_app_favourites fkgwva553r3xiew3ngbdkvafk85; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_assigned_app_favourites
    ADD CONSTRAINT fkgwva553r3xiew3ngbdkvafk85 FOREIGN KEY (company_user_id) REFERENCES public.company_users(id);


--
-- Name: agreement_assigned_roles fkhmxxtv8wflf9348kchdehy9w; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_roles
    ADD CONSTRAINT fkhmxxtv8wflf9348kchdehy9w FOREIGN KEY (role_id) REFERENCES public.company_roles(company_role_id);


--
-- Name: company_user_assigned_roles fkibw1yhel67uhrxfk7mevovq5p; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_assigned_roles
    ADD CONSTRAINT fkibw1yhel67uhrxfk7mevovq5p FOREIGN KEY (role_id) REFERENCES public.company_user_roles(id);


--
-- Name: invitations fkj9tgenb7p09hr5c24haxjw259; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitations
    ADD CONSTRAINT fkj9tgenb7p09hr5c24haxjw259 FOREIGN KEY (user_id) REFERENCES public.company_users(id);


--
-- Name: company_user_assigned_app_favourites fkleip97mygnbglivrtmkagesjh; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.company_user_assigned_app_favourites
    ADD CONSTRAINT fkleip97mygnbglivrtmkagesjh FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: app_assigned_licenses fklmes2xm3i1wotryfc88be4dkf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_licenses
    ADD CONSTRAINT fklmes2xm3i1wotryfc88be4dkf FOREIGN KEY (app_license_id) REFERENCES public.app_licenses(id);


--
-- Name: consents fko39a5cbiv35v59ysgfon5oole; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consents
    ADD CONSTRAINT fko39a5cbiv35v59ysgfon5oole FOREIGN KEY (agreement_id) REFERENCES public.agreements(id);


--
-- Name: agreement_assigned_document_templates fkqbvrvs5aktrcn4t6565pnj3ur; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.agreement_assigned_document_templates
    ADD CONSTRAINT fkqbvrvs5aktrcn4t6565pnj3ur FOREIGN KEY (document_template_id) REFERENCES public.document_templates(id);


--
-- Name: documents fkqxcgobngn7vk56k8nfkuaysvn; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT fkqxcgobngn7vk56k8nfkuaysvn FOREIGN KEY (documentuser) REFERENCES public.company_users(id);


--
-- Name: app_assigned_use_cases fkrqi320sp8lxy7drw6kt4vheka; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_assigned_use_cases
    ADD CONSTRAINT fkrqi320sp8lxy7drw6kt4vheka FOREIGN KEY (app_id) REFERENCES public.apps(id);


--
-- Name: app_descriptions fkrvrom2pjij9x6stgovhaqkfxf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.app_descriptions
    ADD CONSTRAINT fkrvrom2pjij9x6stgovhaqkfxf FOREIGN KEY (language_short_name) REFERENCES public.languages(short_name);


--
-- Name: invitations fktdlrst4ju9d0wcgkh4w1nnoj3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invitations
    ADD CONSTRAINT fktdlrst4ju9d0wcgkh4w1nnoj3 FOREIGN KEY (application_applicationid) REFERENCES public.company_applications(applicationid);


--
-- PostgreSQL database dump complete
--

