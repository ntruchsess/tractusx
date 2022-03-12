import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'state/store'
import I18nService from 'services/I18nService'
import UserService from 'services/UserService'
import { AuthProvider } from 'components/AuthProvider'
import AuthorizingRouter from 'components/AuthorizingRouter'

I18nService.init()

UserService.init((user) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider user={user}>
          <AuthorizingRouter />
        </AuthProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('app')
  )
})
