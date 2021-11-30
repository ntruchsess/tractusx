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

import { CompanyDetails, CompanyRole, ConsentForCompanyRoles, UserRole } from "../data/companyDetails";
import { CompanyDetailsById } from "../data/companyDetailsById"
import UserService from '../helpers/UserService';

const url = process.env.REACT_APP_ONBOARDING_URL;
const endpoint = process.env.REACT_APP_ONBOARDING_ENDPOINT;
export function getCompanyDetails(oneId: String): Promise<CompanyDetails[]> {
  console.log('API called getCompanyDetails');
  const realm = UserService.realm;
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${realm}/${oneId}`;
  let myResponseData: CompanyDetailsById[] = [];
  const promise = new Promise<CompanyDetailsById[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((val) => val.json().then((data) => {
        if (val.ok) {
          Object.assign(myResponseData, data)
          resolve(myResponseData);
        } else {
          reject(val.statusText);
        }
      })).catch((error) => {
        alert(error);
        console.log(error, error.message, error.status);
        reject(error.message);
      });
  });

  return promise;
}


export function getCompanyDetailsBycdqId(oneId: String): Promise<CompanyDetailsById> {
  console.log('API called getCompanyDetailsById');
  const realm = UserService.realm;
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${realm}/${oneId}`;
  let myResponseData: CompanyDetailsById = new CompanyDetailsById();
  const promise = new Promise<CompanyDetailsById>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((val) => val.json().then((data) => {
        if (val.ok) {
          Object.assign(myResponseData, data)
          resolve(myResponseData);
        } else {
          reject(val.statusText);
        }
      })).catch((error) => {
        alert(error);
        console.log(error, error.message, error.status);
        reject(error.message);
      });
  });

  return promise;
}

export function getComapnyDetailsDummy(oneId: string): CompanyDetails[] {
  let dummyData: CompanyDetails[] = [
    {
      "cdqId": "US-LA.BER:0000793661-0005-4RA",
      "dataSource": "US-LA.BER",
      "businessPartner": {
        "names": [
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/local",
              "name": "Local Name",
              "technicalKey": "LOCAL"
            },
            "value": "MICROSOFT CORP",
            "language": {}
          },
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/business_partner_doing_business_as",
              "name": "Business Partner Doing Business As",
              "technicalKey": "DOING_BUSINESS_AS"
            },
            "value": "MICROSOFT #62",
            "language": {}
          },
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/local",
              "name": "Local Name",
              "technicalKey": "INTERNATIONAL"
            },
            "value": "MICROSOFT INTERNATIONAL",
            "language": {}
          }
        ],
        "identifiers": [{
          "status": {
            "technicalKey": "ABC"
          },
          "type": {
            "name": "Summy_Type",
            "technicalKey": "CX_BPN",
            "url": "ghjkfgfjd"
          },
          "value": "dunny_value"
        }],
        "categories": [],
        "addresses": [
          {
            "country": {
              "shortName": "US",
              "value": ""
            },
            "administrativeAreas": [],
            "postCodes": [
              {
                "value": "",
                "type": {
                  "url": "https://meta.cdq.com/Address/post_code/type/regular",
                  "name": "Regular",
                  "technicalKey": "REGULAR"
                }
              }
            ],
            "localities": [
              {
                "value": ""
              }
            ],
            "thoroughfares": [
              {
                "type": null,
                "number": "",
                "value": ""
              }
            ],
            "premises": [],
            "postalDeliveryPoints": null,
            "types": [
              {
                "url": "https://meta.cdq.com/Address/type/registered_address",
                "name": "Registered Address",
                "technicalKey": "REGISTERED"
              }
            ],
            "formattedAddress": null
          }
        ],
        "formattedSapRecord": null,
        "types": []
      }
    },
    {
      "cdqId": "US-LA.BER:0000793661-0006-4RA",
      "dataSource": "US-LA.BER",
      "businessPartner": {
        "names": [
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/local",
              "name": "Local Name",
              "technicalKey": "LOCAL"
            },
            "value": "MICROSOFT CORP",
            "language": {}
          },
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/business_partner_doing_business_as",
              "name": "Business Partner Doing Business As",
              "technicalKey": "DOING_BUSINESS_AS"
            },
            "value": "MICROSOFT #62",
            "language": {}
          },
          {
            "type": {
              "url": "https://meta.cdq.com/Business_partner/name/type/local",
              "name": "Local Name",
              "technicalKey": "INTERNATIONAL"
            },
            "value": "MICRO INTERNAT",
            "language": {}
          }
        ],
        "identifiers": [{
          "status": {
            "technicalKey": "ABC"
          },
          "type": {
            "name": "Summy_Type",
            "technicalKey": "CX_BPN",
            "url": "ghjkfgfjd"
          },
          "value": "dunny_value"
        }],
        "categories": [],
        "addresses": [
          {
            "country": {
              "shortName": "US",
              "value": ""
            },
            "administrativeAreas": [],
            "postCodes": [
              {
                "value": "",
                "type": {
                  "url": "https://meta.cdq.com/Address/post_code/type/regular",
                  "name": "Regular",
                  "technicalKey": "REGULAR"
                }
              }
            ],
            "localities": [
              {
                "value": ""
              }
            ],
            "thoroughfares": [
              {
                "type": null,
                "number": "",
                "value": ""
              }
            ],
            "premises": [],
            "postalDeliveryPoints": null,
            "types": [
              {
                "url": "https://meta.cdq.com/Address/type/registered_address",
                "name": "Registered Address",
                "technicalKey": "REGISTERED"
              }
            ],
            "formattedAddress": null
          }
        ],
        "formattedSapRecord": null,
        "types": []
      }
    }
  ];
  return dummyData;
}


