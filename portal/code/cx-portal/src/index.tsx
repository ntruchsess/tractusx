import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import Router from './components/Router'
import UserService from './services/UserService'
import I18nService from './services/I18nService'

I18nService.init()
UserService.init()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)
