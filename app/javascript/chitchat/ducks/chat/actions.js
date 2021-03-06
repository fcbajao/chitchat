// @flow
import type { Action } from '../flowTypes'
import type { Message } from './flowTypes'
import types from './types'

const joinChat = (): Action => {
  return {
    type: types.JOIN_CHAT,
    payload: {}
  }
}

const sendMessage = (message: string): Action => {
  return {
    type: types.SEND_MESSAGE,
    payload: {
      message: message
    }
  }
}

const sentMessage = (): Action => {
  return {
    type: types.SENT_MESSAGE,
    payload: {}
  }
}

const connected = (subscription: Object): Action => {
  return {
    type: types.CONNECTED,
    payload: { subscription }
  }
}

const receivedMessage = (message: Message): Action => {
  return {
    type: types.RECEIVED_MESSAGE,
    payload: {
      message: message
    }
  }
}

const renderMessage = (message: Message): Action => {
  return {
    type: types.RENDER_MESSAGE,
    payload: {
      message: message
    }
  }
}

const renderMessages = (messages: Array<Message>): Action => {
  return {
    type: types.RENDER_MESSAGES,
    payload: {
      messages: messages
    }
  }
}

export default {
  joinChat,
  sendMessage,
  sentMessage,
  connected,
  receivedMessage,
  renderMessage,
  renderMessages
}
