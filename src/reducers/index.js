import { combineReducers } from 'redux'
import appointment from './appointment'
import appointmentSlots from './appointmentSlots'
import consultantTypes from './consultantTypes'
import user from './user'
import booking from './booking'

export default combineReducers({
  appointmentSlots,
  consultantTypes,
  appointment,
  user,
  booking,
})
