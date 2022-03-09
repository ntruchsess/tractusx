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

import { promises } from "dns";
import { CompanyRole, ConsentForCompanyRoles } from "../data/companyDetails";
import { FetchBusinessPartnerDto } from "../data/companyDetailsById"
import UserService from '../helpers/UserService';

const url = process.env.REACT_APP_ONBOARDING_URL;
const endpoint = process.env.REACT_APP_ONBOARDING_ENDPOINT;
export function getCompanyDetails(oneId: String): Promise<FetchBusinessPartnerDto[]> {
  console.log('API called getCompanyDetails');
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/company/${oneId}`;
  let myResponseData: FetchBusinessPartnerDto[] = [];
  const promise = new Promise<FetchBusinessPartnerDto[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    .then((res) => res.text().then((data) => {
      if (res.ok) {
        Object.assign(myResponseData,data ? JSON.parse(data) : {})
        resolve(myResponseData);
      } else {
        reject(res.status);
      }
    })).catch((error) => {
        // alert(error);
        console.log(error, error.message, error.status);
        reject(error.status);
      }); 

    });

  return promise;
}
export function submitSendInvites(userInviteList: any): Promise<any>{
  const tenant = UserService.getTenant();
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/tenant/${tenant}/users`;
  const promise = new Promise<any>((resolve, reject) => {
    fetch(u, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInviteList),
    })
    .then((res) => res.text().then((data) => {
      if (res.ok) {
        resolve('Sent Invite');
      } else {
        reject(res.status);
      }
      }))
      .catch((error) => {
        // alert(error);
        console.log(error, error.message, error.status);
        reject(error.status);
      }); 
    });
    return promise;
};
export function submitCustodianWallet (custodianWallet): Promise<any> {
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/companyRoles`;
  const promise = new Promise<any>((resolve, reject) => {
    fetch(u, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(custodianWallet),
    })
    .then((res) => res.text().then((data) => {
      if (res.ok) {
        resolve('Sent Invite');
      } else {
        reject(res.status);
      }
      }))
      .catch((error) => {
        // alert(error);
        console.log(error, error.message, error.status);
        reject(error.status);
      }); 
    });
    return promise;
}
export function getCompanyRoles(): Promise<CompanyRole[]> {
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/companyRoles`;
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
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/consentsForCompanyRole/${roleId}`;
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
export function getClientRolesComposite(): Promise<string[]> {
  const token = UserService.getToken();
  const u= `${url}/${endpoint}/rolesComposite`;
  let userRolesRes: string[] = [];
  const promise = new Promise<string[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    .then((res) => res.text().then((data) => {
      if (res.ok) {
        Object.assign(userRolesRes,data ? JSON.parse(data) : {})
        resolve(userRolesRes);
      } else {
        reject(res.status);
      }
    })).catch((error) => {
        // alert(error);
        console.log(error, error.message, error.status);
        reject(error.status);
      });
  });

  return promise;
}

export function uploadDocument(files): Promise<any> {

  const token = UserService.getToken();
  const u = `${url}/${endpoint}/documents`;
  let formdata = new FormData();
  formdata.append("document", files[0].meta);
  const promise = new Promise<any>((resolve, reject) => {
    fetch(u, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
      body:formdata
    })
    .then((res) => res.text().then((data) => {
      if (res.ok) {
        resolve('Sent Invite');
      } else {
        reject(res.status);
      }
      }))
      .catch((error) => {
        // alert(error);
        console.log(error, error.message, error.status);
        reject(error.status);
      }); 
    });
  return promise

}