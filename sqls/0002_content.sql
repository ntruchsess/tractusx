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

--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.country (country_name_en, alpha_2_code, alpha_3_code, country_name_de) FROM stdin;
Germany	DE	DEU	Deutschland
England	EN	ENG	England
\.


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.address (id, date_created, date_last_changed, city, region, streetadditional, streetname, streetnumber, zipcode, country_country_name_en) FROM stdin;
1	2022-03-03 15:44:06.625	2022-03-03 15:44:06.625	\N	\N	\N	\N	\N	\N	\N
2	2022-03-03 15:44:06.638	2022-03-03 15:44:06.638	\N	\N	\N	\N	\N	\N	\N
3	2022-03-03 15:44:06.676	2022-03-03 15:44:06.676	\N	\N	\N	\N	\N	\N	\N
4	2022-03-03 15:44:06.701	2022-03-03 15:44:06.701	\N	\N	\N	\N	\N	\N	\N
5	2022-03-03 15:44:06.709	2022-03-03 15:44:06.709	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: app_version; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_version (uuid, date_created, date_last_changed, app, version) FROM stdin;
6b0efa85-7064-4b93-9d61-9ccb2903a2e3	2022-03-03 15:44:06.653	2022-03-03 15:44:06.653	19a84e2a-55e1-45e0-b9cc-7eb03dd419d0	1.0
8732a7a2-5038-4a88-b227-ecc65527d2ac	2022-03-03 15:44:06.667	2022-03-03 15:44:06.667	a4150ce9-af9f-49ff-a214-0b6c86a2dd53	1.0
d4f3e07f-3cbb-420c-bee0-66ee11bb1808	2022-03-03 15:44:06.671	2022-03-03 15:44:06.671	02e16ddc-3133-4221-8ca2-1d218d1d7ec3	1.0
f8acb80b-ebbc-46b3-884c-7ede59d7012f	2022-03-03 15:44:06.673	2022-03-03 15:44:06.673	106aab68-8acf-4d4e-900d-cd413f6c3033	1.0
7114e542-7bd7-44f3-9b7a-d1039cda5621	2022-03-03 15:44:06.675	2022-03-03 15:44:06.675	cfbdeba9-796e-4850-9237-824f40f3913a	1.0
\.


--
-- Data for Name: identity_provider; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_provider (item_category, uuid, date_created, date_last_changed, extenalurl, realm, auth_url) FROM stdin;
1	c3e89122-a308-4ff7-9c5d-9f612cb08e0d	2022-03-03 15:44:06.614	2022-03-03 15:44:06.614	\N	\N	\N
1	a03da29a-ee39-46c6-b455-c9eff66b91a8	2022-03-03 15:44:06.637	2022-03-03 15:44:06.637	\N	\N	\N
1	051917ac-3434-4f3b-a608-5822fe6bf004	2022-03-03 15:44:06.641	2022-03-03 15:44:06.641	\N	\N	\N
1	4d88b6cc-23cf-4a44-a1ee-7dac8d4cbc88	2022-03-03 15:44:06.688	2022-03-03 15:44:06.688	\N	idp20	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp20/protocol/openid-connect/auth?scope=openid&state=WfWQaDyv_DysgQ3A07pDoOQQfyZzNoANX25ivHB4feg.PfDHazIGYls.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp20%2Fendpoint&nonce=pvaIiIpWvlLuCBwff_EuXA
1	719ff832-9458-4616-a2e1-deaf4edb1e6e	2022-03-03 15:44:06.708	2022-03-03 15:44:06.708	\N	idp21	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp21/protocol/openid-connect/auth?scope=openid&state=3IA08dKwP2qnr5l5c1H7aW4k26O1iA7n6Lrwd7vhxJQ.1czWJ8rG8Mo.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp21%2Fendpoint&nonce=EQ5Xs219-cPPxlR9WSpQKw
1	dfdf189c-c8cd-4091-bb4d-d979447ebafe	2022-03-03 15:44:06.715	2022-03-03 15:44:06.715	\N	idp27	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp27/protocol/openid-connect/auth?scope=openid&state=ycgiGMROY9Jc2gL5omj0Wx4JG0Yvdu8jzVZHmr5jrtA.yxdX6eoIb6s.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp27%2Fendpoint&nonce=bzjm_3XQw7JGv0h3uBsm4g
\.


