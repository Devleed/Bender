import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { EthersState } from './ethers.types'

const initialState: EthersState = {
  provider: null,
}

export const ethersSlice = createSlice({
  name: 'ethers',
  initialState,
  reducers: {
    setProvider: (
      state,
      action: PayloadAction<
        ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | null
      >,
    ) => {
      state.provider = action.payload
    },
  },
})

export const { setProvider } = ethersSlice.actions

export default ethersSlice.reducer
