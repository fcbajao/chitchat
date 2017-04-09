// @flow
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth, { authSaga } from './auth'

export function * rootSaga (): Generator<any, any, any> {
  yield [
    authSaga()
  ]
}

export default combineReducers({
  form,
  auth
})
