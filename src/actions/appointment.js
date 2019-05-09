import {
  SET_APPOINTMENT_SLOT,
  SET_CONSULTANT_TYPE,
  SET_APPOINTMENT_TYPE,
} from '../actionTypes'

export const setConsultantType = consultantType => ({
  type: SET_CONSULTANT_TYPE,
  payload: consultantType,
})

export const setSelectedSlot = appointmentSlot => ({
  type: SET_APPOINTMENT_SLOT,
  payload: appointmentSlot,
})

export const setAppointmentType = appointmentType => ({
  type: SET_APPOINTMENT_TYPE,
  payload: appointmentType,
})
