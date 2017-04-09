// @flow

export type User = {
  +userId: number,
  +username: string
}

export type Auth = {
  +currentUser: ?User
}

export type UserCredentials = {
  +username: string,
  +password: string
}
