import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../state/store'
import Main from './Main'
import I18nService from '../services/I18nService'
import { SharedThemeProvider } from 'cx-portal-shared-components'

describe('testSuite', () => {
  beforeEach(() => {
    I18nService.init()
  })

  it('renders the header', () => {
    const { container } = render(
      <Provider store={store}>
        <SharedThemeProvider>
          <MemoryRouter>
            <Main />
          </MemoryRouter>
        </SharedThemeProvider>
      </Provider>
    )
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})
