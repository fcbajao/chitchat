// @flow
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth, { authSaga } from './auth'
import chat, { chatSaga } from './chat'

export function * rootSaga (): Generator<any, any, any> {
  yield [
    authSaga(),
    chatSaga()
  ]
}

export default combineReducers({
  form,
  auth,
  chat
})