export function getCompanyDetailsByIdDummy(cdqid: string): CompanyDetailsById {
  let dummyDataById: CompanyDetailsById = {
    "cdqId": "CX.POOL:619DECB9997ECA18E6F8E71D0",
    "dataSource": "CX.POOL",
    "businessPartner": {
      "names": [
        {
          "type": {
            "url": "https://meta.cdq.com/Business_partner/name/type/local",
            "name": "Local Name",
            "technicalKey": "LOCAL"
          },
          "value": "Seiz Industriehandschuhe GmbH",
          "language": {}
        },
        {
          "type": {
            "url": "https://meta.cdq.com/Business_partner/name/type/international",
            "name": "International Name",
            "technicalKey": "INTERNATIONAL"
          },
          "value": "Seiz Industriehandschuhe GmbH",
          "language": {}
        }
      ],
      "legalForm": {
        "name": "Gesellschaft mit beschränkter Haftung"
      },
      "identifiers": [
        {
          "type": {
            "url": "https://meta.cdq.com/BPN_(World)",
            "name": "BPN",
            "technicalKey": "CX_BPN"
          },
          "value": "BPNL0MVP0000ZNHV",
          "status": {
            "technicalKey": ""
          }
        },
        {
          "type": {
            "url": "https://meta.cdq.com/Business_Registration_Number_(Germany)",
            "name": "Business Number",
            "technicalKey": "DE_BNUM"
          },
          "value": "HRB 741882",
          "status": {
            "technicalKey": ""
          }
        },
        {
          "type": {
            "url": "https://meta.cdq.com/Legal_Entity_Identifier",
            "name": "Legal Entity Identifier",
            "technicalKey": "LEI_ID"
          },
          "value": "529900SNYKD41K8JBL23",
          "status": {
            "technicalKey": ""
          }
        },
        {
          "type": {
            "url": "https://meta.cdq.com/European_value_added_tax_identifier_(Germany)",
            "name": "Umsatzsteuer-Identifikationsnummer",
            "technicalKey": "EU_VAT_ID_DE"
          },
          "value": "DE815374930",
          "status": {
            "technicalKey": ""
          }
        }
      ],
      "categories": [],
      "addresses": [
        {
          "country": {
            "shortName": "DE",
            "value": "Deutschland"
          },
          "administrativeAreas": [
            {
              "value": "Baden-Württemberg",
              "shortName": "BW"
            },
            {
              "value": "Reutlingen"
            }
          ],
          "postCodes": [
            {
              "value": "72555",
              "type": {
                "url": "",
                "name": "",
                "technicalKey": ""
              }
            }
          ],
          "localities": [
            {
              "value": "Metzingen"
            },
            {
              "value": "Glems"
            }
          ],
          "thoroughfares": [
            {
              "number": "63",
              "value": "Neuhauser Strasse",
              "type": {
                "url": "",
                "name": "",
                "technicalKey": ""
              }
            }
          ],
          "premises": [],
          "geographicCoordinates": {
            "latitude": 48.51161,
            "longitude": 9.30819
          },
          "types": [
            {
              "name": "Registered Address",
              "url": "https://meta.cdq.com/Address/type/registered_address",
              "technicalKey": "REGISTERED"
            }
          ],
          "formattedAddress": {
            "country": "Deutschland",
            "administrativeArea": "Baden-Württemberg",
            "region": "Baden-Württemberg",
            "regionCode": "BW",
            "locality": "Metzingen",
            "district": "Glems",
            "postalCode": "72555",
            "thoroughfare": "Neuhauser Strasse 63"
          },
          "postalDeliveryPoints": []
        }
      ],
      "externalId": "CX-DEMO-1020",
      "formattedSapRecord": {
        "name1": "Seiz Industriehandschuhe GmbH",
        "legalEntity": "Gesellschaft mit beschränkter Haftung",
        "legalForm": "Gesellschaft mit beschränkter Haftung",
        "narp": "NO",
        "stceg": "DE815374930",
        "country": "Deutschland",
        "countryCode": "DE",
        "region": "Baden-Württemberg",
        "regionCodeSap": "08",
        "regionCode": "BW",
        "county": "Reutlingen",
        "countyCode": "Reutlingen",
        "city": "Metzingen",
        "district": "Glems",
        "street1": "Neuhauser Strasse",
        "houseNum": "63",
        "latitude": "48.51161",
        "longitude": "9.30819",
        "postalCode": ""
      },
      "types": []
    }
  }
  return dummyDataById;
}