--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company (companyid, date_created, date_last_changed, bpn, name, parent, shortname, address_id, idp_uuid) FROM stdin;
68672802-0b72-44be-8023-45518b0b2a98	2022-03-03 15:44:06.717	2022-03-03 15:44:06.717	CAXLDUMMYCORPZZ	\N	\N	\N	\N	\N
eae4bb21-7883-4b8f-b40e-cdb0911d63db	2022-03-03 15:44:06.593	2022-03-03 15:44:06.593	CAXSDUMMYCATENAZZ	Catena-X	\N	Catena-X	\N	c3e89122-a308-4ff7-9c5d-9f612cb08e0d
17593bdb-4db0-48c8-8b01-dbd646255b76	2022-03-03 15:44:06.625	2022-03-03 15:44:06.625	CAXSDUMMYBMWZZ	Bayerische Motorenwerke AG	\N	BMW AG	1	a03da29a-ee39-46c6-b455-c9eff66b91a8
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	2022-03-03 15:44:06.638	2022-03-03 15:44:06.638	CAXSDUMMYSAPZZ	SAP AG	\N	SAP	2	051917ac-3434-4f3b-a608-5822fe6bf004
de24cb6a-5742-4f13-88fd-8ed10919060d	2022-03-03 15:44:06.679	2022-03-03 15:44:06.679	CAXSCarFactory1ZZ	Car Factory 1	\N	\N	3	4d88b6cc-23cf-4a44-a1ee-7dac8d4cbc88
d6bb6fff-0010-4f41-8e8a-8073e80ffa56	2022-03-03 15:44:06.704	2022-03-03 15:44:06.704	CAXSCarFactory2ZZ	Car Factory 2	\N	\N	4	719ff832-9458-4616-a2e1-deaf4edb1e6e
3b696aa2-85c6-4cb2-8d9c-016ffc1f6909	2022-03-03 15:44:06.711	2022-03-03 15:44:06.711	CAXSCarFactory3ZZ	Car Factory 3	\N	\N	5	dfdf189c-c8cd-4091-bb4d-d979447ebafe
\.


--
-- Data for Name: app; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app (uuid, date_created, date_last_changed, name, currentversion_uuid, vendor_companyid) FROM stdin;
19a84e2a-55e1-45e0-b9cc-7eb03dd419d0	2022-03-03 15:44:06.642	2022-03-03 15:44:06.642	Part Chain	6b0efa85-7064-4b93-9d61-9ccb2903a2e3	17593bdb-4db0-48c8-8b01-dbd646255b76
a4150ce9-af9f-49ff-a214-0b6c86a2dd53	2022-03-03 15:44:06.665	2022-03-03 15:44:06.665	Dismantler App	8732a7a2-5038-4a88-b227-ecc65527d2ac	2993fb0e-44b7-4759-bba0-1e8dfd2b00c5
02e16ddc-3133-4221-8ca2-1d218d1d7ec3	2022-03-03 15:44:06.67	2022-03-03 15:44:06.67	CE Marketplace	d4f3e07f-3cbb-420c-bee0-66ee11bb1808	2993fb0e-44b7-4759-bba0-1e8dfd2b00c5
106aab68-8acf-4d4e-900d-cd413f6c3033	2022-03-03 15:44:06.672	2022-03-03 15:44:06.672	Material Traceability	f8acb80b-ebbc-46b3-884c-7ede59d7012f	2993fb0e-44b7-4759-bba0-1e8dfd2b00c5
cfbdeba9-796e-4850-9237-824f40f3913a	2022-03-03 15:44:06.674	2022-03-03 15:44:06.674	Component Performance	7114e542-7bd7-44f3-9b7a-d1039cda5621	17593bdb-4db0-48c8-8b01-dbd646255b76
\.


--
-- Data for Name: agreement; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreement (item_category, id, date_created, date_last_changed, name, issuer_companyid, app_uuid) FROM stdin;
\.


--
-- Data for Name: document_template; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.document_template (id, date_created, date_last_changed, documenttemplatename, documenttemplateversion) FROM stdin;
\.


--
-- Data for Name: agreement_documents; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreement_documents (agreement_id, documents_id) FROM stdin;
\.


--
-- Data for Name: company_role; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_role (companyrole, date_created, date_last_changed, name_de, name_en) FROM stdin;
ACTIVE_PARTICIPANT	2022-03-03 15:44:06.557	2022-03-03 15:44:06.557	Netzwerkteilnehmer	Participant
APP_PROVIDER	2022-03-03 15:44:06.567	2022-03-03 15:44:06.567	Software Anbieter	Application Provider
\.


