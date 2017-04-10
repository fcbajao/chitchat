// @flow
import ActionCable from 'actioncable'

const connect = (token: string) => {
  return ActionCable.createConsumer(`/cable?token=${token}`)
}

export default {
  connect
}
