// @flow
import axios from 'axios'
import type { UserCredentials } from './flowTypes'

const authPath = '/api/users/authenticate'

const authenticate = (credentials: UserCredentials) => {
  return axios.post(authPath, credentials)
  .then(function (response) {
    return Promise.resolve(response.data.token)
  })
}

export default {
  authenticate
}