--
-- Data for Name: agreement_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreement_roles (policy_id, roles_companyrole, contract_id) FROM stdin;
\.


--
-- Data for Name: app_agreements; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_agreements (app_uuid, agreements_id) FROM stdin;
\.


--
-- Data for Name: language; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.language (short_name, long_name_de, long_name_en) FROM stdin;
de	deutsch	german
en	englisch	english
\.


--
-- Data for Name: app_description; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_description (uuid, date_created, date_last_changed, app, description_long, description_short, language_short_name) FROM stdin;
fd36cc81-511e-48ff-916e-19e0fcd45dd2	2022-03-03 15:44:06.648	2022-03-03 15:44:06.648	19a84e2a-55e1-45e0-b9cc-7eb03dd419d0	Seamless part traceability through the n.tier supply chain\n\nknowledge you get detailed information about the components of your direct suppliers as well as your direct customers. This lets your answer questions such as:\n\n\n\nWhat's the exact lead time between the produciton of a subcomponent an your own components?\nTo wehre in the world are my components distributed and where are my suppliers located?\nWhat's the exact composition of my component on a unique ID level?\n\n\nBecause all of that is important information. PartChain keeps a storng one-up, one-down visibilty rule. You and the other parties in the network always see - only their suppliers customers data well as own ata. Your competitors won't be able to get any sensitive information about your production data.	CX App Part Chain Details	en
8a7761b7-363a-412c-9ae0-a345bb4dbd6e	2022-03-03 15:44:06.665	2022-03-03 15:44:06.665	a4150ce9-af9f-49ff-a214-0b6c86a2dd53	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App Dismantler App Details	en
eeeb85cd-6812-4a47-b63a-2bb6a897b405	2022-03-03 15:44:06.67	2022-03-03 15:44:06.67	02e16ddc-3133-4221-8ca2-1d218d1d7ec3	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App CE Marketplace Details	en
f360039c-269c-4de2-b975-3248d4159903	2022-03-03 15:44:06.673	2022-03-03 15:44:06.673	106aab68-8acf-4d4e-900d-cd413f6c3033	Description\n\nCreate an Intelligent Enterprise with Advanced Logistic collabration and Insights. SAP Logistics Business Network, material traceability options connect partners for inter-company collaboration and transparency. It supports a comprehensive set capabilities, allowing to manage freight more efficiently, benefit form situational awareness through track and trace, and create a trust chain for up- and downstream product genealogy.	SAP App Material Traceability Details	en
cac30483-bc05-4094-8163-4fe9c4f11407	2022-03-03 15:44:06.675	2022-03-03 15:44:06.675	cfbdeba9-796e-4850-9237-824f40f3913a	Automotive suppliers must constantly monitor product performance and resolve quality issues quickly to ensure they don’t face costly claims. For quality analysts and engineers this involves a long, manual process of analyzing claims and failed parts that lacks vital information — including live vehicle data(such as Diagnostic Trouble Codes). Identifying root-cause issues is complex, issue resolution is slow, and costs quickly escalate. Component Performance Monitor (CPM) enables suppliers to better manage quality risk and significantly reduce the costs incurred from faulty parts by leveraging near-live vehicle data, empowering quality experts to:\n\nIdentify failure patterns and root- cause quality issues in real time\nMonitor the effectiveness of remediation measures in the fleet using live vehicle data\nand proactively request faulty parts for further analysis.\n\n...all in a single collaborative interface that supercharges the supplier to OEM feedback cycle, leading to faster proactive issue resolution, a reduction in claims, and better customer experiences.	BMW App Component Performance Monitor Details	en
\.


--
-- Data for Name: app_license; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_license (uuid, date_created, date_last_changed, licensetext) FROM stdin;
77f639a5-5664-494c-aa0e-2b9188b85c20	2022-03-03 15:44:06.659	2022-03-03 15:44:06.659	free for use
45eaac51-cb3b-47b2-be92-817480ee3f94	2022-03-03 15:44:06.668	2022-03-03 15:44:06.668	free for use
dadf7e77-2ef6-4dfe-bde1-253c0e8e453a	2022-03-03 15:44:06.672	2022-03-03 15:44:06.672	free for use
80e3d366-f70c-41fc-b789-ed1f0d987398	2022-03-03 15:44:06.674	2022-03-03 15:44:06.674	free for use
8dafab99-532e-4b1a-b43a-8030c60e9ee3	2022-03-03 15:44:06.675	2022-03-03 15:44:06.675	free for use
\.


