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
import * as vis from 'vis';
import adalContext from '../helpers/adalConfig';

@observer
export default class ConnectorOverview extends React.Component {
  private network: any;

  componentDidMount() {
    const company = adalContext.getDomain(adalContext.getUsername()) || 'xAMPLcorp';
    const nodes = [
      { id: 1, label: 'Catena-X PartChain\nconnector', x: -300, y: -300, color: '#969696', margin: 20},
      { id: 2, label: 'SAP Material Traceability\nconnector', x: 0, y: 300, color: '#969696', margin: 20 },
      { id: 3, label: 'CO2 Footprint\nconnector', x: -0, y: -0, color: '#969696', margin: 20 },
      { id: 5, label: `${company}\nconnector`, x: 300, y: 300, color: '#BAC938', margin: 20 },
      { id: 6, label: 'ZF\nconnector', x: 450, y: 300, color: '#464646', margin: 20 },
      { id: 7, label: 'Bosch\nconnector', x: 450, y: 450, color: '#464646', margin: 20 }
    ];

    // create an array with edges
    const edges = [
      { from: 1, to: 5 },
      { from: 2, to: 5 },
      { from: 3, to: 5 },
      { from: 6, to: 5 },
      { from: 7, to: 5 }
    ];

    // create a network
    const container = document.getElementById('mynetwork');
    const data = { nodes: nodes, edges: edges };

    const options = {
      autoResize: true,
      height: '100%',
      width: '100%',
      nodes: {
        shape: 'box',
        font: { color: '#ffffff' }
      },
      edges: {
        color: {
          color: '#004893',
          highlight: '#E49106'
        },
        smooth: {
          forceDirection: 'none',
          roundness: 0,
          type: 'curvedCW'
        }
      }
    };

    this.network = new vis.Network(container, data, options);
  }

  public render() {
    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div id='mynetwork' className='w100pc h600'/>
      </div>
    );
  }
}