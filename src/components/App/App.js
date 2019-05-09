import React, { Component } from 'react'
import AppointmentSelector from '../../containers/AppointmentSelector'
import { Header } from '../Header/Header'
import { User } from '../User'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <h2 className="h6">New appointment</h2>

        <User />

        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <AppointmentSelector />

          <div>
            <strong>Notes</strong>
            <textarea />
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                /* TODO: submit the data */
              }}
            >
              Book appointment
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
