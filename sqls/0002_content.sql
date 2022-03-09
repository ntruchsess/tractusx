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
1	2022-03-09 09:46:25.344	2022-03-09 09:46:25.344	\N	\N	\N	\N	\N	\N	\N
2	2022-03-09 09:46:25.361	2022-03-09 09:46:25.361	\N	\N	\N	\N	\N	\N	\N
3	2022-03-09 09:46:25.395	2022-03-09 09:46:25.395	\N	\N	\N	\N	\N	\N	\N
4	2022-03-09 09:46:25.422	2022-03-09 09:46:25.422	\N	\N	\N	\N	\N	\N	\N
5	2022-03-09 09:46:25.43	2022-03-09 09:46:25.43	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: app_version; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_version (uuid, date_created, date_last_changed, app, version) FROM stdin;
319f8d16-0d3e-48b3-9dcf-c38a28330cdc	2022-03-09 09:46:25.377	2022-03-09 09:46:25.377	876de3be-3e96-4897-a8fa-7c26cbbcf3b8	1.0
3322016f-c95f-4734-9df4-654580c50835	2022-03-09 09:46:25.39	2022-03-09 09:46:25.39	c7b217c5-1002-46bc-bcd2-57df0e9e46d6	1.0
ec24d90b-ee4a-4945-bdbb-87846304ed6b	2022-03-09 09:46:25.391	2022-03-09 09:46:25.391	2ae9b45c-8d0b-48da-8a46-5d8f03de0ecc	1.0
12ad3a0e-8eda-4298-860c-72dc2e0d528e	2022-03-09 09:46:25.393	2022-03-09 09:46:25.393	7da9ce41-689f-4ac8-9065-244c75c71f57	1.0
81031a9f-6af8-4cfa-9ac8-af6ede61231e	2022-03-09 09:46:25.394	2022-03-09 09:46:25.394	1a4ac107-2b6e-4190-89df-4b8442b12f04	1.0
\.


--
-- Data for Name: identity_provider; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_provider (item_category, uuid, date_created, date_last_changed, extenalurl, realm, auth_url) FROM stdin;
1	252d8b2f-b095-4d17-8696-beafe0523d52	2022-03-09 09:46:25.335	2022-03-09 09:46:25.335	\N	\N	\N
1	83041989-4b84-4f71-87bc-2bcf41f8c3d4	2022-03-09 09:46:25.36	2022-03-09 09:46:25.36	\N	\N	\N
1	237b217e-5d32-43e2-a227-fb4adde9e8a3	2022-03-09 09:46:25.365	2022-03-09 09:46:25.365	\N	\N	\N
1	c04f8dec-d133-4f0d-ae33-73dcc538c4a8	2022-03-09 09:46:25.409	2022-03-09 09:46:25.409	\N	idp20	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp20/protocol/openid-connect/auth?scope=openid&state=WfWQaDyv_DysgQ3A07pDoOQQfyZzNoANX25ivHB4feg.PfDHazIGYls.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp20%2Fendpoint&nonce=pvaIiIpWvlLuCBwff_EuXA
1	bbbff757-e87d-4380-9c46-8a76ca89a317	2022-03-09 09:46:25.429	2022-03-09 09:46:25.429	\N	idp21	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp21/protocol/openid-connect/auth?scope=openid&state=3IA08dKwP2qnr5l5c1H7aW4k26O1iA7n6Lrwd7vhxJQ.1czWJ8rG8Mo.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp21%2Fendpoint&nonce=EQ5Xs219-cPPxlR9WSpQKw
1	516c0358-d2eb-45db-93c7-aea296a0b79a	2022-03-09 09:46:25.436	2022-03-09 09:46:25.436	\N	idp27	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp27/protocol/openid-connect/auth?scope=openid&state=ycgiGMROY9Jc2gL5omj0Wx4JG0Yvdu8jzVZHmr5jrtA.yxdX6eoIb6s.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp27%2Fendpoint&nonce=bzjm_3XQw7JGv0h3uBsm4g
\.


