// test-utils.jsx
import React, { FunctionComponent } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// Import your own reducer
import { store as reduxStore } from '@redux/configureStore'

function render(
  ui: React.ReactElement,
  { store = reduxStore, ...renderOptions } = {},
) {
  function Wrapper({ children }: { children: JSX.Element[] | JSX.Element }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {
    wrapper: Wrapper as FunctionComponent,
    ...renderOptions,
  })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
