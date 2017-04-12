// @flow
import type { Action } from '../flowTypes'
import type { Chat } from './flowTypes'
import types from './types'
export { default as actions } from './actions'
export { default as selectors } from './selectors'
export { default as chatSaga } from './sagas'
export { default as types } from './types'

const initialState = {
  messages: []
}

const buildUser = ({ id, username }) => {
  return {
    id,
    username
  }
}

const buildMessage = ({ id, content, created_at, user }) => {
  return {
    id,
    content,
    timestamp: created_at,
    user: buildUser(user)
  }
}

export default function reducer (state: Chat = initialState, action: Action): Chat {
  switch (action.type) {
    case types.RENDER_MESSAGE:
      const message = buildMessage(action.payload.message)
      return {
        messages: [message].concat(state.messages)
      }
    case types.RENDER_MESSAGES:
      const messages = action.payload.messages.map(buildMessage)
      return {
        messages: messages.concat(state.messages)
      }
    default:
      return state
  }
}
