import { AnyAction } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { setProvider } from '.'

export const setEthersProvider = (infuraUrl?: string): AnyAction => {
  try {
    if (!infuraUrl && !window.ethereum?.request) {
      alert('MetaMask is not installed!')
      return setProvider(null)
    }

    let provider = null
    if (infuraUrl) {
      provider = new ethers.providers.JsonRpcProvider(infuraUrl)
    } else if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum)
    }

    return setProvider(provider)
  } catch (error) {
    console.error('Error: setEthersProvider() -', error)
    return setProvider(null)
  }
}
