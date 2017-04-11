// @flow
import axios from 'axios'
import ActionCable from 'actioncable'

const messagesPath = '/api/messages'

const connect = (token: string) => {
  return ActionCable.createConsumer(`/cable?token=${token}`)
}

const fetchMessagesHistory = () => {
  return axios.get(messagesPath, { params: { limit: 50 } })
  .then(function (response) {
    return Promise.resolve(response.data)
  })
}

export default {
  connect,
  fetchMessagesHistory
}
