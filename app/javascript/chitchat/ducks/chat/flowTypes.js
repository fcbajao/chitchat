// @flow
import type { User } from '../auth/flowTypes'

export type Message = {
  +id: number,
  +content: string,
  +timestamp: string,
  +user: User
}

export type Chat = {
  +messages: Array<Message>
}
