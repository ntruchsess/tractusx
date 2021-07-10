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
import { SearchBox } from '@fluentui/react';
import jsonData from '../data/gpm_testdata.json';
import YellowPage from '../data/yellowpage';
import { compare } from '../helpers/utils';
import { observable } from 'mobx';

@observer
export default class YellowPages extends React.Component {
  @observable private yellowPagesData: YellowPage[] = [];
  private readonly data: YellowPage[];
  private lastLetter = '';

  constructor(props: any) {
    super(props);
    this.data = JSON.parse(JSON.stringify(jsonData));
    this.yellowPagesData = this.data.sort((a, b) => compare(a.businessPartnerName[0].name.toLowerCase(), b.businessPartnerName[0].name.toLowerCase()));
  }

  private searchVal(newvalue: string): void {
    this.yellowPagesData = this.data.filter(a => a.businessPartnerName[0].name.toLowerCase().includes(newvalue.toLowerCase()));
  }

  private rolodex(name: string) {
    const letter = name.substr(0, 1).toUpperCase();
    if (this.lastLetter === letter) {
      return null;
    } else {
      this.lastLetter = letter;
      return <span className='bold fs24 mb10 ml10 mt3'>{letter}</span>
    }
  }

  public render() {
    this.lastLetter = '';
    return (
      <div className='w100pc h100pc df fdc'>
        <div className='w100pc bgf5 h100pc df fdc ml50'>
          <div className='df bgf5 mb15 mt50 w100-60'>
            <span className='fs14 fggrey flex1 mr50'><SearchBox className='bcwhite' placeholder='Search' onChange={(ev, newvalue) => this.searchVal(newvalue)} /></span>
            <span className='fs14 fggrey mr5 flex1'>country:  <span className='bold'>email address</span></span>
            {/* <span className='fs14 fggrey mr5 flex1'>commodity:  <span className='bold'>none</span></span> */}
          </div>
          <div className='df mb5 w100-100'>
            <span className='fs14 fgblack bold ml10 mr5 flex3'>Name</span>
            <span className='fs14 fgblack bold ml20 mr5 flex2'>OneID</span>
            <span className='fs14 fgblack bold ml5 mr5 flex1'>Country</span>
            {/* <span className='fs14 fggrey flex1'>Commodity</span> */}
          </div>
          {this.yellowPagesData.map((c, index) => (
            <div key={index} className='df fdc'>
              {this.rolodex(c.businessPartnerName[0].name)}
              <div className='df bgwhite h36 mb5 w100-100 p5 aic'>
                <span className='fs14 ml5 mr5 flex3'>{c.businessPartnerName[0].name}</span>
                <span className='fs14 mr5 ml10 mt7 flex2 minw100'>{c.oneID}</span>
                <span className='fs14 mr5 mt7 flex1'>{c.addressData[0].country.countryNameEN}</span>
                {/* <span className='fs14 mt7 pl5 flex1'></span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
