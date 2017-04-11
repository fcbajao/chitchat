// @flow
import { connect } from 'react-redux'
import { selectors } from '../../ducks/chat'
import Messages from '../../components/Messages'

const mapStateToProps = (state) => {
  return {
    messages: selectors.getRecentMessages(state)
  }
}

export default connect(mapStateToProps)(Messages)
