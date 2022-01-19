import { JsonRpcProvider } from '@ethersproject/providers'
import { AnyAction } from '@reduxjs/toolkit'
import reducer from '.'
import { setEthersProvider } from './ethers.actions'
import { EthersState } from './ethers.types'

const INITIAL_STATE: EthersState = {
  provider: null,
}

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(INITIAL_STATE)
})

test('should set ethers provider', () => {
  const previousState = INITIAL_STATE
  const infuraUrl =
    'https://rinkeby.infura.io/v3/80ba3747876843469bf0c36d0a355f71'

  expect(reducer(previousState, setEthersProvider(infuraUrl))).toEqual({
    provider: new JsonRpcProvider(infuraUrl),
  })
})
