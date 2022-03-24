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
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.countries (country_name_en, alpha_2_code, alpha_3_code, country_name_de) FROM stdin;
Germany	DE	DEU	Deutschland
United Kingdom of Great Britain and Northern Ireland (the)	GB	GBR	United Kingdom of Great Britain and Northern Ireland (the)
Afghanistan	AF	AFG	Afghanistan
Albania	AL	ALB	Albania
Algeria	DZ	DZA	Algeria
American Samoa	AS	ASM	American Samoa
Andorra	AD	AND	Andorra
Angola	AO	AGO	Angola
Anguilla	AI	AIA	Anguilla
Antarctica	AQ	ATA	Antarctica
Antigua and Barbuda	AG	ATG	Antigua and Barbuda
Argentina	AR	ARG	Argentina
Armenia	AM	ARM	Armenia
Aruba	AW	ABW	Aruba
Australia	AU	AUS	Australia
Austria	AT	AUT	Austria
Azerbaijan	AZ	AZE	Azerbaijan
Bahamas (the)	BS	BHS	Bahamas
Bahrain	BH	BHR	Bahrain
Bangladesh	BD	BGD	Bangladesh
Barbados	BB	BRB	Barbados
Belarus	BY	BLR	Belarus
Belgium	BE	BEL	Belgium
Belize	BZ	BLZ	Belize
Benin	BJ	BEN	Benin
Bermuda	BM	BMU	Bermuda
Åland Islands	AX	ALA	Åland Islands
Bhutan	BT	BTN	Bhutan
Bolivia (Plurinational State of)	BO	BOL	Bolivien
Bonaire, Sint Eustatius and Saba	BQ	BES	Bonaire, Sint Eustatius and Saba
Bosnia and Herzegovina	BA	BIH	Bosnien and Herzegovenien
Botswana	BW	BWA	Botswana
Bouvet Island	BV	BVT	Bouvet Island
Brazil	BR	BRA	Brasilien
British Indian Ocean Territory (the)	IO	IOT	British Indian Ocean Territory 
Brunei Darussalam	BN	BRN	Brunei Darussalam
Bulgaria	BG	BGR	Bulgarien
Burkina Faso	BF	BFA	Burkina Faso
Burundi	BI	BDI	Burundi
Cabo Verde	CV	CPV	Cabo Verde
Cambodia	KH	KHM	Cambodia
Cameroon	CM	CMR	Cameroon
Canada	CA	CAN	Kanada
Cayman Islands (the)	KY	CYM	Cayman Islands (the)
Central African Republic (the)	CF	CAF	Central African Republic (the)
Chad	TD	TCD	Chad
Chile	CL	CHL	Chile
China	CN	CHN	China
Christmas Island	CX	CXR	Weihnachtsinseln
Cocos (Keeling) Islands (the)	CC	CCK	Cocos (Keeling) Islands (the)
Colombia	CO	COL	Kolumbien
Comoros (the)	KM	COM	Comoros
Congo (the Democratic Republic of the)	CD	COD	Kongo
Cook Islands (the)	CK	COK	Cook Islands
Costa Rica	CR	CRI	Costa Rica
Croatia	HR	HRV	Kroatien
Cuba	CU	CUB	Kuba
Curaçao	CW	CUW	Curaçao
Cyprus	CY	CYP	Zypern
Czechia	CZ	CZE	Tschechien
Côte d'Ivoire	CI	CIV	Côte d'Ivoire
Denmark	DK	DNK	Dänemark
Djibouti	DJ	DJI	Djibouti
Dominica	DM	DMA	Dominica
Dominican Republic (the)	DO	DOM	Dominikanische Republik
Ecuador	EC	ECU	Ecuador
Egypt	EG	EGY	Ägypten
El Salvador	SV	SLV	El Salvador
Equatorial Guinea	GQ	GNQ	Equatorial Guinea
Eritrea	ER	ERI	Eritrea
Estonia	EE	EST	Estonia
Eswatini	SZ	SWZ	Eswatini
Ethiopia	ET	ETH	Ethiopia
Falkland Islands (the) [Malvinas]	FK	FLK	Falkland Islands (the) [Malvinas]
Faroe Islands (the)	FO	FRO	Faroe Islands (the)
Fiji	FJ	FJI	Fiji
Finland	FI	FIN	Finland
France	FR	FRA	Frankreich
French Guiana	GF	GUF	French Guiana
French Polynesia	PF	PYF	French Polynesia
French Southern Territories (the)	TF	ATF	French Southern Territories (the)
Gabon	GA	GAB	Gabon
Gambia (the)	GM	GMB	Gambia (the)
Georgia	GE	GEO	Georgia
Ghana	GH	GHA	Ghana
Gibraltar	GI	GIB	Gibraltar
Greece	GR	GRC	Greece
Greenland	GL	GRL	Greenland
Grenada	GD	GRD	Grenada
Guadeloupe	GP	GLP	Guadeloupe
Guam	GU	GUM	Guam
Guatemala	GT	GTM	Guatemala
Guernsey	GG	GGY	Guernsey
Guinea	GN	GIN	Guinea
Guinea-Bissau	GW	GNB	Guinea-Bissau
Guyana	GY	GUY	Guyana
Haiti	HT	HTI	Haiti
Heard Island and McDonald Islands	HM	HMD	Heard Island and McDonald Islands
Holy See (the)	VA	VAT	Holy See (the)
Honduras	HN	HND	Honduras
Hong Kong	HK	HKG	Hong Kong
Hungary	HU	HUN	Hungary
Iceland	IS	ISL	Iceland
India	IN	IND	India
Indonesia	ID	IDN	Indonesia
Iran (Islamic Republic of)	IR	IRN	Iran (Islamic Republic of)
Iraq	IQ	IRQ	Iraq
Ireland	IE	IRL	Ireland
Isle of Man	IM	IMN	Isle of Man
Israel	IL	ISR	Israel
Italy	IT	ITA	Italy
Jamaica	JM	JAM	Jamaica
Japan	JP	JPN	Japan
Jersey	JE	JEY	Jersey
Jordan	JO	JOR	Jordan
Kazakhstan	KZ	KAZ	Kazakhstan
Kenya	KE	KEN	Kenya
Kiribati	KI	KIR	Kiribati
Korea (the Democratic People's Republic of)	KP	PRK	Korea (the Democratic People's Republic of)
Korea (the Republic of)	KR	KOR	Korea (the Republic of)
Kuwait	KW	KWT	Kuwait
Kyrgyzstan	KG	KGZ	Kyrgyzstan
Lao People's Democratic Republic (the)	LA	LAO	Lao People's Democratic Republic (the)
Latvia	LV	LVA	Latvia
Lebanon	LB	LBN	Lebanon
Lesotho	LS	LSO	Lesotho
Liberia	LR	LBR	Liberia
Libya	LY	LBY	Libya
Liechtenstein	LI	LIE	Liechtenstein
Lithuania	LT	LTU	Lithuania
Luxembourg	LU	LUX	Luxembourg
Macao	MO	MAC	Macao
Madagascar	MG	MDG	Madagascar
Malawi	MW	MWI	Malawi
Malaysia	MY	MYS	Malaysia
Maldives	MV	MDV	Maldives
Mali	ML	MLI	Mali
Malta	MT	MLT	Malta
Marshall Islands (the)	MH	MHL	Marshall Islands (the)
Martinique	MQ	MTQ	Martinique
Mauritania	MR	MRT	Mauritania
Mauritius	MU	MUS	Mauritius
Mayotte	YT	MYT	Mayotte
Mexico	MX	MEX	Mexico
Micronesia (Federated States of)	FM	FSM	Micronesia (Federated States of)
Moldova (the Republic of)	MD	MDA	Moldova (the Republic of)
Monaco	MC	MCO	Monaco
Mongolia	MN	MNG	Mongolia
Montenegro	ME	MNE	Montenegro
Montserrat	MS	MSR	Montserrat
Morocco	MA	MAR	Morocco
Mozambique	MZ	MOZ	Mozambique
Myanmar	MM	MMR	Myanmar
Namibia	NA	NAM	Namibia
Nauru	NR	NRU	Nauru
Nepal	NP	NPL	Nepal
Netherlands (the)	NL	NLD	Netherlands (the)
New Caledonia	NC	NCL	New Caledonia
New Zealand	NZ	NZL	New Zealand
Nicaragua	NI	NIC	Nicaragua
Niger (the)	NE	NER	Niger (the)
Nigeria	NG	NGA	Nigeria
Niue	NU	NIU	Niue
Norfolk Island	NF	NFK	Norfolk Island
North Macedonia	MK	MKD	North Macedonia
Northern Mariana Islands (the)	MP	MNP	Northern Mariana Islands (the)
Norway	NO	NOR	Norway
Oman	OM	OMN	Oman
Pakistan	PK	PAK	Pakistan
Palau	PW	PLW	Palau
Palestine, State of	PS	PSE	Palestine, State of
Panama	PA	PAN	Panama
Papua New Guinea	PG	PNG	Papua New Guinea
Paraguay	PY	PRY	Paraguay
Peru	PE	PER	Peru
Philippines (the)	PH	PHL	Philippines (the)
Pitcairn	PN	PCN	Pitcairn
Poland	PL	POL	Poland
Portugal	PT	PRT	Portugal
Puerto Rico	PR	PRI	Puerto Rico
Qatar	QA	QAT	Qatar
Romania	RO	ROU	Romania
Russian Federation (the)	RU	RUS	Russian Federation (the)
Rwanda	RW	RWA	Rwanda
Réunion	RE	REU	Réunion
Saint Barthélemy	BL	BLM	Saint Barthélemy
Saint Helena, Ascension and Tristan da Cunha	SH	SHN	Saint Helena, Ascension and Tristan da Cunha
Saint Kitts and Nevis	KN	KNA	Saint Kitts and Nevis
Saint Lucia	LC	LCA	Saint Lucia
Saint Martin (French part)	MF	MAF	Saint Martin (French part)
Saint Pierre and Miquelon	PM	SPM	Saint Pierre and Miquelon
Saint Vincent and the Grenadines	VC	VCT	Saint Vincent and the Grenadines
Samoa	WS	WSM	Samoa
San Marino	SM	SMR	San Marino
Sao Tome and Principe	ST	STP	Sao Tome and Principe
Saudi Arabia	SA	SAU	Saudi Arabia
Senegal	SN	SEN	Senegal
Serbia	RS	SRB	Serbia
Seychelles	SC	SYC	Seychelles
Sierra Leone	SL	SLE	Sierra Leone
Singapore	SG	SGP	Singapore
Sint Maarten (Dutch part)	SX	SXM	Sint Maarten (Dutch part)
Slovakia	SK	SVK	Slovakia
Slovenia	SI	SVN	Slovenia
Solomon Islands	SB	SLB	Solomon Islands
Somalia	SO	SOM	Somalia
South Africa	ZA	ZAF	South Africa
South Georgia and the South Sandwich Islands	GS	SGS	South Georgia and the South Sandwich Islands
South Sudan	SS	SSD	South Sudan
Spain	ES	ESP	Spain
Sri Lanka	LK	LKA	Sri Lanka
Sudan (the)	SD	SDN	Sudan (the)
Suriname	SR	SUR	Suriname
Svalbard and Jan Mayen	SJ	SJM	Svalbard and Jan Mayen
Sweden	SE	SWE	Sweden
Switzerland	CH	CHE	Switzerland
Syrian Arab Republic (the)	SY	SYR	Syrian Arab Republic (the)
Taiwan (Province of China)	TW	TWN	Taiwan (Province of China)
Tajikistan	TJ	TJK	Tajikistan
Tanzania, the United Republic of	TZ	TZA	Tanzania, the United Republic of
Thailand	TH	THA	Thailand
Timor-Leste	TL	TLS	Timor-Leste
Togo	TG	TGO	Togo
Tokelau	TK	TKL	Tokelau
Tonga	TO	TON	Tonga
Trinidad and Tobago	TT	TTO	Trinidad and Tobago
Tunisia	TN	TUN	Tunisia
Turkey	TR	TUR	Turkey
Turkmenistan	TM	TKM	Turkmenistan
Turks and Caicos Islands (the)	TC	TCA	Turks and Caicos Islands (the)
Tuvalu	TV	TUV	Tuvalu
Uganda	UG	UGA	Uganda
Ukraine	UA	UKR	Ukraine
United Arab Emirates (the)	AE	ARE	United Arab Emirates (the)
United States Minor Outlying Islands (the)	UM	UMI	United States Minor Outlying Islands (the)
United States of America (the)	US	USA	United States of America (the)
Uruguay	UY	URY	Uruguay
Uzbekistan	UZ	UZB	Uzbekistan
Vanuatu	VU	VUT	Vanuatu
Venezuela (Bolivarian Republic of)	VE	VEN	Venezuela (Bolivarian Republic of)
Viet Nam	VN	VNM	Viet Nam
Virgin Islands (British)	VG	VGB	Virgin Islands (British)
Virgin Islands (U.S.)	VI	VIR	Virgin Islands (U.S.)
Wallis and Futuna	WF	WLF	Wallis and Futuna
Western Sahara*	EH	ESH	Western Sahara*
Yemen	YE	YEM	Yemen
Zambia	ZM	ZMB	Zambia
\.


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.addresses (id, date_created, date_last_changed, city, region, streetadditional, streetname, streetnumber, zipcode, country_country_name_en) FROM stdin;
1	2022-03-24 18:01:33.306	2022-03-24 18:01:33.306	\N	\N	\N	\N	\N	\N	\N
2	2022-03-24 18:01:33.341	2022-03-24 18:01:33.341	\N	\N	\N	\N	\N	\N	\N
3	2022-03-24 18:01:33.344	2022-03-24 18:01:33.344	\N	\N	\N	\N	\N	\N	\N
4	2022-03-24 18:01:33.391	2022-03-24 18:01:33.391	\N	\N	\N	\N	\N	\N	\N
5	2022-03-24 18:01:33.428	2022-03-24 18:01:33.428	\N	\N	\N	\N	\N	\N	\N
6	2022-03-24 18:01:33.435	2022-03-24 18:01:33.435	\N	\N	\N	\N	\N	\N	\N
7	2022-03-24 18:01:33.443	2022-03-24 18:01:33.443	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: identity_providers; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_providers (item_category, id, date_created, date_last_changed, realm, auth_url) FROM stdin;
570786031	ac1cf001-7fbc-1f2f-817f-bce0571b0004	2022-03-24 18:01:33.33	2022-03-24 18:01:33.33	\N	\N
570786031	ac1cf001-7fbc-1f2f-817f-bce057200005	2022-03-24 18:01:33.344	2022-03-24 18:01:33.344	\N	\N
570786031	ac1cf001-7fbc-1f2f-817f-bce057230006	2022-03-24 18:01:33.347	2022-03-24 18:01:33.347	\N	\N
570786031	ac1cf001-7fbc-1f2f-817f-bce0575a0012	2022-03-24 18:01:33.402	2022-03-24 18:01:33.402	idp20	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp20/protocol/openid-connect/auth?scope=openid&state=WfWQaDyv_DysgQ3A07pDoOQQfyZzNoANX25ivHB4feg.PfDHazIGYls.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp20%2Fendpoint&nonce=pvaIiIpWvlLuCBwff_EuXA
570786031	ac1cf001-7fbc-1f2f-817f-bce057770014	2022-03-24 18:01:33.431	2022-03-24 18:01:33.431	idp21	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp21/protocol/openid-connect/auth?scope=openid&state=3IA08dKwP2qnr5l5c1H7aW4k26O1iA7n6Lrwd7vhxJQ.1czWJ8rG8Mo.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp21%2Fendpoint&nonce=EQ5Xs219-cPPxlR9WSpQKw
570786031	ac1cf001-7fbc-1f2f-817f-bce0577f0016	2022-03-24 18:01:33.438	2022-03-24 18:01:33.438	idp27	https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp27/protocol/openid-connect/auth?scope=openid&state=ycgiGMROY9Jc2gL5omj0Wx4JG0Yvdu8jzVZHmr5jrtA.yxdX6eoIb6s.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp27%2Fendpoint&nonce=bzjm_3XQw7JGv0h3uBsm4g
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.companies (companyid, date_created, date_last_changed, bpn, name, parent, shortname, status, address_id, idp_id) FROM stdin;
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	2022-03-24 18:01:33.306	2022-03-24 18:01:33.306	CAXSDUMMYCATENAZZ	Catena-X	\N	Catena-X	PENDING	1	ac1cf001-7fbc-1f2f-817f-bce0571b0004
ac861325-bc54-4583-bcdc-9e9f2a38ff84	2022-03-24 18:01:33.341	2022-03-24 18:01:33.341	CAXSDUMMYBMWZZ	Bayerische Motorenwerke AG	\N	BMW AG	PENDING	2	ac1cf001-7fbc-1f2f-817f-bce057200005
0dcd8209-85e2-4073-b130-ac094fb47106	2022-03-24 18:01:33.344	2022-03-24 18:01:33.344	CAXSDUMMYSAPZZ	SAP AG	\N	SAP	PENDING	3	ac1cf001-7fbc-1f2f-817f-bce057230006
220330ac-170d-4e22-8d72-9467ed042149	2022-03-24 18:01:33.393	2022-03-24 18:01:33.393	CAXSCARFACTORY1ZZ	Car Factory 1	\N	Car Factory 1	PENDING	4	ac1cf001-7fbc-1f2f-817f-bce0575a0012
bdac6865-2a8d-4bfd-9373-9dfce8190895	2022-03-24 18:01:33.43	2022-03-24 18:01:33.43	CAXSCARFACTORY2ZZ	Car Factory 2	\N	Car Factory 2	PENDING	5	ac1cf001-7fbc-1f2f-817f-bce057770014
41fd2ab8-71cd-4546-9bef-a388d91b2542	2022-03-24 18:01:33.438	2022-03-24 18:01:33.438	CAXSCARFACTORY3ZZ	Car Factory 3	\N	Car Factory 3	PENDING	6	ac1cf001-7fbc-1f2f-817f-bce0577f0016
d14eba77-0b18-4e41-9d84-49ef875c0763	2022-03-24 18:01:33.442	2022-03-24 18:01:33.442	CAXLDUMMYCORPZZ	Dummy Corp. 1	\N	Dummy Corp. 1	PENDING	7	\N
\.


