// @flow
import { createSelector } from 'reselect'
import _ from 'lodash'

const getMessages = (state) => {
  return state.chat.messages
}

const getRecentMessages = createSelector(
  [getMessages],
  (messages) => {
    // We sort and also remove possible duplicates
    // because of cases wherein we get the same message
    // from websocket notification that is also included
    // in the messages that we got from the initial loading.
    const sorted = _.orderBy(messages, m => m.id, 'desc')
    return _.sortedUniqBy(sorted, m => m.id)
  }
)

export default {
  getRecentMessages
}
