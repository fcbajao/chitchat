// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { actions } from '../../ducks/chat'
import { validateRequired } from '../../utils'

const MessageForm = (props: { handleSubmit: Function, onSubmit: Function }) => {
  const handleSubmit = props.handleSubmit(props.onSubmit)
  return <form className='message-form' onSubmit={handleSubmit}>
    <div className='message-form__input-container'>
      <Field name='message' placeholder='Say anything...' className='message-form__input' component='input' type='text' />
    </div>
    <div className='message-form__action-container'>
      <button className='message-form__send-btn' type='submit'>Send</button>
    </div>
  </form>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit (data: { message: string }) {
      dispatch(actions.sendMessage(data.message))
    }
  }
}

const validate = validateRequired(['message'])
const connected = connect(null, mapDispatchToProps)(MessageForm)

export default reduxForm({
  form: 'message',
  validate
})(connected)