--
-- Data for Name: apps; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.apps (id, date_created, date_last_changed, name, date_released, thumbnail_url, vendor_companyid) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0572c0007	2022-03-24 18:01:33.348	2022-03-24 18:01:33.348	Part Chain	\N	\N	ac861325-bc54-4583-bcdc-9e9f2a38ff84
ac1cf001-7fbc-1f2f-817f-bce0573f0009	2022-03-24 18:01:33.375	2022-03-24 18:01:33.375	Dismantler App	\N	\N	0dcd8209-85e2-4073-b130-ac094fb47106
ac1cf001-7fbc-1f2f-817f-bce05744000b	2022-03-24 18:01:33.38	2022-03-24 18:01:33.38	CE Marketplace	\N	\N	0dcd8209-85e2-4073-b130-ac094fb47106
ac1cf001-7fbc-1f2f-817f-bce05748000d	2022-03-24 18:01:33.384	2022-03-24 18:01:33.384	Material Traceability	\N	\N	0dcd8209-85e2-4073-b130-ac094fb47106
ac1cf001-7fbc-1f2f-817f-bce0574c000f	2022-03-24 18:01:33.388	2022-03-24 18:01:33.388	Component Performance	\N	\N	ac861325-bc54-4583-bcdc-9e9f2a38ff84
\.


