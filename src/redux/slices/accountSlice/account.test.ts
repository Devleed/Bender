import { AnyAction } from '@reduxjs/toolkit'
import reducer, { setAddress, setIsConnected } from '.'
import { AccountState } from './account.types'

const INITIAL_STATE: AccountState = {
  address: '',
  isConnected: false,
}

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(INITIAL_STATE)
})

test('should set address', () => {
  const previousState = INITIAL_STATE

  expect(
    reducer(
      previousState,
      setAddress('0xb4e480B40D77eC3244E15440F1F3EF3317d41799'),
    ),
  ).toEqual({
    address: '0xb4e480B40D77eC3244E15440F1F3EF3317d41799',
    isConnected: false,
  })
})

test('should set connected to true', () => {
  const previousState = INITIAL_STATE

  expect(reducer(previousState, setIsConnected(true))).toEqual({
    address: '',
    isConnected: true,
  })
})
