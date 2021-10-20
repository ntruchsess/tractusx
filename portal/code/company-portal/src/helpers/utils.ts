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

import { CompanyDetails } from "../data/companyDetails";
import UserService  from '../helpers/UserService';


export function getCompanyDetails(oneId: String): Promise<CompanyDetails> {
  const realm = 'microsoft';
  // const url = process.env.REACT_APP_ONBOARDING_SERVICE_BASE_URL;
  // const endpoint=process.env.ONBOARDING_COMPANY_DETAILS;
  const url = 'https://catenax-dev003-app-onboarding-service.azurewebsites.net';
  const endpoint = 'api/onboarding/company';
  const token = UserService.getToken();
  const u= `${url}/${endpoint}/${realm}/${oneId}`;
  //const u = `${url}?businessPartnerOneId=${oneId}`;
  let myResponseData: CompanyDetails = new CompanyDetails();
  const promise = new Promise<CompanyDetails>((resolve, reject) => {
    fetch(u, { method: 'GET', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    .then((val) => val.json().then((data) => {
      if (val.ok) {
        Object.assign(myResponseData,data)
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
