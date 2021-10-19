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
import { PrimaryButton, TextField, SearchBox,Icon, IconButton} from '@fluentui/react';
import Team from '../data/team';
import { observable } from 'mobx';
import {Random} from '../helpers/utils';

@observer
export default class AddTeam extends React.Component {
  @observable private teams: Team[] = [];
  @observable private teamName = '';
  
  componentDidMount() {
    const teams = window.localStorage.getItem('createteam');
    if (teams) {
      this.teams = JSON.parse(teams);
    }

    if (this.teams.length === 0 || !this.teams[0].name) {
      this.teams = [];
      let team = new Team();
      team.id = 1;
      team.name = 'procurement';
      team.noOfMember = Random(5);
      this.teams.push(team);
      team = new Team();
      team.id = 2;
      team.name = 'management';
      team.noOfMember = Random(5);
      this.teams.push(team);
      this.save();
    }
  }
  
  private createNewTeam() {
    const lastTeamEntry = this.teams?.[0] || null;
    const team = new Team();
    if (lastTeamEntry) {
      team.id = lastTeamEntry.id + 1;
    } else {
      team.id = 1;
    }

    team.name = this.teamName;
    team.noOfMember = Random(5);
    this.teams.unshift(team);
    this.save();
  }

  private save() {
    window.localStorage.setItem('createteam', JSON.stringify(this.teams));
    this.teamName = '';
  }

  private removeClick(index: number) {
    this.teams.splice(index, 1);
    this.save();
  }

  public render() {
    return (
      <div className='w100pc h100pc df fdc'>
        <div className='flex1 mr70 bgwhite df fdc ml30 mt30 w70pc'>
          <span className='fs24 bold ml30 lh29 mt20'>Manage your teams</span>
          <span className='fs14 pb20 ml30 mt10 lh20 fg191'>To add a new user to your teams or create new teams.</span>
          <div className='pb8 df fdc'>
            <div className='pb6 ml30 df w100-60'>
              <TextField placeholder='Team Name' className='w90pc br0 br4 pr10 h36' value={this.teamName} onChange={(event: any) => this.teamName = event.target.value} />
              <PrimaryButton className='ml20 fs14 bold mb20 minw200' text='CREATE TEAM' disabled={!this.teamName} onClick={() => this.createNewTeam()} />
            </div>
          </div>
        </div>
        <div className='pb5pc' />
        <div className='w100pc bgf5 h100pc df fdc ml30'>
          <div className='df bgf5 mb15 mt20 w100-60'>
            <span className='fs16 bold ml10 mr5 flex3'>Teams</span>
            <span className='fs14 fggrey mr5 flex1'>Sort by:  <span className='bold'>email address</span></span>
            <span className='fs14 fggrey mr5 flex1'>Filter:  <span className='bold'>none</span></span>
            <span className='fs14 fggrey flex1'><SearchBox className='bcwhite' placeholder='Search' /></span>
          </div>
          <div className='df mb5 w100-60'>
            <span className='fs14 fggrey flex2 df'>Team</span>
            <span className='fs14 fggrey flex2 df'>Member</span>
          </div>
          {this.teams.map((c, index) => (
            <div key={index} className='df bgwhite h36 mb5 w100-60'>
              <span className='fs14 bold mr5 ml10 mt7 flex3 minw100'>{c.name}</span>
              <span className='fs14 mr5 mt7 pl10 flex2'>{c.noOfMember}</span>
              <div className='flex1 df'>
                <span className='fs14 mt7 ml50 flex1'><Icon className='fs20' iconName='MoreVertical' /></span>
              </div>
              <IconButton className='fgblack' iconProps={{ iconName: 'Cancel' }} onClick={() => this.removeClick(index)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
