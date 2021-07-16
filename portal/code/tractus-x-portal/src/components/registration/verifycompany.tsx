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

import * as React from 'react';
import { observer } from 'mobx-react';
import RegisterTemplate from './registertemplate';
import { OrganizationalDetails} from '../../data/organizationdetails';
import { TextField, PrimaryButton, Dialog, Dropdown, DialogFooter, IDropdownOption, DialogType} from '@fluentui/react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import Logo from '../logo';
import { getOneIDDetails, convertDate, mapOneId } from '../../helpers/utils';
import { AppState } from '../../stores/appstate';

@observer
class VerifyCompany extends React.Component<RouteComponentProps> {

  @observable oneId: string = '';
  @observable isFetchButtonDisabled = true;
  @observable organizationalDetails: OrganizationalDetails;
  @observable myResponseData: OrganizationalDetails;
  @observable hideDialog = true;
  @observable oneIdlabel = '';

  componentDidMount() {
    this.oneId = mapOneId(AppState.state.email);
  }

  private async getOneID() {
    this.isFetchButtonDisabled = true;
    this.oneIdlabel = 'Waiting for partner network database';
    try {
      const ret = await getOneIDDetails(this.oneId);
      this.organizationalDetails = ret;
      if (ret) {
        this.oneIdlabel = 'oneId found in Database';
        this.isFetchButtonDisabled = false;
        this.hideDialog = false;
      }
      else {
        this.oneIdlabel = 'oneId not present in Database';
      }
    } catch {
      console.log('fail');
      return;
    }
  }

  private connectClick() {
    this.hideDialog = true;
    this.props.history.push('/home/dashboard');
  }

