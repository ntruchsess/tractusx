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
import { Icon } from '@fluentui/react/lib/Icon';
import {Connectors } from '../stores/connectors';
import  ConnectorCard from './connectorcard';
import * as vis from 'vis';

@observer
export default class SetUpConnector extends React.Component {
  private network: any;

  componentDidMount() {
    const nodes = [
      { id: 1, label: 'Catena-X PartChain\nconnector', x: -300, y: -300, color: '#969696', margin: 20},
      { id: 2, label: 'SAP Material Traceability\nconnector', x: 0, y: 300, color: '#969696', margin: 20 },
      { id: 3, label: 'CO2 Footprint\nconnector', x: -0, y: -0, color: '#464646', margin: 20 },
      { id: 4, label: 'xAMPLcorp TEST\nconnector', x: 150, y: 150, color: '#A7B434', margin: 20 },
      { id: 5, label: 'xAMPLcorp\nconnector', x: 300, y: 300, color: '#BAC938', margin: 20 },
      { id: 6, label: 'ZF\nconnector', x: 450, y: 300, color: '#464646', margin: 20 },
      { id: 7, label: 'T-Systems\nconnector', x: 450, y: 450, color: '#464646', margin: 20 }
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
    const InfoSolidIcon = () => <Icon iconName='InfoSolid' className='h30 w30 mt4' />;
    return (
      <div className='w100pc pt18 h100pc df fdc'>
        <div id='mynetwork' className='w100pc h600'/>
        {!this && <span className='h19 w748 fs16 lh19 ls016 fgac df ml100'>
          <InfoSolidIcon />   No Connector found. Please choose an option to setup your Connector, or choose a third party service.</span>}
        <div className='w100pc'>
          {Connectors.state.categories.map((c, index) => (
            <div key={index} className='ml50 mr50 mb30 w100pc df fdc'>
              <div className='w100-100'>
                <div className='ovx h250 df'>
                  {c.apps.map((a, index) => <ConnectorCard key={index} conn={a} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}