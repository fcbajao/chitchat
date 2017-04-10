// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth, { authSaga } from './auth'
import chat, { chatSaga, types } from './chat'

export function * rootSaga (): Generator<any, any, any> {
  yield [
    authSaga(),
    chatSaga()
  ]
}

export default combineReducers({
  form: formReducer.plugin({
    message: (state, action) => {
      switch (action.type) {
        case types.SENT_MESSAGE:
          return undefined
        default:
          return state
      }
    }
  }),
  auth,
  chat
})
