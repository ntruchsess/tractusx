// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved

import { Application } from '../data/application';

export class AppState {
  public static state = new AppState();
  public apps: Application[];

  constructor() {
    this.apps = [{
      title: 'Data Upload App', rating: 4.9, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      usage: 'free for use',
      purchase: 'PURCHASE',
      companyName: 'Catena-X'
    },
    {
      title: 'PartChain', rating: 4.3, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      purchase: 'PURCHASE',
      companyName: 'Catena-X',
      usage: 'free for use'
    },
    {
      title: 'CO2 Fußabdruck', rating: 3.8, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      usage: 'per month',
      purchase: 'PURCHASE',
      companyName: 'T-System'
    },
    {
      title: 'Material Tracebility', rating: 4.5, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      usage: 'per year',
      purchase: 'PURCHASE',
      companyName: 'SAP'
    },
    {
      title: 'Bedarfs-& kapazitätsmanagement', rating: 4.1, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      usage: 'demo',
      purchase: 'PURCHASE',
      companyName: 'German Edge Cloud'
    },
    {
      title: 'Kreislaufwirtschaft', rating: 4.7, downloads: 577, tags: ['FREE FOR USE', 'UPLOADER', 'DATA UPLOAD', 'CONNECTOR', 'PRODUCTIVITY', 'IDS', 'MASTER DATA'],
      screenshots: ['/dataupload1.png', '/dataupload2.png', '/dataupload1.png', '/dataupload2.png'],
      description: '<b>Upload your data via standard connector</b><br/>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br/><br/><b>Easy to use and state of the art</b><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild  Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
      usage: 'free for use',
      purchase: 'PURCHASE',
      companyName: 'Catena-X'
      }
    ]
  }
}
