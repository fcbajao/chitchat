// @flow
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import rootReducer, { rootSaga } from './ducks'
import App from './containers/App'
import axios from 'axios'

const csrfToken = document.querySelector('meta[name=csrf-token]')
if (csrfToken) {
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken.getAttribute('content')
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)

render(<Provider store={store}><App /></Provider>, document.getElementById('main'))
