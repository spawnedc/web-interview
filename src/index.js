import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './components/App/App'
import allReducers from './reducers'

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
