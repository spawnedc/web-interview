import { combineReducers } from 'redux'
import appointment from './appointment'
import appointmentSlots from './appointmentSlots'
import consultantTypes from './consultantTypes'

export default combineReducers({
  appointmentSlots,
  consultantTypes,
  appointment,
})
