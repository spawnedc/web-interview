import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../logo.png'
import './Header.scss'

export const Header = () => (
  <div className="app-header">
    <FaBars />
    <img src={logo} className="app-logo" alt="Babylon Health" />
    <div className="user-circle">NU</div>
  </div>
)
