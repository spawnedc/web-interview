import React, { Component } from 'react'
import './App.scss'
import { AppointmentSelector } from './components/appointment-selector'
import { Header } from './components/header'
import { User } from './components/user'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
    }
  }

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
