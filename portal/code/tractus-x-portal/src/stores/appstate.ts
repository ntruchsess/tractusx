// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved

import { Application } from '../data/application';

const A = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032a',
  title: 'Data Upload App', rating: 4.9, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  usage: 'free for use',
  purchase: 'PURCHASE',
  companyName: 'Catena-X'
};

const B = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032b',
  title: 'PartChain', rating: 4.7, downloads: 183987, tags: ['FREE FOR USE', 'TRACKING', 'TRACEABILITY', 'CATENA-X'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Track your parts and document them</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Know the origin</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  purchase: 'PURCHASE',
  companyName: 'Catena-X',
  usage: 'free for use'
}

const C = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032c',
  title: 'CO2 Fußabdruck', rating: 3.8, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Calculate your ECO Footprint</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  usage: 'per month',
  purchase: 'PURCHASE',
  companyName: 'T-System'
}

const D = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032d',
  title: 'Material Tracebility', rating: 4.5, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Track your parts and document them</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Know the origin</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  usage: 'per year',
  purchase: 'PURCHASE',
  companyName: 'SAP'
};

const E = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032e',
  title: 'Bedarfs-& kapazitätsmanagement', rating: 4.1, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  usage: 'demo',
  purchase: 'PURCHASE',
  companyName: 'German Edge Cloud'
};

const F = {
  id : '0253dd4d-35af-43f5-a84c-7cc28084032f',
  title: 'Kreislaufwirtschaft', rating: 4.7, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
  screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
  description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  usage: 'free for use',
  purchase: 'PURCHASE',
  companyName: 'Catena-X'
};

export class AppState {
  public static state = new AppState();
  public apps: Application[] = [B, F, E, C, A, D];
  public topApps: Application[] = [D, C, A, B, F, E];
  public popularApps: Application[] = [A, B, C, D, E, F];
  public lastUsedApps: Application[] = [D, E, F];
  public sapapps: Application[] = [D];
  public readonly categories: any[] = [{ text: 'Most Popular', apps: this.popularApps },
  { text: 'Top 10 Downloads', apps: this.topApps },
  { text: 'Best Rated', apps: this.apps }];
  public readonly dashboardCategories: any[] = [  { text: 'Last used', apps: this.lastUsedApps },
  { text: 'All apps', apps: this.apps }];
}
