import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from '../../reducers'
import App from './App'

const store = createStore(allReducers)

const div = document.createElement('div')

it('renders without crashing', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  )
})