--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company (companyid, date_created, date_last_changed, bpn, name, parent, shortname, address_id, idp_uuid) FROM stdin;
aee3c6c2-4b79-402c-97f9-ebbb75314e91	2022-03-09 09:46:25.437	2022-03-09 09:46:25.437	CAXLDUMMYCORPZZ	\N	\N	\N	\N	\N
9e17755e-48f6-4d35-b77a-506cdcdaaa52	2022-03-09 09:46:25.318	2022-03-09 09:46:25.318	CAXSDUMMYCATENAZZ	Catena-X	\N	Catena-X	\N	252d8b2f-b095-4d17-8696-beafe0523d52
8ddb32ec-b60b-45e7-bae0-2284f85b5750	2022-03-09 09:46:25.344	2022-03-09 09:46:25.344	CAXSDUMMYBMWZZ	Bayerische Motorenwerke AG	\N	BMW AG	1	83041989-4b84-4f71-87bc-2bcf41f8c3d4
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	2022-03-09 09:46:25.361	2022-03-09 09:46:25.361	CAXSDUMMYSAPZZ	SAP AG	\N	SAP	2	237b217e-5d32-43e2-a227-fb4adde9e8a3
5551673c-c6f7-4df0-a86c-087255348bea	2022-03-09 09:46:25.399	2022-03-09 09:46:25.399	CAXSCarFactory1ZZ	Car Factory 1	\N	\N	3	c04f8dec-d133-4f0d-ae33-73dcc538c4a8
9dcff8bd-3302-4bfd-ae2f-10a1781a6f2d	2022-03-09 09:46:25.426	2022-03-09 09:46:25.426	CAXSCarFactory2ZZ	Car Factory 2	\N	\N	4	bbbff757-e87d-4380-9c46-8a76ca89a317
5e05ccca-4b10-4108-9038-38bc091017a3	2022-03-09 09:46:25.432	2022-03-09 09:46:25.432	CAXSCarFactory3ZZ	Car Factory 3	\N	\N	5	516c0358-d2eb-45db-93c7-aea296a0b79a
\.


--
-- Data for Name: app; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app (uuid, date_created, date_last_changed, name, currentversion_uuid, vendor_companyid) FROM stdin;
876de3be-3e96-4897-a8fa-7c26cbbcf3b8	2022-03-09 09:46:25.366	2022-03-09 09:46:25.366	Part Chain	319f8d16-0d3e-48b3-9dcf-c38a28330cdc	8ddb32ec-b60b-45e7-bae0-2284f85b5750
c7b217c5-1002-46bc-bcd2-57df0e9e46d6	2022-03-09 09:46:25.39	2022-03-09 09:46:25.39	Dismantler App	3322016f-c95f-4734-9df4-654580c50835	947e9867-ccf1-4e97-9e0f-7d86468e3ae7
2ae9b45c-8d0b-48da-8a46-5d8f03de0ecc	2022-03-09 09:46:25.391	2022-03-09 09:46:25.391	CE Marketplace	ec24d90b-ee4a-4945-bdbb-87846304ed6b	947e9867-ccf1-4e97-9e0f-7d86468e3ae7
7da9ce41-689f-4ac8-9065-244c75c71f57	2022-03-09 09:46:25.392	2022-03-09 09:46:25.392	Material Traceability	12ad3a0e-8eda-4298-860c-72dc2e0d528e	947e9867-ccf1-4e97-9e0f-7d86468e3ae7
1a4ac107-2b6e-4190-89df-4b8442b12f04	2022-03-09 09:46:25.394	2022-03-09 09:46:25.394	Component Performance	81031a9f-6af8-4cfa-9ac8-af6ede61231e	8ddb32ec-b60b-45e7-bae0-2284f85b5750
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
ACTIVE_PARTICIPANT	2022-03-09 09:46:25.287	2022-03-09 09:46:25.287	Netzwerkteilnehmer	Participant
APP_PROVIDER	2022-03-09 09:46:25.298	2022-03-09 09:46:25.298	Software Anbieter	Application Provider
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
5f6426ea-def7-45ce-824c-bf4286bd345d	2022-03-09 09:46:25.371	2022-03-09 09:46:25.371	876de3be-3e96-4897-a8fa-7c26cbbcf3b8	Seamless part traceability through the n.tier supply chain\n\nknowledge you get detailed information about the components of your direct suppliers as well as your direct customers. This lets your answer questions such as:\n\n\n\nWhat's the exact lead time between the produciton of a subcomponent an your own components?\nTo wehre in the world are my components distributed and where are my suppliers located?\nWhat's the exact composition of my component on a unique ID level?\n\n\nBecause all of that is important information. PartChain keeps a storng one-up, one-down visibilty rule. You and the other parties in the network always see - only their suppliers customers data well as own ata. Your competitors won't be able to get any sensitive information about your production data.	CX App Part Chain Details	en
610162f3-14c2-440c-9d53-a974f0bcf0fc	2022-03-09 09:46:25.39	2022-03-09 09:46:25.39	c7b217c5-1002-46bc-bcd2-57df0e9e46d6	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App Dismantler App Details	en
9c63f81a-66c8-49d2-bbac-64f9579fb41d	2022-03-09 09:46:25.391	2022-03-09 09:46:25.391	2ae9b45c-8d0b-48da-8a46-5d8f03de0ecc	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App CE Marketplace Details	en
efc7d248-7cba-4425-93f3-6d35cbf43be3	2022-03-09 09:46:25.393	2022-03-09 09:46:25.393	7da9ce41-689f-4ac8-9065-244c75c71f57	Description\n\nCreate an Intelligent Enterprise with Advanced Logistic collabration and Insights. SAP Logistics Business Network, material traceability options connect partners for inter-company collaboration and transparency. It supports a comprehensive set capabilities, allowing to manage freight more efficiently, benefit form situational awareness through track and trace, and create a trust chain for up- and downstream product genealogy.	SAP App Material Traceability Details	en
a54065f1-c558-451b-98c5-45efe6f69229	2022-03-09 09:46:25.394	2022-03-09 09:46:25.394	1a4ac107-2b6e-4190-89df-4b8442b12f04	Automotive suppliers must constantly monitor product performance and resolve quality issues quickly to ensure they don’t face costly claims. For quality analysts and engineers this involves a long, manual process of analyzing claims and failed parts that lacks vital information — including live vehicle data(such as Diagnostic Trouble Codes). Identifying root-cause issues is complex, issue resolution is slow, and costs quickly escalate. Component Performance Monitor (CPM) enables suppliers to better manage quality risk and significantly reduce the costs incurred from faulty parts by leveraging near-live vehicle data, empowering quality experts to:\n\nIdentify failure patterns and root- cause quality issues in real time\nMonitor the effectiveness of remediation measures in the fleet using live vehicle data\nand proactively request faulty parts for further analysis.\n\n...all in a single collaborative interface that supercharges the supplier to OEM feedback cycle, leading to faster proactive issue resolution, a reduction in claims, and better customer experiences.	BMW App Component Performance Monitor Details	en
\.