--
-- Data for Name: use_cases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.use_cases (id, date_created, date_last_changed, name, shortname) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce056f90000	2022-03-24 18:01:33.297	2022-03-24 18:01:33.297	Circular Economy	CE
ac1cf001-7fbc-1f2f-817f-bce056fa0001	2022-03-24 18:01:33.306	2022-03-24 18:01:33.306	Traceability	Traceability
ac1cf001-7fbc-1f2f-817f-bce056fa0002	2022-03-24 18:01:33.306	2022-03-24 18:01:33.306	Quality Management	QM
ac1cf001-7fbc-1f2f-817f-bce056fa0003	2022-03-24 18:01:33.306	2022-03-24 18:01:33.306	Demand Management	DM
\.


--
-- Data for Name: agreements; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreements (item_category, id, date_created, date_last_changed, agreement_type, name, app_id, issuer_companyid, usecase_id) FROM stdin;
\.


--
-- Data for Name: company_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_roles (company_role_id, date_created, date_last_changed, name_de, name_en) FROM stdin;
ACTIVE_PARTICIPANT	2022-03-24 18:01:33.288	2022-03-24 18:01:33.288	Netzwerkteilnehmer	Participant
APP_PROVIDER	2022-03-24 18:01:33.295	2022-03-24 18:01:33.295	Software Anbieter	Application Provider
\.


