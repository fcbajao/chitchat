// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { User } from '../../ducks/auth/flowTypes'

const Room = (props: { currentUser: User }) => {
  return <p>
    Welcome, {props.currentUser.username}!
  </p>
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Room)
