import React, { Component } from 'react'
import BookAppointment from '../../containers/BookAppointment'
import { Header } from '../Header/Header'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <BookAppointment />
        </main>
      </div>
    )
  }
}

export default App
