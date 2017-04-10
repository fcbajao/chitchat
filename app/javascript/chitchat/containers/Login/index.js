// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import type { UserCredentials, Auth } from '../../ducks/auth/flowTypes'
import { actions } from '../../ducks/auth'
import { validateRequired } from '../../utils'

const Login = (props: { auth: Auth, handleSubmit: Function, onSubmit: Function, error: string }) => {
  if (props.auth.currentUser) {
    return <Redirect to={{
      pathname: '/',
      state: { from: '/login' }
    }} />
  } else {
    return <div className='login'>
      <p className='login__intro'>Join chitchat! Just enter your username and password. If a user with the given username does not exist, a new account will be created with the given password.</p>
      <form className='login__form' onSubmit={props.handleSubmit(props.onSubmit)}>
        <p className='login__error'>{props.error}</p>
        <div>
          <label htmlFor='username'>Username</label>
          <Field name='username' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' component='input' type='password' />
        </div>
        <button type='submit'>Join</button>
      </form>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit (credentials: UserCredentials) {
      return new Promise((resolve, reject) => {
        dispatch(actions.signIn(credentials, resolve, reject))
      })
    }
  }
}

const validate = validateRequired(['username', 'password'])
const connected = connect(mapStateToProps, mapDispatchToProps)(Login)

export default reduxForm({
  form: 'login',
  validate
})(connected)
