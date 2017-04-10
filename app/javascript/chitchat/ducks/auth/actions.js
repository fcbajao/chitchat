// @flow
import type { Action } from '../flowTypes'
import type { UserCredentials, User } from './flowTypes'
import types from './types'

const signIn = (credentials: UserCredentials, resolve: Function, reject: Function): Action => {
  return {
    type: types.SIGN_IN,
    payload: {
      credentials,
      resolve,
      reject
    }
  }
}

const setUser = (user: User, token: string): Action => {
  return {
    type: types.SET_USER,
    payload: {
      user,
      token
    }
  }
}

export default {
  signIn,
  setUser
}
