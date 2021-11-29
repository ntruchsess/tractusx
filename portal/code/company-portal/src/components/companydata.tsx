// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { observer } from 'mobx-react';
import { getComapnyDetailsDummy } from '../helpers/utils';
import { CompanyDetails } from '../data/companyDetails';
import { observable } from 'mobx';
import AlertDialog from './alertdialog';
import { TextField, PrimaryButton, DefaultButton, SearchBox, Dropdown, IDropdownOption } from '@fluentui/react';


// var options : IDropdownOption[] = [];
@observer
export default class Companydata extends React.Component {

  @observable companyDetails: CompanyDetails[];
  @observable alertRef;
  @observable searchParameter: string;
  @observable options : IDropdownOption[] = [];


  async fillFormData(value) {
    console.log(value)
    try {
      // this.companyDetails = await getCompanyDetails(value);
      this.companyDetails = await getComapnyDetailsDummy(value);
      // this.options  = this.companyDetails.map(x => {return{key:x.businessPartner.names.,text:x}});
      // this.options = this.companyDetails;
      console.log(this.companyDetails);
    } catch (e) {
      console.log(e.message)
    }
  }

  onButtonClick() {
    console.log(this.alertRef);
    this.alertRef?.show(true, 'Disclaimer', 'Are you authorized by your company to confirm this data?');
  }

  yesClick() {
    this.alertRef?.show(false);
  }