--
-- Data for Name: agreement_assigned_company_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreement_assigned_company_roles (agreement_id, role_id) FROM stdin;
\.


--
-- Data for Name: document_templates; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.document_templates (id, date_created, date_last_changed, documenttemplatename, documenttemplateversion) FROM stdin;
\.


--
-- Data for Name: agreement_assigned_document_templates; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.agreement_assigned_document_templates (agreement_id, document_template_id) FROM stdin;
\.


--
-- Data for Name: company_user_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user_roles (id, date_created, date_last_changed, namede, nameen) FROM stdin;
COMPANY_ADMIN	2022-03-24 18:01:33.244	2022-03-24 18:01:33.244	Unternehmensadministrator	Company Admin
CX	2022-03-24 18:01:33.26	2022-03-24 18:01:33.26	CX Admin	CX Admin
IT_ADMIN	2022-03-24 18:01:33.263	2022-03-24 18:01:33.263	IT Administrator	IT Admin
SIGNING_MANAGER	2022-03-24 18:01:33.266	2022-03-24 18:01:33.266	Signing Manager	Signing Manager
DEVELOPER	2022-03-24 18:01:33.27	2022-03-24 18:01:33.27	Entwickler	Developer
DATA_SPECIALIST	2022-03-24 18:01:33.273	2022-03-24 18:01:33.273	Data Specialist	Data Specialist
APP_ADMIN	2022-03-24 18:01:33.277	2022-03-24 18:01:33.277	App(Store) Administrator	App(store) Admin
CE.Dismantler.Lead	2022-03-24 18:01:33.28	2022-03-24 18:01:33.28	CE.Dismantler.Lead	CE.Dismantler.Lead
CE.Dismantler.Manager	2022-03-24 18:01:33.282	2022-03-24 18:01:33.282	CE.Dismantler.Manager	CE.Dismantler.Manager
CE.Dismantler.Buy	2022-03-24 18:01:33.284	2022-03-24 18:01:33.284	CE.Dismantler.Buy	CE.Dismantler.Buy
CE.Dismantler.Seller	2022-03-24 18:01:33.286	2022-03-24 18:01:33.286	CE.Dismantler.Seller	CE.Dismantler.Seller
BUSINESS_ADMIN	2022-03-24 18:01:33.26	2022-03-24 18:01:33.26	Unternehmensadministrator	Business Admin
\.


--
-- Data for Name: app_assigned_company_user_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_assigned_company_user_roles (app_id, company_user_role_id) FROM stdin;
\.


--
-- Data for Name: app_licenses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_licenses (id, date_created, date_last_changed, licensetext) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0573f0008	2022-03-24 18:01:33.366	2022-03-24 18:01:33.366	free of charge
ac1cf001-7fbc-1f2f-817f-bce05743000a	2022-03-24 18:01:33.379	2022-03-24 18:01:33.379	free of charge
ac1cf001-7fbc-1f2f-817f-bce05748000c	2022-03-24 18:01:33.383	2022-03-24 18:01:33.383	free of charge
ac1cf001-7fbc-1f2f-817f-bce0574c000e	2022-03-24 18:01:33.387	2022-03-24 18:01:33.387	free of charge
ac1cf001-7fbc-1f2f-817f-bce0574f0010	2022-03-24 18:01:33.39	2022-03-24 18:01:33.39	free of charge
\.