--
-- Data for Name: app_license; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_license (uuid, date_created, date_last_changed, licensetext) FROM stdin;
c8eda476-7cdf-4694-b841-7d4742b428ee	2022-03-09 09:46:25.383	2022-03-09 09:46:25.383	free of charge
f5aedfd6-2a99-4ac3-ad87-ae2898a3d188	2022-03-09 09:46:25.39	2022-03-09 09:46:25.39	free of charge
fd6656de-40ff-4227-8283-c4c42b8d05f2	2022-03-09 09:46:25.392	2022-03-09 09:46:25.392	free of charge
474d1abf-42e5-4952-a6fc-f84f494c4389	2022-03-09 09:46:25.393	2022-03-09 09:46:25.393	free of charge
aba91770-95bb-4ee6-9712-41f4ebf7ae00	2022-03-09 09:46:25.395	2022-03-09 09:46:25.395	free of charge
\.


--
-- Data for Name: app_licenses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_licenses (app_uuid, licenses_uuid) FROM stdin;
876de3be-3e96-4897-a8fa-7c26cbbcf3b8	c8eda476-7cdf-4694-b841-7d4742b428ee
c7b217c5-1002-46bc-bcd2-57df0e9e46d6	f5aedfd6-2a99-4ac3-ad87-ae2898a3d188
2ae9b45c-8d0b-48da-8a46-5d8f03de0ecc	fd6656de-40ff-4227-8283-c4c42b8d05f2
7da9ce41-689f-4ac8-9065-244c75c71f57	474d1abf-42e5-4952-a6fc-f84f494c4389
1a4ac107-2b6e-4190-89df-4b8442b12f04	aba91770-95bb-4ee6-9712-41f4ebf7ae00
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.role (uuid, date_created, date_last_changed, namede, nameen) FROM stdin;
CX	2022-03-09 09:46:25.257	2022-03-09 09:46:25.257	CX Admin	CX Admin
IT_ADMIN	2022-03-09 09:46:25.259	2022-03-09 09:46:25.259	IT Administrator	IT Admin
SIGNING_MANAGER	2022-03-09 09:46:25.262	2022-03-09 09:46:25.262	Signing Manager	Signing Manager
DEVELOPER	2022-03-09 09:46:25.265	2022-03-09 09:46:25.265	Entwickler	Developer
DATA_SPECIALIST	2022-03-09 09:46:25.269	2022-03-09 09:46:25.269	Data Specialist	Data Specialist
APP_ADMIN	2022-03-09 09:46:25.271	2022-03-09 09:46:25.271	App(Store) Administrator	App(store) Admin
CE.Dismantler.Lead	2022-03-09 09:46:25.275	2022-03-09 09:46:25.275	CE.Dismantler.Lead	CE.Dismantler.Lead
CE.Dismantler.Manager	2022-03-09 09:46:25.277	2022-03-09 09:46:25.277	CE.Dismantler.Manager	CE.Dismantler.Manager
CE.Dismantler.Buy	2022-03-09 09:46:25.28	2022-03-09 09:46:25.28	CE.Dismantler.Buy	CE.Dismantler.Buy
CE.Dismantler.Seller	2022-03-09 09:46:25.283	2022-03-09 09:46:25.283	CE.Dismantler.Seller	CE.Dismantler.Seller
BUSINESS_ADMIN	2022-03-09 09:46:25.256	2022-03-09 09:46:25.256	Unternehmensadministrator	Business Admin
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
Circular Economy	2022-03-09 09:46:25.301	2022-03-09 09:46:25.301	CE
Traceability	2022-03-09 09:46:25.309	2022-03-09 09:46:25.309	Traceability
Quality Management	2022-03-09 09:46:25.311	2022-03-09 09:46:25.311	QM
Demand Management	2022-03-09 09:46:25.315	2022-03-09 09:46:25.315	DM
\.


