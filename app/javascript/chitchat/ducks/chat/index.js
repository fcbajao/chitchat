// @flow
import type { Action } from '../flowTypes'
import type { Chat } from './flowTypes'
import types from './types'
export { default as actions } from './actions'
export { default as chatSaga } from './sagas'
export { default as types } from './types'

const initialState = {
  messages: []
}

export default function reducer (state: Chat = initialState, action: Action): Chat {
  switch (action.type) {
    case types.RENDER_MESSAGE:
      const { message } = action.payload
      return {
        messages: state.messages.concat(message)
      }
    default:
      return state
  }
}