--
-- Data for Name: app_assigned_licenses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_assigned_licenses (app_id, app_license_id) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0572c0007	ac1cf001-7fbc-1f2f-817f-bce0573f0008
ac1cf001-7fbc-1f2f-817f-bce0573f0009	ac1cf001-7fbc-1f2f-817f-bce05743000a
ac1cf001-7fbc-1f2f-817f-bce05744000b	ac1cf001-7fbc-1f2f-817f-bce05748000c
ac1cf001-7fbc-1f2f-817f-bce05748000d	ac1cf001-7fbc-1f2f-817f-bce0574c000e
ac1cf001-7fbc-1f2f-817f-bce0574c000f	ac1cf001-7fbc-1f2f-817f-bce0574f0010
\.


--
-- Data for Name: app_assigned_use_cases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_assigned_use_cases (app_id, use_case_id) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0572c0007	ac1cf001-7fbc-1f2f-817f-bce056fa0001
ac1cf001-7fbc-1f2f-817f-bce0573f0009	ac1cf001-7fbc-1f2f-817f-bce056f90000
ac1cf001-7fbc-1f2f-817f-bce05744000b	ac1cf001-7fbc-1f2f-817f-bce056f90000
ac1cf001-7fbc-1f2f-817f-bce05748000d	ac1cf001-7fbc-1f2f-817f-bce056fa0001
ac1cf001-7fbc-1f2f-817f-bce0574c000f	ac1cf001-7fbc-1f2f-817f-bce056fa0002
\.


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.languages (short_name, long_name_de, long_name_en) FROM stdin;
de	deutsch	german
en	englisch	english
\.


--
-- Data for Name: app_descriptions; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.app_descriptions (date_created, date_last_changed, description_long, description_short, app_id, language_short_name) FROM stdin;
2022-03-24 18:01:33.356	2022-03-24 18:01:33.356	Seamless part traceability through the n.tier supply chain\n\nknowledge you get detailed information about the components of your direct suppliers as well as your direct customers. This lets your answer questions such as:\n\n\n\nWhat's the exact lead time between the produciton of a subcomponent an your own components?\nTo wehre in the world are my components distributed and where are my suppliers located?\nWhat's the exact composition of my component on a unique ID level?\n\n\nBecause all of that is important information. PartChain keeps a storng one-up, one-down visibilty rule. You and the other parties in the network always see - only their suppliers customers data well as own ata. Your competitors won't be able to get any sensitive information about your production data.	CX App Part Chain Details	ac1cf001-7fbc-1f2f-817f-bce0572c0007	en
2022-03-24 18:01:33.376	2022-03-24 18:01:33.376	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App Dismantler App Details	ac1cf001-7fbc-1f2f-817f-bce0573f0009	en
2022-03-24 18:01:33.38	2022-03-24 18:01:33.38	The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n\n\n\nAt the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n\n\n\nThe solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.	SAP App CE Marketplace Details	ac1cf001-7fbc-1f2f-817f-bce05744000b	en
2022-03-24 18:01:33.384	2022-03-24 18:01:33.384	Description\n\nCreate an Intelligent Enterprise with Advanced Logistic collabration and Insights. SAP Logistics Business Network, material traceability options connect partners for inter-company collaboration and transparency. It supports a comprehensive set capabilities, allowing to manage freight more efficiently, benefit form situational awareness through track and trace, and create a trust chain for up- and downstream product genealogy.	SAP App Material Traceability Details	ac1cf001-7fbc-1f2f-817f-bce05748000d	en
2022-03-24 18:01:33.388	2022-03-24 18:01:33.388	Automotive suppliers must constantly monitor product performance and resolve quality issues quickly to ensure they don’t face costly claims. For quality analysts and engineers this involves a long, manual process of analyzing claims and failed parts that lacks vital information — including live vehicle data(such as Diagnostic Trouble Codes). Identifying root-cause issues is complex, issue resolution is slow, and costs quickly escalate. Component Performance Monitor (CPM) enables suppliers to better manage quality risk and significantly reduce the costs incurred from faulty parts by leveraging near-live vehicle data, empowering quality experts to:\n\nIdentify failure patterns and root- cause quality issues in real time\nMonitor the effectiveness of remediation measures in the fleet using live vehicle data\nand proactively request faulty parts for further analysis.\n\n...all in a single collaborative interface that supercharges the supplier to OEM feedback cycle, leading to faster proactive issue resolution, a reduction in claims, and better customer experiences.	BMW App Component Performance Monitor Details	ac1cf001-7fbc-1f2f-817f-bce0574c000f	en
\.


--
-- Data for Name: company_applications; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_applications (applicationid, date_created, date_last_changed, status, company_companyid) FROM stdin;
4f0146c6-32aa-4bb1-b844-df7e8babdcb6	2022-03-24 18:01:33.403	2022-03-24 18:01:33.403	Add Company Data	220330ac-170d-4e22-8d72-9467ed042149
0195a85f-e465-4571-b980-d1351dd76a9f	2022-03-24 18:01:33.431	2022-03-24 18:01:33.431	Submitted	bdac6865-2a8d-4bfd-9373-9dfce8190895
6b2d1263-c073-4a48-bfaf-704dc154ca9a	2022-03-24 18:01:33.439	2022-03-24 18:01:33.439	\N	41fd2ab8-71cd-4546-9bef-a388d91b2542
\.


--
-- Data for Name: company_assigned_apps; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_assigned_apps (company_id, app_id) FROM stdin;
\.


