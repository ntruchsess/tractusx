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
import { Dropdown, IDropdownOption, TextField } from '@fluentui/react';

@observer
export default class OrgContactData extends React.Component {
    public render() {
        
        const countryOptions: IDropdownOption[] = [
            { key: 'germany', text: 'Germany' },
            { key: 'russia', text: 'Russia' },
            { key: 'china', text: 'China'},
            { key: 'india', text: 'India'}
        ];

        const districtOptions: IDropdownOption[] = [
            { key: 'aachen', text: 'Aachen' },
            { key: 'bochum', text: 'Bochum' },
            { key: 'dortmund', text: 'Dortmund'},
            { key: 'munich', text: 'Munich'}
        ];

        return (
            <div className='w100pc pt18 h100pc df fdc'>
            <div className='pb20'>
                <div className='bold fs14 pb8'>Address Information</div>
                <div className='fb pb6 df'>
                    <TextField placeholder='Street' disabled className='w50pc brnone br4 pr10 h36' required/>
                    <TextField placeholder='Street 2' disabled className='w50pc brnone br4 h36'/>
                </div>
                <div className='fb pb6 df'>
                    <TextField placeholder='House number' disabled className='w50pc brnone br4 pr10 h36'/>
                    <TextField placeholder='Add. Information' disabled className='w50pc brnone br4 h36'/>
                </div>
            </div>
            <div className='pb8'>
                <div className='fb pb6 df'>
                    <Dropdown className='w50pc pr10' disabled placeholder='Country' options={countryOptions} required/>
                    <Dropdown className='w50pc' disabled placeholder='District' options={districtOptions} required/>
                </div>
                <div className='fb pb6 df'>
                    <TextField placeholder='Postal code' disabled className='w50pc pr10 brnone br4 h36' required/>
                    <TextField placeholder='City' disabled className='w50pc brnone br4 h36' required/>
                </div>
            </div>
            <div className='pb20'>
                <div className='bold fs14 pb8'>Contact</div>
                <div className='pb6 df'>
                    <TextField placeholder='Email address' disabled className='w50pc pr10 brnone br4 h36' required/>
                    <TextField placeholder='Website' disabled className='w50pc brnone br4 h36' required/>
                </div>
            </div>
            <div className='pb20'>
                <div className='pb6 df'>
                    <TextField placeholder='Country prefix' disabled className='w50pc pr10 brnone br4 h36'/>
                    <TextField placeholder='Phone number' disabled className='w50pc brnone br4 h36'/>
                </div>
                <div className='pb6 df'>
                    <TextField placeholder='Mobile phone' disabled className='w50pc pr10 brnone br4 h36'/>
                    <TextField placeholder='Fax' disabled className='w50pc brnone br4 h36'/>
                </div>
            </div>
        </div>
        );
    }
}
