// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { User } from '../../ducks/auth/flowTypes'
import { actions } from '../../ducks/chat'
import Messages from '../../containers/Messages'
import MessageForm from '../../containers/MessageForm'

class Room extends React.Component {
  props: {
    currentUser: User,
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
      <div className='room__messages-container'>
        <Messages />
      </div>
      <div className='room__footer'>
        <MessageForm />
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
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