--
-- Data for Name: company_assigned_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_assigned_roles (company_id, company_role_id) FROM stdin;
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	ACTIVE_PARTICIPANT
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	APP_PROVIDER
ac861325-bc54-4583-bcdc-9e9f2a38ff84	ACTIVE_PARTICIPANT
ac861325-bc54-4583-bcdc-9e9f2a38ff84	APP_PROVIDER
0dcd8209-85e2-4073-b130-ac094fb47106	ACTIVE_PARTICIPANT
0dcd8209-85e2-4073-b130-ac094fb47106	APP_PROVIDER
\.


--
-- Data for Name: company_assigned_use_cases; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_assigned_use_cases (company_id, use_case_id) FROM stdin;
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	ac1cf001-7fbc-1f2f-817f-bce056f90000
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	ac1cf001-7fbc-1f2f-817f-bce056fa0001
2dc4249f-b5ca-4d42-bef1-7a7a950a4f87	ac1cf001-7fbc-1f2f-817f-bce056fa0002
ac861325-bc54-4583-bcdc-9e9f2a38ff84	ac1cf001-7fbc-1f2f-817f-bce056f90000
ac861325-bc54-4583-bcdc-9e9f2a38ff84	ac1cf001-7fbc-1f2f-817f-bce056fa0001
ac861325-bc54-4583-bcdc-9e9f2a38ff84	ac1cf001-7fbc-1f2f-817f-bce056fa0002
0dcd8209-85e2-4073-b130-ac094fb47106	ac1cf001-7fbc-1f2f-817f-bce056f90000
0dcd8209-85e2-4073-b130-ac094fb47106	ac1cf001-7fbc-1f2f-817f-bce056fa0001
0dcd8209-85e2-4073-b130-ac094fb47106	ac1cf001-7fbc-1f2f-817f-bce056fa0002
\.


--
-- Data for Name: company_users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_users (id, date_created, date_last_changed, email, firstname, lastlogin, lastname, company_companyid) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0575a0011	2022-03-24 18:01:33.394	2022-03-24 18:01:33.394	\N	\N	\N	\N	220330ac-170d-4e22-8d72-9467ed042149
ac1cf001-7fbc-1f2f-817f-bce057770013	2022-03-24 18:01:33.431	2022-03-24 18:01:33.431	\N	\N	\N	\N	bdac6865-2a8d-4bfd-9373-9dfce8190895
ac1cf001-7fbc-1f2f-817f-bce0577e0015	2022-03-24 18:01:33.438	2022-03-24 18:01:33.438	\N	\N	\N	\N	41fd2ab8-71cd-4546-9bef-a388d91b2542
ac1cf001-7fbc-1f2f-817f-bce057850017	2022-03-24 18:01:33.445	2022-03-24 18:01:33.445	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057880018	2022-03-24 18:01:33.447	2022-03-24 18:01:33.447	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce0578b0019	2022-03-24 18:01:33.45	2022-03-24 18:01:33.45	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce0578d001a	2022-03-24 18:01:33.453	2022-03-24 18:01:33.453	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce05790001b	2022-03-24 18:01:33.456	2022-03-24 18:01:33.456	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce05793001c	2022-03-24 18:01:33.459	2022-03-24 18:01:33.459	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce05796001d	2022-03-24 18:01:33.462	2022-03-24 18:01:33.462	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce05798001e	2022-03-24 18:01:33.464	2022-03-24 18:01:33.464	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce0579b001f	2022-03-24 18:01:33.467	2022-03-24 18:01:33.467	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce0579f0020	2022-03-24 18:01:33.47	2022-03-24 18:01:33.47	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057a20021	2022-03-24 18:01:33.474	2022-03-24 18:01:33.474	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057a40022	2022-03-24 18:01:33.476	2022-03-24 18:01:33.476	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057a70023	2022-03-24 18:01:33.478	2022-03-24 18:01:33.478	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057aa0024	2022-03-24 18:01:33.482	2022-03-24 18:01:33.482	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057ad0025	2022-03-24 18:01:33.485	2022-03-24 18:01:33.485	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057b00026	2022-03-24 18:01:33.488	2022-03-24 18:01:33.488	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057b40027	2022-03-24 18:01:33.491	2022-03-24 18:01:33.491	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057b60028	2022-03-24 18:01:33.494	2022-03-24 18:01:33.494	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057b90029	2022-03-24 18:01:33.497	2022-03-24 18:01:33.497	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057bd002a	2022-03-24 18:01:33.501	2022-03-24 18:01:33.501	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057c2002b	2022-03-24 18:01:33.506	2022-03-24 18:01:33.506	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057c6002c	2022-03-24 18:01:33.51	2022-03-24 18:01:33.51	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057c8002d	2022-03-24 18:01:33.512	2022-03-24 18:01:33.512	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057cc002e	2022-03-24 18:01:33.516	2022-03-24 18:01:33.516	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057cf002f	2022-03-24 18:01:33.519	2022-03-24 18:01:33.519	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057d20030	2022-03-24 18:01:33.522	2022-03-24 18:01:33.522	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057d60031	2022-03-24 18:01:33.525	2022-03-24 18:01:33.525	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057d90032	2022-03-24 18:01:33.528	2022-03-24 18:01:33.528	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057dc0033	2022-03-24 18:01:33.532	2022-03-24 18:01:33.532	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057e10034	2022-03-24 18:01:33.537	2022-03-24 18:01:33.537	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057e40035	2022-03-24 18:01:33.54	2022-03-24 18:01:33.54	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057e70036	2022-03-24 18:01:33.543	2022-03-24 18:01:33.543	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057e90037	2022-03-24 18:01:33.545	2022-03-24 18:01:33.545	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057ec0038	2022-03-24 18:01:33.548	2022-03-24 18:01:33.548	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057ef0039	2022-03-24 18:01:33.551	2022-03-24 18:01:33.551	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057f2003a	2022-03-24 18:01:33.554	2022-03-24 18:01:33.554	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057f6003b	2022-03-24 18:01:33.557	2022-03-24 18:01:33.557	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057f8003c	2022-03-24 18:01:33.56	2022-03-24 18:01:33.56	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057fa003d	2022-03-24 18:01:33.562	2022-03-24 18:01:33.562	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce057fe003e	2022-03-24 18:01:33.565	2022-03-24 18:01:33.565	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
ac1cf001-7fbc-1f2f-817f-bce05802003f	2022-03-24 18:01:33.57	2022-03-24 18:01:33.57	\N	\N	\N	\N	d14eba77-0b18-4e41-9d84-49ef875c0763
\.