--
-- Data for Name: app_usecases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_usecases (app_uuid, usecases_name) FROM stdin;
876de3be-3e96-4897-a8fa-7c26cbbcf3b8	Traceability
c7b217c5-1002-46bc-bcd2-57df0e9e46d6	Circular Economy
2ae9b45c-8d0b-48da-8a46-5d8f03de0ecc	Circular Economy
7da9ce41-689f-4ac8-9065-244c75c71f57	Traceability
1a4ac107-2b6e-4190-89df-4b8442b12f04	Quality Management
\.


--
-- Data for Name: app_version_description; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_version_description (appversion_uuid, description_uuid) FROM stdin;
319f8d16-0d3e-48b3-9dcf-c38a28330cdc	5f6426ea-def7-45ce-824c-bf4286bd345d
3322016f-c95f-4734-9df4-654580c50835	610162f3-14c2-440c-9d53-a974f0bcf0fc
ec24d90b-ee4a-4945-bdbb-87846304ed6b	9c63f81a-66c8-49d2-bbac-64f9579fb41d
12ad3a0e-8eda-4298-860c-72dc2e0d528e	efc7d248-7cba-4425-93f3-6d35cbf43be3
81031a9f-6af8-4cfa-9ac8-af6ede61231e	a54065f1-c558-451b-98c5-45efe6f69229
\.


--
-- Data for Name: company_application; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_application (applicationid, date_created, date_last_changed, deputyacknowledgement, status, company_companyid) FROM stdin;
f5fa6ab6-7547-4caa-b2b2-8f5ae2f3a9a5	2022-03-09 09:46:25.41	2022-03-09 09:46:25.41	\N	VERIFY_COMPANY	5551673c-c6f7-4df0-a86c-087255348bea
6ff4092f-165f-4167-a492-4c7a178b1ec2	2022-03-09 09:46:25.43	2022-03-09 09:46:25.43	\N	VERIFY_COMPANY	9dcff8bd-3302-4bfd-ae2f-10a1781a6f2d
6725f120-e915-4f11-8906-da4f60605188	2022-03-09 09:46:25.436	2022-03-09 09:46:25.436	\N	VERIFY_COMPANY	5e05ccca-4b10-4108-9038-38bc091017a3
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
9e17755e-48f6-4d35-b77a-506cdcdaaa52	ACTIVE_PARTICIPANT
9e17755e-48f6-4d35-b77a-506cdcdaaa52	APP_PROVIDER
8ddb32ec-b60b-45e7-bae0-2284f85b5750	ACTIVE_PARTICIPANT
8ddb32ec-b60b-45e7-bae0-2284f85b5750	APP_PROVIDER
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	ACTIVE_PARTICIPANT
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	APP_PROVIDER
\.


--
-- Data for Name: company_usecases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_usecases (company_companyid, usecases_name) FROM stdin;
9e17755e-48f6-4d35-b77a-506cdcdaaa52	Circular Economy
9e17755e-48f6-4d35-b77a-506cdcdaaa52	Traceability
9e17755e-48f6-4d35-b77a-506cdcdaaa52	Quality Management
8ddb32ec-b60b-45e7-bae0-2284f85b5750	Circular Economy
8ddb32ec-b60b-45e7-bae0-2284f85b5750	Traceability
8ddb32ec-b60b-45e7-bae0-2284f85b5750	Quality Management
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	Circular Economy
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	Traceability
947e9867-ccf1-4e97-9e0f-7d86468e3ae7	Quality Management
\.