export function getCompanyRoles(): Promise<CompanyRole[]> {
  const realm = UserService.realm;
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${realm}/companyRoles`;
  let companyRolesRes: CompanyRole[] = [];
  const promise = new Promise<CompanyRole[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((val) => val.json().then((data) => {
        if (val.ok) {
          Object.assign(companyRolesRes, data)
          resolve(companyRolesRes);
        } else {
          reject(val.statusText);
        }
      })).catch((error) => {
        alert(error);
        console.log(error, error.message, error.status);
        reject(error.message);
      });
  });

  return promise;
}

export function getConsentForCompanyRoles(roleId: Number): Promise<ConsentForCompanyRoles[]> {
  const realm = UserService.realm;
  const endpoint = 'api/onboarding/company';
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${realm}/consentsFoCompanyRole/${roleId}`;
  let myConsentResponseData: ConsentForCompanyRoles[] = [];
  const promise = new Promise<ConsentForCompanyRoles[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((val) => val.json().then((data) => {
        if (val.ok) {
          Object.assign(myConsentResponseData, data)
          resolve(myConsentResponseData);
        } else {
          reject(val.statusText);
        }
      })).catch((error) => {
        alert(error);
        console.log(error, error.message, error.status);
        reject(error.message);
      });
  });
  return promise;
}

export function getUserRoles(): Promise<UserRole[]> {
  const realm = UserService.realm;
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${realm}/userRoles`;
  let userRolesRes: UserRole[] = [];
  const promise = new Promise<UserRole[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
      .then((val) => val.json().then((data) => {
        if (val.ok) {
          Object.assign(userRolesRes, data)
          resolve(userRolesRes);
        } else {
          reject(val.statusText);
        }
      })).catch((error) => {
        alert(error);
        console.log(error, error.message, error.status);
        reject(error.message);
      });
  });

  return promise;
}