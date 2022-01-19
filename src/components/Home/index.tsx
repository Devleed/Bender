import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@hooks/index'
import { setAddress, setIsConnected } from '@redux/slices/accountSlice'

import './styles.scss'

type Props = Record<string, unknown>

const Home: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const ethersProvider = useAppSelector(state => state.ethers.provider)
  const account = useAppSelector(state => state.account)

  useEffect(() => {
    if (ethersProvider) {
      connectAccount()
    }
  }, [ethersProvider])

  const connectAccount = async () => {
    const accounts =
      window.ethereum?.request &&
      (await window.ethereum.request({
        method: 'eth_requestAccounts',
      }))

    dispatch(setAddress(accounts?.[0]))
    dispatch(setIsConnected(true))
  }

  const disconnectAccount = () => {
    dispatch(setAddress(''))
    dispatch(setIsConnected(false))
  }

  const getAuthButtons = () => {
    return account.isConnected ? (
      <button
        className="primary-btn"
        onClick={disconnectAccount}
        data-testid="disconnect-wallet-btn"
      >
        Disconnect Wallet
      </button>
    ) : (
      <button
        className="primary-btn"
        onClick={connectAccount}
        data-testid="connect-wallet-btn"
      >
        Connect Wallet
      </button>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <h1 className="logo-heading">
            Block<span style={{ color: '#be0072' }}>chain</span> Based <br />{' '}
            Credit Report
            <span style={{ fontSize: 50, color: '#be0072' }}>.</span>
          </h1>
          <div>
            {getAuthButtons()}
            <Link
              to="/lender"
              style={{ marginLeft: 20 }}
              className="primary-btn"
              data-testid="lender-link"
            >
              lender
            </Link>
            <Link
              to="/borrower"
              style={{ marginLeft: 20 }}
              className="primary-btn"
              data-testid="borrower-link"
            >
              borrower
            </Link>
          </div>
          {/* {!parseFloat(allowance) ? (
            <button
              style={{ marginLeft: 20 }}
              className="primary-btn"
              onClick={() =>
                functions.giveApproval(context.account, setAllowance)
              }
            >
              Pay Approval
            </button>
          ) : null} */}
        </div>

        <div style={{ padding: '30px' }}>{account.address}</div>
      </div>
    </div>
  )
}

export default Home
