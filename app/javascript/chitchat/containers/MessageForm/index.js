// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { actions } from '../../ducks/chat'

const MessageForm = (props: { handleSubmit: Function, onSubmit: Function }) => {
  return <form className='message-form' onSubmit={props.handleSubmit(props.onSubmit)}>
    <div className='message-form__input-container'>
      <Field name='message' className='message-form__input' normalize={value => value.trim()} component='input' type='text' />
    </div>
    <div className='message-form__action-container'>
      <button className='message-form__send-btn' type='submit'>Send</button>
    </div>
  </form>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit (data: { message: string }) {
      dispatch(actions.sendMessage(data.message))
    }
  }
}

const validate = (values) => {
  const errors = {}

  if (!values.message) {
    errors.message = 'Required'
  }

  return errors
}

const connected = connect(mapStateToProps, mapDispatchToProps)(MessageForm)

export default reduxForm({
  form: 'message',
  validate
})(connected)