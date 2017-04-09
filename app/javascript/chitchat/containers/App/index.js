// @flow
import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute'
import Login from '../Login'
import Room from '../../containers/Room'
import type { Auth } from '../../ducks/auth/flowTypes'

const App = (props: { auth: Auth }) => (
  <Router>
    <div className='app'>
      <PrivateRoute exact path='/' auth={props.auth} component={Room} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
