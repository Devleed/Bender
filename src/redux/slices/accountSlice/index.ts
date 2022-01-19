import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountState } from './account.types'

const initialState: AccountState = {
  address: '',
  isConnected: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload
    },
  },
})

export const { setAddress, setIsConnected } = accountSlice.actions

export default accountSlice.reducer
