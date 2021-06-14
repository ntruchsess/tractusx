// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { runWithAdal } from 'react-adal';
import adalContext from './helpers/adalConfig';
import { BrowserRouter } from 'react-router-dom';

const DO_NOT_LOGIN = false;

runWithAdal(
  adalContext.AuthContext,
  () => {
    const rootDiv = document.getElementById('root') as HTMLElement;
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootDiv);
  },
  DO_NOT_LOGIN
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
