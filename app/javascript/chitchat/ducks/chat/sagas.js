// @flow
import { eventChannel } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import services from './services'

const subscribe = (cable: Object) => {
  return eventChannel((emit) => {
    cable.subscriptions.create('ChatChannel', {
      connected () {
        emit(actions.connected(this))
      },
      disconnect () {
        console.info('disconnected')
      },
      received (message) {
        emit(actions.receivedMessage(message))
      },
      speak (message) {
        this.perform('speak', { message })
      }
    })
    return () => {}
  })
}

export function * joinChat (): Generator<any, any, any> {
  yield take(types.JOIN_CHAT)
  const token = yield select(state => state.auth.token)
  const cable = yield call(services.connect, token)
  const channel = yield call(subscribe, cable)

  try {
    while (true) {
      const action = yield take(channel)
      yield put(action)
    }
  } finally {
    console.log('terminated joinChat')
  }
}

export function * connectedToCable (): Generator<any, any, any> {
  try {
    while (true) {
      yield take(types.CONNECTED)
      const messages = yield call(services.fetchMessagesHistory)
      yield put(actions.renderMessages(messages))
    }
  } finally {
    console.log('terminated connectedToCable')
  }
}

export function * sendMessage (): Generator<any, any, any> {
  const { payload } = yield take(types.CONNECTED)
  const { subscription } = payload

  try {
    while (true) {
      const { payload } = yield take(types.SEND_MESSAGE)
      yield call([subscription, subscription.speak], payload.message)
      yield put(actions.sentMessage())
    }
  } finally {
    console.log('terminated sendMessage')
  }
}

export function * receiveMessage (): Generator<any, any, any> {
  yield take(types.CONNECTED)

  try {
    while (true) {
      const { payload } = yield take(types.RECEIVED_MESSAGE)
      const { message } = payload
      yield put(actions.renderMessage(message))
    }
  } finally {
    console.log('terminated receiveMessage')
  }
}

export default function * chatSaga (): Generator<any, any, any> {
  yield fork(joinChat)
  yield fork(connectedToCable)
  yield fork(sendMessage)
  yield fork(receiveMessage)
}