  public render() {
    // const bpn = this.companyDetails[0].businessPartner.identifiers.filter(x=>x.type.technicalKey=='CX_BPN');

    // console.log(bpn)WE34E1
    // const parent = this.companyDetails?.parent || '';
    // const accountGroup = this.companyDetails?.accountGroup || '';
    // const name1 = this.companyDetails?.name1 || '';
    // const name2 = this.companyDetails?.name2 || '';
    // const name3 = this.companyDetails?.name3 || '';
    // const name4 = this.companyDetails?.name4 || '';
    // const addressVersion = this.companyDetails?.addressVersion || '';
    // const country = this.companyDetails?.country || '';
    // const city = this.companyDetails?.city || '';
    // const postalCode = this.companyDetails?.postalCode || '';;
    // const street1 = this.companyDetails?.street1 || '';
    // const street2 = this.companyDetails?.street2 || '';
    // const street3 = this.companyDetails?.street3 || '';
    // const houseNumber = this.companyDetails?.houseNumber  || '';
    // const taxNumber1 =this.companyDetails?.taxNumber1 || '';
    // const taxNumber1Type =this.companyDetails?.taxNumber1Type || '';
    // const taxNumber2 =this.companyDetails?.taxNumber2 || '';
    // const taxNumber2Type =this.companyDetails?.taxNumber2 || '';
    // const taxNumber3 =this.companyDetails?.taxNumber3 || '';
    // const taxNumber3Type =this.companyDetails?.taxNumber3Type || '';
    // const taxNumber4 =this.companyDetails?.taxNumber4 || '';
    // const taxNumber4Type =this.companyDetails?.taxNumber4Type || '';
    // const taxNumber5 =this.companyDetails?.taxNumber5 || '';
    // const taxNumber5Type =this.companyDetails?.taxNumber5Type || '';
    // const vatNumber =this.companyDetails?.vatNumber || '';
    // const vatNumberType =this.companyDetails?.vatNumberType || '';
    return (
      <div className='mb10'>
        <input className='collapse-open' type='checkbox' id='collapse-1' />
        <label className='collapse-btn bgwhite' htmlFor='collapse-1'>
          <div className='fl fs22 dblock pr20 bold fggreen'>1</div>
          <div className='df fdc'>
            <span className='fs22 bold fggreen'>Verify Your Company Data</span>
            <div className='fs14 mt10'>Check your company data and verify.</div>
          </div>
        </label>
        <div className='collapse-panel bgwhite'>
          <div className='h100vh-212 oa'>
            <div className='ml30 pl20 pr20 pt20 holder'>
              <div className='fb pb6 df'>
                <SearchBox
                  placeholder="Search"
                  onClear={ev => {
                    console.log('Custom onClear Called');
                  }}
                  onSearch={(value) => this.fillFormData(value)}
                />
              </div>
              {/* <Dropdown placeholder="User Role" label="User Role" options={options} className='w50pc brnone br4 pr10 h36'  /> */}
            </div>
            <div className='ml30 pb20 p24'>
              <div className='fb pb6 df'>
                <TextField label='OneID' className='w50pc brnone br4 pr10 h36' value='' />
                <TextField label='Organization name' value='' className='w50pc brnone br4 pr10 h36' />
                <TextField label='contact language' className='w50pc brnone br4 h36' value='' />
              </div>
            </div>
            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Organization names</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='Registered name' value='' />
                <TextField className='w50pc pr10' label='local name' value='' />
                <TextField label='international name' value='' className='w50pc brnone br4 pr10 h36' />
              </div>
              <div className='fb pb6 df mt10'>
                <TextField label='transliterated Name' className='w50pc pr10 brnone br4 h36' defaultValue='' />
                <TextField label='DBA name' className='w50pc brnone br4 pr10 h36' defaultValue='' />
                <TextField label='VAT registered name' className='w50pc brnone br4  h36' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Organization identifiers</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='External Business Partner Identifier' defaultValue='' />
                <TextField className='w50pc pr10' label='issuer' defaultValue='' />
              </div>
              <div className='fb pb6 df mt10'>
                <TextField label='Type of Business Partner Identifier' className='w50pc pr10 brnone br4 h36' defaultValue='' />
                <TextField label='Identification number' className='w50pc brnone br4 pr10 h36' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Business Status</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='State of active/operation' defaultValue='' />
                <TextField className='w50pc pr10' label='Valid from' defaultValue='' />
                <TextField className='w50pc pr10' label='Valid until' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Address information</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='Street' defaultValue='' />
                <TextField className='w50pc pr10' label='Street 2' defaultValue='' />
              </div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='House number' defaultValue='' />
                <TextField label='Add. information' className='w50pc pr10 brnone br4 h36' defaultValue='' />
              </div>
              <div className='fb pb6 df mt10'>
                <TextField className='w50pc pr10' label='Country' defaultValue='' />
                <TextField label='District' className='w50pc pr10 brnone br4 h36' defaultValue='' />
              </div>
              <div className='fb pb6 df mt10'>
                <TextField className='w50pc pr10' label='Postal Code' defaultValue='' />
                <TextField label='City' className='w50pc pr10 brnone br4 h36' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Contact</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='Email address' defaultValue='' />
                <TextField className='w50pc pr10' label='Website' defaultValue='' />
                <TextField className='w50pc pr10' label='Country prefix' defaultValue='' />
              </div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='Phone number' defaultValue='' />
                <TextField className='w50pc pr10' label='Mobile Phone' defaultValue='' />
                <TextField className='w50pc pr10' label='Fax' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt10 p24'>
              <div className='bold fs14 pb8'>Account</div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='IBAN' defaultValue='' />
                <TextField className='w50pc pr10' label='Currency' defaultValue='' />
              </div>
              <div className='fb pb6 df'>
                <TextField className='w50pc pr10' label='BIC' defaultValue='' />
                <TextField className='w50pc pr10' label='Country of bank' defaultValue='' />
              </div>
            </div>

            <div className='ml30 pb8 mt50 p24 pb20 brbt df fdc fdrr'>
              <PrimaryButton text='DATA IS CORRECT' onClick={() => this.onButtonClick()} className='ml30' />
              <DefaultButton text='DELETE' />
            </div>
          </div>

        </div>
        <AlertDialog message='Are you authorized by your company to confirm this data?' ref={(ref) => this.alertRef = ref} button1Text='YES, I AM AUTHORIZED' button1Action={() => this.yesClick()} button2Text='NO I AM NOT' button2Action={() => this.yesClick()} />
      </div>
    )
  }
}