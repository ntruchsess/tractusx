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

class BusinessPartnerName {
  public name = '';
  public language = '';
  public type = '';
  public legalForm = '';
}

class BusinessPartnerIdentifiers {
  public issuer = '';
  public typeOfIdentificationNumber = '';
  public identificationNumber = '';
}

class BusinessStatus {
  public statusOfOperation = '';
  public validFrom = '';
  public validTo = '';
}

class ContactData {
  public communicationLanguage = '';
  public emailAddress = '';
  public website = '';
  public phoneNumbers: PhoneNumbers;
}

class PhoneNumbers {
  public countryPrefix = '';
  public number = '';
  public type = '';
}

class BankData {
  public IBAN = '';
  public currency = '';
  public bankIdentifier = '';
  public countryOfBank = '';
}

class AddressData {
  public addressID = '';
  public language = '';
  public addressType = '';
  public coName = '';
  public street = '';
  public itinaryInformation = '';
  public houseNumber = '1';
  public houseNumberSupplement = '';
  public postalCode = '';
  public postalCodeType = '';
  public poBox = '';
  public city = '';
  public district = '';
  public region = '';
  public country: Country;
  public latitude = '';
  public longitude = '';
  public altitude = '';
}

class Country {
  public ISOCode = '';
  public countryNameEN = '';
  public countryNameLocal = '';
}

export class OrganizationalDetails {
  public oneID = '';
  public businessPartnerType = '';
  public businessPartnerName: BusinessPartnerName = null;
  public businessPartnerIdentifiers: BusinessPartnerIdentifiers = null;
  public businessStatus: BusinessStatus = null;
  public contactData: ContactData = null;;
  public bankData: BankData = null;
  public addressData: AddressData = null;
}
