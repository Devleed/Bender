import { ethers } from 'ethers'

export interface EthersState {
  provider:
    | ethers.providers.Web3Provider
    | ethers.providers.JsonRpcProvider
    | null
}
