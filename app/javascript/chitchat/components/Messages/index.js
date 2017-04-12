// @flow
import React from 'react'
import TimeAgo from 'react-timeago'
import type { Message } from '../../ducks/chat/flowTypes'

const formatter = (value, unit, suffix) => {
  if (unit === 'second') {
    return 'just now'
  } else {
    return `${value} ${unit}${value > 1 ? 's' : ''} ${suffix}`
  }
}

const Messages = (props: { messages: Array<Message> }) => {
  return (
    <div className='messages'>
      {
        props.messages.map((message) => {
          return (
            <div key={message.id} className='messages__message message'>
              <span className='message__username'>{message.user.username}</span>
              <span className='message__timestamp'>
                <TimeAgo date={message.timestamp} formatter={formatter} />
              </span>
              <p className='message__content'>{message.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Messages
