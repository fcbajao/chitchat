// @flow
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import type { Auth } from '../../ducks/auth/flowTypes'

const PrivateRoute = ({auth, component, ...rest}: { auth: Auth, component: React.createElement }) => {
  return <Route {...rest} render={(props: { location: string }) => (
    auth.currentUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
}

export default PrivateRoute
