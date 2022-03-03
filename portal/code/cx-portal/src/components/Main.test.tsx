import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../state/store'
import Main from './Main'
import I18nService from '../services/I18nService'

describe('testSuite', () => {
  beforeEach(() => {
    I18nService.init()
  })

  it('renders the header', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    )
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})
