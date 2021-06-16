// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Vocabulary extends React.Component {

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <div className='ml50 mr50 mt50 bgwhite w100-100 df fdc'>
          <span className='fs20 bold ml50 mt20'>This is the Vocabulary</span>
          <span className='fs14 ml50 mt10 mb50'>Stuff</span>
        </div>
      </div>
    );
  }
}
