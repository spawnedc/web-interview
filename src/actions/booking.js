import {
  RESET_BOOKING,
  START_BOOKING,
  BOOKING_SUCCESS,
  BOOKING_FAILURE,
} from '../actionTypes'

export const resetBooking = consultantType => ({
  type: RESET_BOOKING,
  payload: consultantType,
})

export const startBooking = appointmentSlot => ({
  type: START_BOOKING,
  payload: appointmentSlot,
})

export const bookingSuccess = appointment => ({
  type: BOOKING_SUCCESS,
  payload: appointment,
})

export const bookingFailure = error => ({
  type: BOOKING_FAILURE,
  payload: error,
})