--
-- Data for Name: company_user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user (uuid, companyadmin, created, email, firstname, lastlogin, lastname, company_companyid) FROM stdin;
ad56702b-5908-44eb-a668-9a11a0e100d6	t	\N	\N	\N	\N	\N	5551673c-c6f7-4df0-a86c-087255348bea
44f75aca-16e6-4f71-a52a-6968f53134a9	t	\N	\N	\N	\N	\N	9dcff8bd-3302-4bfd-ae2f-10a1781a6f2d
a46ebe2b-79a2-4205-82ca-03baf3aabf6e	t	\N	\N	\N	\N	\N	5e05ccca-4b10-4108-9038-38bc091017a3
8db1939d-7536-4a3b-8028-928268ce8145	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
dffd2eec-38d6-4dc7-944b-93622dacda14	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
c0ecb5b5-56a7-4ab1-bb05-ab214d90aced	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
9be54173-c150-41d8-9953-ace03f28356f	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
685e206d-4316-4162-928b-09bbbce56f22	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
b007b2ea-76f7-419f-a4dc-17679b340be9	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
4f717673-ed56-41ae-af61-5b99e8d5c7b9	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
f6f1e6c9-6336-48c2-bf2d-b6b924573b37	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
1df3d549-a7d5-476c-ba5b-7f40045f6d17	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
edffb495-6c50-4e5a-b774-e8ddebf88755	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
6e89bdcc-2f90-4331-a970-53bb4b982086	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
4f516647-6def-4513-926c-e4409058405a	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
a85489e7-b02c-48d3-908d-47ad20c52f83	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
10543cba-9db7-4246-ba5f-83bea31376ef	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
f59dd7bc-3d1d-4aee-b9bf-6ddf011d57c5	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
aceb8af5-f10e-48b1-9031-40ffaac0f29c	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
38a96dd6-25e4-4f63-847d-0414a29525d5	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
850b531e-cc42-4b21-be52-f8091b4d1a60	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
4eca11f3-9f50-410f-915a-78710bbc1c76	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
6c87f1ff-dce9-435d-9e9b-fd458b43feee	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
38309859-cde9-4b78-9863-860abcca0992	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
507adf20-f96f-411e-98ae-a55e9d51b389	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
329f80e1-0b38-4253-b5c6-68107f2530b3	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
39375c19-3c7f-4d3d-8fa8-e5dedd610ed4	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
c5ec91a2-ee26-4bde-9923-fa957feba6e0	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
ab4d13e3-d28a-4337-b0a1-f48d226c5f0a	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
ba42eca7-b888-45b9-85bd-a2aad29f582b	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
8e01e3dd-b3e5-4019-8b2b-a89d20e08770	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
785a73c4-bd99-41dd-96ab-d283448de173	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
588148ed-29e1-440b-8e12-28c438239968	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
14b11c97-c2bf-4087-a05a-1a0c3a5b08f3	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
89c29f40-239f-4001-8733-b82fba037125	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
28e88974-abe5-4da1-a325-bff8f467e322	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
4b66ddb5-f6e9-423a-a64e-46b6c07ef631	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
a708e70a-0d29-441d-bd19-8b07286cf2dc	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
32f3ad7e-661d-4049-ac01-783f5ea86333	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
1b005f48-c913-4627-862a-841043410fd9	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
de2225ca-7bb3-4f2a-af69-07360bbddb3e	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
cc40c57f-ab69-49bf-ab05-168c4d61ca36	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
e82ab43e-3d34-4c75-9961-6b31b00ec3cb	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
92095972-fcfc-4c94-9489-5711e0e73b71	f	\N	\N	\N	\N	\N	aee3c6c2-4b79-402c-97f9-ebbb75314e91
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
988451ac-e83d-40ad-b2c8-3f190cf5bd7c	2022-03-09 09:46:25.415	2022-03-09 09:46:25.415	0	f5fa6ab6-7547-4caa-b2b2-8f5ae2f3a9a5	ad56702b-5908-44eb-a668-9a11a0e100d6
3610c819-5909-44c3-afc8-5aae7f2cf710	2022-03-09 09:46:25.43	2022-03-09 09:46:25.43	0	6ff4092f-165f-4167-a492-4c7a178b1ec2	44f75aca-16e6-4f71-a52a-6968f53134a9
a68409e0-3575-46be-9fad-4a4be1552e49	2022-03-09 09:46:25.437	2022-03-09 09:46:25.437	0	6725f120-e915-4f11-8906-da4f60605188	a46ebe2b-79a2-4205-82ca-03baf3aabf6e
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