--
-- Data for Name: app_licenses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_licenses (app_uuid, licenses_uuid) FROM stdin;
19a84e2a-55e1-45e0-b9cc-7eb03dd419d0	77f639a5-5664-494c-aa0e-2b9188b85c20
a4150ce9-af9f-49ff-a214-0b6c86a2dd53	45eaac51-cb3b-47b2-be92-817480ee3f94
02e16ddc-3133-4221-8ca2-1d218d1d7ec3	dadf7e77-2ef6-4dfe-bde1-253c0e8e453a
106aab68-8acf-4d4e-900d-cd413f6c3033	80e3d366-f70c-41fc-b789-ed1f0d987398
cfbdeba9-796e-4850-9237-824f40f3913a	8dafab99-532e-4b1a-b43a-8030c60e9ee3
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.role (uuid, date_created, date_last_changed, namede, nameen) FROM stdin;
CX	2022-03-03 15:44:06.527	2022-03-03 15:44:06.527	CX Admin	CX Admin
IT_ADMIN	2022-03-03 15:44:06.529	2022-03-03 15:44:06.529	IT Administrator	IT Admin
SIGNING_MANAGER	2022-03-03 15:44:06.532	2022-03-03 15:44:06.532	Signing Manager	Signing Manager
DEVELOPER	2022-03-03 15:44:06.536	2022-03-03 15:44:06.536	Entwickler	Developer
DATA_SPECIALIST	2022-03-03 15:44:06.539	2022-03-03 15:44:06.539	Data Specialist	Data Specialist
APP_ADMIN	2022-03-03 15:44:06.541	2022-03-03 15:44:06.541	App(Store) Administrator	App(store) Admin
CE.Dismantler.Lead	2022-03-03 15:44:06.544	2022-03-03 15:44:06.544	CE.Dismantler.Lead	CE.Dismantler.Lead
CE.Dismantler.Manager	2022-03-03 15:44:06.546	2022-03-03 15:44:06.546	CE.Dismantler.Manager	CE.Dismantler.Manager
CE.Dismantler.Buy	2022-03-03 15:44:06.55	2022-03-03 15:44:06.55	CE.Dismantler.Buy	CE.Dismantler.Buy
CE.Dismantler.Seller	2022-03-03 15:44:06.554	2022-03-03 15:44:06.554	CE.Dismantler.Seller	CE.Dismantler.Seller
BUSINESS_ADMIN	2022-03-03 15:44:06.526	2022-03-03 15:44:06.526	Unternehmensadministrator	Business Admin
\.


--
-- Data for Name: app_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_roles (app_uuid, roles_uuid) FROM stdin;
\.


--
-- Data for Name: use_case; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.use_case (name, date_created, date_last_changed, shortname) FROM stdin;
Circular Economy	2022-03-03 15:44:06.571	2022-03-03 15:44:06.571	CE
Traceability	2022-03-03 15:44:06.583	2022-03-03 15:44:06.583	Traceability
Quality Management	2022-03-03 15:44:06.587	2022-03-03 15:44:06.587	QM
Demand Management	2022-03-03 15:44:06.59	2022-03-03 15:44:06.59	DM
\.


--
-- Data for Name: app_usecases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_usecases (app_uuid, usecases_name) FROM stdin;
19a84e2a-55e1-45e0-b9cc-7eb03dd419d0	Traceability
a4150ce9-af9f-49ff-a214-0b6c86a2dd53	Circular Economy
02e16ddc-3133-4221-8ca2-1d218d1d7ec3	Circular Economy
106aab68-8acf-4d4e-900d-cd413f6c3033	Traceability
cfbdeba9-796e-4850-9237-824f40f3913a	Quality Management
\.


--
-- Data for Name: app_version_description; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_version_description (appversion_uuid, description_uuid) FROM stdin;
6b0efa85-7064-4b93-9d61-9ccb2903a2e3	fd36cc81-511e-48ff-916e-19e0fcd45dd2
8732a7a2-5038-4a88-b227-ecc65527d2ac	8a7761b7-363a-412c-9ae0-a345bb4dbd6e
d4f3e07f-3cbb-420c-bee0-66ee11bb1808	eeeb85cd-6812-4a47-b63a-2bb6a897b405
f8acb80b-ebbc-46b3-884c-7ede59d7012f	f360039c-269c-4de2-b975-3248d4159903
7114e542-7bd7-44f3-9b7a-d1039cda5621	cac30483-bc05-4094-8163-4fe9c4f11407
\.


