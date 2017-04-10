// @flow
import React from 'react'
import type { Message } from '../../ducks/chat/flowTypes'

const Messages = (props: { messages: Array<Message> }) => {
  return (
    <div className='messages'>
      {
        props.messages.map((message) => {
          return (
            <div key={message.id} className='messages__message message'>
              <span className='message__username'>{message.user.username}</span>
              <p className='message__content'>{message.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Messages
