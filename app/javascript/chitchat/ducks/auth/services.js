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

const updateAxiosAuthToken = (token: string) => {
  // Follow Authorization format as defined on https://tools.ietf.org/html/rfc6750
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default {
  authenticate,
  updateAxiosAuthToken
}
