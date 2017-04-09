// @flow
import type { Action } from '../flowTypes'
import type { Auth } from './flowTypes'
import types from './types'
export { default as actions } from './actions'
export { default as authSaga } from './sagas'

const initialState = {
  currentUser: null
}

export default function reducer (state: Auth = initialState, action: Action): Auth {
  switch (action.type) {
    case types.SET_USER:
      return {
        currentUser: action.payload.user
      }
    default:
      return state
  }
}