--
-- Data for Name: company_user_assigned_app_favourites; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user_assigned_app_favourites (company_user_id, app_id) FROM stdin;
\.


--
-- Data for Name: company_user_assigned_roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company_user_assigned_roles (company_user_id, role_id) FROM stdin;
ac1cf001-7fbc-1f2f-817f-bce0575a0011	BUSINESS_ADMIN
ac1cf001-7fbc-1f2f-817f-bce057770013	BUSINESS_ADMIN
ac1cf001-7fbc-1f2f-817f-bce0577e0015	BUSINESS_ADMIN
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.documents (id, date_created, date_last_changed, document, documenthash, documentname, documentuploaddate, documentversion, documentuser) FROM stdin;
\.


--
-- Data for Name: consents; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.consents (id, date_created, date_last_changed, comment, status, target, "timestamp", agreement_id, company_companyid, documents_id, user_id) FROM stdin;
\.


--
-- Data for Name: identity_provider_users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.identity_provider_users (id, date_created, date_last_changed, idp_id, user_id) FROM stdin;
ad56702b-5908-44eb-a668-9a11a0e100d6	2022-03-24 18:01:33.416	2022-03-24 18:01:33.416	ac1cf001-7fbc-1f2f-817f-bce0575a0012	ac1cf001-7fbc-1f2f-817f-bce0575a0011
44f75aca-16e6-4f71-a52a-6968f53134a9	2022-03-24 18:01:33.432	2022-03-24 18:01:33.432	ac1cf001-7fbc-1f2f-817f-bce057770014	ac1cf001-7fbc-1f2f-817f-bce057770013
a46ebe2b-79a2-4205-82ca-03baf3aabf6e	2022-03-24 18:01:33.439	2022-03-24 18:01:33.439	ac1cf001-7fbc-1f2f-817f-bce0577f0016	ac1cf001-7fbc-1f2f-817f-bce0577e0015
8db1939d-7536-4a3b-8028-928268ce8145	2022-03-24 18:01:33.445	2022-03-24 18:01:33.445	\N	ac1cf001-7fbc-1f2f-817f-bce057850017
dffd2eec-38d6-4dc7-944b-93622dacda14	2022-03-24 18:01:33.448	2022-03-24 18:01:33.448	\N	ac1cf001-7fbc-1f2f-817f-bce057880018
c0ecb5b5-56a7-4ab1-bb05-ab214d90aced	2022-03-24 18:01:33.451	2022-03-24 18:01:33.451	\N	ac1cf001-7fbc-1f2f-817f-bce0578b0019
9be54173-c150-41d8-9953-ace03f28356f	2022-03-24 18:01:33.454	2022-03-24 18:01:33.454	\N	ac1cf001-7fbc-1f2f-817f-bce0578d001a
685e206d-4316-4162-928b-09bbbce56f22	2022-03-24 18:01:33.456	2022-03-24 18:01:33.456	\N	ac1cf001-7fbc-1f2f-817f-bce05790001b
b007b2ea-76f7-419f-a4dc-17679b340be9	2022-03-24 18:01:33.459	2022-03-24 18:01:33.459	\N	ac1cf001-7fbc-1f2f-817f-bce05793001c
4f717673-ed56-41ae-af61-5b99e8d5c7b9	2022-03-24 18:01:33.462	2022-03-24 18:01:33.462	\N	ac1cf001-7fbc-1f2f-817f-bce05796001d
f6f1e6c9-6336-48c2-bf2d-b6b924573b37	2022-03-24 18:01:33.464	2022-03-24 18:01:33.464	\N	ac1cf001-7fbc-1f2f-817f-bce05798001e
1df3d549-a7d5-476c-ba5b-7f40045f6d17	2022-03-24 18:01:33.468	2022-03-24 18:01:33.468	\N	ac1cf001-7fbc-1f2f-817f-bce0579b001f
edffb495-6c50-4e5a-b774-e8ddebf88755	2022-03-24 18:01:33.471	2022-03-24 18:01:33.471	\N	ac1cf001-7fbc-1f2f-817f-bce0579f0020
6e89bdcc-2f90-4331-a970-53bb4b982086	2022-03-24 18:01:33.474	2022-03-24 18:01:33.474	\N	ac1cf001-7fbc-1f2f-817f-bce057a20021
4f516647-6def-4513-926c-e4409058405a	2022-03-24 18:01:33.476	2022-03-24 18:01:33.476	\N	ac1cf001-7fbc-1f2f-817f-bce057a40022
a85489e7-b02c-48d3-908d-47ad20c52f83	2022-03-24 18:01:33.479	2022-03-24 18:01:33.479	\N	ac1cf001-7fbc-1f2f-817f-bce057a70023
10543cba-9db7-4246-ba5f-83bea31376ef	2022-03-24 18:01:33.482	2022-03-24 18:01:33.482	\N	ac1cf001-7fbc-1f2f-817f-bce057aa0024
f59dd7bc-3d1d-4aee-b9bf-6ddf011d57c5	2022-03-24 18:01:33.485	2022-03-24 18:01:33.485	\N	ac1cf001-7fbc-1f2f-817f-bce057ad0025
aceb8af5-f10e-48b1-9031-40ffaac0f29c	2022-03-24 18:01:33.488	2022-03-24 18:01:33.488	\N	ac1cf001-7fbc-1f2f-817f-bce057b00026
38a96dd6-25e4-4f63-847d-0414a29525d5	2022-03-24 18:01:33.492	2022-03-24 18:01:33.492	\N	ac1cf001-7fbc-1f2f-817f-bce057b40027
850b531e-cc42-4b21-be52-f8091b4d1a60	2022-03-24 18:01:33.495	2022-03-24 18:01:33.495	\N	ac1cf001-7fbc-1f2f-817f-bce057b60028
4eca11f3-9f50-410f-915a-78710bbc1c76	2022-03-24 18:01:33.498	2022-03-24 18:01:33.498	\N	ac1cf001-7fbc-1f2f-817f-bce057b90029
6c87f1ff-dce9-435d-9e9b-fd458b43feee	2022-03-24 18:01:33.501	2022-03-24 18:01:33.501	\N	ac1cf001-7fbc-1f2f-817f-bce057bd002a
38309859-cde9-4b78-9863-860abcca0992	2022-03-24 18:01:33.507	2022-03-24 18:01:33.507	\N	ac1cf001-7fbc-1f2f-817f-bce057c2002b
507adf20-f96f-411e-98ae-a55e9d51b389	2022-03-24 18:01:33.51	2022-03-24 18:01:33.51	\N	ac1cf001-7fbc-1f2f-817f-bce057c6002c
329f80e1-0b38-4253-b5c6-68107f2530b3	2022-03-24 18:01:33.512	2022-03-24 18:01:33.512	\N	ac1cf001-7fbc-1f2f-817f-bce057c8002d
39375c19-3c7f-4d3d-8fa8-e5dedd610ed4	2022-03-24 18:01:33.516	2022-03-24 18:01:33.516	\N	ac1cf001-7fbc-1f2f-817f-bce057cc002e
c5ec91a2-ee26-4bde-9923-fa957feba6e0	2022-03-24 18:01:33.519	2022-03-24 18:01:33.519	\N	ac1cf001-7fbc-1f2f-817f-bce057cf002f
ab4d13e3-d28a-4337-b0a1-f48d226c5f0a	2022-03-24 18:01:33.523	2022-03-24 18:01:33.523	\N	ac1cf001-7fbc-1f2f-817f-bce057d20030
ba42eca7-b888-45b9-85bd-a2aad29f582b	2022-03-24 18:01:33.526	2022-03-24 18:01:33.526	\N	ac1cf001-7fbc-1f2f-817f-bce057d60031
8e01e3dd-b3e5-4019-8b2b-a89d20e08770	2022-03-24 18:01:33.529	2022-03-24 18:01:33.529	\N	ac1cf001-7fbc-1f2f-817f-bce057d90032
785a73c4-bd99-41dd-96ab-d283448de173	2022-03-24 18:01:33.532	2022-03-24 18:01:33.532	\N	ac1cf001-7fbc-1f2f-817f-bce057dc0033
588148ed-29e1-440b-8e12-28c438239968	2022-03-24 18:01:33.537	2022-03-24 18:01:33.537	\N	ac1cf001-7fbc-1f2f-817f-bce057e10034
14b11c97-c2bf-4087-a05a-1a0c3a5b08f3	2022-03-24 18:01:33.54	2022-03-24 18:01:33.54	\N	ac1cf001-7fbc-1f2f-817f-bce057e40035
89c29f40-239f-4001-8733-b82fba037125	2022-03-24 18:01:33.543	2022-03-24 18:01:33.543	\N	ac1cf001-7fbc-1f2f-817f-bce057e70036
28e88974-abe5-4da1-a325-bff8f467e322	2022-03-24 18:01:33.546	2022-03-24 18:01:33.546	\N	ac1cf001-7fbc-1f2f-817f-bce057e90037
4b66ddb5-f6e9-423a-a64e-46b6c07ef631	2022-03-24 18:01:33.549	2022-03-24 18:01:33.549	\N	ac1cf001-7fbc-1f2f-817f-bce057ec0038
a708e70a-0d29-441d-bd19-8b07286cf2dc	2022-03-24 18:01:33.551	2022-03-24 18:01:33.551	\N	ac1cf001-7fbc-1f2f-817f-bce057ef0039
32f3ad7e-661d-4049-ac01-783f5ea86333	2022-03-24 18:01:33.554	2022-03-24 18:01:33.554	\N	ac1cf001-7fbc-1f2f-817f-bce057f2003a
1b005f48-c913-4627-862a-841043410fd9	2022-03-24 18:01:33.558	2022-03-24 18:01:33.558	\N	ac1cf001-7fbc-1f2f-817f-bce057f6003b
de2225ca-7bb3-4f2a-af69-07360bbddb3e	2022-03-24 18:01:33.56	2022-03-24 18:01:33.56	\N	ac1cf001-7fbc-1f2f-817f-bce057f8003c
cc40c57f-ab69-49bf-ab05-168c4d61ca36	2022-03-24 18:01:33.563	2022-03-24 18:01:33.563	\N	ac1cf001-7fbc-1f2f-817f-bce057fa003d
e82ab43e-3d34-4c75-9961-6b31b00ec3cb	2022-03-24 18:01:33.566	2022-03-24 18:01:33.566	\N	ac1cf001-7fbc-1f2f-817f-bce057fe003e
92095972-fcfc-4c94-9489-5711e0e73b71	2022-03-24 18:01:33.57	2022-03-24 18:01:33.57	\N	ac1cf001-7fbc-1f2f-817f-bce05802003f
\.


--
-- Data for Name: invitations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.invitations (uuid, date_created, date_last_changed, status, application_applicationid, user_id) FROM stdin;
bd0d0302-3ec8-4bfe-99db-b89bdb6c4b94	2022-03-24 18:01:33.408	2022-03-24 18:01:33.408	CREATED	4f0146c6-32aa-4bb1-b844-df7e8babdcb6	ac1cf001-7fbc-1f2f-817f-bce0575a0011
3106e610-2740-4b5c-946c-5258b7a58a6c	2022-03-24 18:01:33.431	2022-03-24 18:01:33.431	CREATED	0195a85f-e465-4571-b980-d1351dd76a9f	ac1cf001-7fbc-1f2f-817f-bce057770013
d54db875-774c-479f-9f14-375f2cb8b257	2022-03-24 18:01:33.439	2022-03-24 18:01:33.439	CREATED	6b2d1263-c073-4a48-bfaf-704dc154ca9a	ac1cf001-7fbc-1f2f-817f-bce0577e0015
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.hibernate_sequence', 7, true);


--
-- PostgreSQL database dump complete
--

