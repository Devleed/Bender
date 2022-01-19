import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@tests/setupTests'
import Home from '.'

const component = (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

describe('Home component', () => {
  test('renders right heading', () => {
    const { container } = render(component)
    const element = container.getElementsByClassName('logo-heading')

    expect(element.item(0)?.textContent).toEqual(
      'Blockchain Based  Credit Report.',
    )
  })

  test('renders lender borrower buttons', () => {
    render(component)

    const lenderLink = screen.getByTestId('lender-link')
    const borrowerLink = screen.getByTestId('borrower-link')

    expect(lenderLink).toBeInTheDocument()
    expect(borrowerLink).toBeInTheDocument()
  })

  test('render buttons according to conditions', async () => {
    render(component)

    // renders connect wallet button
    const connectWalletBtn = screen.getByTestId('connect-wallet-btn')
    expect(connectWalletBtn).toBeInTheDocument()

    // click connect wallet button
    fireEvent.click(connectWalletBtn)

    // after clicking renders disconnect wallet button
    const disConnectWalletBtn = screen.getByTestId('disconnect-wallet-btn')
    expect(disConnectWalletBtn).toBeInTheDocument()
  })
})
