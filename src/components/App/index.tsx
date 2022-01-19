import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Router from '@components/Router'

import './styles.scss'
import { setEthersProvider } from '@redux/slices/ethersSlice/ethers.actions'

type Props = Record<string, unknown>

const App: FC<Props> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setEthersProvider())
  }, [])

  return <Router />
}

export default App
