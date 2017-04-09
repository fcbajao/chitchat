// @flow
import { take, call, put } from 'redux-saga/effects'
import decode from 'jwt-decode'
import type { UserCredentials } from './flowTypes'
import types from './types'
import actions from './actions'
import services from './services'

export function * signIn (credentials: UserCredentials): Generator<any, any, any> {
  const token = yield call(services.authenticate, credentials)
  const data = decode(token)
  yield put(actions.setUser(data))
}

export default function * authSaga (): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(types.SIGN_IN)
    const { credentials } = payload
    yield call(signIn, credentials)
  }
}
