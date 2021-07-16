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

@observer
export default class DataCatalog extends React.Component {

  private getIcon(index: number) {
    if (index < 2) {
      return <span className='mt10 mr20'><svg xmlns='http://www.w3.org/2000/svg' height='20' viewBox='0 0 24 24' width='20'><path d='M0 0h24v24H0z' fill='none' /><path d='M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z' /></svg></span>
    } else if (index > 2) {
      return <span className='mt10 mr20'><svg version='1.0' xmlns='http://www.w3.org/2000/svg'
        width='20' height='20' viewBox='0 0 512.000000 512.000000'
        preserveAspectRatio='xMidYMid meet'>
     
        <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
          fill='#000000' stroke='none'>
          <path d='M2505 5096 c-22 -12 -150 -95 -284 -184 l-243 -160 -52 4 c-204 17
     -596 33 -617 25 -13 -5 -34 -19 -45 -32 -12 -13 -85 -150 -162 -304 l-140
     -280 -285 -143 c-310 -155 -338 -175 -336 -240 0 -20 8 -171 17 -336 l17 -298
     -178 -271 c-101 -153 -181 -285 -184 -303 -7 -41 -3 -48 193 -346 l167 -253
     -17 -333 c-17 -309 -17 -334 -1 -358 22 -34 44 -47 343 -197 l264 -132 140
     -280 c141 -282 164 -320 206 -336 19 -7 389 8 608 25 l61 5 258 -170 c288
     -190 304 -199 338 -199 15 0 133 71 303 184 l279 183 329 -18 c315 -18 330
     -18 360 -1 26 14 57 69 181 312 l150 295 290 146 c159 81 297 157 307 169 23
     28 23 87 3 439 l-16 264 181 272 c159 239 180 276 180 312 0 44 -10 62 -232
     399 l-126 191 18 324 c18 305 18 326 2 359 -15 32 -45 49 -312 186 l-295 150
     -150 294 c-122 239 -156 298 -180 312 -29 16 -47 16 -360 -1 l-329 -17 -261
     172 c-144 94 -271 176 -283 183 -31 17 -63 13 -107 -13z m334 -390 c234 -153
     257 -166 299 -166 25 0 166 7 315 16 148 8 273 12 278 7 4 -4 67 -125 140
     -268 73 -143 139 -268 148 -279 9 -10 138 -79 286 -153 149 -74 271 -136 272
     -137 2 -1 -5 -141 -14 -310 -12 -215 -14 -315 -7 -334 6 -15 84 -138 173 -274
     l163 -248 -171 -261 -171 -261 0 -62 c0 -33 7 -178 15 -320 9 -142 14 -260 13
     -261 -2 -2 -124 -64 -273 -138 -148 -74 -277 -143 -286 -153 -9 -11 -76 -138
     -149 -283 -74 -144 -139 -265 -146 -268 -7 -2 -133 3 -282 11 -148 9 -287 16
     -309 16 -36 0 -72 -21 -292 -165 -139 -92 -258 -168 -265 -171 -7 -3 -131 73
     -275 167 l-263 173 -315 -17 c-174 -10 -317 -16 -318 -15 -2 2 -62 122 -135
     268 -73 146 -140 273 -149 284 -9 10 -137 79 -286 153 -148 74 -272 137 -274
     139 -2 2 4 141 13 309 10 168 14 314 11 326 -4 11 -81 133 -171 270 -90 137
     -164 253 -164 259 0 5 73 121 163 257 90 136 166 257 171 268 4 11 0 158 -10
     328 -9 169 -15 309 -13 311 2 2 127 65 277 140 225 113 277 143 293 169 10 18
     76 145 145 282 70 138 128 251 129 253 2 2 124 -4 273 -12 148 -9 291 -16 319
     -16 47 0 60 7 304 169 140 94 261 168 269 167 8 -2 129 -78 269 -170z'/>
          <path d='M2296 4130 c-612 -110 -1116 -573 -1267 -1164 -50 -194 -65 -445 -39
     -622 99 -674 592 -1201 1255 -1344 143 -31 412 -38 555 -16 248 40 448 117
     652 253 760 505 937 1545 388 2278 -233 311 -564 521 -955 605 -147 32 -438
     37 -589 10z m459 -205 c587 -83 1042 -511 1166 -1096 31 -148 31 -390 0 -538
     -90 -423 -349 -765 -728 -959 -768 -393 -1707 14 -1948 843 -44 154 -58 263
     -52 430 8 210 47 372 132 550 260 541 842 854 1430 770z'/>
          <path d='M3122 3018 c-25 -24 -205 -193 -399 -376 l-352 -332 -198 201 c-184
     186 -201 201 -240 206 -39 5 -46 2 -78 -30 -40 -40 -46 -85 -17 -128 9 -15
     121 -132 247 -261 149 -153 239 -237 255 -240 60 -11 83 7 471 373 458 431
     496 468 504 502 17 67 -31 127 -102 127 -37 0 -50 -6 -91 -42z'/>
        </g>
      </svg>
      </span>
    }
  }

