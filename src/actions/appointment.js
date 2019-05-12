import {
  RESET_APPOINTMENT,
  SET_APPOINTMENT_NOTES,
  SET_APPOINTMENT_SLOT,
  SET_APPOINTMENT_TYPE,
  SET_CONSULTANT_TYPE,
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

export const setAppointmentNotes = notes => ({
  type: SET_APPOINTMENT_NOTES,
  payload: notes,
})

export const resetAppointment = () => ({
  type: RESET_APPOINTMENT,
})
