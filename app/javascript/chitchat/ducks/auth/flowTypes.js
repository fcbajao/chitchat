// @flow

export type User = {
  +id: number,
  +username: string
}

export type Auth = {
  +currentUser: ?User,
  +token: ?string
}

export type UserCredentials = {
  +username: string,
  +password: string
}
