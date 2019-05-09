import { SET_APPOINTMENT_SLOTS } from '../actionTypes'

export const setAppointmentSlots = slots => ({
  type: SET_APPOINTMENT_SLOTS,
  payload: slots,
})
