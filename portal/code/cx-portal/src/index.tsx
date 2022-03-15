import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'state/store'
import Router from 'components/Router'
import I18nService from 'services/I18nService'
import { SharedThemeProvider } from 'cx-portal-shared-components'

//initialise translation library
I18nService.init()

//https://github.com/yannickcr/eslint-plugin-react/blob/d9531c3bc539e292eb297a04c7b9312e8b63a223/docs/rules/no-render-return-value.md
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SharedThemeProvider>
        <Router />
      </SharedThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)
