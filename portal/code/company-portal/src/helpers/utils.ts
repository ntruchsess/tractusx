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

import { CompanyRole, ConsentForCompanyRoles, UserRole } from "../data/companyDetails";
import { FetchBusinessPartnerDto } from "../data/companyDetailsById"
import UserService from '../helpers/UserService';

const url = process.env.REACT_APP_ONBOARDING_URL;
const endpoint = process.env.REACT_APP_ONBOARDING_ENDPOINT;
export function getCompanyDetails(oneId: String): Promise<FetchBusinessPartnerDto[]> {
  console.log('API called getCompanyDetails');
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/${oneId}`;
  let myResponseData: FetchBusinessPartnerDto[] = [];
  const promise = new Promise<FetchBusinessPartnerDto[]>((resolve, reject) => {
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

export function submitCustodianWallet (): Promise<CompanyRole[]> {
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

export function getUserRoles(): Promise<UserRole[]> {
  const token = UserService.getToken();
  const u = `${url}/${endpoint}/userRoles`;
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

// to be removed with CPLP-380
export function getUserClientRolesComposite(): Promise<string[]> {
  const realm = UserService.realm;
  const clientId = UserService.clientId;
  const token = UserService.getToken();
  const u= `${url}/${endpoint}/${realm}/clients/${clientId}/userRoleMappingsComposite`;
  let userRolesRes: string[] = [];
  const promise = new Promise<string[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    .then((val) => val.json().then((data) => {
      if (val.ok) {
        Object.assign(userRolesRes,data)
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

export function getClientRolesComposite(): Promise<string[]> {
  const token = UserService.getToken();
  const u= `${url}/${endpoint}/rolesComposite`;
  let userRolesRes: string[] = [];
  const promise = new Promise<string[]>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    .then((val) => val.json().then((data) => {
      if (val.ok) {
        Object.assign(userRolesRes,data)
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