  public render() {

    const dataCatalogData: any[] = [
      {
        id: '1',
        catalogHeader: 'Engineering BOM (OEMs)',
        description: 'The asset provides the data related to the “150% Bill of Material” in the stage “as designed.',
        publisher: 'http://www.bmwgroup.com',
        sovereign: 'http://www.bmwgroup.com',
        url: '',
        curator: '',
        maintainer: ''
      },
      {
        
        id: '2',
        catalogHeader: 'Vehicle BOM (OEMs)',
        description: 'Standard UserThis asset provides the the bill of material data related to a vehicle over the life cycle in the stage “as planned”, “as built” and “as maintained.',
        publisher: 'https://www.mercedes-benz.de/',
        sovereign: 'https://www.mercedes-benz.de/',
        url: '',
        curator: '',
        maintainer: ''
        
      },
      {
        
        id: '4',
        catalogHeader: 'Component BOM (Supplier)',
        description: 'This asset provides the the bill of material data related to components over the life cycle in the stage “as planned”, “as built” and “as maintained',
        publisher: ' https://www.zf.com/',
        sovereign: ' https://www.zf.com/',
        url: '',
        curator: '',
        maintainer: ''
    
      },
      {
        
        id: '3',
        catalogHeader: 'HERE Dataspace Connector',
        description: 'HERE Technologies IDS Connector',
        publisher: '',
        sovereign: '',
        url: 'https://w3id.org/idsa/autogen/baseConnector/f95f8f49-45c5-4072-a04d-766241294cf4',
        curator: 'https://www.here.com',
        maintainer: 'https://www.here.com'
      
      }
    ];
  
    return (
      <div>
        <div className='mt50 df fdc'>
          {dataCatalogData.map((c, index) => (
            <div key={index} className='ml50 mt10 bgpanel w100-100 df fdc br4 bsdatacatalog'>
              <div className='df aic mt20'>
                <span className='fs24 bold fg191 pl20'>{c.catalogHeader}</span>
                <div className='flex1'/>
                {this.getIcon(index)}
              </div>
              <span className='fs14 fg191 pl20 pt8 lh20 mr70'>{c.description}</span>
              {c.curator ?
                <div className='mt20 mb30'>
                  <span className='fs14 fg5a pl20 pt28 fggrey lh16'>URL</span>
                  <span className='fs14 fg5a pl50 pt28 fg5a'>{c.url}</span>
                  <br />
                  <span className='fs14 fg5a pl20 pt28 fggrey lh16'>Curator</span>
                  <span className='fs14 fg5a pl29 pt28 fg5a mr30'>{c.curator}</span>
                  <br />
                  <span className='fs14 fg5a pl20 pt28 fggrey lh16 mr30'>Maintainer</span>
                  <span className='fs14 fg5a pl10 pt28 fg5a mr30'>{c.maintainer}</span>
                </div>
                :
                <div className='mt20 mb30'>
                  <span className='fs14 fg5a pl20 pt28 fggrey lh16 lh16'>Publisher</span>
                  <span className='fs14 fg5a pl30 pt28 fg5a mr30'>{c.publisher}</span>
                  <br />
                  <span className='fs14 fg5a pl20 pt28 fggrey lh16'>Sovereign</span>
                  <span className='fs14 fg5a pl28 pt28 fg5a mr30'>{c.sovereign}</span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}
