// @flow
import { take, call, put } from 'redux-saga/effects'
import decode from 'jwt-decode'
import { SubmissionError } from 'redux-form'
import type { UserCredentials } from './flowTypes'
import types from './types'
import actions from './actions'
import services from './services'

export function * signIn (credentials: UserCredentials): Generator<any, any, any> {
  const token = yield call(services.authenticate, credentials)
  yield call(services.updateAxiosAuthToken, token)
  const user = decode(token)
  yield put(actions.setUser(user, token))
}

export default function * authSaga (): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(types.SIGN_IN)
    const { credentials, resolve, reject } = payload
    try {
      yield call(signIn, credentials)
      yield call(resolve)
    } catch (e) {
      yield call(
        reject,
        new SubmissionError({ _error: 'Invalid username and password.' })
      )
    }
  }
}
