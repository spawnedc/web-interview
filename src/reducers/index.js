import { combineReducers } from 'redux'
import appointment from './appointment'
import appointmentSlots from './appointmentSlots'
import consultantTypes from './consultantTypes'
import user from './user'

export default combineReducers({
  appointmentSlots,
  consultantTypes,
  appointment,
  user,
})