--
-- Data for Name: company_application; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_application (applicationid, date_created, date_last_changed, deputyacknowledgement, status, company_companyid) FROM stdin;
2285c04e-e59e-4bef-841b-3fd98ac7b433	2022-03-03 15:44:06.688	2022-03-03 15:44:06.688	\N	VERIFY_COMPANY	de24cb6a-5742-4f13-88fd-8ed10919060d
94f534e9-ef4e-4b21-aee8-89ae11c95765	2022-03-03 15:44:06.708	2022-03-03 15:44:06.708	\N	VERIFY_COMPANY	d6bb6fff-0010-4f41-8e8a-8073e80ffa56
b82fb078-5f31-4717-a17c-41b29e2c067c	2022-03-03 15:44:06.716	2022-03-03 15:44:06.716	\N	VERIFY_COMPANY	3b696aa2-85c6-4cb2-8d9c-016ffc1f6909
\.


--
-- Data for Name: company_application_agreements; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_application_agreements (companyapplication_applicationid, agreements_id) FROM stdin;
\.


--
-- Data for Name: company_application_memberroles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_application_memberroles (companyapplication_applicationid, memberroles_companyrole) FROM stdin;
\.


--
-- Data for Name: company_apps; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_apps (company_companyid, apps_uuid) FROM stdin;
\.


--
-- Data for Name: company_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_roles (company_companyid, roles_companyrole) FROM stdin;
eae4bb21-7883-4b8f-b40e-cdb0911d63db	ACTIVE_PARTICIPANT
eae4bb21-7883-4b8f-b40e-cdb0911d63db	APP_PROVIDER
17593bdb-4db0-48c8-8b01-dbd646255b76	ACTIVE_PARTICIPANT
17593bdb-4db0-48c8-8b01-dbd646255b76	APP_PROVIDER
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	ACTIVE_PARTICIPANT
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	APP_PROVIDER
\.


--
-- Data for Name: company_usecases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_usecases (company_companyid, usecases_name) FROM stdin;
eae4bb21-7883-4b8f-b40e-cdb0911d63db	Circular Economy
eae4bb21-7883-4b8f-b40e-cdb0911d63db	Traceability
eae4bb21-7883-4b8f-b40e-cdb0911d63db	Quality Management
17593bdb-4db0-48c8-8b01-dbd646255b76	Circular Economy
17593bdb-4db0-48c8-8b01-dbd646255b76	Traceability
17593bdb-4db0-48c8-8b01-dbd646255b76	Quality Management
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	Circular Economy
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	Traceability
2993fb0e-44b7-4759-bba0-1e8dfd2b00c5	Quality Management
\.


