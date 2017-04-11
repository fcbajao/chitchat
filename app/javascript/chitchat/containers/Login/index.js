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
      <h1 className='login__heading'>Join chitchat!</h1>
      <p className='login__intro'>If a user with the given username does not exist, a new account will be created with the given password.</p>
      <form className='login__form login-form' onSubmit={props.handleSubmit(props.onSubmit)}>
        <p className='login-form__error'>{props.error}</p>
        <fieldset className='login-form__fieldset'>
          <div className='login-form__field'>
            <label className='login-form__label' htmlFor='username'>Username</label>
            <Field name='username' component='input' placeholder='Username' className='login-form__text-input' type='text' />
          </div>
          <div className='login-form__field'>
            <label className='login-form__label' htmlFor='password'>Password</label>
            <Field name='password' component='input' placeholder='Password' className='login-form__text-input' type='password' />
          </div>
        </fieldset>
        <button className='login-form__submit-btn' type='submit'>Join</button>
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