  public render() {
    const oneid: string = this.organizationalDetails?.oneID || '';
    const orgName: string = this.organizationalDetails?.businessPartnerName?.[0]?.name || '';
    const issuer: string = this.organizationalDetails?.businessPartnerIdentifiers?.[0]?.issuer || '';
    const regName: string = orgName + ' ' + this.organizationalDetails?.businessPartnerName?.[0]?.legalForm || '';
    const identifyNumberType: string = this.organizationalDetails?.businessPartnerIdentifiers?.[0]?.typeOfIdentificationNumber || '';
    const identifyNum: string = this.organizationalDetails?.businessPartnerIdentifiers?.[0]?.identificationNumber || '';
    const street: string = this.organizationalDetails?.addressData?.[0]?.street || '';
    const houseNumber: string = this.organizationalDetails?.addressData?.[0]?.houseNumber || '';
    const addInfo: string = this.organizationalDetails?.addressData?.[0]?.itinaryInformation || '';
    const postalCode: string = this.organizationalDetails?.addressData?.[0]?.postalCode || '';
    const city: string = this.organizationalDetails?.addressData?.[0]?.city || '';
    const districtName: string = this.organizationalDetails?.addressData?.[0]?.region || '';
    const countryName: string = this.organizationalDetails?.addressData?.[0]?.country?.countryNameEN || '';
    const emailAddress: string = this.organizationalDetails?.contactData?.[0]?.emailAddress || '';
    const website: string = this.organizationalDetails?.contactData?.[0]?.website || '';
    const countryPrefix: string = this.organizationalDetails?.contactData?.[0]?.phoneNumbers?.[0]?.countryPrefix || '';
    const phnNumber: string = this.organizationalDetails?.contactData?.[0]?.phoneNumbers?.[0]?.number || '';
    const iban: string = this.organizationalDetails?.bankData?.[0]?.IBAN || '';
    const bic: string = this.organizationalDetails?.bankData?.[0]?.bankIdentifier || '';
    const currency: string = this.organizationalDetails?.bankData?.[0]?.currency || '';
    const countryBank: string = this.organizationalDetails?.bankData?.[0]?.countryOfBank || '';
    const lang: string = this.organizationalDetails?.businessPartnerName?.[0]?.language || '';
    const activityStatus = this.organizationalDetails?.businessStatus?.[0]?.statusOfOperation || '';
    const validFrom: string = this.organizationalDetails?.businessStatus?.[0]?.validFrom || '';
    const validTo: string = this.organizationalDetails?.businessStatus?.[0]?.validTo || '';

    const langOptions: IDropdownOption[] = [
      { key: 'DE', text: 'German' },
      { key: 'EN', text: 'English' },
      { key: 'FR', text: 'French' },
      { key: 'RU', text: 'Russian' },
      { key: 'ES', text: 'Spanish' }
    ];

    const districtOptions: IDropdownOption[] = [
      { key: districtName, text: districtName }
    ];

    const currencyOptions: IDropdownOption[] = [
      { key: currency, text: currency }
    ];

    const countryBankOptions: IDropdownOption[] = [
      { key: countryBank, text: countryBank }
    ];
  
    return (
      <div className='w100pc h100pc df fdc bge1 ds bgregisterimage'>
        <Logo />
        <div className='df mt100'>
          <div className='flex1 df jcc'>
            <RegisterTemplate />
          </div>
          <div className='df fdc bgwhite bleft flex2 mr100'>
            <div className='mt20 ml20'>
              <span className='fs11 lh14 fggrey'>Step2: Organization</span>
              <br />
              <span className='fs24 lh29 fg191 bold pt2'>Connect your organization</span>
            </div>
            <div className='mt100 ml40 aic'>
              <div className=' bold fs74 lh72 pb8 '>Finalize your<br />registration</div>
              <div className='pb8 mt20'><span className='bold fs24 lh29'>Your Email-address is verified.</span></div>
            </div>
            <div className='mt10 ml40'>
              <div className='fs14 lh20 pb8 fg191 w500'>Congratulations, your account is now verified. Please now link your organization
                to this account via One ID or generate a new organization profile.</div>
            </div>
            <div className='mt30 ml20 mb20'>
              <div className='fs11 lh14 fggrey ml20 minh16'>{this.oneIdlabel}</div>
              <div className='mt4 pb6 df'>
                <TextField placeholder='One ID' className='ml20 w50pc pr10 b0 br4 h36' value={this.oneId} required onChange={(event: any) => this.oneId = event.target.value} />
                <PrimaryButton text='FETCH DATA' id='button' className='w30pc bold fs14 ml30' disabled={!this.oneId} onClick={() => this.getOneID()} />
              </div>
              <Link to='/home/dashboard' className='tdn mt10 fs14 bold fggrey lh40 ml20'>CREATE NEW ORGANIZATION PROFILE</Link>
            </div>
          </div>
        </div>
        <Dialog hidden={this.hideDialog} dialogContentProps={{type: DialogType.normal}} modalProps={{isBlocking: false,containerClassName: 'minw750 br7'}}>
          <div className='df fdc bgwhite bleft flex2'>
            <div className='h80 ml50'>
              <div className=' bold fs11 pb12 pb8 fggrey'>Step 3: Verification</div>
              <div className=' bold fs20 pb12 pb8'>Verify data &amp; connect Organization</div>
            </div>
            <div className='h80 ml50'>
              <TextField disabled className='w90pc brnone br4 h36' label='One ID' defaultValue={oneid} />
            </div>
            <div className='pb8 ml50'>
              <div className='bold fs14 pb12 pb8'>Organization Names</div>
              <div className='pb6 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' label='Org Name' defaultValue={orgName} />
                <Dropdown className='w45pc' disabled label='Prefered contact language' options={langOptions} defaultSelectedKey={lang} />
              </div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='Registered name' defaultValue={regName} />
                <TextField disabled className='w45pc brnone br4 h36' label='Local name' defaultValue={regName} />
              </div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='International name' />
                <TextField disabled className='w45pc brnone br4 h36' label='Transliterated name' />
              </div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='DBA name' />
                <TextField disabled className='w45pc brnone br4 h36' label='VAT registered name' />
              </div>
            </div>
            <div className='pb8 ml50'>
              <div className=' bold fs14 pb12 pb8'>Organization Identifiers</div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='External Business Partner Identifier' />
                <TextField disabled className='w45pc brnone br4 h36' label='Issuer' defaultValue={issuer} />
              </div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='Type of Business partner Identifier' defaultValue={identifyNumberType} />
                <TextField disabled className='w45pc brnone br4 h36' label='Identification Number' defaultValue={identifyNum} />
              </div>
            </div>
            <div className='pb8 ml50'>
              <div className=' bold fs14 pb12 pb8'>Business Status</div>
              <div className='pb24 df'>
                <TextField className='mr10 flex1' disabled label='State of activity/operation' defaultValue={activityStatus} />
                <div className='df flex1 mr70'>
                  <TextField className='flex1' disabled ariaLabel='valid from' label='Valid from' defaultValue={convertDate(validFrom)} />
                  <TextField className='ml10 flex1' disabled ariaLabel='valid until' label='Valid until' defaultValue={convertDate(validTo)} />
                </div>
              </div>
            </div>
            <div className='pb20 ml50'>
              <div className='bold fs14 pb8'>Address Information</div>
              <div className='fb pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='Street' defaultValue={street} />
                <TextField disabled className='w45pc brnone br4 h36' label='Street 2' />
              </div>
              <div className='fb pb24 df'>
                <TextField disabled className='w45pc brnone br4 pr10 h36' label='House number' defaultValue={houseNumber} />
                <TextField disabled className='w45pc brnone br4 h36' label='Add. Information' defaultValue={addInfo} />
              </div>
            </div>
            <div className='pb24 ml50'>
              <div className='fb pb6 df'>
                <TextField disabled className='w45pc pr10' label='Country' defaultValue={countryName} />
                <Dropdown className='w45pc' disabled label='District' options={districtOptions} defaultSelectedKey={districtName} />
              </div>
              <div className='fb pb6 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' label='Postal code' defaultValue={postalCode} />
                <TextField disabled className='w45pc brnone br4 h36' label='City' defaultValue={city} />
              </div>
            </div>
            <div className='pb24 ml50'>
              <div className='bold fs14 pb8'>Contact</div>
              <div className='pb6 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' label='Email address' defaultValue={emailAddress} />
                <TextField disabled className='w45pc brnone br4 h36' label='Website' defaultValue={website} />
              </div>
            </div>
            <div className='pb20 ml50'>
              <div className='pb24 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' label='Country prefix' defaultValue={countryPrefix} />
                <TextField disabled className='w45pc brnone br4 h36' label='Phone number' defaultValue={phnNumber} />
              </div>
              <div className='pb24 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' label='Mobile phone' />
                <TextField disabled className='w45pc brnone br4 h36' label='Fax' />
              </div>
            </div>
            <div className='pb20 ml50'>
              <div className=' bold fs14 pb8'>Account</div>
              <div className='pb6 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' defaultValue={iban} label='IBAN' />
                <Dropdown className='w45pc ' disabled label='Currency' options={currencyOptions} defaultSelectedKey={currency} />
              </div>
              <div className='pb6 df'>
                <TextField disabled className='w45pc pr10 brnone br4 h36' defaultValue={bic} label='Website' />
                <Dropdown className='w45pc ' disabled label='Country of bank' options={countryBankOptions} defaultSelectedKey={countryBank} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className='df mb-40 aic'>
              <Link to='/home/dashboard' className='tdn mt10 fs14 bold fggrey lh40 ml20'>REPORT INCORRECT DATA</Link>
              <div className='flex1'/>
              <PrimaryButton className='br4 mr70' text='CONNECT NOW' onClick={() => this.connectClick()} />
            </div>
          </DialogFooter>
        </Dialog>
        <div className='w100' />
      </div>
    );
  }
}

export default withRouter(VerifyCompany);