--
-- Data for Name: company_user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user (uuid, companyadmin, created, email, firstname, lastlogin, lastname, company_companyid) FROM stdin;
ad56702b-5908-44eb-a668-9a11a0e100d6	t	\N	\N	\N	\N	\N	de24cb6a-5742-4f13-88fd-8ed10919060d
44f75aca-16e6-4f71-a52a-6968f53134a9	t	\N	\N	\N	\N	\N	d6bb6fff-0010-4f41-8e8a-8073e80ffa56
a46ebe2b-79a2-4205-82ca-03baf3aabf6e	t	\N	\N	\N	\N	\N	3b696aa2-85c6-4cb2-8d9c-016ffc1f6909
8db1939d-7536-4a3b-8028-928268ce8145	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
dffd2eec-38d6-4dc7-944b-93622dacda14	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
c0ecb5b5-56a7-4ab1-bb05-ab214d90aced	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
9be54173-c150-41d8-9953-ace03f28356f	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
685e206d-4316-4162-928b-09bbbce56f22	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
b007b2ea-76f7-419f-a4dc-17679b340be9	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
4f717673-ed56-41ae-af61-5b99e8d5c7b9	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
f6f1e6c9-6336-48c2-bf2d-b6b924573b37	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
1df3d549-a7d5-476c-ba5b-7f40045f6d17	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
edffb495-6c50-4e5a-b774-e8ddebf88755	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
6e89bdcc-2f90-4331-a970-53bb4b982086	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
4f516647-6def-4513-926c-e4409058405a	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
a85489e7-b02c-48d3-908d-47ad20c52f83	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
10543cba-9db7-4246-ba5f-83bea31376ef	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
f59dd7bc-3d1d-4aee-b9bf-6ddf011d57c5	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
aceb8af5-f10e-48b1-9031-40ffaac0f29c	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
38a96dd6-25e4-4f63-847d-0414a29525d5	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
850b531e-cc42-4b21-be52-f8091b4d1a60	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
4eca11f3-9f50-410f-915a-78710bbc1c76	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
6c87f1ff-dce9-435d-9e9b-fd458b43feee	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
38309859-cde9-4b78-9863-860abcca0992	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
507adf20-f96f-411e-98ae-a55e9d51b389	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
329f80e1-0b38-4253-b5c6-68107f2530b3	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
39375c19-3c7f-4d3d-8fa8-e5dedd610ed4	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
c5ec91a2-ee26-4bde-9923-fa957feba6e0	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
ab4d13e3-d28a-4337-b0a1-f48d226c5f0a	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
ba42eca7-b888-45b9-85bd-a2aad29f582b	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
8e01e3dd-b3e5-4019-8b2b-a89d20e08770	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
785a73c4-bd99-41dd-96ab-d283448de173	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
588148ed-29e1-440b-8e12-28c438239968	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
14b11c97-c2bf-4087-a05a-1a0c3a5b08f3	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
89c29f40-239f-4001-8733-b82fba037125	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
28e88974-abe5-4da1-a325-bff8f467e322	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
4b66ddb5-f6e9-423a-a64e-46b6c07ef631	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
a708e70a-0d29-441d-bd19-8b07286cf2dc	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
32f3ad7e-661d-4049-ac01-783f5ea86333	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
1b005f48-c913-4627-862a-841043410fd9	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
de2225ca-7bb3-4f2a-af69-07360bbddb3e	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
cc40c57f-ab69-49bf-ab05-168c4d61ca36	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
e82ab43e-3d34-4c75-9961-6b31b00ec3cb	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
92095972-fcfc-4c94-9489-5711e0e73b71	f	\N	\N	\N	\N	\N	68672802-0b72-44be-8023-45518b0b2a98
\.


--
-- Data for Name: company_user_appfavourites; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user_appfavourites (user_uuid, appfavourites_uuid) FROM stdin;
\.


--
-- Data for Name: company_user_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user_roles (user_uuid, roles_uuid) FROM stdin;
ad56702b-5908-44eb-a668-9a11a0e100d6	BUSINESS_ADMIN
44f75aca-16e6-4f71-a52a-6968f53134a9	BUSINESS_ADMIN
a46ebe2b-79a2-4205-82ca-03baf3aabf6e	BUSINESS_ADMIN
\.


--
-- Data for Name: document; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.document (id, date_created, date_last_changed, document, documenthash, documentname, documentuploaddate, documentversion, documentuser) FROM stdin;
\.


--
-- Data for Name: consent; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.consent (id, date_created, date_last_changed, content, status, target, "timestamp", agreement_id, company_companyid, documents_id, user_uuid) FROM stdin;
\.


--
-- Data for Name: contract; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.contract (id) FROM stdin;
\.


--
-- Data for Name: identity_provider_catenax; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_provider_catenax (uuid) FROM stdin;
\.


--
-- Data for Name: identity_provider_external; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_provider_external (uuid) FROM stdin;
\.


--
-- Data for Name: invitation; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.invitation (uuid, date_created, date_last_changed, status, application_applicationid, user_uuid) FROM stdin;
15fa061c-f326-4807-a7bf-8961e35e74fb	2022-03-03 15:44:06.695	2022-03-03 15:44:06.695	0	2285c04e-e59e-4bef-841b-3fd98ac7b433	ad56702b-5908-44eb-a668-9a11a0e100d6
a2c6b778-42ac-436d-bd21-c751b283bc98	2022-03-03 15:44:06.708	2022-03-03 15:44:06.708	0	94f534e9-ef4e-4b21-aee8-89ae11c95765	44f75aca-16e6-4f71-a52a-6968f53134a9
c548858e-04a6-4466-b309-e81b70b329f6	2022-03-03 15:44:06.717	2022-03-03 15:44:06.717	0	b82fb078-5f31-4717-a17c-41b29e2c067c	a46ebe2b-79a2-4205-82ca-03baf3aabf6e
\.


--
-- Data for Name: policy; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.policy (id) FROM stdin;
\.


--
-- Data for Name: usage_agreement; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.usage_agreement (id) FROM stdin;
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.hibernate_sequence', 5, true);


--
-- PostgreSQL database dump complete
--

