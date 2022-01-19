import { combineReducers } from 'redux'
import counterReducer from '../slices/counterSlice'
import ethersReducer from '../slices/ethersSlice'
import accountReducer from '../slices/accountSlice'

const reducers = combineReducers({
  counter: counterReducer,
  ethers: ethersReducer,
  account: accountReducer,
})

export default reducers
