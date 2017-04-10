// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { User } from '../../ducks/auth/flowTypes'
import type { Message } from '../../ducks/chat/flowTypes'
import { actions } from '../../ducks/chat'
import Messages from '../../components/Messages'
import MessageForm from '../../containers/MessageForm'

class Room extends React.Component {
  props: {
    currentUser: User,
    messages: Array<Message>,
    onDidMount: Function
  }

  componentDidMount () {
    this.props.onDidMount()
  }

  render () {
    return <div className='room'>
      <div className='room__header'>
        Welcome, {this.props.currentUser.username}!
      </div>
      <div className='room__messages'>
        <Messages messages={this.props.messages} />
      </div>
      <div className='room__footer'>
        <MessageForm />
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    messages: state.chat.messages
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDidMount () {
      dispatch(actions.joinChat())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
