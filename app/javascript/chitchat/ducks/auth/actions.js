// @flow
import type { Action } from '../flowTypes'
import type { UserCredentials, User } from './flowTypes'
import types from './types'

const signIn = (credentials: UserCredentials): Action => {
  return {
    type: types.SIGN_IN,
    payload: {
      credentials
    }
  }
}

const setUser = (user: User): Action => {
  return {
    type: types.SET_USER,
    payload: {
      user
    }
  }
}

export default {
  signIn,
  setUser
}
